<template>
  <div class="text">{{ text }}</div>
</template>

<script>
export default {
  name: 'TitlePrimary',

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
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  color: $neutro1;
}
</style>
