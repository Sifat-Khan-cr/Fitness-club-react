import './App.css';
import Activities from './Components/Activities/Activities';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';

function App() {
  return (
    <div className="grid grid-cols-4">
      <div className='col-span-3'>
        <Header></Header>
        <Activities></Activities>


      </div>

      <div className='col-span-1'>
        <Info></Info>

      </div>

    </div>
  );
}

export default App;
