import React, { useState } from 'react';
import { Nav, NavItem, NavLink, Container } from 'reactstrap';
import classnames from 'classnames';

import TransactionLister from '../../components/TransactionLister'

const TransHistoryPage = () => {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  // const transactions = await fetch('/api/mytransactions')
  const transactions = [
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 10000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 10000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 10000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 10000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 100000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 10000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Lasse',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Bank',
        lastName: 'Skida'
      },
      amount: -10000,
      message: "Top up",
      date: Date.now(),
    },
    {
      sender: {
        firstName: 'Don',
        lastName: 'Bank'
      },
      receiver: {
        firstName: 'Lasse',
        lastName: 'Skida'
      },
      amount: 10000,
      message: "Top up",
      date: Date.now(),
    }
  ]

  let allSent = []
  let allReceived = []

  transactions.forEach(trans => {
    if (trans.amount > 0) {
      allReceived.push(trans)
    } else if (trans.amount < 0) {
      allSent.push(trans)
    }
  })
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
      { activeTab === '2' ? <TransactionLister transactions={allReceived} /> : null}
      { activeTab === '3' ? <TransactionLister transactions={allSent} /> : null}
    </Container>
  )
}

export default TransHistoryPage