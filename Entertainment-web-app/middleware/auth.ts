export default defineNuxtRouteMiddleware((to, from) => {
  const { value } = useDirectusUser();
  if (!value) {
    return navigateTo('/login');
  }
});
