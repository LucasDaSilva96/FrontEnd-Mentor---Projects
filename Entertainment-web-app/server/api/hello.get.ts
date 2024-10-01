export default defineEventHandler(async (event) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        api: 'hello',
      });
    }, 5000);
  });
});
