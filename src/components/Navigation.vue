<template>
    <nav class="flex flex-wrap lg:flex-no-wrap items-center justify-between px-4 md:px-8 lg:px-8 py-5">
        <div class="font-semibold text-lg md:text-xl">KURSUS BAKSO LARIS</div>
        <i @click="toggleNavigation = !toggleNavigation" class="fas fa-bars text-lg lg:hidden"></i>
        <div v-show="toggleNavigation || this.$vssWidth >= 1024" class="block lg:flex lg:items-center lg:justify-end w-full lg:w-auto mt-5 lg:mt-0 text-sm md:text-base">
            <div class="lg:mx-3 mb-3 lg:mb-0 hover:text-green-700 cursor-pointer">KELAS</div>
            <div class="lg:mx-3 my-3 lg:my-0 hover:text-green-700 cursor-pointer">VARIAN BAKSO</div>
            <div class="lg:mx-3 my-3 lg:my-0 hover:text-green-700 cursor-pointer">BIAYA BELAJAR</div>
            <hr class="border-t border-green-400 my-3 lg:hidden">
            <div class="flex items-center lg:mx-2 mt-3 lg:my-0 hover:text-green-700 cursor-pointer">
                <i class="fas fa-user-circle text-3xl mr-2 md:mr-2"></i>
                <div class="mr-1">Priskila</div>
                <i class="fas fa-caret-down text-lg hidden md:inline"></i>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            toggleNavigation: false
        }
    },
};
</script>