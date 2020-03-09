import React from 'react';
import styles from './SingIn.module.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Cross from '../../assets/cross.png';

const SingIn = ({ eventHandle, singOut }) => {
 return (
  <div className={styles.wrapper}>
   <button className={styles.crossBtn} onClick={singOut}>
    <img src={Cross} alt={'cross'} />
   </button>
   <h2>sing in.</h2>
   <h5>please fill up all files.</h5>
   <form>
    <Input type={'text'} placeholder={'user name.'} />
    <Input type={'password'} placeholder={'password.'} />
    <Input type={'password'} placeholder={'dublicate password.'} />
    <Input type={'text'} placeholder={'company.'} />
    <Input type={'text'} placeholder={'profesion.'} />
    <Checkbox type={'checkbox'} />
   </form>
   <Button type={'button'} value={'welcome.'} eventHandle={eventHandle} />
  </div>
 );
};

export default SingIn;
