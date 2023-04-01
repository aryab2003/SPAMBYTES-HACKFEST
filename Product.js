import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import ReactStars from "react-rating-stars-component";

const Product = () => {
  let tot=10;
  let p=3;
  let s=3;
  let pname="Sofa"
  const [message, setMessage] = useState('');
  const handleChange = (event) => {
  
    setMessage(event.target.value);
  };
  return (
    <div className="relative bg-white w-full h-[1063px] overflow-hidden text-center text-21xl text-white font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[1460px] h-[1063px] object-cover"
        alt=""
        src="/960x0-1@2x.png"
      />
      <nav className="absolute top-[0px] left-[0px] bg-gainsboro-200 w-[1460px] h-[149px]" />
      <img
        className="absolute top-[13px] left-[19px] w-[125px] h-[117px] object-cover"
        alt=""
        src="/whatsapp-image-20230329-at-621-1@2x.png"
      />
      <a className="absolute top-[57px] left-[72px] text-4xl font-semibold text-[inherit] text-left inline-block w-[15px] h-[34px] [text-decoration:none]">
        D
      </a>
      <h1 className="m-0 absolute top-[44px] left-[163px] text-[inherit] font-semibold font-inherit text-left inline-block w-[207px] h-[54px]">
        <p className="m-0">DeEcomm</p>
      </h1>
      <div className="absolute top-[341.5px] left-[529.5px] box-border w-px h-[59px] border-r-[1px] border-solid border-gray-200" />
      <Form.Group className="w-[548px] [border:none] bg-[transparent] absolute top-[45px] left-[440px]">
        <Form.Control type="text" placeholder="Search" />
      </Form.Group>
     <button> <img
        className="absolute top-[52px] left-[955px] w-[33px] h-[31px] object-cover"
        alt=""
        src="/mg-1@2x.png"
      /></button> 
      <img
        className="absolute top-[56px] left-[1225px] w-[58px] h-[35px] object-cover"
        alt=""
        src="/user-1@2x.png"
      />
      <div className="absolute top-[60px] left-[1298px] text-[20px] font-semibold inline-block w-[118px] h-[31px]">
        User Name
      </div>
      <img
        className="absolute top-[240px] left-[32px] rounded-xl w-[595px] h-[614px] object-cover"
        alt=""
        src="/rectangle-25@2x.png"
      />
      <div className="absolute top-[219px] left-[530px] font-semibold inline-block w-[499px] h-[123px]">
        {pname}
      </div>
      <div className="absolute top-[385px] left-[678px] font-semibold inline-block w-[277px] h-[70px]">
        Price:${p}
      </div>
      <div className="absolute top-[385px] left-[942px] font-semibold inline-block w-[461px] h-[59px]">
        Available quantity:{tot}
      </div>
      <div className="absolute top-[532px] left-[740px] text-17xl font-semibold inline-block w-[289px] h-[57px]">
        Select Quantity
      </div>
      
      <Form.Group className="w-[54px] [border:none] bg-[transparent] absolute top-[530px] left-[1100px]">
        <Form.Control type='number' id="message" value={message} onChange={handleChange} />
      </Form.Group>
      
      <div className="absolute top-[707px] left-[721px] font-semibold text-left inline-block w-[577px] h-[71px]">
        Total Price:{Number(message)*p}

      </div>
      <Button className="absolute top-[900px] left-[900px] w-[200px]" variant="primary">
        BUY
      </Button>
      <div id="stars" className=" absolute top-[600px] left-[800px]">
        <span>Rating
        <ReactStars

count={5}
value={s}
edit={false}
size={24}
activeColour="#ffd700"

/></span>
      </div>
      
    </div>

  );
};

export default Product;
