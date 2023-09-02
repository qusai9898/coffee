import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ng from '../Frame.png'
import im from '../im.png'
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
      <Card style={{ width: '25rem' }}>
      <Card.Body>
      <img src={ng}/>
        <Card.Text>
        
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    
    </Card>
    <img  className='im2' src={im}/>
      </Carousel.Item>

      <Carousel.Item>
      <Card style={{ width: '25rem' }}>
      <Card.Body>
      <img src={ng}/>
        <Card.Text>
        
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    
    </Card>
    <img  className='im2' src={im}/>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: '25rem' }}>
      <Card.Body>
      <img src={ng}/>
        <Card.Text>
        
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    
    </Card>
    <img  className='im2' src={im}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;