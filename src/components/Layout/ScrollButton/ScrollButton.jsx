import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

import styled from 'styled-components';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button>
	<FaArrowCircleUp onClick={scrollToTop} className='md:text-[3rem] text-[2rem]'
	style={{display: visible ? 'inline' : 'none'}} />
	</Button>
);
}

  
 const Button = styled.div`
   position: fixed; 
   right: 30px;
   bottom: 50px;
   height: 20px;
   z-index: 1;
   cursor: pointer;
   color: #D19F68;
`


export default ScrollButton;
