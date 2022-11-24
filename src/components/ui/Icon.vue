<template>
  <div class="icon">
    <q-img style="width: 100%" :src="`../../icons/${name}.png`" />
  </div>
</template>

<script>
export default {

  name: 'IconItem',

  props: {
    name: {
      type: String,
      required: true
    }
  },
}

</script>

<style scoped>
.icon {
  width: 25px;
  height: 25px;
}
</style>
