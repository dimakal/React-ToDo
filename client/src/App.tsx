import React, {FC} from 'react';
import './App.css';
import TodosList from "./components/TodosList";
import Title from "./components/Title";

const App: FC = () => {
  return (
    <div className="ToDo-App pt-5 bg-info text-center">
      <div className="container">
          <Title text={'Todo app'} />
          <TodosList />
      </div>
    </div>
  );
}

export default App;
