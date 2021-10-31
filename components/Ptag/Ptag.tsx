import React from 'react'
import { PtagProps } from './Ptag.props'
import styles from './Ptag.module.css'

const classNames = require('classnames')

export const Ptag = ({ size = 'sm', children, className, ...props }: PtagProps): JSX.Element => {
  return (
    <p className={classNames(styles.p, {
      [styles.sm]: size === 'sm',
      [styles.md]: size === 'md',
      [styles.lg]: size === 'lg',
    })}
      {...props}
    >
      {children}
    </p>
  )
}