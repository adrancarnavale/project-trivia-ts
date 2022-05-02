import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ILoginFormEventHandler } from './types';
import { emailRegex } from './constants';
import { savePlayerToken } from '../../app/reducers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Loading } from '../Loading';

function LoginForm() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state) => state.token);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [buttonStatus, setButtonStatus] = useState(true);

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    console.log('oi');

    await dispatch(savePlayerToken());

    navigate('/game');
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {
      target: { name: eventName, value },
    } = e;

    const changeEventHandlerObject = {
      name: () => setName(value),
      email: () => setEmail(value),
    };

    changeEventHandlerObject[eventName as keyof ILoginFormEventHandler]();
  };

  const checkButtonAvailability = () => {
    const isValidEmail = emailRegex.test(email);
    const isValidName = name.length > 0;

    if (isValidName && isValidEmail) return false;

    return true;
  };

  useEffect(() => {
    const isButtonDisabled = checkButtonAvailability();

    setButtonStatus(isButtonDisabled);
  }, [name, email]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <form>
        <div>
          <label>
            Nome:
            <input
              onChange={handleChange}
              name="name"
              value={name}
              type="text"
            />
          </label>
        </div>

        <div>
          <label>
            E-mail:
            <input
              onChange={handleChange}
              name="email"
              value={email}
              type="email"
            />
          </label>
        </div>

        <div>
          <button disabled={buttonStatus} onClick={handleSubmit} type="submit">
            Play!
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
