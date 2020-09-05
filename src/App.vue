<template>
    <div id="app" class="text-gray-800" style="font-family: 'Merriweather'">
        <navigation v-show="showNavigationFooter"></navigation>

        <router-view></router-view>

        <app-footer v-show="showNavigationFooter"></app-footer>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import AppFooter from '@/components/Footer'

export default {
    components: {
        Navigation, AppFooter
    },

    computed: {
        showNavigationFooter() {
            return !this.$route.path.includes('masuk') && !this.$route.path.includes('daftar');
        }
    }
}
</script>
