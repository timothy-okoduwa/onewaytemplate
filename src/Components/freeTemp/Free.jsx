import React from 'react'
import '../Home/Home.css'

import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

import x from '../Home/xd.svg'
import f from '../Home/figma.svg'
import Data from '../../Free.json'
// import { Link } from "react-scroll";
const Free = () => {
  return (
    <div>
      {/* Start Hero Section */}
	  
      <div className="hero">
        <Container>
          <div className="d-flex justify-content-center">
            <div>
              <div className="intro-excerpt ">
                <div className="figman">
                  The Best Landing Page Design Inspiration, Templates and More.
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
Data?.map((props)=>(
	<div className="col-12 col-md-4 col-lg-3 mb-5">
	<Link className="product-item" key={props.id} to={`/freed/${props.id1}`} >	
  <div className='flexx'>
  <img
		src={props.thumbnail}
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
		  <img src={f} alt="" className="px-3" />
		</div>
		<div>
		  <img src={x} alt="" className="px-3" />
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