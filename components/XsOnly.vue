<template>
  <!-- <div v-if="isMobile()">
    <slot></slot>
  </div> -->
  <slot v-if="isMobile()" />
</template>
