<?php
/**
 * link: http://www.67930603.top/
 * copyright: Copyright (c) 2018 浙江禾匠信息科技有限公司
 * author: Alpha
 */

Yii::$app->loadViewComponent('app-comment');
?>
<div id="app" v-cloak>
    <app-comment sign="booking" reply_url='plugin/booking/mall/comment/reply' edit_url="plugin/booking/mall/comment/edit"></app-comment>
</div>
<script>
const app = new Vue({
    el: '#app',
    mounted() {
        if (getQuery('id')) {}
    }
});
</script>