<template>
    <div class="row">
        <div class="col-md-4 col-md-offset-4 floating-box">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">请注册</h3>
                </div>

                <div class="panel-body">
                    <div class="form-group">
                        <label class="control-label">用户名</label>
                        <input v-model="username" type="text" class="form-control" placeholder="请填写用户名">
                    </div>
                    <div class="form-group">
                        <label class="control-label">密码</label>
                        <input v-model="password" type="password" class="form-control" placeholder="请填写密码">
                    </div>
                    <div class="form-group">
                        <label class="control-label">确认密码</label>
                        <input v-model="cPassword" type="password" class="form-control" placeholder="请填写确认密码">
                    </div>
                    <div class="form-group">
                        <label class="control-label">图片验证码</label>
                        <input v-model="captcha" type="text" class="form-control" placeholder="请填写验证码">
                    </div>
                    <div class="thumbnail" title="点击图片重新获取验证码" @click="getCaptcha">
                        <div class="captcha vcenter" v-html="captchaTpl"></div>
                    </div>
                    <button type="submit" class="btn btn-lg btn-success btn-block" @click="submit">
                        <i class="fa fa-btn fa-sign-in"></i> 注册
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import createCaptcha from '@/utils/createCaptcha'

    export default {
        name: 'Register',
        data() {
            return {
                captchaTpl: '',
                captcha: '',
                username: '',
                password: '',
                cPassword: ''
            }
        },
        methods: {
            getCaptcha() {
                const {captchaCode, captchaTpl} = createCaptcha();
                this.captchaCode = captchaCode;
                this.captchaTpl = captchaTpl;
            },
            submit() {
                const user = this.$store.state.user;
                if (this.username === '') {
                    alert('username is empty');
                    return false
                }
                if (user && this.username === user.username) {
                    alert('username is same');
                    return false
                }
                if (this.password === '') {
                    alert('password is empty');
                    return false
                }
                if (this.password !== this.cPassword) {
                    alert('password is not equal to cPassword');
                    return false
                }
                if (this.captcha !== this.captchaCode) {
                    this.getCaptcha();
                    alert('captcha is invalid');
                    return false;
                }
                const saveUser = {
                    username: this.username,
                    password: this.password
                };
                this.$store.dispatch('login', saveUser);
                alert('ok');
                return true;
            }
        },
        created() {
            this.getCaptcha();
        }
    }
</script>

<style scoped>
    .thumbnail { width: 170px; margin-top: 10px; cursor: pointer;}
    .thumbnail .captcha { height: 46px; background: #E1E6E8;}
    .captcha { font-size: 24px; font-weight: bold; user-select: none;}
</style>