import axios from 'axios';
import React from 'react';
import './styles/styles.scss'

function App() {
  const [advice, setAdvice] = React.useState({id: null, advice: null});
  React.useEffect( async()=>{
    const {data: {slip}} = await axios.get('https://api.adviceslip.com/advice');
    setAdvice(slip)
  },[]);
  const handleClick = async()=>{
    const {data: {slip}} = await axios.get('https://api.adviceslip.com/advice');
    setAdvice(slip)
  }
  return (
    <div className="container app">
      <div className='advice'>
        <p className='advice__title'>
          ADVICE #{advice.id}
        </p>
        <blockquote  className='quote'>
          <span>"</span>{advice.advice}<span>"</span> 
        </blockquote >

        <div className='pattern-divider'></div>

        <button className='btnRandom' onClick={handleClick}></button>
      </div>
    </div>
  );
}

export default App;
