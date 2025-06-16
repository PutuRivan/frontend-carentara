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

export default function CallbackClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    if (error) {
      console.error("Login gagal:", error);
      router.push('/login?error=Gagal melakukan autentikasi dengan Google.');
      return;
    }

    if (token) {
      localStorage.setItem('authToken', token);
      setAccessTokenInCookie(token);
      router.push('/user'); 
    } else {
      console.error("Tidak ada token yang diterima.");
      router.push('/login?error=Terjadi kesalahan, token tidak ditemukan.');
    }
  }, [router, searchParams]);

  // Tampilan ini akan muncul sesaat setelah fallback dari Suspense
  return (
    <div className="text-center p-8">
      <h1 className="text-xl font-semibold mb-4">Mengautentikasi...</h1>
      <p className="text-neutral-600">Mohon tunggu sebentar, kami sedang memproses login Anda.</p>
      <LoadingSpinner />
    </div>
  );
}