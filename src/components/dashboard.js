import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAirlines } from '../redux/actions/airline'
import { Link } from 'react-router-dom';


const Dashboard = () => {
  
  const loading = useSelector(state => state.airlines.loading)
  const error =  useSelector(state => state.airlines.error)
  const airlines = useSelector(state => state.airlines.airlines)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getAirlines())
  }, [dispatch])

  return(
     <div>
     	<h1>Dashboard11</h1>
      <Link to='/logout'>Logout</Link>
      { loading && 
        <div>
          Loading.....
        </div>
      }
      <p>{ error && error}</p>
      { airlines.length > 0 && airlines.map((airline, index) => {
        console.log(66767)
        return(
          <div key={index}>
            <p>{airline.name}</p>
          </div>
        )
      })
      }
      
     </div>
  	)
}


export default Dashboard;