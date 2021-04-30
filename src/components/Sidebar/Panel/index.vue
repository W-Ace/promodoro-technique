<template>
  <div class="panel">
    <div class="panel-header">
      <slot name="header" />
    </div>
    <div class="panel-body">
      <slot name="body" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.panel {
  width: 518px;
  padding: 30px 33px;
}

.panel-header {
  @include lato-black;

  color: #fcfcfc;
  font-size: 20px;
  letter-spacing: 2px;
}

.panel-body {
  position: relative;
  margin-top: 20px;
  padding-top: 20px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background: #6a6969;
    content: '';
    transform: scaleY(0.5);
  }
}
</style>
