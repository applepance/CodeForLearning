<template>
  <div class='login'>
    <div class='container'>
      <p class='title'>后台管理系统</p>
      <div class='msg mt20'>
        <el-input v-model='user' placeholder='请输入账号'></el-input>
      </div>
      <div class='msg mt20'>
        <el-input v-model='password' placeholder='请输入密码'></el-input>
      </div>
      <div class='btn mt20'>
        <el-button type='primary' @click='login'>登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-new */
export default {
  name: 'Login',
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.user && this.password) {
        localStorage.setItem('userName', this.user)
        this.$router.push('/main') // 字符串
        // this.$router.push({ path: '/hello' }) // 对象
        // this.$router.push({ name: 'HelloWorld', param: { userId: 1 } })
      }
    }
  }
}
</script>

<style scoped>
.login {
  width: 100%;
}
.container {
  width: 300px;
  padding: 50px;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 100px;
  box-shadow: 0 0 20px #cac6c6;
}
.mt20 {
  margin-top: 20px;
}
.btn button {
  width: 100%;
}
.title {
  font-size: 26px;
  font-weight: bold;
  color: #505458;
}
</style>
