import React from 'react';
import Container from 'react-bootstrap/Container';
import './Home.css';
import { Link } from 'react-router-dom';

import useFetch from '../hooks/useFetch'

const HomePage = () => {
  const { loading, error, data } = useFetch('https://wayback.up.railway.app/paids')

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
                Where exclusive designs meet designers, with different layout and 
                asthetics, <br/> just click and you own it FOR LIFE 😉
                </div>
                <div className="tbutton">
          
           <a href="#downtown">
           <button className="btn mt-3 me-2">Get Started</button>
          
           </a>
                
           <a href="#downtown">
                  <button className="btn btn-white-outline mt-3 me-33">
                    See Templates
                  </button>
                  </a>
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
data.map((props)=>(
	<div className="col-12 col-md-4 col-lg-3 mb-5 ">
	<Link className="product-item"  to={`/detailed/${props.id}`} >	
  <div className='flexx'>
  <img
		src={`https://wayback.up.railway.app${props.sight.formats.large.url}`}
		alt=""
		className=" product-thumbnail2"
    style={{width:'100%',height:'200px',objectFit:'cover'}}
	  />
	  <div className="lux">
		<div className="product-title2">{props.name}</div>
		<div className="product-price2">
		  {' '}
		  <span className="linethr">N</span> {props.price}
		</div>
	  </div>
	  <div className="worry">
		<div>
		  <img src={`https://wayback.up.railway.app${props.compact.url}`} alt=""  />
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
  );
};

export default HomePage;
