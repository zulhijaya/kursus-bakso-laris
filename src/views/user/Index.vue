<template>
    <div class="block md:flex text-sm md:text-base">
        <div class="w-full main-bg text-white md:w-2/5 lg:w-1/4 h-full lg:h-screen px-5 pt-10 pb-5 md:px-5 lg:px-10 xl:pl-32 xl:pr-10 xl:pt-16">
            <div class="flex flex-col items-center mb-10">
                <img src="@/assets/img/avatar.png" class="rounded-full h-32 w-32 xl:h-56 xl:w-56 mb-2">
                <p class="font-semibold text-base xl:text-lg mb-1">Muhammad Ridwan</p>
                <p class="text-gray-400">Wirausahawan</p>
            </div>
            <section name="main-menu">
                <ul>
                    <li class="font-semibold mb-3">Main Menu</li>
                    <router-link :to="{ name: 'user.kelas' }" exact tag="li" class="hover:text-blue-600 cursor-pointer mb-2">
                        Kelas Saya
                    </router-link>
                    <router-link :to="{ name: 'user.karya' }" tag="li" class="hover:text-blue-600 cursor-pointer mb-2">
                        Karya Saya
                    </router-link>
                </ul>
            </section>
            <hr class="border-t border-gray-400 my-5">
            <section name="akun-saya">
                <ul>
                    <li class="font-semibold mb-3">Akun Saya</li>
                    <router-link :to="{ name: 'user.profil' }" exact tag="li" class="hover:text-blue-600 cursor-pointer mb-2">
                        Liat Profil
                    </router-link>
                    <router-link :to="{ name: 'user.editProfil' }" tag="li" class="hover:text-blue-600 cursor-pointer mb-2">
                        Edit Profil
                    </router-link>
                    <router-link :to="{ name: 'user.resetPassword' }" tag="li" class="hover:text-blue-600 cursor-pointer mb-2">
                        Ganti Password
                    </router-link>
                    <li>Keluar</li>
                </ul>
            </section>
        </div>
        <router-view class="w-full md:w-3/5 lg:w-3/4 px-5 pt-10 pb-5 md:px-5 lg:px-10 xl:pr-32 xl:pl-10 xl:pt-16"></router-view>
    </div>  
</template>