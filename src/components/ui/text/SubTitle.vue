<template>
  <div class="text">{{ text }}</div>
</template>

<script>
export default {
  name: "SubTitlePrimary",

  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  font-family: readexpro;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: $neutro1;
}
</style>
