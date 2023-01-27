import React,{useState,useContext} from 'react'
import styled from 'styled-components'
const Toggle = ({item,counter,setCounter}) => {
  
  const [color,setColor]=useState()
  const [circle,setCirle]= useState()
  const Add = ()=>{
    setColor('hsl(211, 68%, 94%)')
    setCirle('red')

    if(color==='hsl(211, 68%, 94%)'){
    setCounter(counter-1)
    setColor('')
    setCirle('')
    }else{
      setCounter(counter+1)
      setColor('hsl(211, 68%, 94%)')
    setCirle('red')
      
    }
  }
  
  return (
    <div>
      
          <Card onClick={Add} style={{backgroundColor:color}} >
          <div className="image"><img src={item.image} alt="" /></div>
          <div className="container-risky">
          <div className="content">
            <p><small className='bold'>{item.name}</small> {item.ptag} <span className='color-bold chess'>{item.span} </span><small style={{backgroundColor:circle}} className='circle'></small></p>
            <small className='time'>{item.time}</small>
          </div>
          {item.textptag && <div className="text">
            <p>{item.textptag}</p>
          </div>}
          <div className="container-img">
            <img src={item.chess} alt="" />
          </div>
          </div>
        </Card>
    </div>
  )
}

export default Toggle
const Card = styled.div`
margin-bottom: 0.5rem;
cursor: pointer;
padding: 1rem;
border-radius: 0.5rem;
display: flex;
align-items: center;
gap: 2rem;
position: relative;


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
  border: none;
  position: absolute;
 right: 1rem;
 top: 1rem;
  img{
    /* width: 100%; */
    height: 100%;
    border: none;
    
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

  }
  .time{
    color: var(--color-Grayish-blue);
    
  }
}
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
 border-color: transparent;

 }
}
.circle{
  width: 0.5rem;
  height: 0.5rem;
  background-color: transparent;
  border-radius:50%;
  display:inline-block;
 
}
`