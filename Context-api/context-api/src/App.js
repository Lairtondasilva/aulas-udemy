import { useEffect, useRef } from 'react';
import './App.css';
import { useCounterContext } from './contexts/CounterContext';
import Composed from './components/Composed';

function App() {

  const [state, actions] = useCounterContext();
  const inputRef = useRef(null);

  return (
    <div>
      <Composed />
    </div>
  );
}

export default App;
