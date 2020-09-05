<template>
    <div class="flex justify-center text-gray-800">
        <div class="form-auth-card">
            <h1 class="form-auth-title">Masuk</h1>
            <p class="text-center text-gray-600">
                Atau belum punya akun? 
                <span class="text-blue-500 hover:text-blue-600">
                    <router-link :to="{ name: 'daftar' }">Daftar dulu</router-link>
                </span>
            </p>
            <form action="#" class="mt-10">
                <div class="mb-4">
                    <label for="email" class="inline-block mb-1">Email :</label>
                    <input type="text" name="email" id="email" class="form-input" placeholder="masukkan email">
                </div>
                <div>
                    <label for="password" class="inline-block mb-1">Password :</label>
                    <input type="text" name="password" id="password" class="form-input" placeholder="masukkan password">
                </div>
                <p class="text-blue-500 text-right py-4 hover:text-blue-600 cursor-pointer">Lupa password?</p>
                <button type="submit" class="form-auth-button bg-kbl">
                    Masuk Akun Saya
                </button>
            </form>
        </div>
    </div>
    <!-- <div class="w-full px-64 my-10" style="font-family: 'Rubik'">
        <div class="bg-blue-400 border border-gray-400 px-8 py-4" style="width: 550px; height: 780px;">
            <h1 class="text-5xl text-center mb-5">ES BOBA 77</h1>
            <div class="grid grid-cols-3 gap-x-10 gap-y-8 tracking-tighter">
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/avocado.jpeg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Avocado</div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/cappucino.jpeg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Cappucino</div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/coffee-caraeml.jpg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Coffee <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/coklat.jpg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Chocolate Original <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/coklat-hazelnut.jpeg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Chocolate Hazelnut <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/durian.jpeg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Durian <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/green-tea.jpeg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Green Tea <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/melon.jpeg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Melon <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/milo.jpeg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Milo <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/mocacino.jpeg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Moccacino <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/oreo.jpg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Oreo <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/red-velvet.jpg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Red Velvet <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/stawberry.jpg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Strawberry <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/taro.jpeg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Taro <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/thai-tea.jpg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Thai Tea <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/tiramisu.jpg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Tiramisu <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
                <div class="flex w-16 h-20">
                    <img src="@/assets/boba/vanilla.jpeg" class="rounded-sm mr-2">
                    <div class="flex flex-wrap content-between">
                        <div class="font-black">Vanilla <i class="mdi mdi-credit-card-marker-outline:"></i></div> 
                        <div class="text-3xl"><span class="font-semibold">15</span>K</div> 
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>