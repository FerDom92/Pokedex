<template>
  <div class="card row justify-center items-center">
    <CaptionText :text="text" style="color: #fdfdfd" />
  </div>
</template>

<script>
import { CaptionText } from "../text";

export default {
  name: "BlockCard",
  components: {
    CaptionText,
  },
  props: {
    text: {
      type: String || "",
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 99px;
  height: 64px;
  background: #16c172;
  padding: 8px;
  border-radius: 4px;
}
</style>
