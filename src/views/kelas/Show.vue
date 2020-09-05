<template>
    <div class="text-gray-800 mb-32" style="scroll-behavior: smooth;"> 
        <section class="main-bg px-5 lg:px-48 xl:px-64 pt-10 md:pt-16 pb-32 md:pb-24 xl:pb-32">
            <h1 class="container-title text-center">Kelas Online Membuat Bakso Lezat dan Enak</h1>
            <p class="container-subtitle">Dibangun oleh Bapak Aal</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-5 md:mb-2 xl:px-32 text-white">
                <div class="text-center">
                    <p class="text-base md:text-lg mb-1 text-center">PESERTA</p>
                    <p class="text-2xl md:text-3xl text-center">1050</p>
                </div>
                <div class="text-center">
                    <p class="text-base md:text-lg mb-1 text-center">TINGKAT</p>
                    <p class="text-2xl md:text-3xl text-center">PEMULA</p>
                </div>
                <div class="text-center">
                    <p class="text-base md:text-lg mb-3">KONSULTASI</p>
                    <i class="fas fa-check-circle text-2xl"></i>
                </div>
                <div class="text-center">
                    <p class="text-base md:text-lg mb-3">SERTIFIKAT</p>
                    <i class="fas fa-ban text-2xl"></i>
                </div>
            </div>
        </section>
        <section class="px-5 sm:px-20 md:px-10 lg:px-24 xl:px-64 -mt-20">
            <div class="block lg:flex mb-12 text-sm xl:text-base">
                <div class="w-full xl:w-3/4 lg:w-2/3 bg-white rounded-lg p-3 md:p-4 mb-5 border border-gray-400 mr-3 lg:mr-5 xl:mr-8">
                    <iframe class="w-full rounded-lg" :class="iframeWidth" src="https://www.youtube.com/embed/k8ZNeZQhSYY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="w-full xl:w-1/4 lg:w-1/3 bg-white border border-gray-400 rounded-lg h-full">
                    <div class="p-3 md:p-4">
                        <h4 class="font-semibold mb-3 text-base">Materi Preview</h4>
                        <ul>
                            <li class="rounded px-4 py-3 mb-1">Pengenalan Kelas</li>
                            <li class="rounded px-4 py-3 mb-1">Membuat Project</li>
                            <li class="rounded px-4 py-3 mb-1">Bahan dan Takaran</li>
                            <li class="rounded px-4 py-3 mb-1">Bahan Pelengkap</li>
                            <li class="flex items-center justify-between bg-gray-200 text-gray-500 px-4 py-3">
                                <p>30 Video Lainnya</p>
                                <i class="fas fa-lock"></i>
                            </li>
                        </ul>
                    </div>
                    <a href="#price-section" class="ikuti-kelas text-white text-sm md:text-base">
                        <button @click="smoothScroll($event)" class="w-full py-5 rounded-b-md bg-blue-600 hover:bg-blue-700">IKUTI KELAS</button>
                    </a>
                </div>
            </div>
            <div class="block md:flex mb-24 text-sm md:text-base">
                <div class="w-full md:3/5 lg:w-2/3 xl:w-3/4 mb-12 md:mr-3 lg:mr-5 xl:mr-8">  
                    <div class="mb-12">
                        <h3 class="font-semibold text-2xl mb-2">Tentang Kelas</h3>
                        <p class="leading-8">Membuat Bakso lezat, enak serta di gemari banyak orang adalah kemapuan dasar yang harus di miliki bisnis owner ataupun pedagang bakso. Mulai dari menentukan varian bakso, persiapan bahan dan takaran, bumbu rahasia bakso, peralatan yang di butuhkan, proses dan teknik memasak bakso, bahan pelengkap bakso, kuah bakso,dll. Kemampuan membuat bakso ini akan di gunakan untuk berdagang bakso ataupun membangun cabang outlet (Corporate Business).</p>
                    </div>
                    <div class="mb-12">
                        <h3 class="font-semibold text-2xl mb-2">Screenshots</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pr-16 sm:pr-0">
                            <div class="bg-gray-200 rounded-md p-2 cursor-pointer">
                                <img @click="showModal('bakso1.png')" src="@/assets/img/bakso1.png" class="w-full h-24 xl:h-40 rounded-md hover:opacity-50">
                            </div>
                            <div class="bg-gray-200 rounded-md p-2 cursor-pointer">
                                <img @click="showModal('bakso2.png')" src="@/assets/img/bakso2.png" class="w-full h-24 xl:h-40 rounded-md hover:opacity-50">
                            </div>
                            <div class="bg-gray-200 rounded-md p-2 cursor-pointer">
                                <img @click="showModal('bakso1.png')" src="@/assets/img/bakso1.png" class="w-full h-24 xl:h-40 rounded-md hover:opacity-50">
                            </div>
                            <div class="bg-gray-200 rounded-md p-2 cursor-pointer">
                                <img @click="showModal('bakso2.png')" src="@/assets/img/bakso2.png" class="w-full h-24 xl:h-40 rounded-md hover:opacity-50">
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 class="font-semibold text-2xl mb-1">Gabung dan Pelajari</h3>
                        <p class="mb-4">Materi kelas yang akan kita pelajari bersama</p>
                        <ul>
                            <li class="px-5 py-3 rounded-md border border-gray-300 mb-2">Lorem, ipsum dolor.</li>
                            <li class="px-5 py-3 rounded-md border border-gray-300 mb-2">Lorem, ipsum dolor.</li>
                            <li class="px-5 py-3 rounded-md border border-gray-300 mb-2">Lorem, ipsum dolor.</li>
                        </ul>
                    </div>
                </div>
                <div class="w-full md:w-2/5 lg:w-1/3 xl:w-1/4 h-full">
                    <h3 class="font-semibold text-2xl mb-2">Sertifikat</h3>
                    <img @click="showModal('sertifikat.png')" src="@/assets/img/sertifikat.png" alt="Sertifikat" class="w-full h-full rounded-md cursor-pointer hover:opacity-50">
                </div>
            </div>
        </section>

        <section class="flex flex-col items-center px-16 sm:px-48 md:px-64 xl:px-64 text-base md:text-lg bg-gray-200 py-10 mb-24">
            <h3 class="font-semibold text-3xl mb-2">Mentor kelas</h3>
            <p class="mb-8">Mentor Kuliner dan Bisnis</p>
            <div class="flex flex-col items-center w-full lg:w-1/2 xl:w-1/4 lg:mx-auto py-5 bg-white rounded-lg border border-gray-300">
                <img src="@/assets/img/avatar.png" alt="Avatar" class="rounded-full h-24 w-24 mb-3">
                <p class="font-semibold text-center mb-1">Bapak Aal</p>
                <p class="text-center text-sm md:text-base">Owner Bakso Ngangenin</p>
            </div>
        </section>

        <section class="px-5 sm:px-20 lg:px-24 xl:px-64 mb-24 xl:mb-32">
            <alasan-kursus></alasan-kursus>
        </section>
        
        <section id="price-section" class="px-5 sm:px-20 md:px-32 lg:px-24 xl:px-64 text-base bg-gray-200 py-10 mb-48">
            <h3 class="section-title">Investasi Masa Depan</h3>
            <p class="section-subtitle -mt-2">Langkah awal yang tepat untuk menuju kesuksesan</p>
            <div class="w-full md:w-2/3 lg:w-2/5 xl:w-1/3 md:mx-auto p-6 bg-white rounded-lg -mb-32 -mt-5 md:mt-0 border border-gray-400">
                <h4 class="text-lg text-center mb-2">Membuat Bakso Enak dan Lezat</h4>
                <h3 class="text-4xl text-green-500 text-center">Rp 250.000</h3>
                <p class="text-sm text-gray-500 text-center">Sekali bayar untuk selamanya</p>
                <hr class="border-t border-gray-400 my-5">
                <ul class="grid grid-cols-1 gap-y-4">
                    <li class="flex items-center justify-between">
                        <p>Akses Seumur Hidup</p>
                        <i class="fas fa-check-circle text-green-400 text-2xl"></i>
                    </li>
                    <li class="flex items-center justify-between">
                        <p>Bahan Belajar</p>
                        <i class="fas fa-check-circle text-green-400 text-2xl"></i>
                    </li>
                    <li class="flex items-center justify-between">
                        <p>Download Tools</p>
                        <i class="fas fa-check-circle text-green-400 text-2xl"></i>
                    </li>
                    <li class="flex items-center justify-between">
                        <p>Belajar Mode Offline</p>
                        <i class="fas fa-check-circle text-green-400 text-2xl"></i>
                    </li>
                    <li class="flex items-center justify-between">
                        <p>Group Konsultasi</p>
                        <i class="fas fa-check-circle text-green-400 text-2xl"></i>
                    </li>
                    <li class="flex items-center justify-between">
                        <p>Sertifikat Kelulusan</p>
                        <i class="fas fa-check-circle text-green-400 text-2xl"></i>
                    </li>
                    <li class="flex items-center justify-between">
                        <p>Update Tutorial Terbaru</p>
                        <i class="fas fa-check-circle text-green-400 text-2xl"></i>
                    </li>
                    <li class="flex items-center justify-between">
                        <p>Franchise</p>
                        <i class="fas fa-check-circle text-green-400 text-2xl"></i>
                    </li>
                </ul>
                <hr class="border-t border-gray-400 my-5">
                <a   
                    :href="$router.resolve({ name: 'checkout', params: { 
                        kelasSlug: 'membuat-bakso-enak-dan-lezat' 
                    } }).href"
                >
                    <button class="w-full bg-blue-600 hover:bg-blue-700 text-gray-100 py-2 rounded">BELI SEKARANG</button>
                </a>
            </div>
        </section>
        <modal :toggleModal="toggleModal" :image="image" @close-modal="toggleModal = false"></modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal'
import AlasanKursus from '@/components/AlasanKursus'

export default {
    components: {
        Modal, AlasanKursus
    },

    data() {
        return {
            toggleModal: false,
            image: ''
        }
    },

    computed: {
        iframeWidth() {
            if( this.$vssWidth >= 1280 ) return 'h-1280'
            else if( this.$vssWidth >= 1024 ) return 'h-1024'
            else if( this.$vssWidth >= 768 ) return 'h-768'
            else if( this.$vssWidth >= 640 ) return 'h-64'
            else return 'h-48'
        }
    },

    methods: {
        showModal(image) {
            this.image = image;
            this.toggleModal = true;
        },

        smoothScroll(e) {
            e.preventDefault();
            const href = e.target.parentNode.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;
            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    },
}
</script>

<style scoped>
    .h-1280 {
        height: 30rem;
    }
    .h-1024 {
        height: 20rem;
    }
    .h-768 {
        height: 24rem;
    }
</style>