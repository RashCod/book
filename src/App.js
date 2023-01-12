import './App.css';
import { Shekspir } from './components/Shekspir/Shekspir';
import { Shiller } from './components/Shiller/Shiller';
import { Wrapper } from './components/Wrapper/Wrapper';

import React from 'react';
import {ModalShekspir } from './components/Modal';
import { ModalShiller } from './components/ModalShiller';

function App() {
  const [modalActive,setModalActive] = React.useState(false)
  const [ShillerActive,setShillerActive] = React.useState(false)
  return (
    <div className="App">
      <Shekspir modalActive={modalActive} setModalActive={setModalActive} />
      <ModalShekspir modalActive={modalActive} setModalActive={setModalActive}/>
      <Shiller ShillerActive={ShillerActive} setShillerActive={setShillerActive} />
      <ModalShiller ShillerActive={ShillerActive} setShillerActive={setShillerActive}/>
    </div>
  );
}

export default App;
