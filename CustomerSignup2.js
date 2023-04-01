import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CustomerSignup2 = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-white w-full h-[1063px] overflow-hidden text-center text-21xl text-white font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[1460px] h-[1063px] object-cover"
        alt=""
        src="/960x0-1@2x.png"
      />
      <nav className="absolute top-[0px] left-[0px] bg-gainsboro-200 w-[1460px] h-[149px]" />
      <h1 className="m-0 absolute top-[44px] left-[163px] text-[inherit] font-semibold font-inherit text-left inline-block w-[207px] h-[54px]">
        <p className="m-0">DeEcomm</p>
      </h1>
      <img
        className="absolute top-[13px] left-[19px] w-[125px] h-[117px] object-cover"
        alt=""
        src="/whatsapp-image-20230329-at-621-1@2x.png"
      />
      <a className="absolute top-[57px] left-[72px] text-4xl font-semibold text-[inherit] text-left inline-block w-[15px] h-[34px] [text-decoration:none]">
        D
      </a>
      <div className="absolute top-[calc(50%_-_328.5px)] left-[calc(50%_-_195px)] font-semibold inline-block w-[389px] h-[68px]">
        Customer Sign-Up
      </div>
      <Form.Group className="w-[593px] [border:none] bg-[transparent] absolute top-[342px] left-[433px]">
        <Form.Control type="text" placeholder="Enter Your Address" />
      </Form.Group>
      <div className="absolute top-[283px] left-[433px] font-semibold">
        Full Address
      </div>
      <Form.Group className="w-72 [border:none] bg-[transparent] absolute top-[493px] left-[409px]">
        <Form.Control type="text" placeholder="Enter Country" />
      </Form.Group>
      <Form.Group className="w-72 [border:none] bg-[transparent] absolute top-[493px] left-[800px]">
        <Form.Control type="text" placeholder="Enter State" />
      </Form.Group>

      <Form.Group className="w-72 [border:none] bg-[transparent] absolute top-[650px] left-[800px]">
        <Form.Control type="text" placeholder="Enter PinCode " />
      </Form.Group>
      
      
      <Form.Group className="w-72 [border:none] bg-[transparent] absolute top-[650px] left-[400px]">
        <Form.Control type="text" placeholder="Enter City " />
      </Form.Group>
      
      <div className="absolute top-[433px] left-[409px] font-semibold">
        Country
      </div>
      <div className="absolute top-[433px] left-[763px] font-semibold">
        <p className="m-0">State</p>
      </div>
      <div className="absolute top-[583px] left-[400px] font-semibold">
        <p className="m-0">City</p>
      </div>
      
      <div className="absolute top-[583px] left-[763px] font-semibold">
        <p className="m-0">Pin Code</p>
      </div>
      <Button
        className="w-[449px] absolute top-[813px] left-[488px]"
        variant="primary"
        onClick={()=>{
          navigate("/customer-otp")
        }}
        
      >
        Verify Phone Number
      </Button>
      
    </div>
  );
};

export default CustomerSignup2;
