import { useSelector } from 'react-redux';
import AddTaskPopap from '../components/AddTaskPopap';
import Header from '../components/Header';
import Week from '../components/Week';

function MainPage() {
  const user = useSelector((state) => state.user);

  return (
    <div className='App'>
      <Header userName={user} />
      <Week />
      <AddTaskPopap />
    </div>
  );
}

export default MainPage;
