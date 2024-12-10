import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Daftar public routes
const isPublicRoute = createRouteMatcher([
  '/',
]);

export default clerkMiddleware(async (auth, request) => {
  // Jika rute adalah public route, izinkan akses tanpa proteksi
  if (isPublicRoute(request)) {
    return;
  }

  // Proteksi untuk semua rute lain
  await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals dan file statis
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Jalankan middleware untuk API routes
    '/(api|trpc)(.*)',
  ],
};
