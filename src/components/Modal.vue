<template>
    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
        <div @click="$emit('close-modal')" v-show="toggleModal" class="fixed top-0 left-0 w-full h-full flex items-center px-2 sm:py-10 sm:px-24 md:px-5 md:py-64 lg:px-32 lg:py-32 xl:py-20 xl:px-0" style="background-color: rgba(0, 0, 0, .65);">
            <div class="bg-white rounded-lg mx-auto w-full xl:w-7/12 h-56 sm:h-full p-1" @click.stop>
                <img :src="getImage" class="rounded-lg w-full h-full">
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        toggleModal: {
            type: Boolean,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },

    computed: {
        getImage() {
            return this.image ? require('@/assets/img/' + this.image) : ''
        }
    },
}
</script>