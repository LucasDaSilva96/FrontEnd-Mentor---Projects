import { z } from 'zod';

export const signUpSchema = z
  .object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters'),
    passwordConfirmation: z.string().min(8, 'Must be at least 8 characters'),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  });

export type SignUpSchema = z.output<typeof signUpSchema>;
