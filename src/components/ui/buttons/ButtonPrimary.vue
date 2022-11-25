<template>
  <div class="button">
    <SubTitleSecondary :text="text" style="color: white" />
  </div>
</template>

<script>
import { SubTitleSecondary } from "../text";
export default {
  name: "ButtonPrimary",
  components: {
    SubTitleSecondary,
  },

  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  width: 156px;
  height: 48px;
  background: $primary;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
</style>
