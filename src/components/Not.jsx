import React,{useState,useContext} from 'react'
import styled from 'styled-components'
import Toggle from './Toggle'
import Mark from '../assets/images/avatar-mark-webber.webp'
import Angela from '../assets/images/avatar-angela-gray.webp'
import Jacob from '../assets/images/avatar-jacob-thompson.webp'
import smith from '../assets/images/avatar-kimberly-smith.webp'
import chess from '../assets/images/image-chess.webp'
import Anna from '../assets/images/avatar-anna-kim.webp'
import Risky from '../assets/images/avatar-rizky-hasanuddin.webp'
import nathan from '../assets/images/avatar-nathan-peterson.webp'
import toogleContext from './Context'
const data =[
    {
        name:'Mark Webber',
        image:Mark,
        ptag:'reacted to your recent post',
        time:'1m ago',
        span:'My first tournament today!',
        // textptag:'',
        chess:'',

    },
    {
        name:'Angela Gray',
        image:Angela,
        ptag:'followed you',
        time:'5m ago',
        span:'',
        // textptag:'',
        chess:'',

    },
    {
        name:'Jacob Thompson',
        image:Jacob,
        ptag:'has joined your group',
        time:'1 day ago',
        span:'',
        // textptag:'',
        chess:'',

    },
    {
        name:'Risky Hasanuddin',
        image:Risky,
        ptag:'sent you a private message',
        time:'5 day ago',
        span:'',
        textptag:'Hello, thanks for setting up the Chess Club. Ive a member for a few weeks now and im already having a lots of fun and improving my game.',
        chess:'',

    },
    {
        name:'Kimberly Smith',
        image:smith,
        ptag:'commented on your picture',
        time:'1 week ago',
        span:'',
        chess:chess,
        // textptag:'',
    },
    {
        name:'Nathan Peterson',
        image:nathan,
        ptag:'reacted to your recent post',
        time:'2 weeks ago',
        span:'5 end-game strategie to increase your win rate',

    },
    {
        name:'Anna Kim',
        image:Anna,
        ptag:'left the group ',
        time:'2 weeks ago',
        span:'Chess Club'
        
    },
]
const Notification = () => {
    const [counter,setCounter] =useState(0)
    const MarkallRead =()=>{
        setCounter(0)
        setColor(prev=>null)
    }
    
  const color = useContext(toogleContext)
  const setColor = useContext(toogleContext)
  
  return (
    <Notificationstyle>
        <header>
          <h4>Notifications <small className='counter'>{counter}</small></h4>
          <p onClick={MarkallRead}>Mark all as read</p>
        </header>
        {data.map(item=>{
            return(
                <Toggle key={item.name} setCounter={setCounter} counter={counter} item={item}/>
            )
        })}
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
    cursor: pointer;

  }
  .counter{
    background-color: var(--color-Blue);
    padding: 0.15rem 0.6rem;
    border-radius: 0.3rem;
    color: var(--color-White);
    margin-left: 0.4rem;
  }
 }
/* MEDIA QUERIES */

@media screen and (max-width:1024px) {
    width: var(--container-width-md);
}
@media screen and (max-width:600px) {
    width: var(--container-width-sm);
    margin: 0;
    header{
        p{
            font-size: 12px;
        }
    }
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
