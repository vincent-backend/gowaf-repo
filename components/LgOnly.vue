<template>
  <!-- <div v-if="!$device.isMobile">
    <slot></slot>
  </div> -->
  <slot v-if="!$device.isMobile" />
</template>
