<template>
<div>
    <div :key='item.id' v-for='item in list' class="item">
        <img :src="item.img" />
        <div class="name">{{item.name}}</div>
        <div class="change">
            <a href="" @click.prevent='sub(item.id)'>－</a>
            <input type="text" class="num" :value='item.num' @blur='changeNum(item.id, $event)' />
            <a href="" @click.prevent='add(item.id)'>＋</a>
        </div>
        <div class="del" @click='del(item.id)'>×</div>
    </div>
</div>
</template>

<script>
export default {
    props: ['list'],
    methods: {
        changeNum: function(id, event){
          this.$emit('change-num', {
            id: id,
            type: 'change',
            num: event.target.value
          });
        },
        sub: function(id){
          this.$emit('change-num', {
            id: id,
            type: 'sub'
          });
        },
        add: function(id){
          this.$emit('change-num', {
            id: id,
            type: 'add'
          });
        },
        del: function(id){
          // 把id传递给父组件
          this.$emit('cart-del', id);
        }
    }
}
</script>

<style>
.item {
    height: 55px;
    line-height: 55px;
    position: relative;
    border-top: 1px solid #ADD8E6;
}

.item img {
    width: 45px;
    height: 45px;
    margin: 5px;
    margin-right: 300px;
}

.item .name {
    position: absolute;
    width: 90px;
    top: 0;
    left: 55px;
    font-size: 16px;
}

.item .change {
    width: 100px;
    position: absolute;
    top: 0;
    right: 50px;
}

.item .change a {
    font-size: 20px;
    width: 30px;
    text-decoration: none;
    background-color: lightgray;
    vertical-align: middle;
}

.item .change .num {
    width: 40px;
    height: 25px;
}

.item .del {
    position: absolute;
    top: 0;
    right: 0px;
    width: 40px;
    text-align: center;
    font-size: 40px;
    cursor: pointer;
    color: red;
}

.item .del:hover {
    background-color: orange;
}
</style>
