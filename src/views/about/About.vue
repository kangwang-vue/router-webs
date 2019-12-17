<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{name}}</div>
  </div>
</template>

<<script>
export default {
   data() {debugger
      return {
        name:this.$router.params.name
      };
    },
}
</script>
