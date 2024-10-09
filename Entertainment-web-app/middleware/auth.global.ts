export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.includes('/login') || to.path.includes('/signUp')) {
    return;
  }
  const user = useDirectusUser();

  if (!user.value) {
    return navigateTo('/login');
  }

  return;
});
