<template>
  <form class="form">
    <slot />
  </form>
</template>

<style lang="less" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 767px) {
  .form {
    gap: 1.87rem;
  }
}
</style>
