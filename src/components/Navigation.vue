<template>
    <nav class="bg-white block lg:flex items-center lg:px-5 xl:px-10 py-4 text-sm md:text-base border-b border-gray-400">
        <div class="flex items-center justify-between px-4 md:px-5 lg:px-0 w-auto text-gray-800" :class="[ toggleNavigation ? 'pb-3 border-b border-gray-400' : '' ]">
            <router-link exact :to="{ name: 'index' }" class="font-semibold text-lg md:text-xl truncate">KURSUS BAKSO LARIS</router-link>
            <div><i @click="toggleNavigation = !toggleNavigation" class="fas fa-bars text-2xl lg:hidden"></i></div>
        </div>
        <slide-up-down :active="toggleNavigation || this.$vssWidth >= 1024" class="relative block lg:flex items-center justify-between w-full text-gray-700">
            <div class="block lg:flex lg:items-center px-4 md:px-5 lg:px-0 py-4 lg:py-0 lg:pl-5" :class="[ toggleNavigation ? 'border-b border-gray-400' : '' ]"> 
                <router-link :to="{ name: 'kelas.index' }" tag="div" class="hover:text-gray-900 -ml-2 px-2 lg:-ml-0 pb-3 lg:px-3 lg:py-1 rounded cursor-pointer xl:mx-1">
                    Kelas
                </router-link>
                <router-link :to="{ name: 'showcase' }" tag="div" class="hover:text-gray-900 -ml-2 px-2 lg:-ml-0 pb-3 lg:px-3 lg:py-1 rounded cursor-pointer xl:mx-1">
                    Showcase
                </router-link>
                <router-link :to="{ name: 'biaya.belajar' }" tag="div" class="hover:text-gray-900 -ml-2 px-2 lg:-ml-0 lg:px-3 lg:py-1 rounded cursor-pointer xl:mx-1">
                    Biaya Belajar
                </router-link>
            </div>
            <div class="flex items-center px-4 md:px-5 lg:px-0 pt-4 lg:pt-0">
                <router-link :to="{ name: 'masuk' }" tag="button" class="px-5 py-2 lg:py-2 rounded w-full lg:w-auto border border-gray-400 hover:bg-orange-600 hover:text-white focus:outline-none mr-3">
                    Masuk
                </router-link>
                <router-link :to="{ name: 'daftar' }" tag="button" class="px-5 py-2 lg:py-2 rounded w-full lg:w-auto border border-gray-400 hover:bg-orange-600 hover:text-white focus:outline-none">
                    Daftar
                </router-link>
            </div>
            <div class="px-4 md:px-5 lg:px-0 pt-4 lg:pt-0">
                <div @mouseover="showUserOption = true" @mouseleave="showUserOption = false" class="flex items-center cursor-pointer mb-3 lg:mb-0">
                    <img src="@/assets/img/avatar.png" alt="avatar" class="w-10 h-10 rounded-full mr-3">
                    <div>Patricia<i class="fas fa-caret-down ml-2 hidden lg:inline"></i></div>
                </div>
                <div
                    v-show="toggleNavigation || showUserOption" 
                    @mouseover="showUserOption = true" 
                    @mouseleave="showUserOption = false" 
                    class="block lg:absolute w-full lg:w-48 lg:top-0 lg:right-0 lg:mt-10"
                >
                    <ul class="bg-white lg:rounded-lg lg:p-4 text-sm md:text-base lg:overflow-y-auto lg:shadow-lg lg:border lg:border-gray-300 transition duration-1000 ease-in-out">
                        <li class="font-semibold hidden lg:inline-block mb-3">Profil</li>
                        <router-link :to="{ name: 'user.profil' }" exact tag="li" class="mb-3 hover:text-blue-600 cursor-pointer">
                            Liat Profil
                        </router-link>
                        <router-link :to="{ name: 'user.editProfil' }" tag="li" class="mb-3 hover:text-blue-600 cursor-pointer">
                            Edit Profil
                        </router-link>
                        <router-link :to="{ name: 'user.kelas' }" tag="li" class="mb-3 hover:text-blue-600 cursor-pointer">
                            Kelas Saya
                        </router-link>
                        <router-link :to="{ name: 'user.karya' }" tag="li" class="mb-3 hover:text-blue-600 cursor-pointer">
                            Karya Saya
                        </router-link>
                        <router-link :to="{ name: 'user.resetPassword' }" tag="li" class="mb-3 hover:text-blue-600 cursor-pointer">
                            Ganti Password
                        </router-link>
                        <hr class="border-t border-gray-400 hidden lg:block my-2">
                        <li class="mt-2 md:my-1 hover:text-blue-600 cursor-pointer">Keluar</li>
                    </ul>
                </div>
            </div>
        </slide-up-down>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            toggleNavigation: false,
            showUserOption: false
        }
    },

    watch: {
        '$route' () {
            this.toggleNavigation = false; 
        }
    },
};
</script>