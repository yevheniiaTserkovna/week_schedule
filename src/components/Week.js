import { useSelector } from 'react-redux';
import Day from './Day';

function Week() {
  const data = useSelector((state) => state.data);

  return (
    <section className='week'>
      {data.map((item) => (
        <Day key={item.dayName} dayInfo={item} />
      ))}
    </section>
  );
}

export default Week;
