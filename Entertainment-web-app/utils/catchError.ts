export const catchError = (error: unknown) => {
  console.log('catchError', error);
  if ((error as any).status === 401) {
    console.error(error);
    return 'Invalid credentials. Please try again.';
  } else if (error instanceof Error) {
    console.error(error);
    return error.message;
  }
  console.error(error);
  return 'An error occurred. See console for details.';
};
