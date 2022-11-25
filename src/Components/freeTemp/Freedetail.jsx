import React from 'react';
import '../detailedPage/Detailed.css';

import f from '../detailedPage/figma.svg';

import { useParams,useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Data from '../../Free.json';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Freedetail = () => {

  const { id } = useParams();
  const render = Data[id - 1];
const navigate = useNavigate()
  const onSuccess = () => {
    navigate(`/thankfree183636egndh03984*5^n/${render.id1}`);
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
      </Form.Group>
    </Form>
                    </Card.Text>
                    <Button onClick={onSuccess} className=" mt-3 " variant='light' style={{fontSize:'16px',backgroundColor:'#FFB62A'}}> Proceed Download</Button>
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

    </div>
  )
}

export default Freedetail