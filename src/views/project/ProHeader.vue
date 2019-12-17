<template>
<div class="header">
    <div class="logo">
        <img src="../../assets/logo.png" width="50px" alt="logo">
    </div>
    <div class="select">
        <a-select defaultValue="lucy" style="width: 120px">
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
    </div>
    <div class="menu">
        <a-menu mode="horizontal" theme="dark">
            <a-menu-item key="one">
                <a-icon type="mail" />产品中心</a-menu-item>
            <a-menu-item key="two">
                <a-icon type="appstore" />管理看板 </a-menu-item>
            <a-menu-item key="three">
                <a-icon type="appstore" />分支管理 </a-menu-item>
            <a-menu-item key="four">
                <a-icon type="appstore" />流水线 </a-menu-item>
                 <a-menu-item key="five">
                <a-icon type="appstore" />代码质量 </a-menu-item>
                 <a-menu-item key="six">
                <a-icon type="appstore" />测试质量 </a-menu-item>
                 <a-menu-item key="seven">
                <a-icon type="appstore" />部署发布</a-menu-item>
        </a-menu>
    </div>
    <div class="help">
         <a-icon type="question-circle" />
        帮助
        <img src="../../assets/photo.png"  alt="头像">
        小明
    </div>
</div>
</template>

<script>
export default {
    props: [""]
};
</script>

<style>
.header{
    width: 100%;
    height: 48px;
    background: #081622;
    display: flex;
    align-items: center;
}
.header .logo{
    width: 180px;
    color: #ffffff;
    text-align: center;
}
.header .select{
    width: 160px;
    border-radius: 4px;
    border:1px solid #070101;
}
.header .menu{
    flex:1;
}
.header .help{
    width: 180px;
    display: inline-block;
    color: #ffffff;
}
.header .help img{
    width: 70px;
    padding-left: 30px;
    padding-right: 10px;
}
</style>
