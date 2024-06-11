import { InputHTMLAttributes } from 'react';

export type SearchProps = {
  type?: 'expanded';
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
