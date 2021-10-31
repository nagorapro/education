import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'sm' | 'md',
  appearance?: 'transparent' | 'primary' | 'red' | 'grey' | 'green',
  href?: string,
  children: ReactNode
}