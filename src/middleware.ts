import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)','/api/create'])

export default clerkMiddleware(async (auth, req) => {
    console.log("Request URL:", req.nextUrl.pathname); // Debugging log
    if (!isPublicRoute(req)) {
        console.log("Protecting route:", req.nextUrl.pathname); // Debugging log
        await auth.protect();
    } else {
        console.log("Public route accessed:", req.nextUrl.pathname); // Debugging log
    }
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]+\\.(?:html|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
