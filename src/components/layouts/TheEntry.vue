<template>
    <div class="navbar-right">
        <ul v-if="auth" class="nav navbar-nav github-login">
            <li>
                <a href="javascript:;">
                    <span v-if="user">
                        <img v-if="user.avatar" :src="user.avatar" class="avatar-topnav">
                        <span v-if="user.username">{{ user.username }}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#" @click="logout"><i class="fa fa-sign-out text-md"></i>退出</a>
                    </span>
                    <span v-else>
                        佚名
                    </span>
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