import React from 'react'
import '../Home/Home.css'

import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';



import useFetch from '../hooks/useFetch'
// import { Link } from "react-scroll";
const Free = () => {
  const { loading, error, data } = useFetch('https://wayback.up.railway.app/frees')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data)
  return (
    <div>
      {/* Start Hero Section */}
	  
      <div className="hero">
        <Container>
          <div className="d-flex justify-content-center">
            <div>
              <div className="intro-excerpt ">
                <div className="figman">
                  The Best Design Inspiration, Templates and More.
                </div>
                <div className=" doneck mt-4 mb-4 d-flex justify-content-center">
                  Get free templates you can use anytime, just pick and download and it's yours 
                </div>
                <div className="tbutton">
          
           <a href="#downtown">
           <button className="btn mt-3 me-2"> See Templates</button>
          
           </a>
                
           {/* <a href="#downtown">
                  <button className="btn btn-white-outline mt-3 me-33">
                    See Templates
                  </button>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* End Hero Section  */}

      <div style={{backgroundColor:'#0F0E1F'}} id='downtown'>
        <div className=" checkkk">
          {/* <div> our total template is 0 Happy Surfing 😄 </div> */}
        </div>

        <Container >
			
          <div className="row">
{ 
data?.map((props)=>(
	<div className="col-12 col-md-4 col-lg-3 mb-5">
	<Link className="product-item" key={props.id} to={`/freed/${props.id}`} >	
  <div className='flexx'>
  <img
		src={`https://wayback.up.railway.app${props.fsight.formats.large.url}`}
		alt=""
		className=" product-thumbnail2"
    style={{width:'100%'}}
	  />
	  <div className="lux">
		<div className="product-title2">{props.name}</div>
		<div className="product-price2">
		  {' '}
		 {props.price}
		</div>
	  </div>
	  <div className="worry">
		<div>
		  <img src={`https://wayback.up.railway.app${props.fcompact.url}`} alt=""  />
		</div>
		<div>
		  <img src={props.both} alt="" className="px-3" />
		</div>
	  </div>

  </div>
	</Link>
  </div>
))
}
          </div>
        </Container>
      </div>
<br />
<br />
<br />

    </div>
  )
}

export default Free