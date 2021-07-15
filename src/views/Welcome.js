import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Logo from '../assets/icons/Logo.png';
import '../assets/scss/style.scss';

const Welcome = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/language");
    }, 3000);
  }, [])

  return (
    <div className="Welcome-Container">
      <div className="Welcome-Logo">
        <img src={Logo}></img>
      </div>
    </div>
  );
};

export default Welcome;
