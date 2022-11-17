<template>
  <div class="xw-card">
    <div class="xw-card-header">
      <slot name="header"> </slot>
    </div>
    <div class="xw-card-body">
      <slot name="body"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "xw-card",
  props: {
    // 设置阴影显示时机
    shadow: {
      type: String,
    },
  },
};
</script>
