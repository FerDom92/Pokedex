<template>
  <div class="button">
    <SubTitleSecondary :text="text" />
  </div>
</template>

<script>
import SubTitleSecondary from '../text/SubTitleSecondary.vue';

export default {
  name: 'ButtonSecondary',
  components: {
    SubTitleSecondary
  },

  props: {
    text: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: 156px;
  height: 48px;
  background: $secondary;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
</style>
