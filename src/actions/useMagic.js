import { usePooff } from '../context'

const useMagic = () => {
  const state = usePooff()

  const getLoggedIn = async () => {
    const loggedInRaw = await fetch("/api/login")
    const message = await loggedInRaw.json()
    if (!message.status) {
      const fetchedUser = await fetch("/api/myuser")
      const user = await fetchedUser.json()
      const fetchedTransactions = await fetch('/api/mytransactions')
      const transactions = await fetchedTransactions.json()
      user.transactions = transactions
      const fetchedBalance = await fetch('/api/mytransactions/balance')
      const balanceObj = await fetchedBalance.json()
      user.balance = balanceObj.balance
      state.setLoggedIn(user)

      if (user.role === "parent") {
        const fetchedChildren = await fetch("/api/mychildren")
        const children = await fetchedChildren.json()
        state.setChildren(children)
      }
    }
  }

  return [getLoggedIn]
}

export default useMagic