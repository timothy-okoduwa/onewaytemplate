import React from 'react';
import '../detailedPage/Detailed.css';



import { useParams,useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Freedetail = () => {

  const { id } = useParams();
  const { loading, error, data } = useFetch('https://wayback.up.railway.app/frees/' + id)
  
const navigate = useNavigate()
if (loading) return <p>Loading...</p>
if (error) return <p>Error :(</p>
  const onSuccess = () => {
    navigate(`/thankfree183636egndh03984*5^n/${data.id}`);
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
                        src={`https://wayback.up.railway.app${data.fbanner1.formats.large.url}`} 
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.fbanner2.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center ">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.fbanner3.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.fbanner4.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center ">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.fbanner5.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.fbanner6.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center ">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.fbanner7.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4 col-lg-11 d-flex justify-content-center">
                    <div>
                      <img
                        src={`https://wayback.up.railway.app${data.fbanner8.formats.large.url}`}
                        alt=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="nenvvd">
                <Card style={{ width: '18rem', padding: '5px' }}>
                  <Card.Img variant="top" src={`https://wayback.up.railway.app${data.fsight.formats.large.url}`} style={{height:'200px',objectFit:'cover'}} />
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
                <div>{data.discription}</div>
                <br />
                <br />
                <hr />
                <strong>Compatibility</strong>
                <br />
                <div>
                  <img src={`https://wayback.up.railway.app${data.fcompact.url}`} alt="" />
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