import React, {Children} from 'react';
// import '../todocss/modules/buttoncss';
// import '../todocss/modules/buttoncss';
import './buttoncss.css';
import { getClasses } from '../utils/getClasses';

const buttonTypes={
    primary: 'primary',
    secondary: 'secondary'
};

export default function Button({children, variant='primary',type,...rest}) {
  return (
    <button className={getClasses([`button button--${variant}`])}  type={type === 'submit' ? 'submit' :'button'} {...rest}>
        {children}
    </button>
  )
}

function SelectButton({children, id, ...rest}){
  return(
    <select className='button__select button' {...rest}>{children}</select>
  )
}

export {SelectButton};
