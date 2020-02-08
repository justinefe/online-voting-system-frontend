import React from 'react';
import './index.scss';
import SideBar from '../../layout/SideBar';
import { Card, Jumbotron, Container } from 'react-bootstrap';
import ControlledCarousel from '../../components/Carousel';
import CandidateInfo from '../../layout/CandidateInfo';


const viewCandidate =()=> {
      return (
            <div className='dashboard-main'>
            <div className='aside-main'>
               <SideBar />
           </div>
                <div className='main-side'>
                    <div className='main-top'>
                       <ControlledCarousel/>
                    </div>
                    <div className='main-bottom'>  
                    
                    <Jumbotron>
                    <Container>
                      <h1 className='text-center'> Manifesto</h1>
                      <blockquote  className='blockquote'>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content. Carousels don’t automatically normalize slide dimensions.
                         As such, you may need to use additional utilities or custom styles to appropriately size content.
                          While carousels support previous/next controls and indicators, 
                        they’re not explicitly required. Add and customize as you see fit.
                      </blockquote>
                        <hr></hr>
                      <div className='row'>
                        <div className='col-md-8'>
                            <Card >
                            <Card.Body>
                              <Card.Title>Biography</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                              <Card.Text>
                              This is a modified jumbotron that occupies the entire horizontal space of
                              its parent.
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content. Carousels don’t automatically normalize slide dimensions.
                               As such, you may need to use additional utilities or custom styles to appropriately size content.
                                While carousels support previous/next controls and indicators, 
                              they’re not explicitly required. Add and customize as you see fit.
                              </Card.Text>
                              <Card.Link href="#">Card Link</Card.Link>
                              <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                          </Card>
                          <button className='btn text-center'> Click to vote</button>
                        </div>
                        <div className=' panel panel-default col-md-4'> 
                        <h1 className='panel-heading text-center'>Candidate information</h1>
                        <div className='panel-body'>
                          <ul className='list-group'>
                            <li className='list-group-item'>{CandidateInfo}</li>
                          </ul>                        
                        </div>
                        
                        </div>
                        <div>
                        
                        </div>
                      </div>
                     
                    </Container>
                  </Jumbotron>
                     </div>            
                   </div> 
            </div>                 
        );
};

export default viewCandidate;

// <div className='alert alert-success alert-dismissable' role='alert'> <span> Hi welcome to me portal please vote for me</span> <button data-dismiss='alert'><span>&times;</span></button> </div>

// <div className=' col-md-3 container'>sdgsda
// llk;k;lk
// </div>
// <div className=' col-md-4 container'>
// kjkjl;kjkj
//     <div className="card" style="width: 18rem;">
//         <img src="..." className="card-img-top" alt="..."/>
//         <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" className="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>
// </div>
<div className=' col-md-5 container'>asdgadsgag</div>