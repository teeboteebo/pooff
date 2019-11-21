import React from 'react';
import './sass/styles.scss';
import App from './App';
import { PooffContext } from './context'
import { useContextValues } from './context';

export default () => {

  return (
    <PooffContext.Provider value={useContextValues()}>
      <App />
    </PooffContext.Provider>
  )

}


