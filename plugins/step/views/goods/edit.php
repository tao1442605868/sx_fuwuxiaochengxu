<?php
/**
 * Created by PhpStorm.
 * User: 风哀伤
 * Date: 2019/3/7
 * Time: 11:46
 * @copyright: (c)2019 天幕网络
 * @link: http://www.67930603.top
 */
Yii::$app->loadViewComponent('app-goods');
?>
<style>
    .end {
        font-size: 5px;
        margin-bottom: -1px;
        margin-top: auto;
    }
</style>
<div id="app" v-cloak>
    <el-card shadow="never" style="border:0" body-style="background-color: #f3f3f3;padding: 10px 0 0;">
        <div slot="header" style="justify-content:space-between;display: flex">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><span style="color: #409EFF;cursor: pointer"
                                          @click="$navigate({r:'plugin/step/mall/goods/index'})">商品管理</span>
                </el-breadcrumb-item>
                <el-breadcrumb-item v-if="form.goods_id > 0">详情</el-breadcrumb-item>
                <el-breadcrumb-item v-else>添加商品</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <app-goods ref="appGoods"
                   :is_member="0"
                   :is_attr="1"
                   :is_show="0"
                   :form="form"
                   :preview-info="previewInfo"
                   @handle-preview="handlePreview"
                   url="plugin/step/mall/goods/edit"
                   get_goods_url="plugin/step/mall/goods/edit"
                   referrer="plugin/step/mall/goods/index">
            <template slot="preview">
                <div v-if="previewData" flex="dir:top">
                    <div class="goods">
                        <div class="goods-name">{{previewData.name}}</div>
                        <div flex="dir:left" style="font-size:14px">
                            <div flex="dir:left" style="font-size: 18px;height:22px;color:#ff4544;margin-top:15px">
                                <el-image style="height:22px;width:22px;margin-right:8px"
                                          src="<?= \app\helpers\PluginHelper::getPluginBaseAssetsUrl() ?>/img/detail-price.png"></el-image>
                                <div>{{previewData.min_currency}}</div>
                                <div class="end" v-if="previewData.max_currency > previewData.min_currency">起</div>
                                <div class="end" style="padding:0 3px">+</div>
                                <div class="end" style="margin-bottom: -2px;">FCFA</div>
                                <div>{{previewData.min_price}}</div>
                                <div class="end" v-if="previewData.max_price > previewData.min_price">起</div>
                            </div>
                            <div class="share" flex="dir:top main:center cross:center">
                                <el-image src="statics/img/mall/goods/icon-share.png"></el-image>
                                <div>分享</div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </app-goods>
    </el-card>
</div>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                previewData: null,
                previewInfo: {
                    is_head: false,
                    is_cart: false,
                },
                is_add: 1,
                form: {
                    extra: {
                        step_currency: '活力币'
                    },
                },
            };
        },
        created() {
            let id = getQuery('id');
            if (id) {
                this.is_add = 0;
                this.getDetail();
                this.form.id = getQuery('id');
            }
        },
        methods: {
            handlePreview(e) {
                const attr = e.attr;
                let price = [];
                let currency = [];
                if (attr.length) {
                    attr.map(item => {
                        price.push(item.price);
                        currency.push(item.step_currency);
                    });
                } else {
                    price.push(e.price);
                    currency.push(e.step_currency);
                }
                this.previewData = Object.assign({}, e, {
                    min_price: Math.min.apply(null, price),
                    max_price: Math.max.apply(null, price),
                    min_currency: Math.min.apply(null, currency),
                    max_currency: Math.max.apply(null, currency)
                });
            },
            getGoods() {
                this.$refs.appGoods.getDetail(this.form.goods_id);
            },
            getDetail() {
                let self = this;
                setTimeout(function () {
                    self.$refs.appGoods.getDetail(getQuery('id'));
                }, 1000)
            }
        }
    });
</script>