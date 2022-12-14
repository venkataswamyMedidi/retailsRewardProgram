const MAX_TRANSACTIONS = 1000
const MAX_TRANSACTION_VALUE = 1000;

const randomNumber = (limit = MAX_TRANSACTION_VALUE) => Math.random() * limit & limit

const generateTransactions = () => [...new Array(randomNumber(MAX_TRANSACTIONS))].map(i => randomNumber())

const transactions = () => {
  return {
    totalMonths: 3,
    data: [
      generateTransactions(),
      generateTransactions(),
      generateTransactions()
    ]
  }
}

export default transactions
