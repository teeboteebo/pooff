import React from 'react'
import TransactionHistoryPreview from '../../components/TransactionHistoryPreview'

const StartPage = () => {
  return(
    <div className="startpage">
      <h1>This is the startpage!</h1>
      <p>This is some bread crumbs....</p>
      <TransactionHistoryPreview />
    </div>
  )
}

export default StartPage