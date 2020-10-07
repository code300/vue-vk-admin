<template>
  <div class="menu">
    <el-aside width="">
      <!-- <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <el-menu
        default-active="/index"
        class=""
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        router
        style="min-height:100%"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>

        <el-menu-item index="/loanApply">
          <i class="el-icon-menu"></i>
          <span slot="title">贷款申请</span>
        </el-menu-item>

        <el-submenu index="/loanApprove">

          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">贷款审批</span>
          </template>

          <el-menu-item index="/firstApprove">
            <span slot="title">初审</span>
          </el-menu-item>
          <el-menu-item index="/endApprove">
            <span slot="title">终审</span>
          </el-menu-item>

        </el-submenu>

        <el-menu-item index="/other">
          <i class="el-icon-menu"></i>
          <span slot="title">其他</span>
        </el-menu-item>

      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: auto;
  .el-menu {
    padding: 0 20px;
    text-align: left;
  }
}
</style>