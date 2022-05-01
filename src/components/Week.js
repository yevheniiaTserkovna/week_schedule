import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { featchData } from '../redux/actions';
import Day from './Day';

function Week() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(featchData());
  }, [featchData]);

  const data = useSelector((state) => state.data);

  return (
    <section className='week'>
      {Object.keys(data).map((key) => (
        <Day key={key} dayNumber={key} dayInfo={data[key]} />
      ))}
    </section>
  );
}

export default Week;
