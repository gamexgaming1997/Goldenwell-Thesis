import React from 'react';
import '../../../../scss/PullReceiveItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ItemPullReceive } from '../../../../controllers/Actions.js';
import { PullReceive } from '../../../../api/api.js';
import { useHistory } from 'react-router-dom';

const PullReceiveItem = ({ ID, receive, setReceive, setPull, pull }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const transi = React.useRef();

    const [client] = React.useState(JSON.parse(localStorage.getItem('Client')));

    console.log(client.result._id);
    console.log(receive);

    React.useEffect(()=> {
      if(receive && transi.current){
        transi.current.style.opacity = '0';
        setTimeout(() => {
          if(receive !== ''){
            dispatch(ItemPullReceive(client.result._id,receive));
            setReceive('');
            setTimeout(() => {
              history.push('/');
              window.location.reload();
            }, 1000);
          }
        }, 2000);
      }
    },[receive])

    React.useEffect(()=>{
      if(pull && transi.current){
        transi.current.style.opacity = '0';
        setTimeout(() => {
          if(pull !== ''){
            PullReceive(client.result._id,pull);
            setReceive('');
            setTimeout(() => {
              history.push('/');
              window.location.reload();
            }, 1000);
          }
        }, 2000);
      }
    },[pull])

  return (
    <div className={ID} ref={transi}>
        Redirecting.....
    </div>
  )
}

export default PullReceiveItem;