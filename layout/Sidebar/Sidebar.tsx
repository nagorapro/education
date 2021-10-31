import React from 'react'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'
import classNames from 'classnames'

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <aside className={classNames(className, styles.sidebar)} {...props}>Sidebar</aside>
  )
}