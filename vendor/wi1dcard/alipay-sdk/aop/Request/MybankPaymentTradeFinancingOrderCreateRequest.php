<?php
/**
 * ALIPAY API: mybank.payment.trade.financing.order.create request
 *
 * @author auto create
 *
 * @since 1.0, 2019-01-07 20:51:15
 */

namespace Alipay\Request;

class MybankPaymentTradeFinancingOrderCreateRequest extends AbstractAlipayRequest
{
    /**
     * 网商银行预付融资订单创建
     **/
    private $bizContent;

    public function setBizContent($bizContent)
    {
        $this->bizContent = $bizContent;
        $this->apiParams['biz_content'] = $bizContent;
    }

    public function getBizContent()
    {
        return $this->bizContent;
    }
}
