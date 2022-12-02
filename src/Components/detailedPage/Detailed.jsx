import React, { useState } from 'react';
import './Detailed.css';

import { useParams,useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch'
import { usePaystackPayment } from 'react-paystack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const Detailed = () => {
	const [email,setEmail]=useState("")
	const [name,setName]=useState("")
  const { id } = useParams();
  const { loading, error, data } = useFetch('https://wayback.up.railway.app/paids/' + id)
const navigate = useNavigate()
if (loading) return <p>Loading...</p>
if (error) return <p>Error :(</p>
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    phone : name,
    amount: data.price * 100,
    publicKey: 'pk_live_dc0a46a8affdd06e7d7a9ce3bfd5c842c71d0511',
    // publicKey: 'pk_test_89aaa353160cbf6c9c97b5efb14e4e0ff3f5f5eb',
  };
  const onSuccess = (reference) => {

    navigate(`/thakjeuyeyou112jrhghrhdgdhdgdvhd9876789jdEUIEU3U3U32UI43838ydjhgUYtyrtdhy9UJJSSH9276gdgnc12(*-*)487/${data.id}`);
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
        <Button
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
          className=" mt-1 " variant='light' style={{fontSize:'16px',backgroundColor:'#FFB62A'}}
        >
          <div classname="wowxx">Start Purchase</div>
        </Button>
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
                <div className="gemu">{data.longname}</div>
              </div>
              <div className="dist">{data.headerdist}</div>
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
                        src={`https://wayback.up.railway.app${data.banner1.formats.large.url}`} 
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.banner2.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center ">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.banner3.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.banner4.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center ">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.banner5.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.banner6.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center ">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.banner7.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.banner8.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="nenvvd">
                <Card style={{ width: '18rem', padding: '5px' }}>
                  <Card.Img variant="top" src={`https://wayback.up.railway.app${data.sight.formats.large.url}`} style={{height:'200px'}} />
                  <Card.Body>
                    <Card.Title style={{fontSize:'25px'}}>{data.name}</Card.Title>
                    <Card.Text>
                      <div>
                        ✓ {data.longname} <br />
                        
                        <div className=" claa">
                          <strong>
                            ✓ <span className="linethr">N</span> {data.price}{' '}
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
                <div>{data.discription}</div>
                <br />
                <br />
                <hr />
                <strong>Compatibility</strong>
                <br />
                <div>
                  <img src={`https://wayback.up.railway.app${data.compact.url}`} alt="" />
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

    </div>
  );
};

export default Detailed;
