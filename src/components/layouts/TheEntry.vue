<template>
    <div class="navbar-right collapse navbar-collapse">
        <ul v-if="auth" class="nav navbar-nav">
            <li>
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <img v-if="user.avatar" :src="user.avatar" class="avatar-topnav" :alt="user.username">
                    {{ user.username }}
                </a>
            </li>
            <li>
                <RouterLink to="/users/1/edit">
                    <i class="fa fa-cog text-md i-middle"></i>
                    编辑资料
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/articles/create">
                    <i class="fa fa-paint-brush text-md"></i>
                    创作文章
                </RouterLink>
            </li>
            <li>
                <a href="#" @click="logout">
                    <i class="fa fa-sign-out text-md"></i>退出
                </a>
            </li>
        </ul>
        <div v-else class="nav navbar-nav github-login">
            <RouterLink to="/auth/login" class="btn btn-default login-btn">
                <i class="fa fa-user"></i>登录
            </RouterLink>
            <RouterLink to="/auth/register" class="btn btn-default login-btn">
                <i class="fa fa-user-plus"></i>注册
            </RouterLink>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheEntry",
        computed: {
            user() {
                return this.$store.state.user;
            },
            auth() {
                return this.$store.state.auth;
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
            }
        }
    }
</script>

<style scoped>

</style>