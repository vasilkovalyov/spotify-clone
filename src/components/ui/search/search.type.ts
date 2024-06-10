import { InputHTMLAttributes } from 'react';

export type SearchProps = {
  type?: 'collapsed';
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
