import React,{useState,useContext} from 'react'
import styled from 'styled-components'
import toogleContext from './Context'
import Mark from '../assets/images/avatar-mark-webber.webp'
import Angela from '../assets/images/avatar-angela-gray.webp'
import Jacob from '../assets/images/avatar-jacob-thompson.webp'
import smith from '../assets/images/avatar-kimberly-smith.webp'
import chess from '../assets/images/image-chess.webp'
import Anna from '../assets/images/avatar-anna-kim.webp'
import Risky from '../assets/images/avatar-rizky-hasanuddin.webp'
import nathan from '../assets/images/avatar-nathan-peterson.webp'
import Faq from './Faq'
const Notification = () => {
  // const [counter,setCounter] =useState(0)
  // const [color,setColor]=useState()
  // const [circle,setCirle]= useState()
 
  const counter = useContext(toogleContext);
  const circle = useContext(toogleContext);


  
 
  return (
    <Notificationstyle>
        <header>
          <h4>Notifications <small className='counter'>{counter}</small></h4>
          <p>Mark all as read</p>
        </header>
        <Faq >
          <div className="image"><img src={Mark} alt="" /></div>
          <div className="content">
            <p><small className='bold'>Mark Webber</small> reacted to your recent post <span className='color-bold'>My first tournament today!</span> <small style={{backgroundColor:circle}} className='circle'></small></p>
            <small className='time'>1m ago</small>
           
          </div>
        </Faq>
        {/* !rbtr */}
        <Faq>
          <div className="image"><img src={Angela} alt="" /></div>
          <div className="content">
            <p><small className='bold'>Angela Gray</small> followed you <span className='color-bold'></span><small style={{backgroundColor:circle}} className='circle'></small></p>
            <small className='time'>5m ago</small>
          </div>
        </Faq>
        {/* dgb */}
        
        <Faq>
          <div className="image"><img src={Jacob} alt="" /></div>
          <div className="content">
            <p><small className='bold'>Jacob Thompson</small> has joined your group <span className='color-bold chess'>Chess Club</span> <small style={{backgroundColor:circle}} className='circle'></small></p>
            <small className='time'>1 day ago</small>
          </div>
        </Faq>
        {/* ytkuy */}
        <Faq>
          <div className="image"><img src={Risky} alt="" /></div>
          <div className="container-risky">
          <div className="content">
            <p><small className='bold'>Risky Hasanuddin</small> sent you a private message <span className='color-bold chess'></span><small style={{backgroundColor:circle}} className='circle'></small></p>
            <small className='time'>5 day ago</small>
          </div>
          <div className="text">
            <p>Hello, thanks for setting up the Chess Club. I've a member for a few weeks now and i'm already having a lots of fun and improving my game.</p>
          </div>
          </div>
        </Faq>
        {/* def */}
        <Faq>
          <div className="image"><img src={smith} alt="" /></div>
          <div className="container">
          <div className="content">
            <p><small className='bold'>Kimberly Smith</small> commented on your picture <span className='color-bold '></span><small  style={{backgroundColor:circle}} className='circle'></small></p>
            <small className='time'>1 week ago</small>
          </div>
          <div className="container-img">
            <img src={chess} alt="" />
          </div>
          </div>
          
        </Faq>
        {/* fvsjdbs */}
        <Faq>
          <div className="image"><img src={nathan} alt="" /></div>
          <div className="content">
            <p><small className='bold'>Nathan Peterson</small> reacted to your recent post <span className='color-bold'>5 end-game strategie to increase your win rate</span> <small className='circle' style={{backgroundColor:circle}}></small></p>
            <small className='time'>2 weeks ago</small>
          </div>
        </Faq>
        <Faq>
          <div className="image"><img src={Anna} alt="" /></div>
          <div className="content">
            <p><small className='bold'>Anna Kim </small> left the group <span className='color-bold chess'> Chess Club</span> <small className='circle' style={{backgroundColor:circle}}></small></p>
            <small className='time'>2 weeks ago</small>
          </div>
        </Faq>
    </Notificationstyle>
  )
}

export default Notification
const Notificationstyle = styled.div`
 background-color: var(--color-White);
 width: var(--container-width-lg);
 margin: 3rem auto;
 box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
 border-radius: 0.8rem;
 padding: 1.5rem;
 header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  p{
    color: var(--color-Grayish-blue);

  }
  .counter{
    background-color: var(--color-Blue);
    padding: 0.15rem 0.6rem;
    border-radius: 0.3rem;
    color: var(--color-White);
    margin-left: 0.4rem;
  }
 }

`
const Card = styled.div`
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
const Cardirisky = styled.div`

margin-bottom: 0.5rem;
background-color: var(--color-Light-grayish-blue-2);
padding: 1rem;
border-radius: 0.5rem;
display: flex;
gap: 1rem;
box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
align-items: flex-start;
`
