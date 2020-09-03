<template>
    <div class="flex justify-center text-gray-800">
        <div class="form-auth-card">
            <h1 class="form-auth-title">DAFTAR</h1>
            <p class="text-center text-gray-600">
                Atau sudah punya akun? 
                <span class="text-blue-500 font-semibold hover:text-blue-600">
                    <router-link :to="{ name: 'masuk' }">Masuk</router-link>
                </span>
            </p>
            <form action="#" class="mt-5">
                <div class="mb-4">
                    <label for="nama-lengkap" class="inline-block mb-1">Nama Lengkap :</label>
                    <input type="text" name="nama-lengkap" id="nama-lengkap" class="form-input" placeholder="masukkan name lengkap">
                </div>
                <div class="mb-4">
                    <label for="email" class="inline-block mb-1">Email :</label>
                    <input type="text" name="nama-lengkap" id="nama-lengkap" class="form-input" placeholder="masukkan email">
                </div>
                <div class="mb-4">
                    <label for="password" class="inline-block mb-1">Password :</label>
                    <input type="text" name="password" id="password" class="form-input" placeholder="masukkan password">
                </div>
                <div class="mb-5">
                    <label for="password-confirmation" class="inline-block mb-1">Konfirmasi Password :</label>
                    <input type="text" name="password-confirmation" id="password-confirmation" class="form-input" placeholder="masukkan konfirmasi password">
                </div>
                <button type="submit" class="form-auth-button bg-kbl">
                    Daftar
                </button>
            </form>
        </div>
    </div>
</template>