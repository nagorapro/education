import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: 'primary' | 'transparent',
  arrow?: 'right' | 'down' | 'none',
  children: ReactNode
}