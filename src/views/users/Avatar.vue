<template>
    <div class="col-md-9 left-col">
        <div class="panel panel-default padding-md">
            <div class="panel-body">
                <h2><i class="fa fa-picture-o"></i> 请输入头像地址</h2>
                <hr>
                <div>
                    <div class="form-group">
                        <label>头像预览：</label>
                        <div>
                            <img :src="avatar" alt="" class="avatar-preview-img">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-8">
                            <input class="form-control avatar-input" type="text" v-model.trim="avatar">
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-lg btn-primary" @click="updateAvatar">上传头像</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditAvatar",
        data() {
            return {
                avatar: ''
            }
        },
        created() {
            const user = this.$store.state.user;
            if (user && typeof user === 'object') {
                this.avatar = user.avatar;
            }
        },
        methods: {
            updateAvatar() {
                const avatar = this.avatar;

                if (avatar) {
                    const img = new Image();
                    img.onload = () => {
                        this.$store.dispatch('updateUser', {avatar});
                        alert('头像上传成功');
                    };
                    img.onerror = () => {
                        alert('头像上传失败');
                    };
                    img.src = avatar;
                }
            }
        }
    }
</script>

<style scoped>
    .avatar-preview-img { min-width: 200px; min-height: 200px; max-width: 50%;}
</style>