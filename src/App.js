import { useState } from 'react';
import './App.css';
import Activities from './Components/Activities/Activities';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';

function App() {
  const [time, setTime] = useState(0);


  const handleClick = (product) => {
    setTime(time + product)
  }
  return (
    <div className="grid grid-cols-4 text-center mx-10">
      <div className='col-span-3'>
        <Header></Header>
        <h1 className='text-5xl font-semibold mb-10'>Start Today's Activity{time}</h1>
        <Activities handleClick={handleClick}></Activities>


      </div>

      <div className='col-span-1'>
        <Info time={time}></Info>

      </div>

    </div>
  );
}

export default App;
