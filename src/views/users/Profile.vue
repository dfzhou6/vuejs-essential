<template>
    <div class="col-md-9 left-col">
        <div class="panel panel-default padding-md">
            <div class="panel-body">
                <h2><i class="fa fa-cog"></i> 编辑个人资料</h2>
                <hr>
                <div class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">用户名</label>
                        <div class="col-sm-6">
                            <input class="form-control" type="text" placeholder="请输入用户名" v-model.trim="username">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-2 control-label">性别</label>
                        <div class="col-sm-6">
                            <select v-model="sex" class="form-control">
                                <option value="">未选择</option>
                                <option value="male">男</option>
                                <option value="female">女</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-2 control-label">爱好</label>
                        <div class="col-sm-6">
                            <label class="checkbox-inline">
                                <input type="checkbox" value="泡吧" v-model="hobbies">泡吧
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value="游泳" v-model="hobbies">游泳
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value="跑步" v-model="hobbies">跑步
                            </label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-2 control-label">个人简介</label>
                        <div class="col-sm-6">
                            <textarea v-model.trim="desc" type="text" class="form-control"></textarea>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-6">
                            <button type="submit" class="btn btn-primary" @click="updateProfile">应用修改</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditProfile",
        data() {
            return {
                username: '',
                sex: '',
                hobbies: [],
                desc: ''
            }
        },
        created() {
            const user = this.$store.state.user;
            if (user && typeof user === 'object') {
                const {username, sex, hobbies, desc} = user;
                this.username = username ? username : '';
                this.sex = sex ? sex : '';
                this.hobbies = hobbies ? hobbies : [];
                this.desc = desc ? desc : ''
            }
        },
        methods: {
            updateProfile() {
                if (this.username === '') {
                    alert('username not empty')
                    return
                }
                if (this.sex === '') {
                    alert('sex not empty')
                    return
                }
                if (this.hobbies === []) {
                    alert('hobbies not empty')
                    return
                }
                if (this.desc === '') {
                    alert('desc not empty')
                    return
                }
                this.$store.dispatch('updateUser', {
                    username: this.username,
                    sex: this.sex,
                    hobbies: this.hobbies,
                    desc: this.desc
                })
                alert('修改个人信息成功')
            }
        }
    }
</script>

<style scoped>

</style>