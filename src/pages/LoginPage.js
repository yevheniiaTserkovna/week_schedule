import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';

function LoginPage() {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(login());
  };

  return (
    <div>
      <button onClick={loginHandler}>LOGIN</button>
    </div>
  );
}

export default LoginPage;
