import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
// import './Home.css';
import { Link } from 'react-router-dom';
// import g from './g1.png'
// import x from './xd.svg'
// import f from './figma.svg'
import {BsEnvelope} from 'react-icons/bs'
import {FaPaperPlane} from 'react-icons/fa'
const Footer = () => {
  return (
    <div>

<footer className="footer-section">
			<Container>

				<div className="row ">
					<div className="col-12 col-lg-6">
						<div className="mb-3 footer-logo-wrap"><strong className="footer-logo">OnewayTemplate<span>.</span></strong></div>
						<p className="">Inspired by the urge for perfection and convenience, now designers can get the job done with ease  </p>	
					</div>

				
					
					<div className="col-12 col-lg-6">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center"><span className="me-1"><BsEnvelope/></span><span>Subscribe to Newsletter <span className='soon'>(coming soon 😉)</span></span></h3>

							<form  className="row g-3 mt-4">
								<div className="col-auto">
									<input type="text" className="form-control"  disabled placeholder="Enter your name" style={{cursor:'not-allowed'}}/>
								</div>
								<div className="col-auto">
									<input type="email" className="form-control" disabled placeholder="Enter your email" style={{cursor:'not-allowed'}}/>
								</div>
								<div className="col-auto">
									<button className="btn  me-2" disabled>
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
							<p className="mb-2 text-center text-lg-start">Copyright All Rights Reserved. &mdash; Designed with love by  <a target='_blank' rel="noreferrer" href="https://vestarplus.com/"> <span style={{'color':'#FFB62A'}}>VestarPlus</span></a>
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
		</footer>




    </div>
  )
}

export default Footer