import React from 'react'
import {motion, useMotionValue, useTransform} from 'framer-motion'
import './todoitem.css'

let variable;

const checkVariants={
    initial:{
        color:'#cccfde'
    },
    checked:{
        pathlength:1,
    },
    unChecked:{
        pathlength:0,
    },
}

const boxVariants={
    checked:{
        backgroundColor: 'rgba(100, 111, 240,1)',
        transition: {duration: 0.1},
    },
    unchecked:{
      backgroundColor: '#cccfde',
        transition: {duration: 0.1},
    }
}

function Checkbutton({checked,setChecked,status}) {
  const pathlength = useMotionValue(0); 
  const opacity = useTransform(pathlength,[0.05,0.15],[0,1]); 
  
  return (
    <motion.div className='svgBox'
        variants={boxVariants}
        animate={checked ? 'checked':'unChecked'}
        onClick={()=>{
            setChecked(!checked)
            console.log(checked)
        }}
    >
      <motion.svg className='svg'
        viewBox='0 0 53 38'
        fill='none'
        xnlns='http://www.w3.org/2000/svg'
      >
        <motion.path 
            variants={checkVariants} 
            animate={checked ? 'checked': 'unChecked'} 
            style={{pathlength,opacity}}
            fill='none'
            strokeMiterlimit='18'
            strokeWidth='6'
            d='M1.5 22L16 36.5L51.5 1'
            strokeLinejoin='round'
            strokeLinecap='round'
        />

      </motion.svg>
    </motion.div>
  )
}

export default Checkbutton
