import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SelllerSignup2 = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-white w-full h-[1063px] overflow-hidden text-center text-21xl text-white font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[1460px] h-[1063px] object-cover"
        alt=""
        src="/960x0-1@2x.png"
      />
      <button className="cursor-pointer [border:none] p-0 bg-mediumturquoise absolute top-[480px] left-[490px] rounded-21xl w-[449px] h-[69px]" />
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
      <Form.Group className="w-[593px] [border:none] bg-[transparent] absolute top-[342px] left-[433px]">
        <Form.Control type="text" placeholder="Enter Your Number" />
      </Form.Group>
      <div className="absolute top-[0px] left-[0px] bg-white w-[1441px] h-[1063px] overflow-hidden">
        <img
          className="absolute top-[0px] left-[0px] w-[1460px] h-[1063px] object-cover"
          alt=""
          src="/960x0-1@2x.png"
        />
        <button className="cursor-pointer [border:none] p-0 bg-mediumturquoise absolute top-[480px] left-[490px] rounded-21xl w-[449px] h-[69px]" />
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
        <Form.Group className="w-[593px] [border:none] bg-[transparent] absolute top-[342px] left-[433px]">
          <Form.Control type="text" placeholder="Enter Your Number" />
        </Form.Group>
        
        <div className="absolute top-[490px] left-[530px] font-semibold text-black inline-block w-[370px] h-[50px]">
          Get OTP
        </div>
        <Form.Group className="w-[88px] [border:none] bg-[transparent] absolute top-[643px] left-[442px]">
          <Form.Control type="text" placeholder="Digit1" />
        </Form.Group>
        <Form.Group className="w-[88px] [border:none] bg-[transparent] absolute top-[643px] left-[442px]">
          <Form.Control type="text" placeholder="Digit2" />
        </Form.Group>
        <Form.Group className="w-[88px] [border:none] bg-[transparent] absolute top-[643px] left-[895px]">
          <Form.Control type="text" placeholder="Digit4" />
        </Form.Group>
        <Form.Group className="w-[88px] [border:none] bg-[transparent] absolute top-[643px] left-[730px]">
          <Form.Control type="text" placeholder="Digit3" />
        </Form.Group>
        
        <button className="cursor-pointer [border:none] p-0 bg-mediumturquoise absolute top-[843px] left-[505px] rounded-21xl w-[449px] h-[69px]" />
        <h1 className="m-0 absolute top-[852px] left-[534px] text-[inherit] font-semibold font-inherit text-black inline-block w-[390px] h-[60px]">
          Sign Up
        </h1>
        <div className="absolute top-[284px] left-[481px] font-semibold inline-block w-[497px] h-[58px]">
          Enter Your Number
        </div>
       
        <div className="absolute top-[212px] left-[532px] font-semibold inline-block w-[392px] h-[51px]">
          Seller SignUp
        </div>
      </div>
      
        
      <div className="absolute top-[490px] left-[530px] font-semibold text-black inline-block w-[370px] h-[50px]">
        Get OTP
      </div>
      <Form.Group className="w-[88px] [border:none] bg-[transparent] absolute top-[643px] left-[442px]">
        <Form.Control type="text" placeholder="Digit1" />
      </Form.Group>
      <Form.Group className="w-[88px] [border:none] bg-[transparent] absolute top-[643px] left-[600px]">
        <Form.Control type="text" placeholder="Digit2" />
      </Form.Group>
      <Form.Group className="w-[88px] [border:none] bg-[transparent] absolute top-[643px] left-[895px]">
        <Form.Control type="text" placeholder="Digit4" />
      </Form.Group>
      <Form.Group className="w-[88px] [border:none] bg-[transparent] absolute top-[643px] left-[730px]">
        <Form.Control type="text" placeholder="DIgit3" />
      </Form.Group>
     
      <button
        className="cursor-pointer [border:none] p-0 bg-mediumturquoise absolute top-[843px] left-[505px] rounded-21xl w-[449px] h-[69px]"
        onClick={() => {
          navigate("/frame-component");
        }}
      >
        Verify Number
      </button>
     
    </div>

      
  );
};

export default SelllerSignup2;
