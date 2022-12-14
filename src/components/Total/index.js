import React from "react"
import styles from '../styles.module.css'

const Total = ({ total, text = "Total: ", className = '' }) => (
  <div className={[styles.total, className].join(' ')}>
    <span>{text}</span>
    {total}
  </div>
)

export default React.memo(Total)