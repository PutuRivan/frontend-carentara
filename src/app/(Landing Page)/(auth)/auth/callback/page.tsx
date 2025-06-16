import CallbackClient from '@/components/callback-client';
import { Suspense } from 'react';

// Anda bisa definisikan spinner di sini sebagai fallback
const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-neutral-900"></div>
    </div>
);

export default function AuthCallbackPage() {
  return (
    // Suspense akan langsung menampilkan 'fallback' saat halaman pertama kali dirender.
    // Setelah itu, ia akan merender 'CallbackClientComponent' di sisi klien.
    <Suspense fallback={<LoadingSpinner />}>
      <CallbackClient />
    </Suspense>
  );
}