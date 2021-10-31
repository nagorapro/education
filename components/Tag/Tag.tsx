import React from 'react'
import { TagProps } from './Tag.props'
import styles from './Tag.module.css'

const classNames = require('classnames')

export const Tag = ({size = 'sm', appearance = 'transparent', href, children, className, ...props}: TagProps): JSX.Element => {
  return (
    <div className={classNames(styles.tag, {
      [styles.sm]: size === 'sm',
      [styles.md]: size === 'md',
      [styles.transparent]: appearance === 'transparent',
      [styles.primary]: appearance === 'primary',
      [styles.red]: appearance === 'red',
      [styles.grey]: appearance === 'grey',
      [styles.green]: appearance === 'green',
    })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  )
}

/*
size?: 'sm' | 'md',
appearance?: 'transparent' | 'primary' | 'red' | 'grey' | 'green',
href?: string,
children: ReactNode
*/