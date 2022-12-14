import axios from "axios"
import React, { useEffect, useState } from "react";
import { getTotal } from "../util";
import Transaction from "./monthTransactions";
import Total from "./Total";
import styles from './styles.module.css'

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get-transactions').then(res => setTransactions(res.data.data)).catch(err => console.log(err))
  }, [])
  const grandTotal = getTotal(transactions.map(data => getTotal(data)))
  return <div>
    <div className="transaction-container">
      {
        transactions.map((data, idx) => <Transaction data={data} month={idx} key={idx} total={getTotal(data)} />)

      }
    </div>
    <Total total={grandTotal} text="Grand Total: " className={styles.grandTotal} />
  </div>
}

export default Transactions