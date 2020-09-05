<template>
    <div class="flex flex-col-reverse lg:flex-row text-gray-800 text-sm md:text-base">
        <div class="w-full lg:w-1/4 xl:w-1/5 px-5 sm:px-16 lg:px-0 h-full lg:h-screen overflow-y-auto lg:border-r lg:border-b lg:border-gray-300">
            <div class="border border-gray-400 rounded-md pt-5 lg:pt-10 mb-8 lg:mb-0 overflow-y-auto h-screen md:h-full">
                <router-link :to="{ name: 'user.kelas' }" class="flex items-center px-5 md:px-8 lg:px-5 mb-8 cursor-pointer hover:text-blue-600">
                    <i class="fas fa-arrow-left text-xl font-normal mr-4"></i> 
                    <p>Kembali ke Kelas</p>
                </router-link>
                <div>
                    <div class="px-5 mb-8">
                        <h5 class="font-semibold mb-2">Membuat Bakso Enak dan Lezat</h5>
                        <p class="text-xs md:text-sm">24 video siap membantu anda berkembang</p>
                    </div>
                    <div class="mb-8">
                        <h5 class="font-semibold mb-2 px-5 md:px-8 lg:px-5">Persiapan</h5>
                        <div class="group flex items-center bg-white hover:bg-blue-100 border-b border-gray-300 px-5 md:px-8 lg:px-5 py-5">
                            <i class="fas fa-play-circle group-hover:text-blue-600 text-3xl mr-4"></i> 
                            <p>Trailer Kelas</p>
                        </div>
                    </div>
                    <div class="">
                        <h5 class="font-semibold mb-2 px-5 md:px-8 lg:px-5">Tahap Awal</h5>
                        <ul v-for="n in 2" :key="n">
                            <li class="group flex items-center bg-white hover:bg-blue-100 border-b border-gray-300 px-5 md:px-8 lg:px-5 py-5">
                                <i class="fas fa-play-circle group-hover:text-blue-600 text-3xl mr-4"></i> 
                                <p>1. Persiapan Bahan</p>
                            </li>
                            <li class="group flex items-center bg-white hover:bg-blue-100 border-b border-gray-300 px-5 md:px-8 lg:px-5 py-5">
                                <i class="fas fa-play-circle group-hover:text-blue-600 text-3xl mr-4"></i> 
                                <p>2. Persiapan Alat</p>
                            </li>
                            <li class="group flex items-center bg-white hover:bg-blue-100 border-b border-gray-300 px-5 md:px-8 lg:px-5 py-5">
                                <i class="fas fa-play-circle group-hover:text-blue-600 text-3xl mr-4"></i> 
                                <p>3. Proses dan Teknik</p>
                            </li>
                            <li class="group flex items-center bg-white hover:bg-blue-100 border-b border-gray-300 px-5 md:px-8 lg:px-5 py-5">
                                <i class="fas fa-play-circle group-hover:text-blue-600 text-3xl mr-4"></i> 
                                <p>4. Membuat Kuah Bakso</p>
                            </li>
                            <li class="group flex items-center bg-white hover:bg-blue-100 px-5 md:px-8 lg:px-5 py-5">
                                <i class="fas fa-play-circle group-hover:text-blue-600 text-3xl mr-4"></i> 
                                <p>5. Bahan Pelengkap</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-3/4 xl:w-4/5 px-2 sm:px-16 lg:px-5 xl:px-24 py-5 md:py-10">
            <h3 class="font-black mb-3 text-base md:text-lg px-2 sm:px-0">1. Persiapan Bahan dan Alat</h3>
            <iframe 
                class="w-full rounded-md" 
                :class="iframeHeight"
                src="https://www.youtube.com/embed/k8ZNeZQhSYY" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            >
            </iframe>
            <!-- <h3 class="font-black mb-5 text-center p-5 md:text-2xl">Persiapan Bahan dan Alat</h3> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            video: '',
            judul: ''
        }
    },

    computed: {
        iframeHeight() {
            if( this.$vssWidth >= 1280 ) return 'h-1280' 
            else if( this.$vssWidth >= 1024 ) return 'h-1024' 
            else if( this.$vssWidth >= 768 ) return 'h-768' 
            else if( this.$vssWidth >= 640 ) return 'h-64' 
            else return 'h-48' 
        }
    },

    mounted () {
        this.video = this.$route.params.videoSlug;
        this.judul = this.$route.params.judulSlug;
    },
}
</script>

<style scoped>
    .h-768 {
        height: 22rem;
    }
    .h-1024 {
        height: 28rem;
    }
    .h-1280 {
        height: 40rem;
    }
</style>