import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
const carouselInstance = (
  <Carousel>
    <Carousel.Item>
      <img width={1140} height={520} alt="900x500" src="http://img5.imgtn.bdimg.com/it/u=2283482237,2293414720&fm=26&gp=0.jpg"/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1140} height={520} alt="900x500" src="http://img2.imgtn.bdimg.com/it/u=769928206,2368300894&fm=26&gp=0.jpg"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1140} height={520} alt="900x500" src="http://img0.imgtn.bdimg.com/it/u=389691311,575082289&fm=26&gp=0.jpg"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
class Home extends Component {
    render() {
        return (
            <div>
                欢迎来到主页
                {carouselInstance}
            </div>
        );
    }
}

export default Home;