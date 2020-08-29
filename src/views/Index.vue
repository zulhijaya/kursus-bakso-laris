<template>
    <div class="bg-white" style="font-family: 'Inter'">

        <navigation></navigation>

        <section name="main" class="pt-8 md:pt-12 bg-kbl" :class="mainHeight">
            <h1 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-black mb-5">PEMULA BISA SUKSES DALAM BISNIS BAKSO</h1>
            <h2 class="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">Pelajari Keahlian Membuat Bakso serta Trik Laris Berjualan Bakso</h2>
        </section>

        <main class="px-5 md:px-10 lg:px-20 xl:px-48">
            <div class="w-2/3 md:w-3/5 relative bg-blue-kbl mx-auto -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 xl:-mt-32 rounded-t-xl p-2 md:p-3 lg:p-4 xl:p-5 mb-20 lg:mb-32 h-24 sm:h-32 md:h-40 lg:h-48 xl:h-64 shadow-kbl">
                <div class="bg-white rounded-t-xl w-full h-full">
                    <div class="grid grid-cols-1 gap-y-1 w-1/5 border-r-4 md:border-r-8 border-black h-full">
                        <div class="border-b md:border-b-2 border-black"></div>
                        <div class="border-b md:border-b-2 border-black"></div>
                        <div class="border-b md:border-b-2 border-black"></div>
                        <div class="border-b md:border-b-2 border-black"></div>
                        <div class="border-b md:border-b-2 border-black"></div>
                        <div class="border-b md:border-b-2 border-black"></div>
                        <div></div>
                    </div>
                </div>
                <div class="absolute bg-white inset-y-0 left-0 z-50 rounded-xl h-16 sm:h-20 md:h-24 lg:h-32 xl:h-48 my-auto -ml-6 sm:-ml-8 md:-ml-10 xl:-ml-12 w-12 sm:w-16 md:w-20 xl:w-24 shadow-kbl"></div>
            </div>

            <section class="mt-10 mb-16 md:mb-20 lg:mb-24 xl:mb-32">
                <h3 class="font-semibold text-lg md:text-xl lg:text-2xl mb-8">SUPPORTED BY :</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-5 text-base md:text-lg">
                    <div class="shadow-kbl rounded-lg px-6 py-4 text-center">Bakso Ngangenin Cibubur</div>
                    <div class="shadow-kbl rounded-lg px-6 py-4 text-center">Bakso Ngangenin Depok</div>
                    <div class="shadow-kbl rounded-lg px-6 py-4 text-center">Bakso Ngangenin Bandung</div>
                </div>
                <div class="text-base md:text-xl mt-20 mb-5">
                    <p class="mb-1">Mulai usaha dari 0, hingga miliki banyak Outlet.</p>
                    <p class="mb-1">Belajar lebih terarah :</p>
                    <p>Dapatkan jalan shortcut terbaik untuk memulai usaha Bakso :</p>
                </div>
                <button class="rounded-lg py-2 md:py-3 px-5 md:px-8 text-base md:text-lg lg:text-xl text-white bg-blue-kbl focus:outline-none">ARAHKAN SAYA</button>
            </section>

            <section name="kelas-popular" class="mb-16 md:mb-20 lg:mb-24 xl:mb-32">
                <h3 class="font-semibold text-lg md:text-xl lg:text-2xl text-center mb-5">KELAS POPULAR</h3>
                <p class="text-center mb-5 text-base md:text-xl">Materi telah didesain berdasarkan kebutuhan membangun sebuah Wirausaha</p>
                <div class="grid grid-cols-1 gap-y-5 lg:grid-cols-3 gap-x-5 xl:gap-x-10">
                    <div class="rounded-lg p-4 border border-gray-400">
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
                    <div class="rounded-lg p-4 border border-gray-400">
                        <div class="bg-gray-300 h-40"></div>
                        <h4 class="font-semibold py-2 border-b border-gray-400">Management Pemasaran</h4>
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
                    <div class="rounded-lg p-4 border border-gray-400">
                        <div class="bg-gray-300 h-40"></div>
                        <h4 class="font-semibold py-2 border-b border-gray-400">Management Produksi</h4>
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

            <section class="mb-16 md:mb-20 lg:mb-24 xl:mb-32">
                <div class="block lg:flex">
                    <div class="w-full lg:w-2/5 md:mr-5">
                        <h3 class="font-semibold text-lg md:text-xl lg:text-2xl mb-5 text-center lg:text-left">KENAPA KURSUS BAKSO LARIS COCOK UNTUKMU?</h3>
                        <p class="text-base md:text-lg lg:text-xl text-center lg:text-left mb-5 ">Kini belajar membuat bakso dan memulai usaha jadi lebih mudah.</p>
                    </div>
                    <div class="w-full lg:w-3/5 grid grid-cols-3 gap-x-5 gap-y-5 text-xl">
                        <div>
                            <div class="bg-gray-300 h-16 w-24 mx-auto mb-2 md:mb-3 lg:mb-5 rounded-lg"></div>
                            <p class="text-sm md:text-lg font-semibold lg:text-xl text-center">STUDI KASUS</p>
                            <p class="text-gray-600 text-xs md:text-base lg:text-lg text-center">Up to Date</p>
                        </div>
                        <div>
                            <div class="bg-gray-300 h-16 w-24 mx-auto mb-2 md:mb-3 lg:mb-5 rounded-lg"></div>
                            <p class="text-sm md:text-lg font-semibold lg:text-xl text-center">KUALITAS VIDEO</p>
                            <p class="text-gray-600 text-xs md:text-base lg:text-lg text-center">1080HD 60FPS</p>
                        </div>
                        <div>
                            <div class="bg-gray-300 h-16 w-24 mx-auto mb-2 md:mb-3 lg:mb-5 rounded-lg"></div>
                            <p class="text-sm md:text-lg font-semibold lg:text-xl text-center">MODULES</p>
                            <p class="text-gray-600 text-xs md:text-base lg:text-lg text-center">Dasar ke Expert</p>
                        </div>
                        <div>
                            <div class="bg-gray-300 h-16 w-24 mx-auto mb-2 md:mb-3 lg:mb-5 rounded-lg"></div>
                            <p class="text-sm md:text-lg font-semibold lg:text-xl text-center">KONSULTASI</p>
                            <p class="text-gray-600 text-xs md:text-base lg:text-lg text-center">Seumur Hidup</p>
                        </div>
                        <div>
                            <div class="bg-gray-300 h-16 w-24 mx-auto mb-2 md:mb-3 lg:mb-5 rounded-lg"></div>
                            <p class="text-sm md:text-lg font-semibold lg:text-xl text-center">FRANCHISE</p>
                            <p class="text-gray-600 text-xs md:text-base lg:text-lg text-center">Program Kerjasama</p>
                        </div>
                        <div>
                            <div class="bg-gray-300 h-16 w-24 mx-auto mb-2 md:mb-3 lg:mb-5 rounded-lg"></div>
                            <p class="text-sm md:text-lg font-semibold lg:text-xl text-center">SERTIFIKAT</p>
                            <p class="text-gray-600 text-xs md:text-base lg:text-lg text-center">Kelulusan Kelas</p>
                        </div>
                        <div>
                            <div class="bg-gray-300 h-16 w-24 mx-auto mb-2 md:mb-3 lg:mb-5 rounded-lg"></div>
                            <p class="text-sm md:text-lg font-semibold lg:text-xl text-center">AKSES KELAS</p>
                            <p class="text-gray-600 text-xs md:text-base lg:text-lg text-center">Seumur Hidup</p>
                        </div>
                        <div>
                            <div class="bg-gray-300 h-16 w-24 mx-auto mb-2 md:mb-3 lg:mb-5 rounded-lg"></div>
                            <p class="text-sm md:text-lg font-semibold lg:text-xl text-center">AFFILIATE</p>
                            <p class="text-gray-600 text-xs md:text-base lg:text-lg text-center">Program Kerjasama</p>
                        </div>
                        <div>
                            <div class="bg-gray-300 h-16 w-24 mx-auto mb-2 md:mb-3 lg:mb-5 rounded-lg"></div>
                            <p class="text-sm md:text-lg font-semibold lg:text-xl text-center">OFFLINE</p>
                            <p class="text-gray-600 text-xs md:text-base lg:text-lg text-center">Dapat di unduh</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-16 md:mb-20 lg:mb-24 xl:mb-32">
                <h3 class="font-semibold text-lg md:text-xl lg:text-2xl text-center mb-5">GOOGLE REVIEWS</h3>
                <div class="grid grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-x-5">
                    <div class="rounded-lg bg-gray-300 h-16 w-full"></div>
                    <div class="rounded-lg bg-gray-300 h-16 w-full"></div>
                    <div class="rounded-lg bg-gray-300 h-16 w-full"></div>
                </div>
            </section>

            <section class="mb-16 md:mb-20 lg:mb-24 xl:mb-32">
                <h3 class="font-semibold text-lg md:text-xl lg:text-2xl text-center mb-5">PERSIAPAN BERWIRAUSAHA JADI LEBIH OPTIMAL</h3>
                <p class="text-base md:text-lg lg:text-xl leading-8 text-center">Kursus Bakso Laris dibimbing langsung oleh Mentor berpengalaman yang telah teruji membuat berbagai macam produk bakso dan kemahirannya melakukan strategi dagang bakso.</p>  
            </section>

            <section class="mb-16 md:mb-20 lg:mb-24 xl:mb-32">
                <h3 class="font-semibold text-lg md:text-xl lg:text-2xl text-center mb-5">UNTUK GENERASI WIRAUSAHAWAN INSTAN</h3>
                <p class="text-base md:text-lg lg:text-xl text-center mb-5">Akusisi keahlian berwirausaha hanya dengan 3 cara mudah :</p>
                <div class="grid grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-x-auto">
                    <div>
                        <div class="rounded-full h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-48 xl:w-48 bg-gray-300 mx-auto mb-5"></div>
                        <p class="font-semibold text-base md:text-xl text-center">Memulai</p>
                    </div>
                    <div>
                        <div class="rounded-full h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-48 xl:w-48 bg-gray-300 mx-auto mb-5"></div>
                        <p class="font-semibold text-base md:text-xl text-center">Mempelajari</p>
                    </div>
                    <div>
                        <div class="rounded-full h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 xl:h-48 xl:w-48 bg-gray-300 mx-auto mb-5"></div>
                        <p class="font-semibold text-base md:text-xl text-center">Konsultasi</p>
                    </div>
                </div>
            </section>
        </main>

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

    computed: {
        mainHeight() {
            if( this.$vssWidth >= 1280 ) return 'h-72'
            else if( this.$vssWidth >= 1024 ) return 'h-64'
            else return 'h-64';
        }
    },
}
</script>

<style scoped>
    .h-72 {
        height: 25rem;
    }
</style>