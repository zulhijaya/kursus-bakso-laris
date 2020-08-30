<template>
    <div>
        <section class="px-48 pt-8 md:pt-12 bg-kbl pb-32">
            <h1 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mb-2 md:mb-10">KATALOG KELAS</h1>
            <h2 class="text-base md:text-lg lg:text-xl xl:text-2xl text-center mb-5">Jangan mau kalah update dengan yang lainnya. Yuk ikuti perkembangan Kuliner.</h2>
            <div class="text-xl mb-2">Kategori :</div>
            <div class="grid grid-cols-6 gap-5 text-white text-lg">
                <button class="bg-blue-kbl hover:bg-blue-800 py-2 px-4 rounded-lg">Semua</button>
                <button class="bg-blue-kbl hover:bg-blue-800 py-2 px-4 rounded-lg">Bakso</button>
                <button class="bg-blue-kbl hover:bg-blue-800 py-2 px-4 rounded-lg">Management</button>
                <button class="bg-blue-kbl hover:bg-blue-800 py-2 px-4 rounded-lg">Softskill</button>
                <button class="bg-blue-kbl hover:bg-blue-800 py-2 px-4 rounded-lg">Gratis</button>
                <button class="bg-blue-kbl hover:bg-blue-800 py-2 px-4 rounded-lg">Premium</button>
            </div>
        </section>
        <section class="px-48 mb-16 md:mb-20 lg:mb-24 xl:mb-32 -mt-16">
            <div class="grid grid-cols-1 gap-y-5 xl:gap-y-10 lg:grid-cols-3 gap-x-5 xl:gap-x-10">
                <div v-for="n in 9" :key="n" class="rounded-lg p-4 bg-white border border-gray-400 shadow-md">
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