import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink, Container } from 'reactstrap';
import classnames from 'classnames';

import { usePooff } from '../../context'

import TransactionLister from '../../components/TransactionLister'

const TransHistoryPage = () => {
  const state = usePooff()
  const [activeTab, setActiveTab] = useState('1');

  const [transactions, setTransactions] = useState([]);
  const [receivedTransaction, setReceivedTransactions] = useState([]);
  const [sentTransaction, setSentTransactions] = useState([]);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  useEffect(() => {
    function getTransaction() {
      let allSent = []
      let allReceived = []
      /* const transactionsRaw = await fetch('/api/mytransactions')
      const transactions = await transactionsRaw.json() */
      const { transactions } = state.loggedIn
      transactions.forEach(trans => {
        if (trans.amount > 0) {
          allReceived.push(trans)
        } else if (trans.amount < 0) {
          allSent.push(trans)
        }
      })
      setTransactions(transactions)
      setReceivedTransactions(allReceived);
      setSentTransactions(allSent)
    }
    getTransaction();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Container className="trans-history">
      <h2 className="page-title">Transaktioner</h2>
      <Nav tabs className="tab-select">
        <NavItem className="items">
          <NavLink
            className={classnames('nav-link', { active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Alla
          </NavLink>
        </NavItem>
        <NavItem className="items">
          <NavLink
            className={classnames('nav-link', { active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Mottagna
          </NavLink>
        </NavItem>
        <NavItem className="items">
          <NavLink
            className={classnames('nav-link', { active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Skickade
          </NavLink>
        </NavItem>
      </Nav>
      { activeTab === '1' ? <TransactionLister transactions={transactions} /> : null}
      { activeTab === '2' ? <TransactionLister transactions={receivedTransaction} /> : null}
      { activeTab === '3' ? <TransactionLister transactions={sentTransaction} /> : null}
    </Container>
  )
}

export default TransHistoryPage