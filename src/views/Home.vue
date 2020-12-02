<template>
    <div>
        {{ commonMessage }}
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                commonMessage: ''
            }
        },
        // computed一般用来监听其他属性的值的变化，来获得当前属性的值(若其他属性的值无变化，则当前属性的值用之前的缓存，不重新计算)
        computed: {
            auth() {
                return this.$store.state.auth;
            }
        },
        // watch属性一般用来监听当前属性的值是否有修改动作，来做一些操作
        watch: {
            auth(value) {
                if (!value) {
                    this.commonMessage = 'is not login, please login or register';
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            const fromName = from.name;
            console.log(from);
            next(vm => {
                if (vm.$store.state.auth) {
                    switch (fromName) {
                        case 'Register':
                            vm.$data.commonMessage = 'register success';
                            break;
                        case 'Create':
                            vm.$data.commonMessage = 'post article success';
                            break;
                        default:
                            vm.$data.commonMessage = 'login success';
                    }
                } else {
                    vm.$data.commonMessage = 'is not login'
                }
            })
        }
    }
</script>

<style scoped>

</style>