<?php
/**
 * Created by PhpStorm.
 * User: 风哀伤
 * Date: 2019/3/14
 * Time: 9:14
 * @copyright: (c)2019 天幕网络
 * @link: http://www.67930603.top
 */

namespace app\plugins\bargain\controllers\api;


use app\controllers\api\ApiController;
use app\controllers\api\filters\LoginFilter;
use app\plugins\bargain\forms\api\GoodsForm;
use app\plugins\bargain\forms\api\GoodsListForm;

class GoodsController extends ApiController
{
    public function actionList()
    {
        $form = new GoodsListForm();
        $form->attributes = \Yii::$app->request->get();
        $form->mall = \Yii::$app->mall;
        return $this->asJson($form->search());
    }

    public function actionDetail()
    {
        $form = new GoodsForm();
        $form->attributes = \Yii::$app->request->get();
        $form->user = \Yii::$app->user->identity;
        $form->mall = \Yii::$app->mall;
        return $this->asJson($form->search());
    }
}
