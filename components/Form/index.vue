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
</style>