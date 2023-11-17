import Heading from './components/heading/heading.component';
import Form from './components/form/form.component';
import Result from './components/result/result.component';
import { useState } from 'react';
import './App.css';

function App() {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [finResult, setFinResult] = useState('')

  const setWeightValue = (e) => {
    setWeight(e.target.value)
  }

  const setHeightValue = (e) => {
    setHeight(e.target.value)
  }
  
  const submitDetails = (e) => {
    e.preventDefault();
    const finHeight = height * height;
    const finResult = weight / finHeight;
    setBmi(finResult);

    if (finResult < 18.5) {
      setFinResult('you are underweight')
    } else if (finResult > 18.5){
      setFinResult('you are normal')
    }

  }

  const onReload = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setFinResult('');
  }

  return (
    <div className='main-container'>
      <Heading />
      <Form setWeightValue={setWeightValue} setHeightValue={setHeightValue}
        weight={weight} height={height} submitDetails = {submitDetails} onReload = {onReload}/>
      <Result bmi={bmi} finResult = {finResult}/>
    </div>
  );
}

export default App;
