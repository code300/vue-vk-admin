<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
      keep-alive
    >
      <router-view :systemName="systemName"></router-view>
    </transition>
    <footer v-if="false">
      <div class="content">
        <div></div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      systemName: '我为社区乐跑代言小程序——管理后台'
    }
  }
}

</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
#app {
  width: 100%;
  height: 100%;
  // min-height: 100%;
  // display: flex;
  // flex-direction: column;

  //   text-align: center;
}

// @media screen and (max-width: 1900px) {
//   footer {
//     height: 120px;
//     .content {
//       margin: 20px auto;
//     }
//   }
// }
</style>