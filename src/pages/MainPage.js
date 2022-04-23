import AddTaskPopap from '../components/AddTaskPopap';
import Header from '../components/Header';
import Week from '../components/Week';

function MainPage() {
  return (
    <div className='App'>
      <Header userName='Nikita' />
      <Week />
      <AddTaskPopap />
    </div>
  );
}

export default MainPage;
