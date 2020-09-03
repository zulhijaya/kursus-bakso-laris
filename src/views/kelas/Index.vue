<template>
    <div class="text-gray-800">
        <section class="px-5 sm:px-20 xl:px-64 pt-10 md:pt-16 bg-kbl pb-32">
            <h1 class="container-title text-center">Katalog Kelas</h1>
            <div class="w-full xl:w-1/2 xl:mx-auto">
                <h2 class="text-base md:text-lg text-center mt-12 md:mt-16 mb-5 lg:px-40 xl:px-0 md:mb-8 leading-8">
                    Jangan mau kalah update dengan yang lainnya. Yuk ikuti perkembangan Kuliner.
                </h2>
            </div>
            <div class="lg:px-10 xl:px-40">
                <div class="text-base md:text-lg mb-2">Kategori :</div>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-white text-sm md:text-base">
                    <button class="bg-blue-kbl hover:bg-blue-800 py-2 px-2 rounded">Semua</button>
                    <button class="bg-blue-kbl hover:bg-blue-800 py-2 px-2 rounded">Bakso</button>
                    <button class="bg-blue-kbl hover:bg-blue-800 py-2 px-2 rounded">Management</button>
                    <button class="bg-blue-kbl hover:bg-blue-800 py-2 px-2 rounded">Softskill</button>
                    <button class="bg-blue-kbl hover:bg-blue-800 py-2 px-2 rounded">Gratis</button>
                    <button class="bg-blue-kbl hover:bg-blue-800 py-2 px-2 rounded">Premium</button>
                </div>
            </div>
        </section>
        <section class="container-content mb-32">
            <div class="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 gap-x-5 xl:gap-x-10 text-sm md:text-base px-5 xl:px-16">
                <div v-for="n in 9" :key="n" class="rounded-lg p-4 bg-white border border-gray-400 hover:shadow-lg transition-all duration-300 ease-in-out">
                    <div class="bg-gray-300 h-40"></div>
                    <h4 class="font-semibold py-2 border-b border-gray-400">Membuat Bakso Enak Lezat</h4>
                    <div class="flex items-center justify-between py-2">
                        <p>Sertifikat</p>
                        <p>Konsultasi</p>
                    </div>
                    <div class="flex items-center justify-end border-b border-gray-400 py-2">
                        <div><i class="fas fa-star mr-1" style="color: #023A67"></i>4.8 (931)</div>
                    </div>
                    <div class="flex items-center pt-2">
                        <i class="fas fa-user-circle mr-4 text-5xl"></i>
                        <div>
                            <p class="font-semibold">Bapak Aal</p>
                            <p>Pemilik Bakso Ngangenin</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>