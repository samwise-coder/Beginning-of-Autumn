import testToast from './toast.vue'
export default new (class NestLogger {
    public install(Vue: any) {
        Vue.prototype.$log = this;
        Vue.component(testToast.name, testToast)
    }

    error(text: string) {
        console.log(text)
    }
})();