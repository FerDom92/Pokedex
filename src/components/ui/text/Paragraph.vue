<template>
  <div class="text" :class="weight">{{ text }}</div>
</template>

<script>
export default {
  name: "ParagraphText",

  props: {
    text: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
      default: "regular",
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  font-family: Roboto;
}

.regular {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}

.medium {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.bold {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
</style>
