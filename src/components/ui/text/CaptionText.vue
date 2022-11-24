<template>
  <div class="text" :class="weight">{{ text }}</div>
</template>

<script>
export default {
  name: 'CaptionText',

  props: {
    text: {
      type: String,
      required: true
    },
    weight: {
      type: String,
      default: 'regular'
    }
  },
}
</script>

<style lang="scss" scoped>
.text {
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
}

.regular {
  font-weight: 400;
}

.medium {
  font-weight: 500;
}
</style>
