<template>
  <div class="row justify-center">
    <q-card class="card q-mb-md" height="350px">
      <q-skeleton square height="200px" />

      <div class="blank-space column items-center justify-center">
        <q-skeleton type="text" class="q-mt-md" width="300px" height="40px" />
        <q-skeleton type="text" width="300px" height="40px" />
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "SkeletonCard",
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 16px;
  width: 90%;
}

.blank-space {
  background: white;
  height: 112px;
}
</style>
