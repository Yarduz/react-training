import './App.css';
import React, { useState } from 'react';

const initialState = {
  bill: 100,
  tip: 0.1,
  dinners: 2
}

function App() {
  const [state, setState] = useState(initialState);
  const { bill, dinners, tip } = state
  const totalBillPP = (bill + (bill * tip)) / dinners;
  const tipBillPP = bill * tip / dinners;
  const displaytotal = dinners ? totalBillPP : 0
  const displayTip = dinners ? tipBillPP : 0

  const reset = () => setState(initialState);

  function changeInDinners(event) {
    console.log(state)
    setState({ ...state, dinners: event.target.value })
  }
  function changeInBill(event) {
    console.log(state)
    setState({ ...state, bill: event.target.value })
  }
  function changeInTip(event) {
    console.log(state)
    setState({ ...state, tip: event.target.value })
  }
  return (
    <div className="App d-flex justify-content-center flex-column">
      <div className='title d-flex flex-column'>
        <h2 className='darkerGreen'>SPLI</h2>
        <h2 className='darkerGreen'>TTER</h2>
      </div>
      <main className='rounded p-3 d-flex whitebg'>
        <div className='darkerGreen calc m-2 p-2'>
          <div className='bill mx-5 d-flex flex-column'>
            <label htmlFor="" className='align-self-start'>bill</label>
            <input onChange={changeInBill} dir="rtl" id='inputBill' type="number" step="0.01" min={1} />
          </div>
          <div className='bill mx-5 d-flex flex-column my-2'>
            <label htmlFor="" className='align-self-start my-2'>select tip %</label>
            <div className='buttonArea d-flex flex-column my-2'>
              <div className='d-flex flex-row gap-2 my-2'>
                <button value={0.05} onClick={changeInTip} className='py-3 col-4 rounded tipB darkerGreenbg tipB'>5%</button>
                <button value={0.1} onClick={changeInTip} className='py-3 col-4 rounded tipB darkerGreenbg tipB'>10%</button>
                <button value={0.15} onClick={changeInTip} className='py-3 col-4 rounded tipB darkerGreenbg tipB'>15%</button>
              </div>
              <div className='d-flex flex-row gap-2 my-2 tipB'>
                <button value={0.25} onClick={changeInTip} className='py-3 col-4 rounded tipB darkerGreenbg tipB'>25%</button>
                <button value={0.5} onClick={changeInTip} className='py-3 col-4 rounded tipB darkerGreenbg tipB'>50%</button>
                <button id='inputPeople' className='py-3 col-4 rounded tipBC'>CUSTOM<input onChange={changeInTip} id='customInput' type="number" min={1} /></button>
              </div>
            </div>
          </div>
          <div className='bill mx-5 d-flex flex-column'>
            <label htmlFor="" className='align-self-start'>number of people</label>
            <input onChange={changeInDinners} dir="rtl" placeholder='2' id='inputPeople' type="number" align="right" step="1" />
          </div>
        </div>
        <div className='amount darkerGreenbg m-2 p-2 rounded'>
          <div className='d-flex row text-center align-self-top rounded align-items-center'>
            <div className='col-5 ms-2'>
              <h4>tip amount</h4>
              <p className='ms-1'>/ person</p>
            </div>
            <h5 id='tipAmount' className='col-6' >{displayTip}</h5>
            <div className='col-5 ms-2'>
              <h4>total</h4>
              <p className='ms-1'>/ person</p>
            </div>
            <h5 id='totalAmount' className='col-6'>{displaytotal}</h5>
          </div>
          <button id='reset' onClick={reset} className='py-2 rounded align-self-strech'>RESET</button>
        </div>
      </main >
    </div >
  );
}
export default App;