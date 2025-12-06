<template>
  <component
    :is="icon"
    aria-hidden="true"
    :class="[
      'icon',
      $style[`size-${size}`],
      {
        [$style.hasAutoHeight]: hasAutoHeight,
        [$style.keepColors]: keepColors,
      },
    ]"
    focusable="false"
  />
</template>

<script setup lang="ts">
import type { Component } from 'vue';

withDefaults(
  defineProps<{
    hasAutoHeight?: boolean;
    icon: Component;
    keepColors?: boolean;
    size?: 'm' | 'l';
  }>(),
  { hasAutoHeight: false, keepColors: false, size: 'm' },
);
</script>

<style lang="scss" module>
:global(.icon) {
  &:not(.has-auto-height) {
    height: 1em;
  }

  &:not(.keep-colors) {
    path {
      fill: currentColor !important;
    }
  }

  &.size-l {
    font-size: 1.5rem;
  }
}
</style>
