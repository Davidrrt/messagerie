export default defineNuxtRouteMiddleware(async (to, from) => {
    if(!process.client) return;
    const isAuthenticated = localStorage.getItem('user');
    if (!isAuthenticated && to.path === "/" && !to?.query?.code) {
        return 'login';
    }

    if (isAuthenticated) {
        return;
    }
});