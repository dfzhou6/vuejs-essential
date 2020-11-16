<template>
    <div class="navbar navbar-default topnav">
        <div class="container">
            <div class="navbar-header">
                <a href="/" class="navbar-brand">
                    <span class="title">{{ logo.title }}</span>
                    <img :src="logo.src" :alt="logo.title">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheHeader",
        data() {
            return {
                logo: {
                    title: 'The mist of the sea',
                    src: `${this.uploadUrl}/uploads/communities/hIZjRRdF8oVYZy69XJnT.png!/both/44x44`
                }
            }
        },
        beforeCreate() {
            this.uploadUrl = 'https://cdn.learnku.com/'
        }
    }
</script>

<style scoped>
    .title { display: none; }
</style>