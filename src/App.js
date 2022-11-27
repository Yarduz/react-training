import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const initialState = {
    bill: 0,
    tip: 0,
    dinners: 0
  }
  const [state, setState] = useState(initialState);

  const totalBillPP = (state.bill + state.tip) / state.dinners
  const tipBillPP = state.tip / state.dinners

  const reset = () => setState(initialState);


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
            <input dir="rtl" id='inputBill' type="number" step="0.01" min={0} />
          </div>
          <div className='bill mx-5 d-flex flex-column my-2'>
            <label htmlFor="" className='align-self-start my-2'>select tip %</label>
            <div className='buttonArea d-flex flex-column my-2'>
              <div className='d-flex flex-row gap-2 my-2'>
                <button className='py-3 col-4 rounded tipB darkerGreenbg tipB'>5%</button>
                <button className='py-3 col-4 rounded tipB darkerGreenbg tipB'>10%</button>
                <button className='py-3 col-4 rounded tipB darkerGreenbg tipB'>15%</button>
              </div>
              <div className='d-flex flex-row gap-2 my-2 tipB'>
                <button className='py-3 col-4 rounded tipB darkerGreenbg tipB'>25%</button>
                <button className='py-3 col-4 rounded tipB darkerGreenbg tipB'>50%</button>
                <button id='inputPeople' className='py-3 col-4 rounded tipBC'>CUSTOM<input id='customInput' type="number" min={0} /></button>
              </div>
            </div>
          </div>
          <div className='bill mx-5 d-flex flex-column'>
            <label htmlFor="" className='align-self-start'>number of people</label>
            <input dir="rtl" id='inputPeople' placeholder='1' type="number" align="right" step="1" min={2} />
          </div>
        </div>
        <div className='amount darkerGreenbg m-2 p-2 rounded'>
          <div className='d-flex row text-center align-self-top rounded align-items-center'>
            <div className='col-5 ms-2'>
              <h4>tip amount</h4>
              <p className='ms-1'>/ person</p>
            </div>
            <h5 id='tipAmount' className='col-6'>{tipBillPP}</h5>
            <div className='col-5 ms-2'>
              <h4>total</h4>
              <p className='ms-1'>/ person</p>
            </div>
            <h5 id='totalAmount' className='col-6'>{totalBillPP}</h5>
          </div>
          <button id='reset' onClick={reset} className='py-2 rounded align-self-strech'>RESET</button>
        </div>
      </main >
    </div >
  );
}

export default App;


// const initialState = {}
// const bill = document.getElementById('inputBill')
// const diners = document.getElementById('inputPeople')
// const customTip = document.getElementById('customTip')
// const tip = 0
// const totalAmount = document.getElementById('totalAmount').innerHTML
// const tipAmount = document.getElementById('tipAmount').innerHTML
// const numB = document.getElementsByClassName('tipB')

// bill.addEventListener('change', (calculate()))

// function clickTip(event) {
//   tip = event.target.value
//   calculate()
// }

// function reset() {
//   tip = 0;
//   bill.value = null;
//   diners.value = 0;
// }

// function calculate() {
//   totalAmount = ((bill.value + bill.value * tip) / diners.value)
//   tipAmount = (bill.value * tip / diners.value)
// }