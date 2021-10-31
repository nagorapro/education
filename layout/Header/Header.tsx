import React from 'react'
import { HeaderProps } from './Header.props'
import styles from './Header.module.css'
import classNames from 'classnames'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  return (
    <header className={classNames(className, styles.header)} {...props}>Header</header>
  )
}
