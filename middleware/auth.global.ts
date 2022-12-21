const ALLOWED_ROUTES = [/^\/login\/?$/];

export default defineNuxtRouteMiddleware(async (to) => {
  if (ALLOWED_ROUTES.some((route) => route.test(to.fullPath))) {
    return;
  }

  if(!process.client) return;
  const isAuthenticated = localStorage.getItem('user');

  if (!isAuthenticated) {
    return navigateTo("/login");
  }
});