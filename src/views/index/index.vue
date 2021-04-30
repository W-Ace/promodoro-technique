<template>
  <div class="index">
    <main class="main" />
    <sidebar />
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar';

export default {
  components: {
    Sidebar,
  },
};
</script>
<style lang="scss" scoped>
.main {
  flex: 1 0 0;
}

.index {
  display: flex;
  height: 100%;
}
</style>
