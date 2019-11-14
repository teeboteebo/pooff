import React, { useState } from 'react';
import { ChevronRight } from 'react-feather'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const data = [{
    sender: {
      id:1,
      firstName: 'Don',
      lastName: 'Bank'
    },
    receiver: {
      id: 2,
      firstName: 'Lasse',
      lastName: 'Skida'
    },
    amount: 100,
    message: "Top up",
    date: Date.now(),
  },
  {
    sender: {
      id: 1,
      firstName: 'Don',
      lastName: 'Bank'
    },
    receiver: {
      id: 2,
      firstName: 'Lasse',
      lastName: 'Skida'
    },
    amount: 100,
    message: "Top up",
    date: Date.now(),
  },
  {
    sender: {
      id:1,
      firstName: 'Don',
      lastName: 'Bank'
    },
    receiver: {
      id: 2,
      firstName: 'Lasse',
      lastName: 'Skida'
    },
    amount: 100,
    message: "Top up",
    date: Date.now(),
  },
  {
    sender: {
      id: 1,
      firstName: 'Don',
      lastName: 'Bank'
    },
    receiver: {
      id: 2,
      firstName: 'Lasse',
      lastName: 'Skida'
    },
    amount: 100,
    message: "Top up",
    date: Date.now(),
  },
  {
    sender: {
      id: 1,
      firstName: 'Don',
      lastName: 'Bank'
    },
    receiver: {
      id: 2,
      firstName: 'Lasse',
      lastName: 'Skida'
    },
    amount: 100,
    message: "Top up",
    date: Date.now(),
  },
  {
    sender: {
      id: 1,
      firstName: 'Don',
      lastName: 'Bank'
    },
    receiver: {
      id: 2,
      firstName: 'Lasse',
      lastName: 'Skida'
    },
    amount: 100,
    message: "Top up",
    date: Date.now(),
  },
  {
    sender: {
      id: 1,
      firstName: 'Arne',
      lastName: 'Anka'
    },
    receiver: {
      id: 2,
      firstName: 'Lasse',
      lastName: 'Skida'
    },
    amount: 100,
    message: "Top up",
    date: Date.now(),
  },
  {
    sender: {
      id: 1,
      firstName: 'Lasse',
      lastName: 'Anka'
    },
    receiver: {
      id: 2,
      firstName: 'Arne',
      lastName: 'Skida'
    },
    amount: -50,
    message: "Top up",
    date: Date.now(),
  },
  ]


  let transactions = data.map((trans, i) => {
    let user = 'Lasse';
    let name;
    if (trans.sender.firstName === user) {
      name = trans.receiver.firstName
    } else {
      name = trans.sender.firstName
    }
    console.log(trans.sender, trans.receiver, 'hej')
    return (
      <TabContent activeTab={activeTab} key={'trans' + i}>
        <TabPane tabId="1">
          <Row className="mb-2 no-gutters transaction-card">
            <Col xs="7">
              <p className="trans-date">{new Date(trans.date).toLocaleString('sv-SE', { day: "numeric", month: "short" })}</p>
              <p className="name">{name}</p>
            </Col>
            <Col className="amount" xs="4">{trans.amount}kr</Col>
            <Col className="click" xs="1"><ChevronRight/></Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="mb-2 no-gutters transaction-card">
            <Col xs="7">
              <p className="trans-date">{new Date(trans.date).toLocaleString('sv-SE', { day: "numeric", month: "short" })}</p>
              <p className="name"> {trans.sender.firstName} </p>
            </Col>
            <Col className="amount" xs="4">{trans.amount}kr</Col>
            <Col className="click" xs="1"><ChevronRight/></Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row className="mb-2 no-gutters transaction-card">
            <Col xs="7">
              <p className="trans-date">{new Date(trans.date).toLocaleString('sv-SE', { day: "numeric", month: "short" })}</p>
              <p className="name"> {trans.receiver.name} </p>
            </Col>
            <Col className="negative-amount" xs="4">{trans.amount}kr</Col>
            <Col className="click" xs="1"><ChevronRight/></Col>
          </Row>
        </TabPane>
      </TabContent>
    );
  })
  return (
    <div className="tabs">
      <Nav tabs className="tab-select">
        <NavItem className="items">
          <NavLink className="nav-link"
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Alla
          </NavLink>
        </NavItem>
        <NavItem className="items">
          <NavLink className="nav-link"
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Mottagna
          </NavLink>
        </NavItem>
        <NavItem className="items">
          <NavLink className="nav-link"
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Skickade
          </NavLink>
        </NavItem>
      </Nav>
      {transactions}
    </div>
  );
}

export default Tabs;