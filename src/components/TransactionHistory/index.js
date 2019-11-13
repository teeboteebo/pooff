import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const amount = {
    amount: 30,
    date: Date.now()
  }
  

  return (
    <div className="tabs">
      <Nav tabs className="tab-select">
        <NavItem className="nav-item">
          <NavLink className="nav-link"
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Alla
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Mottagna
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Skickade
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">

          {/* <Row className="mb-2 no-gutters transaction-card" key={'transaction_' + i}> */}
          <Row className="mb-2 no-gutters transaction-card">
            <Col xs="7">
              <p className="trans-date">{new Date(amount.date).toLocaleString('sv-SE', { day: "numeric", month: "short" })}</p>
              {/* <p>{transaction.sender.firstName}</p> */}
              {/* <p>date</p> */}
              <p>sender</p>
            </Col>
            <Col xs="4">89</Col>
            {/* <Col xs="4">{transaction.amount}</Col> */}
            <Col xs="1">></Col>
          </Row>

        </TabPane>
        <TabPane tabId="2">
          {/* <Row className="mb-2 no-gutters transaction-card" key={'transaction_' + i}> */}
          <Row className="mb-2 no-gutters transaction-card">
            <Col xs="7">
              {/* <p className="trans-date">{new Date(transaction.date).toLocaleString('sv-SE', { day: "numeric", month: "short" })}</p> */}
              {/* <p>{transaction.sender.firstName}</p> */}
              <p>date</p>
              <p>sender</p>
            </Col>
            <Col xs="4">89</Col>
            {/* <Col xs="4">{transaction.amount}</Col> */}
            <Col xs="1">></Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          {/* <Row className="mb-2 no-gutters transaction-card" key={'transaction_' + i}> */}
          <Row className="mb-2 no-gutters transaction-card">
            <Col xs="7">
              {/* <p className="trans-date">{new Date(transaction.date).toLocaleString('sv-SE', { day: "numeric", month: "short" })}</p> */}
              {/* <p>{transaction.sender.firstName}</p> */}
              <p>date</p>
              <p>sender</p>
            </Col>
  <Col xs="4">{amount.amount}</Col>
            {/* <Col xs="4">{transaction.amount}</Col> */}
            <Col xs="1">></Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Tabs;