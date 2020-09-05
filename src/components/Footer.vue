<template>
    <footer class="text-sm md:text-base border-t border-gray-300 text-gray-600">
        <div class="block md:flex justify-between py-10 lg:py-12 xl:py-20 px-5 sm:px-10 md:px-16 xl:px-64">
            <div class="w-full md:w-3/5 lg:w-1/2 mb-10 md:mb-0">
                <h1 class="font-black text-3xl mb-5 text-gray-800">Tunggu Apalagi? Daftar dan Belajar Sekarang</h1>
                <h2 class="leading-8">Pelajari keahlian baru membuat bakso serta trik dan cara laris dalam berjualan bakso bersama kami di Kursus Bakso Laris</h2>
            </div>
            <div class="block lg:flex w-auto">
                <div class="mb-8 lg:mr-10 xl:mr-24">
                    <h5 class="font-semibold text-base md:text-base mb-3">Belajar</h5>
                    <a :href="$router.resolve({ name: 'kelas.index' }).href" class="block hover:text-gray-900">
                        Liat Kelas
                    </a>
                </div>
                <div class="mb-8 lg:mr-10 xl:mr-24">
                    <h5 class="font-semibold text-base md:text-base mb-3">Premium</h5>
                    <a :href="$router.resolve({ name: 'biaya.belajar' }).href" class="block hover:text-gray-900">
                        Siap untuk memulai?
                    </a>
                </div>
                <div>
                    <h5 class="font-semibold text-base md:text-base mb-3">Akun</h5>
                    <a :href="$router.resolve({ name: 'user.profil' }).href" class="block hover:text-gray-900 mb-2">
                        Liat Profil
                    </a>
                    <a :href="$router.resolve({ name: 'user.kelas' }).href" class="block hover:text-gray-900">
                        Liat Kelas
                    </a>
                </div>
            </div>
        </div>
        <div class="text-center py-6 border-t border-gray-300">2020 Hak Cipta di Lindungi Kursus Bakso Laris</div>
    </footer>
</template>