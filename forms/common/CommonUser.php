<?php
/**
 * link: http://www.67930603.top/
 * copyright: Copyright (c) 2018 浙江禾匠信息科技有限公司
 * author: xay
 */

namespace app\forms\common;

use app\models\AdminInfo;
use app\models\User;
use app\models\UserIdentity;
use app\models\UserInfo;

class CommonUser
{
    /**
     * 搜索用户
     * @param  [type] $keyword [description]
     * @return [type]          [description]
     */
    public static function searchUser($keyword)
    {
        $keyword = trim($keyword);

        $query = User::find()->alias('u')->select('u.id,u.nickname')->where([
            'AND',
            ['or', ['LIKE', 'u.nickname', $keyword], ['u.id' => $keyword], ['u.mobile' => $keyword]],
            ['u.mall_id' => \Yii::$app->mall->id],
        ]);
        $list = $query->InnerJoinwith('userInfo')->orderBy('nickname')->limit(30)->asArray()->all();

        foreach ($list as $k => $v) {
            $list[$k]['avatar'] = $v['userInfo']['avatar'];
        }
        return [
            'list' => $list,
        ];
    }

    public static function getUserInfo($columns = '*')
    {
        $userInfo = UserInfo::find()->where([
            'user_id' => \Yii::$app->user->id,
            'is_delete' => 0
        ])->select($columns)->one();

        return $userInfo;
    }

    /**
     * @param string $columns
     * @return array|\yii\db\ActiveRecord|null|AdminInfo
     */
    public static function getAdminInfo($columns = '*')
    {
        $adminInfo = AdminInfo::find()->where([
            'user_id' => \Yii::$app->user->id,
            'is_delete' => 0
        ])->select($columns)->one();

        return $adminInfo;
    }

    /**
     * @param string $columns
     * @return array|\yii\db\ActiveRecord|null|UserIdentity
     */
    public static function getUserIdentity($columns = '*')
    {
        $userIdentity = UserIdentity::find()->where([
            'user_id' => \Yii::$app->user->id,
        ])->select($columns)->one();

        return $userIdentity;
    }

    /**
     * 获取员工的所有权限路由数组
     */
    public static function getUserPermissions()
    {
        $user = User::find()->where([
            'id' => \Yii::$app->user->id
        ])->with(['role.permissions'])->asArray()->one();

        $newPermissions = ['mall/index/index'];
        foreach ($user['role'] as $item) {
            $newPermissions = array_merge($newPermissions, json_decode($item['permissions']['permissions']));
        }
        $newPermissions = array_values(array_unique($newPermissions));

        // 插件首页路由比较特殊！需判断是否有插件路由再加上
        foreach ($newPermissions as $item) {
            if (strpos($item, 'plugin/')  !== false) {
                $newPermissions[] = 'mall/plugin/index';
                break;
            }
        }

        return $newPermissions;
    }

    /**
     * 多商户权限路由
     * @return array
     */
    public static function getMchPermissions()
    {
        return [
            'mall/index/index',
            'mall/mch/setting',
            'mall/mch/manage',
            'mall/sms/setting',
            'mall/index/mail',
            'mall/index/notice',
            'mall/postage-rule/index',
            'mall/postage-rule/edit',
            'mall/free-delivery-rules/index',
            'mall/free-delivery-rules/edit',
            'mall/express/index',
            'mall/express/edit',
            'mall/printer/index',
            'mall/printer/edit',
            'mall/printer/setting',
            'mall/territorial-limitation/index',
            'mall/offer-price/index',
            'mall/refund-address/index',
            'mall/refund-address/edit',
            'mall/goods/index',
            'mall/goods/edit',
            'mall/cat/index',
            'mall/cat/edit',
            'mall/cat/style',
            'mall/service/index',
            'mall/service/edit',
            'mch/goods/taobao-copy',
            'mall/order/index',
            'mall/order/detail',
            'mall/order/offline',
            'mall/order/refund',
            'mall/order/batch-send-model',
            'mall/order-comments/index',
            'mall/order-comments/edit',
            'mall/order-comments/reply',
            'mall/order/batch-send',
            'mch/store/order-message',
            'mall/user/clerk',
            'mall/mch/account-log',
            'mall/mch/cash-log',
            'mall/mch/order-close-log',
            'mall/order-comment-templates/index',
            'mall/order/refund-detail',
            'mall/index/rule',
            'mall/goods/import-goods',
            'mall/goods/import-goods-log',
            'mall/goods/export-goods-list',
            'mall/order-send-template/index',
            'mall/order-send-template/edit',
        ];
    }
}
