<template>
    <div class="text-gray-800">
        <section class="bg-orange-600 px-5 sm:px-20 xl:px-64 pt-10 md:pt-16 pb-32">
            <h1 class="container-title text-center">Katalog Kelas</h1>
            <div class="w-full xl:w-1/2 xl:mx-auto">
                <h2 class="container-subtitle">
                    Jangan mau kalah update dengan yang lainnya. Yuk ikuti perkembangan kuliner.
                </h2>
            </div>
            <div class="lg:px-10 xl:px-40">
                <div class="text-base md:text-lg mb-2 text-white">Kategori :</div>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-sm md:text-base">
                    <button class="bg-orange-200 hover:bg-orange-300 py-2 px-2 rounded">Semua</button>
                    <button class="bg-orange-200 hover:bg-orange-300 py-2 px-2 rounded">Bakso</button>
                    <button class="bg-orange-200 hover:bg-orange-300 py-2 px-2 rounded">Management</button>
                    <button class="bg-orange-200 hover:bg-orange-300 py-2 px-2 rounded">Softskill</button>
                    <button class="bg-orange-200 hover:bg-orange-300 py-2 px-2 rounded">Gratis</button>
                    <button class="bg-orange-200 hover:bg-orange-300 py-2 px-2 rounded">Premium</button>
                </div>
            </div>
        </section>
        <section class="container-content -mt-20 mb-32">
            <div class="grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-8 lg:gap-y-8 text-sm md:text-base px-5 xl:px-16">
                <a 
                    :href="$router.resolve({ name: 'kelas.show', params: { 
                        kelasSlug: 'membuat-bakso-enak' 
                    } }).href" 
                    v-for="n in 9" :key="n" 
                    class="kelas group rounded-lg p-4 bg-white border border-gray-400 hover:shadow-lg transition-all duration-300 ease-in-out"
                    @mouseover="showEye($event)"
                    @mouseleave="closeEye()"
                >
                    <div class="relative">
                        <img src="@/assets/img/meatballs.png" alt="" class="relative group-hover:opacity-50 h-40 sm:h-64 md:h-40 xl:h-48 w-full mb-3 rounded">
                        <div class="hidden absolute inset-0 flex items-center justify-center w-full h-full">
                            <div class="flex items-center justify-center h-12 w-12 bg-white rounded-full">
                                <i class="fas fa-eye text-xl text-orange-600"></i>
                            </div>
                        </div>
                    </div>
                    <h4 class="font-semibold">Membuat Bakso Enak Lezat</h4>
                    <hr class="my-3 border-t border-gray-400">
                    <div class="flex items-center justify-between mb-2">
                        <p>Sertifikat</p>
                        <p>Konsultasi</p>
                    </div>
                    <div class="flex items-center justify-end">
                        <div><i class="fas fa-star mr-1" style="color: #023A67"></i>4.8 (931)</div>
                    </div>
                    <hr class="my-3 border-t border-gray-400">
                    <div class="flex items-center">
                        <i class="fas fa-user-circle mr-4 text-5xl"></i>
                        <div>
                            <p class="font-semibold mb-1">Bapak Aal</p>
                            <p class="text-xs md:text-sm">Pemilik Bakso Ngangenin</p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        showEye(e) {
            let target = e.target;
            while( target.nodeName != 'A' ) {
                target = target.parentNode;
            }
            target.firstElementChild.lastElementChild.classList.remove('hidden');
        },

        closeEye() {
            const allKelas = document.querySelectorAll('.kelas');
            allKelas.forEach((kelas) => {
                kelas.firstElementChild.lastElementChild.classList.add('hidden');
            });
        }
    },
}
</script>