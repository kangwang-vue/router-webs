<template>
<div class='cart'>
    <cart-title :uname='uname'></cart-title>
    <cart-list :list='list' @change-num='changeNum($event)' @cart-del='delCart($event)'></cart-list>
    <cart-total :list='list'></cart-total>
</div>
</template>

<script>
import CartTitle from './CartTitle';
import CartList from './CartList';
import CartTotal from './CartTotal';

export default {
    data: function () {
        return {
            uname: '张三',
            list: [{
                id: 1,
                name: 'TCL彩电',
                price: 1000,
                num: 1,
                img: require('../../assets/a.jpg')
            }, {
                id: 2,
                name: '机顶盒',
                price: 1000,
                num: 1,
                img: require('../../assets/b.jpg')
            }, {
                id: 3,
                name: '海尔冰箱',
                price: 1000,
                num: 1,
                img: require('../../assets/c.jpg')
            }, {
                id: 4,
                name: '小米手机',
                price: 1000,
                num: 1,
                img: require('../../assets/d.jpg')
            }, {
                id: 5,
                name: 'PPTV电视',
                price: 1000,
                num: 2,
                img: require('../../assets/e.jpg')
            }]
        }
    },
    components: {
        CartTitle,
        CartList,
        CartTotal
    },
    methods: {
         handleChange(value) {
        console.log(`selected ${value}`);
      },
    changeNum: function (val) {
            // 分为三种情况：输入域变更、加号变更、减号变更
            if (val.type == 'change') {
                // 根据子组件传递过来的数据，跟新list中对应的数据
                this.list.some(item => {
                    if (item.id == val.id) {
                        item.num = val.num;
                        // 终止遍历
                        return true;
                    }
                });
            } else if (val.type == 'sub') {
                // 减一操作
                this.list.some(item => {
                    if (item.id == val.id) {
                        item.num -= 1;
                        // 终止遍历
                        return true;
                    }
                });
            } else if (val.type == 'add') {
                // 加一操作
                this.list.some(item => {
                    if (item.id == val.id) {
                        item.num += 1;
                        // 终止遍历
                        return true;
                    }
                });
            }
        },
        delCart: function (id) {
            // 根据id删除list中对应的数据
            // 1、找到id所对应数据的索引
            var index = this.list.findIndex(item => {
                return item.id == id;
            });
            // 2、根据索引删除对应数据
            this.list.splice(index, 1);
        }
    }
}
</script>

<style>
.cart {
    width: 300px;
    margin: auto;
}
</style>
