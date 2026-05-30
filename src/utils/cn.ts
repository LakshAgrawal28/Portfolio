import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const springConfig = {
  type: "spring",
  stiffness: 260,
  damping: 20
};

export const bounceConfig = {
  type: "spring",
  stiffness: 400,
  damping: 10
};
