<template>
    <div class="navbar-right">
        <div class="nav navbar-nav github-login">
            <a href="#" class="btn btn-default login-btn">
                <i class="fa fa-user"></i>登录
            </a>
            <RouterLink to="/auth/register" class="btn btn-default login-btn">
                <i class="fa fa-user-plus"></i>注册
            </RouterLink>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheEntry"
    }
</script>

<style scoped>

</style>