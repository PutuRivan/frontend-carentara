"use client";

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { setAccessTokenInCookie } from '@/libs/utils';

// Komponen loading sederhana untuk User Experience yang lebih baik
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-neutral-900"></div>
  </div>
);

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 1. Ambil token dari query parameter URL
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    // Jika ada error dari backend
    if (error) {
      console.error("Login gagal:", error);
      // Arahkan kembali ke halaman login dengan pesan error
      router.push('/login?error=Gagal melakukan autentikasi dengan Google.');
      return;
    }

    // Jika token berhasil didapatkan
    if (token) {
      // 2. Simpan token di localStorage agar bisa diakses di seluruh aplikasi
      localStorage.setItem('authToken', token);
      setAccessTokenInCookie(token);
      // (Opsional) Lakukan hal lain, seperti mengambil data user untuk disimpan di state global (Zustand/Redux)

      // 3. Arahkan pengguna ke halaman utama setelah login berhasil
      // Ganti '/dashboard' dengan halaman tujuan Anda (misal: '/', '/profile')
      router.push('/user');
    } else {
      // Jika tidak ada token sama sekali, kemungkinan ada masalah
      console.error("Tidak ada token yang diterima.");
      router.push('/login?error=Terjadi kesalahan, token tidak ditemukan.');
    }

    // Dependency array memastikan useEffect hanya berjalan sekali saat komponen dimuat
    // atau saat router/searchParams berubah.
  }, [router, searchParams]);

  // Sambil logika di atas berjalan, tampilkan pesan atau spinner
  return (
    <div className="text-center p-8">
      <h1 className="text-xl font-semibold mb-4">Mengautentikasi...</h1>
      <p className="text-neutral-600">Mohon tunggu sebentar, kami sedang memproses login Anda.</p>
      <LoadingSpinner />
    </div>
  );
}