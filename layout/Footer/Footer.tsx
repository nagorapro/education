import React from 'react'
import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import { format } from 'date-fns'
import classNames from 'classnames'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={classNames(className, styles.footer)} {...props}>
      <div>
        Education © 2020 - {format(new Date(), 'yyyy')} Все права защищены
      </div>
      <a href="#" target="_blank">Пользовательское соглашение</a>
      <a href="#" target="_blank">Политика конфиденциальности</a>
    </footer>
  )
}

// Пользовательское соглашение
// Политика конфиденциальности