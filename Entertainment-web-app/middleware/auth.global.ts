export default defineNuxtRouteMiddleware((to, from) => {
  const { value } = useDirectusUser();

  if (to.path.includes('signUp')) return;

  if (!value && !to.path.includes('login')) {
    return navigateTo('/login');
  }
});
