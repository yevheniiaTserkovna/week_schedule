import './App.css';
import AddTaskPopap from './components/AddTaskPopap';
import Header from './components/Header';
import Week from './components/Week';

function App() {
  return (
    <div className='App'>
      <Header userName='Nikita' />
      <Week />
      <AddTaskPopap />
    </div>
  );
}

export default App;
