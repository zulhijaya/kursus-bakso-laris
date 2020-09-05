<template>
    <div class="text-gray-800 text-sm md:text-base">
        <section name="main" class="px-5 sm:px-10 lg:px-24 xl:px-64 py-16 md:py-20 main-bg">
            <div class="font-black text-center text-3xl md:text-4xl mb-16 text-white">
                <h1>Checkout Kelas</h1>
                <h1>Membuat Bakso Enak dan Lezat</h1>
            </div>
        </section>
        <section class="px-5 sm:px-10 md:px-16 xl:px-64 -mt-20 mb-32">
            <div class="block lg:flex">
                <div class="w-full lg:w-2/3 bg-white border border-gray-400 p-5 rounded-lg mr-6 mb-5 lg:mb-0">
                    <div class="block md:flex">
                        <img src="@/assets/img/meatballs.png" alt="" class="rounded-lg w-full md:w-1/3 h-48 sm:h-64 md:h-40 lg:h-32 xl:h-40 mb-5 md:mb-0 mr-4">
                        <div class="block md:flex md:flex-col md:justify-between w-full md:w-2/3">
                            <div class="mb-5">
                                <h5 class="font-semibold text-base md:text-lg mb-2">Membuat Bakso Enak dan Lezat</h5>
                                <p class="text-gray-600">Dibangun oleh Bapak Aal</p>
                            </div>
                            <div>
                                <button class="bg-orange-400 px-4 py-2 rounded tracking-wide">PREMIUM</button>
                            </div>
                        </div>
                    </div>
                    <hr class="my-5 border-t border-gray-400">
                    <p class="font-semibold mb-4">Berikan Akses Kelas Kepada :</p>
                    <div class="relative mb-4">
                        <input type="text" class="bg-gray-200 rounded-md border border-gray-400 px-16 py-3 w-full placeholder-gray-800" disabled placeholder="ridwan@gmail.com">
                        <div class="absolute pl-5 inset-y-0 left-0 text-purple-lighter flex items-center">
                            <i class="fas fa-envelope text-xl text-blue-700"></i>
                        </div>
                    </div>
                    <p class="text-gray-600">Kelas akan diberikan kepada Muhammad Ridwan</p>
                </div>
                <div class="w-full lg:w-1/3 bg-white border border-gray-400 rounded-lg">
                    <div class="p-5 mb-2">
                        <h5 class="font-semibold text-base mb-4">Pembayaran</h5>
                        <div class="flex items-center justify-between">
                            <p>Harga Kelas</p>
                            <p class="text-base font-semibold">Rp 290.000</p>
                        </div>
                        <hr class="my-4 border-t border-gray-400">
                        <h5 class="font-semibold text-base mb-4">Transfer Pembayaran :</h5>
                        <img src="@/assets/img/bni.png" alt="Bank" class="w-24 mb-3">
                        <div class="flex items-center justify-between mb-3">
                            <p>Bank</p>
                            <p class="font-semibold text-base">BNI</p>
                        </div>
                        <div class="flex items-center justify-between mb-3">
                            <p>No. Rekening</p>
                            <p class="font-semibold text-base">1234567890</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <p>Penerima</p>
                            <p class="font-semibold text-base">Muh Ridwan</p>
                        </div>
                        <hr class="my-4 border-t border-gray-400">
                        <h5 class="font-semibold text-base mb-4">Konfirmasi Pembayaran :</h5>
                        <div class="flex items-center mb-4">
                            <i class="fab fa-whatsapp-square text-4xl text-green-500 mr-3"></i>
                            <p>Whatsapp</p>
                        </div>
                        <div class="flex items-center justify-between mb-4">
                            <p>Ridwan</p>
                            <p class="font-semibold text-base">6282238415331</p>
                        </div>
                    </div>
                    <button class="bg-blue-600 hover:bg-blue-700 font-semibold tracking-wide py-5 w-full rounded-b-lg text-white">KONFIRMASI PEMBAYARAN</button>
                </div>
            </div>
        </section>

        <section name="google-review" class="px-5 sm:px-10 md:px-16 xl:px-64 mb-20">
            <google-review></google-review>
        </section>
    </div>
</template>

<script>
import GoogleReview from '@/components/GoogleReview'

export default {
    components: {
        GoogleReview,
    },    
}
</script>