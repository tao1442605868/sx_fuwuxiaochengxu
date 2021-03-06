<?php
/**
 * link: http://www.67930603.top/
 * copyright: Copyright (c) 2018 浙江禾匠信息科技有限公司
 * author: Alpha
 */

Yii::$app->loadViewComponent('app-goods-list');
?>
<style>

</style>
<div id="app" v-cloak>

    <app-goods-list
            ref="goodsList"
            :tabs="tabs"
            goods_url="plugin/advance/mall/goods/index"
            edit_goods_url='plugin/advance/mall/goods/edit'
            edit_goods_status_url='plugin/advance/mall/goods/switch-status'>
        <template slot="column-col">
            <el-table-column prop="display_deposit" label="定金"></el-table-column>
            <el-table-column prop="goods_status" label="预售状态"></el-table-column>
        </template>
    </app-goods-list>
</div>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                tabs: [
                    {
                        name: '全部',
                        value: '-1'
                    },
                    {
                        name: '销售中',
                        value: '1'
                    },
                    {
                        name: '下架中',
                        value: '0'
                    },
                    {
                        name: '售罄',
                        value: '2'
                    },
                    {
                        name: '预售中',
                        value: '3'
                    },
                    {
                        name: '付尾款中',
                        value: '4'
                    },
                    {
                        name: '结束',
                        value: '5'
                    },
                ]
            }
        },
        methods: {}
    });
</script>
