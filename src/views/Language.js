import React from 'react';
import { useDispatch } from 'react-redux';
import { Change_lan } from '../services/actions/action';
import { useHistory } from 'react-router-dom';
import '../assets/scss/style.scss';
import { motion } from 'framer-motion';

const Language = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const handlePath = () => {
    history.push('/categories');
  };
  return (
    <div>
      <div className="Lan-Container">
        <p>SELECT LANGUAGE</p>
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 40 }}
          transition={{
            type: 'spring',
            duration: 2,
            delay: 0.5,
            stiffness: 300,
          }}>
          <button
            className="Lan-Btn"
            onClick={() => {
              dispatch(Change_lan('en'));
              handlePath();
            }}>
            ENGLISH
          </button>
          <button
            className="Lan-Btn"
            onClick={() => {
              dispatch(Change_lan('es'));
              handlePath();
            }}>
            SPANISH
          </button>
          <button
            className="Lan-Btn"
            onClick={() => {
              dispatch(Change_lan('fr'));
              handlePath();
            }}>
            FRENCH
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Language;
