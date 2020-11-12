<?php
/**
 * link: http://www.67930603.top/
 * copyright: Copyright (c) 2018 浙江禾匠信息科技有限公司
 * author: Alpha
 */

namespace app\forms\api\order;


use app\core\response\ApiCode;
use app\models\Model;
use app\models\OrderRefund;

class OrderRefundSendForm extends Model
{
    public $id;
    public $express;
    public $express_no;
    public $customer_name;//京东物流特殊要求字段，商家编码


    public function rules()
    {
        return [
            [['id', 'express', 'express_no'], 'required'],
            [['id'], 'integer'],
            [['express', 'express_no', 'customer_name'], 'string']
        ];
    }

    public function send()
    {
        try {
            if (substr_count($this->express, '京东') && empty($this->customer_name)) {
                throw new \Exception('京东物流必须填写京东商家编码');
            }
            /** @var OrderRefund $orderRefund */
            $orderRefund = OrderRefund::find()->where([
                'id' => $this->id,
                'user_id' => \Yii::$app->user->id,
                'mall_id' => \Yii::$app->mall->id,
                'is_delete' => 0
            ])->one();

            if (!$orderRefund) {
                throw new \Exception('订单不存在');
            }

            if ($orderRefund->is_send) {
                throw new \Exception('订单已发货,无需重复操作');
            }

            $orderRefund->customer_name = $this->customer_name;
            $orderRefund->express = $this->express;
            $orderRefund->express_no = $this->express_no;
            $orderRefund->is_send = 1;
            $orderRefund->send_time = date('Y-m-d H:i:s', time());
            $orderRefund->is_confirm = 0;
            $orderRefund->save();

            if (!$orderRefund) {
                throw new \Exception($this->getErrorMsg($orderRefund));
            }

            return [
                'code' => ApiCode::CODE_SUCCESS,
                'msg' => '发货成功'
            ];

        } catch (\Exception $e) {
            return [
                'code' => ApiCode::CODE_ERROR,
                'msg' => $e->getMessage(),
                'error' => [
                    'line' => $e->getLine()
                ]
            ];
        }
    }
}
