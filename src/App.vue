<template>
    <div id="app" style="font-family: Arial">
        <navigation></navigation>

        <router-view></router-view>

        <footer class="text-center py-5 text-sm md:text-base bg-blue-kbl text-white">
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
}
</script>
