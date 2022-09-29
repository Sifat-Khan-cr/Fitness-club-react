import { useState } from 'react';
import './App.css';
import Activities from './Components/Activities/Activities';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';

function App() {
  const [time, setTime] = useState(0);


  const handleClick = (product) => {
    setTime(time + product)
  }
  return (
    <div >
      <div className="grid grid-cols-1 text-center mx-10 md:grid-cols-3 lg:grid-cols-4 ">
        <div className='col-span-1 md:col-span-3 lg:col-span-3'>
          <Header></Header>
          <h1 className='text-xl md:text-3xl lg:text-6xl font-semibold mb-10'>Start Today's Activity</h1>
          <Activities handleClick={handleClick}></Activities>


        </div>

        <div className='lg:col-span-1 flex'>
          <Info time={time}></Info>

        </div>
      </div>
      <Blog></Blog>

    </div>
  );
}

export default App;
