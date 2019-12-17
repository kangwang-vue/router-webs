<template>
  <div class="MyPro">
    <ProHeader></ProHeader>
    <ProColumn></ProColumn>
    <ProContent></ProContent>
  </div>
</template>

<script>
import ProHeader from "./ProHeader";
import ProColumn from "./ProColumn";
import ProContent from "./ProContent";

export default {
  components: {
    ProHeader,
    ProColumn,
    ProContent
  },
  
};
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
}

.MyPro {
  width: 100%;
  height: 100%;
}
</style>
