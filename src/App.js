import './App.css';

import Tasks from './Components/Tasks/Tasks';

function App() {

  let lists = [
    {
      id: 5, tasks: [
        { name: "Test 1" },
        { name: "Test 2" }
      ]
    }
  ]

  return (
    <div>
      <Tasks tasks={lists} />
    </div>
  );
}

export default App;
