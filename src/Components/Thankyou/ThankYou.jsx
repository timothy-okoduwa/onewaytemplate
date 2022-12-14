import React from 'react'
import './ThankYou.css'
// import g from './g1.png'
import { useParams,useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch'

const ThankYou = () => {
    const { id } = useParams();
    const { loading, error, data } = useFetch('https://wayback.up.railway.app/paids/' + id)
  
   const navigate= useNavigate()
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    const move = ()=>{
      navigate('/')
    }
  return (
    <div style={{'marginTop':'120px'}}>

{
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-12 text-center pt-5">
        {/* <span className="display-3 thankyou-icon text-light">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart-check mb-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z"/>
            <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
        </span> */}
                  <div className=''>
<img src={`https://wayback.up.railway.app${data.sight.formats.large.url}`} alt=""   className='jorro'/>
          </div>
          <br/>
        <h2 className="display-3 text-black2">Thank you!</h2>
        <p className="lead2 mb-2">We have verified your Payment for <strong style={{color:'#FFB62A'}}>{data.name}</strong> template</p>
        <div className='imageholderr'>

        
        </div>
        <div className="namess">
          <span id='write'></span>
          <span id='write2'></span>
        </div>
        <p><span id='write3' className="emails"></span></p>
         <a  href={data.url} target="_blank" rel="noreferrer" className="btn mt-2 me-2 mb-3" onClick={move} >Download Now</a>
  
      </div>
    </div>
  </div>

}


    </div>
  )
}

export default ThankYou