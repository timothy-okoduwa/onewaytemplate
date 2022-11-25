import React, { useState } from 'react';
import './Detailed.css';
// import v from './g3.png';
import f from './figma.svg';
// import { BsEnvelope } from 'react-icons/bs';
// import { FaPaperPlane } from 'react-icons/fa';
import { useParams,useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Data from '../../Data.json';
import { usePaystackPayment } from 'react-paystack';
import Form from 'react-bootstrap/Form';

const Detailed = () => {
	const [email,setEmail]=useState("")
	// const [firstname,setFirstname]=useState("")
	// const [lastname,setLastname]=useState("")
	const [name,setName]=useState("")
  const { id } = useParams();
  const render = Data[id - 1];
const navigate = useNavigate()
  const config = {
    reference: new Date().getTime().toString(),
    // firstName:firstname,
    // lastName:lastname,
    email: email,
    phone : name,
    amount: render.price * 100,
    publicKey: 'pk_live_dc0a46a8affdd06e7d7a9ce3bfd5c842c71d0511',
    // publicKey: 'pk_test_89aaa353160cbf6c9c97b5efb14e4e0ff3f5f5eb',
  };

  // console.log(email)
  const onSuccess = (reference) => {

    navigate(`/thakjeuyeyou112jrhghrhdgdhdgdvhd9876789jdEUIEU3U3U32UI43838ydjhgUYtyrtdhy9UJJSSH9276gdgnc12(*-*)487/${render.id1}`);
    setEmail(" ");
    setName(" ");
  };

  
  const onClose = () => {
  
    alert('something went wrong make sure you enter your valid Email address 📧');
    setEmail(" ");
    setName(" ");
  };

  const PaystackHookExample = () => {

    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
          className="btn  me-2 d-flex justify-content-center"
        >
          <div classname="wowxx">Start Purchase</div>
        </button>
      </div>
    );
  };

  return (
    <div>
      {
        <>
          <div className="aboutscreen">
            <div className="container ">
              <div className="gemu ">
                <div className="gemu">{render.longname}</div>
              </div>
              <div className="dist">{render.headerdist}</div>
            </div>
          </div>
          <br />
          <br />
          <div className="container">
            <div className="gistss">
              <div className="mb-5">
                <div className="row">
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center ">
                    <div>
                      <img
                        src={render.banner1} 
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={render.banner2}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center ">
                    <div>
                      <img
                        src={render.banner3}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={render.banner4}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center ">
                    <div>
                      <img
                        src={render.banner5}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={render.banner6}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center ">
                    <div>
                      <img
                        src={render.banner7}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={render.banner8}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="nenvvd">
                <Card style={{ width: '18rem', padding: '5px' }}>
                  <Card.Img variant="top" src={render.thumbnail} style={{height:'200px'}} />
                  <Card.Body>
                    <Card.Title style={{fontSize:'25px'}}>{render.name}</Card.Title>
                    <Card.Text>
                      <div>
                        ✓ {render.longname} <br />
                        
                        <div className=" claa">
                          <strong>
                            ✓ <span className="linethr">N</span> {render.price}{' '}
                            <br />
                          </strong>
                        </div>
                      </div>
                      <Form >
      <Form.Group className="mb-3">
       
        {/* <Form.Control className='mt-2' type="email" value={firstname} onChange={(e)=>setFirstname(e.target.value)} placeholder="Enter first name"  />
        <Form.Control className='mt-2' type="email" value={lastname} onChange={(e)=>setLastname(e.target.value)} placeholder="Enter last name"  /> */}
        <Form.Control className='mt-2' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"  />
        <Form.Control className='mt-2' type="number" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Phone number"  />
      
      </Form.Group>
    </Form>
                    </Card.Text>
                    <PaystackHookExample />
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div>
            <div className="container">
              <div className="detailss">
                <strong>Overview</strong>
                <br />
                <br />
                <div>{render.longdist}</div>
                <br />
                <br />
                <hr />
                <strong>Compatibility</strong>
                <br />
                <div>
                  <img src={f} alt="" />
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </>
      }
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <footer className="footer-section">
			<Container>

				<div className="row ">
					<div className="col-12 col-lg-6">
						<div className="mb-4 footer-logo-wrap"><span className="footer-logo">FigTemplate<span>.</span></span></div>
						<p className="">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>	
					</div>

				
					
					<div className="col-12 col-lg-6">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center"><span className="me-1"><BsEnvelope/></span><span>Subscribe to Newsletter</span></h3>

							<form  className="row g-3 mt-4">
								<div className="col-auto">
									<input type="text" className="form-control" placeholder="Enter your name"/>
								</div>
								<div className="col-auto">
									<input type="email" className="form-control" placeholder="Enter your email"/>
								</div>
								<div className="col-auto">
									<button className="btn  me-2">
										<FaPaperPlane/>
									</button>
								</div>
							</form>

						</div>
					</div>
			
				

				</div>

				<div className="border-top copyright">
					<div className="row pt-4">
						<div className="col-lg-6">
							<p className="mb-2 text-center text-lg-start">Copyright All Rights Reserved. &mdash; Designed with love by <a target='_blank' rel="noreferrer" href="https://vestarplus.com/"> <span style={{'color':'#FFB62A'}}>VestarPlus</span></a>
            </p>
						</div>

						<div className="col-lg-6 text-center text-lg-end">
							<ul className="list-unstyled d-inline-flex ms-auto">
              <Link to='feield' className="me-4"><span>Terms Conditions</span></Link>
								<li><span >Privacy Policy</span></li>
							</ul>
						</div>

					</div>
				</div>

			</Container>
		</footer> */}
    </div>
  );
};

export default Detailed;
