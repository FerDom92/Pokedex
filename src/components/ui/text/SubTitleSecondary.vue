<template>
  <div class="text">{{ text }}</div>
</template>

<script>
export default {
  name: 'SubTitleSecondary',

  props: {
    text: {
      type: String,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>
.text {
  font-family: readexpro;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: $neutro1;
}
</style>
