<template>
    <div class="col-md-9 left-col">
        <div class="panel panel-default padding-md">
            <div class="panel-body">
                <h2><i class="fa fa-lock"></i> 修改密码</h2>
                <hr>
                <div class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">密 码</label>
                        <div class="col-sm-6">
                            <input v-model.trim="password" type="password" class="form-control" placeholder="请输入密码">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">确认密码</label>
                        <div class="col-sm-6">
                            <input v-model.trim="cPassword" type="password" class="form-control" placeholder="请输入确认密码">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-6">
                            <button class="btn btn-primary" @click="updatePassword">修改密码</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditPassword",
        data() {
            return {
                password: '',
                cPassword: ''
            }
        },
        created() {
            const user = this.$store.state.user;

            if (user && typeof user === 'object') {
                this.password = user.password;
            }
        },
        methods: {
            updatePassword() {
                const password = this.password;
                const cPassword = this.cPassword;

                if (password === '' || cPassword === '') {
                    alert('密码不能为空');
                    return;
                }
                if (password !== cPassword) {
                    alert('密码必须与确认密码一致');
                    return;
                }
                this.$store.dispatch('updateUser', {password});
                alert('修改密码成功');
            }
        }
    }
</script>

<style scoped>

</style>