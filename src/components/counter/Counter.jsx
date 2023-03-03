import { createSignal } from 'solid-js';
import './Counter.css';
const Counter = () => {
  const [count, setCount] = createSignal(0);
  const increaseCounter = () => {
    setCount(count() + 1);
  };
  const decreaseCounter = () => {
    setCount(count() - 1);
  };
  return (
    <div>
      Test Something
      <button onClick={() => increaseCounter()}>Increase</button>
      {count()}
      <button onClick={() => decreaseCounter()}>Decrease</button>
    </div>
  );
};

export default Counter;
