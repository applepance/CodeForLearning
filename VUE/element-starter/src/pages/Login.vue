<template>
  <div class="login_page">
    <!-- 触发这个transition? v-show v-if
    router 切换 mounted-->
    <transition name="form-fade" mode="in-out">
      <section class="form_container" v-show="showLogin">
        <div class="manage-tip">
          <span class="title">后台管理系统</span>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
          <el-form-item prop="username">
            <span class="fa-tips">
              <i class="fa fa-user"></i>
            </span>
            <el-input class="area" type="text" placeholder="用户名" v-model="loginForm.username"></el-input>
            <el-input class="area" type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  // 表单提交后，登录状态 -> vuex
  // 提交过程之中，字段报错，v-model 自身的
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      ip: ""
    };
  },
  computed: {
    showLogin() { return true }
  },
};
</script>

<style lang="less" scoped>
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transition: translate3d(0, -50px, 0);
  opacity: 1;
}
</style>
