import { createSignal, For, createEffect } from 'solid-js';
import './style.css';
const Todo = () => {
  // create signal is used for creating states
  const [inputSignal, setInputSignal] = createSignal('');
  const [todos, setTodos] = createSignal([]);
  const [todoLength, setTodoLength] = createSignal(0);
  // updating todo length; using create effect
  createEffect(() => {
    setTodoLength(todos().length);
  });
  const addTodo = () => {
    if (inputSignal() !== '') {
      const newTodoObject = {
        name: inputSignal(),
        id: new Date(),
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodoObject]);
    }
  };
  const deleteTodo = (deleteId) => {
    const newTodos = todos().filter((todo) => todo.id !== deleteId);
    setTodos(newTodos);
  };
  return (
    <div class="todo-container">
      My Todo: Total Todos: {todoLength()}
      <div class="todo-input-container">
        <input
          placeholder="Get an input"
          onChange={(e) => setInputSignal(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div class="todos">
        <For each={todos()}>
          {(todo, index) => {
            return (
              <li key={index} class="todo">
                <span>{todo.name}</span>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            );
          }}
        </For>
      </div>
    </div>
  );
};
export default Todo;
