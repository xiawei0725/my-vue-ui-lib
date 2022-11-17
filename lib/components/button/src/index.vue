<template>
  <span class="xw-button">
    <slot name="default">button</slot>
  </span>
</template>

<script>
export default {
  // button
  name: "xw-button",
  props: {
    // 按钮类型
    type: {
      type: String,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
