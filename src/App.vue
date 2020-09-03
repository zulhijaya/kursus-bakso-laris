<template>
    <div id="app" class="text-gray-800" style="font-family: 'Merriweather'">
        <navigation v-show="showNavigationFooter"></navigation>

        <router-view></router-view>

        <footer v-show="showNavigationFooter" class="text-center py-5 text-sm md:text-base bg-blue-700 text-white">
            2020 Hak Cipta di Lindungi Kursus Bakso Laris
        </footer>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
    components: {
        Navigation
    },

    computed: {
        showNavigationFooter() {
            return !this.$route.path.includes('masuk') && !this.$route.path.includes('daftar');
        }
    }
}
</script>
