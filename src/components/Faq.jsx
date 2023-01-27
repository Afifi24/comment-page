import React,{useState,useContext} from 'react'
import styled from 'styled-components'
import toogleContext from './Context'

const Faq = ({children}) => {
    const [toggle,setToggle] = useState(false)
    const ChangeColor = ()=>{
        setToggle(!toggle)
    }
    const Add = useContext(toogleContext);
  const color = useContext(toogleContext);

  return (
    <Faqstyled onClick={ChangeColor} className={toggle?'active':''}
    >
      <div >
      {children}
      </div>
    </Faqstyled>
  )
}

export default Faq

const Faqstyled = styled.div`
.active{
    background-color: red;
    padding: 2rem 0rem;
    width: 100%;
    border-radius: 0.5rem;
}
width: 100%;
margin-bottom: 0.5rem;
/* background-color: var(--color-Light-grayish-blue-2); */
padding: 1rem;
border-radius: 0.5rem;
display: flex;
align-items: center;
gap: 2rem;
position: relative;
/* box-shadow: 0px 0px 20px rgba(0,0,0,0.1); */

 .image{
   width: 2.4rem;
   height: 2.4rem;
   position: absolute;
   left: 0.5rem;
   top:1rem;
   img{
     width: 100%;
     height: 100%;
   }
 }
 .container-img{
   width: 2.4rem;
   height: 2.4rem;
   img{
     width: 100%;
     height: 100%;
   }
 }
 .content{
   margin-left: 2.8rem;
   p{
     font-size: 14px;
     color: var(--color-Grayish-blue);
     .bold{
       font-size: 14px;
       font-weight: 800;
       color: var(--color-Very-dark-blue);
     }
     .color-bold{
       font-size: 14px;
       font-weight: 800;
       color: var(--color-Dark-grayish-blue);
     }
     .chess{
   color: var(--color-Blue);
 
   }
   .time{
     color: var(--color-Grayish-blue);  
   }
 }}
 .container{
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
 }
 .text{
   border: 1px solid var(--color-Grayish-blue);
   padding: 1rem;
   border-radius: 0.2rem;
   margin-top: 0.5rem;
   margin-left:2.7rem ;
   color: var(--color-Grayish-blue);
  font-size: 14px;
  cursor: pointer;
  transition: 500ms;
  &:hover{
  background-color: var(--color-Light-grayish-blue-1);
  border-color: transparent
  }
 }
 .circle{
   width: 0.5rem;
   height: 0.5rem;
   background-color: transparent;
   border-radius:50%;
   display:inline-block;
 }



// const Card = styled.div`
// margin-bottom: 0.5rem;
// /* background-color: var(--color-Light-grayish-blue-2); */
// padding: 1rem;
// border-radius: 0.5rem;
// display: flex;
// align-items: center;
// gap: 2rem;
// position: relative;
// /* box-shadow: 0px 0px 20px rgba(0,0,0,0.1); */

// .image{
//   width: 2.4rem;
//   height: 2.4rem;
//   position: absolute;
//   left: 0.5rem;
//   top:1rem;
//   img{
//     width: 100%;
//     height: 100%;
//   }
// }
// .container-img{
//   width: 2.4rem;
//   height: 2.4rem;
//   img{
//     width: 100%;
//     height: 100%;
//   }
// }
// .content{
//   margin-left: 2.8rem;
//   p{
//     font-size: 14px;
//     color: var(--color-Grayish-blue);
//     .bold{
//       font-size: 14px;
//       font-weight: 800;
//       color: var(--color-Very-dark-blue);
//     }
//     .color-bold{
//       font-size: 14px;
//       font-weight: 800;
//       color: var(--color-Dark-grayish-blue);
//     }
//     .chess{
//   color: var(--color-Blue);
// }

//   }
//   .time{
//     color: var(--color-Grayish-blue);
    
//   }
// }
// .container{
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
// }
// .text{
//   border: 1px solid var(--color-Grayish-blue);
//   padding: 1rem;
//   border-radius: 0.2rem;
//   margin-top: 0.5rem;
//   margin-left:2.7rem ;
//   color: var(--color-Grayish-blue);
//  font-size: 14px;
//  cursor: pointer;
//  transition: 500ms;
//  &:hover{
//  background-color: var(--color-Light-grayish-blue-1);
//  border-color: transparent;

//  }
// }
// .circle{
//   width: 0.5rem;
//   height: 0.5rem;
//   background-color: transparent;
//   border-radius:50%;
//   display:inline-block;
 
// }
// `
// const Cardirisky = styled.div`

// margin-bottom: 0.5rem;
// background-color: var(--color-Light-grayish-blue-2);
// padding: 1rem;
// border-radius: 0.5rem;
// display: flex;
// gap: 1rem;
// box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
// align-items: flex-start;
// `