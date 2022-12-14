import React from "react"
import PropTypes from 'prop-types'
import styles from '../styles.module.css'
import Total from "../Total"

const Transaction = ({ data, month }) => {
  return <div className={styles.container}>
    <div className={styles.month}>
      <span>Month: </span>   <span>{month + 1}</span>
    </div>
    <div className={styles.dataRow}>
      {data.map((num, idx) => <div key={idx}>{num}</div>)}
    </div>

    <Total total={data.reduce((a, b) => a + b, 0)} />
  </div>
}

Transaction.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  month: PropTypes.number.isRequired
}

export default Transaction