<?php
/**
 * Created by PhpStorm.
 * User: 风哀伤
 * Date: 2019/7/22
 * Time: 13:37
 * @copyright: (c)2019 天幕网络
 * @link: http://www.67930603.top
 */

namespace app\forms\common\attachment;


use app\forms\permission\role\SuperAdminRole;
use app\models\AttachmentStorage;
use app\models\Mall;
use app\models\Model;
use app\models\User;

/**
 * Class CommonAttachment
 * @package app\forms\common\attachment
 * @property Mall $mall
 * @property User $user
 */
class CommonAttachment extends Model
{
    public $mall;
    public $user; // 当商城存在时，用户为商城所属的账户；当商城不存在是，用户为传入的用户
    protected $mall_id;
    protected $user_id;

    public function init()
    {
        parent::init(); // TODO: Change the autogenerated stub
        $this->setMallId($this->mall ? $this->mall->id : 0);
        if ($this->mall) {
            $this->user = User::findOne(['id' => $this->mall->user_id]);
        }
        $superAdmin = SuperAdminRole::getSuperAdmin();
        $this->setUserId($this->user ? $this->user->id : $superAdmin->user_id);
    }

    public function setMallId($mallId)
    {
        $this->mall_id = $mallId;
    }

    public function getMallId()
    {
        return $this->mall_id;
    }

    public function setUserId($userId)
    {
        $this->user_id = $userId;
    }

    public function getUserId()
    {
        return $this->user_id;
    }

    public static function getCommon($user = null, $mall = null)
    {
        $common = new self([
            'mall' => $mall,
            'user' => $user
        ]);
        return $common;
    }

    public function getStorage()
    {
        return [
            AttachmentStorage::STORAGE_TYPE_LOCAL => '本地服务器',
            AttachmentStorage::STORAGE_TYPE_ALIOSS => '阿里云OSS',
            AttachmentStorage::STORAGE_TYPE_TXCOS => '腾讯云COS',
            AttachmentStorage::STORAGE_TYPE_QINIU => '七牛云存储',
        ];
    }

    /**
     * @param $data
     * @return bool
     * @throws \Exception
     */
    public function attachmentCreateStorage($data)
    {
        $condition = [
            'type' => $data['type'],
            'mall_id' => $this->mall_id,
            'user_id' => $this->user_id
        ];
        if ($data['id']) {
            $condition['id'] = $data['id'];
        }
        $storage = AttachmentStorage::findOne($condition);
        if (!$data['id'] && $storage) {
            throw new \Exception('该存储位置已配置过，请选择其它存储位置。');
        } elseif ($data['id'] && !$storage) {
            throw new \Exception('配置不存在，请刷新页面重新加载内容。');
        } elseif (!$data['id']) {
            $storage = new AttachmentStorage();
        }

        $storage->mall_id = $this->mall_id;
        $storage->user_id = $this->user_id;
        $storage->type = $data['type'];
        $storage->config = isset($data['config']) ? \Yii::$app->serializer->encode($data['config']) : '""';
        if ($storage->isNewRecord) {
            $storage->status = 0;
        }
        if ($storage->save()) {
            return true;
        } else {
            throw new \Exception($this->getErrorMsg($storage));
        }
    }

    public function attachmentEnableStorage($id)
    {
        if ($this->mall) {
            $condition = ['mall_id' => $this->mall_id];
        } else {
            $condition = ['mall_id' => 0, 'user_id' => $this->user_id];
        }
        AttachmentStorage::updateAll(['status' => 0], $condition);
        $condition['id'] = $id;
        AttachmentStorage::updateAll(['status' => 1], $condition);
        return true;
    }

    /**
     * @return array|\yii\db\ActiveRecord[]
     * @throws \Exception
     * 获取指定账号指定商城的存储设置列表
     */
    public function getAttachmentList()
    {
        $auth = $this->getStorageAuth();
        if (!is_array($auth)) {
            return [];
        }
        $list = AttachmentStorage::find()
            ->where(['type' => $auth, 'mall_id' => $this->mall_id, 'user_id' => $this->user_id])
            ->orderBy('id DESC')->asArray()->all();
        foreach ($list as &$item) {
            $item['config'] = \Yii::$app->serializer->decode($item['config']);
        }
        return $list;
    }

    /**
     * @return AttachmentStorage|null
     * @throws \Exception
     * 获取可使用的存储设置
     */
    public function getAttachment()
    {
        $storageAuth = $this->getStorageAuth();
        $superAdmin = SuperAdminRole::getSuperAdmin();
        if (is_array($storageAuth)) {
            $attachment = AttachmentStorage::findOne([
                'user_id' => $this->user_id, 'mall_id' => $this->mall_id, 'status' => 1, 'type' => $storageAuth
            ]);
            if (!$attachment) {
                if ($this->mall_id != 0) {
                    $attachment = AttachmentStorage::findOne([
                        'user_id' => $this->user_id, 'mall_id' => 0, 'status' => 1, 'type' => $storageAuth
                    ]);
                }
                if (!$attachment) {
                    $superAdmin = SuperAdminRole::getSuperAdmin();
                    if (!$this->user_id != $superAdmin->user_id) {
                        $attachment = AttachmentStorage::findOne([
                            'user_id' => $superAdmin->user_id, 'mall_id' => 0, 'status' => 1, 'type' => $storageAuth
                        ]);
                    }
                    if (!$attachment) {
                        throw new \Exception('请先配置上传设置');
                    }
                }
            }
        } else {
            $attachment = AttachmentStorage::findOne([
                'user_id' => $superAdmin->user_id, 'mall_id' => 0, 'status' => 1
            ]);
        }
        return $attachment;
    }

    /**
     * @return array|mixed
     * @throws \Exception
     * 获取指定账户上传权限
     */
    public function getStorageAuth()
    {
        $default = $this->getDefaultAuth();
        $user = $this->user;
        if (!$user) {
            return $default;
        }
        if ($user->identity->is_super_admin == 1) {
            return $default;
        } elseif ($user->identity->is_admin == 1) {
            if ($user->adminInfo->is_default == 1) {
                $permission = \Yii::$app->branch->childPermission($user->adminInfo);
            } else {
                $permission = json_decode($user->adminInfo->permissions, true);
            }
            if (!in_array('attachment', $permission)) {
                return false;
            }
        } else {
            if (!$this->mall) {
                throw new \Exception('错误的商城信息');
            }
            $user = User::findOne(['id' => $this->mall->user_id, 'is_delete' => 0]);
            if (!$user) {
                throw new \Exception('商城所属的子账号已被删除');
            }
        }
        $secondaryPermissions = json_decode($user->adminInfo->secondary_permissions, true);
        if (!isset($secondaryPermissions['attachment'])) {
            return $default;
        }
        return $secondaryPermissions['attachment'];
    }

    public function getDefaultAuth()
    {
        return [1, 2, 3, 4];
    }

    public function getStorageType()
    {
        $auth = $this->getStorageAuth();
        if (!is_array($auth)) {
            $auth = [];
        }
        $storage = $this->getStorage();
        $storageType = [];
        foreach ($auth as $item) {
            $storageType[$item] = $storage[$item];
        }
        return $storageType;
    }
}