<template>
    <div class="row">
        <div class="col-md-4 col-md-offset-4 floating-box">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">请登录</h3>
                </div>
                <div class="panel-body" data-validator-form>
                    <div class="form-group">
                        <label class="control-label">用户名</label>
                        <input v-model.trim="username" type="text" placeholder="请输入用户名" class="form-control">
                    </div>
                    <div class="form-group">
                        <label class="control-label">密码</label>
                        <input v-model.trim="password" type="password" placeholder="请输入密码" class="form-control">
                    </div>
                    <br>
                    <button @click="login" type="submit" class="btn btn-lg btn-success btn-block">
                        <i class="fa fa-btn fa-sign-in"></i> 登录
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
                commonMessage: ''
            }
        },
        methods: {
            login() {
                if (this.username == '') {
                    alert('username not empty')
                    return
                }
                if (this.password == '') {
                    alert('password not empty')
                    return
                }
                const user = this.$store.state.user;
                if (!(user && user.username == this.username && user.password == this.password)) {
                    alert('username or password is not correct')
                    return
                }
                this.$store.dispatch('login', user)
            }
        }
    }
</script>

<style scoped>

</style>