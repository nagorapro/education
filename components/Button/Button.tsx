import React from 'react'
import styles from './Button.module.css'
import { ButtonProps } from './Button.props'
import ArrowIcon from './arrow-right.svg'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames')

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={classNames(styles.btn, className, {
      [styles.primary]: appearance === 'primary',
      [styles.transparent]: appearance === 'transparent',
    })}
      {...props}
    >
      {children}
      {arrow != 'none' && <span className={classNames(styles.arrow, {
        [styles.right]: arrow === 'right',
        [styles.down]: arrow === 'down',
      })}><ArrowIcon /></span>}
    </button>
  )
}