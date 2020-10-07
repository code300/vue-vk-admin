<template>
  <div class="login">
   
    <div class="form">
      <el-form
        class="loginForm"
        :model="ruleForm"
        ref="ruleForm"
        :rules="rules"
        label-position="left"
      >
        <el-form-item
          label="用户名"
          prop="userName"
        >
          <el-input
            type="text"
            v-model="ruleForm.userName"
            cleanable
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            type="password"
            v-model="ruleForm.password"
            show-password
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item class="btnBox">
          <el-button
            type="primary"
            @click="login('ruleForm')"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>
<script>
import { dataAjax } from '../../api/api'
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = this.ruleForm;
          let params = {
            url: 'user/login',
            data: data,
            successCall: res => {
              console.log(res, 'res')
              this.$router.push('/home')
            },
            failMsg: '登录失败'
          };
          dataAjax(params);
          this.$router.push("/home");
        }
      });
      
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url('../../static/images/bg-login.jpg') no-repeat;
  background-size: cover;
  .form {
    width: 400px;
    height: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    position: absolute;
    top: calc(50% - 125px);
    left: calc(50% - 221px);
    background: #fff;
    // opacity: .8;
  }

  .loginForm {
    // margin-top: 20px;
    .btnBox {
      margin: 0;
      text-align: center;
      .el-form-item__content {
        margin-left: 0 !important;
      }
    }
  }
}
</style>
