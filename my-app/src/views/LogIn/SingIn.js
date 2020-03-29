import React from 'react';
import styles from './SingIn.module.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Cross from '../../assets/cross.png';
import { DataContext } from '../../context/DataContext';

class SingIn extends React.Component {
 static contextType = DataContext;

 render() {
  const {
   loggInNew,
   passwordNew,
   dublicatePasswordNew,
   companyNew,
   proffesionNew,
   positionNew,
   chechbox,
   handleChangeInput,
   handleSingIn,
   handleSingUp,
   hangleCheckbox
  } = this.context;
  return (
   <div className={styles.wrapper}>
    <button className={styles.crossBtn} onClick={e => handleSingIn(e)}>
     <img src={Cross} alt={'cross'} />
    </button>
    <h2>sing in.</h2>
    <h5>please fill up all files.</h5>
    <form>
     <Input
      type={'text'}
      placeholder={'user name.'}
      name={'loggInNew'}
      value={loggInNew}
      onChange={e => handleChangeInput(e)}
     />
     <Input
      type={'password'}
      placeholder={'password.'}
      name={'passwordNew'}
      value={passwordNew}
      onChange={e => handleChangeInput(e)}
     />
     <Input
      type={'password'}
      placeholder={'dublicate password.'}
      name={'dublicatePasswordNew'}
      value={dublicatePasswordNew}
      onChange={e => handleChangeInput(e)}
     />
     <Input
      type={'text'}
      placeholder={'company.'}
      name={'companyNew'}
      value={companyNew}
      onChange={e => handleChangeInput(e)}
     />
     <Input
      type={'text'}
      placeholder={'proffesion.'}
      name={'proffesionNew'}
      value={proffesionNew}
      onChange={e => handleChangeInput(e)}
     />
     <Input
      type={'text'}
      placeholder={'position.'}
      name={'positionNew'}
      value={positionNew}
      onChange={e => handleChangeInput(e)}
     />
     <Checkbox type={'checkbox'} onChange={e => hangleCheckbox(e)} defaultChecked={chechbox} />
    </form>
    <Button type={'button'} value={'welcome.'} eventHandle={e => handleSingUp(e)} />
   </div>
  );
 }
}

export default SingIn;
