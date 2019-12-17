<template>
<div class="total">
    <span>总价：{{total}}</span>
    <a-button @click="handleClick()" type="primary">结算</a-button>
</div>
</template>

<script>
export default {
    props: ['list'],
    computed: {
        total: function () {
            // 计算商品的总价
            var t = 0;
            this.list.forEach(item => {
                t += item.price * item.num;
            });
            return t;
        }
    },
    methods: {
        handleClick: function () {
            alert(this.total);
        }
    }
}
</script>

<style>
.total {
    background-color: #FFCE46;
    height: 50px;
    line-height: 50px;
    text-align: right;
}

.total button {
    margin: 0 10px;
}
</style>
