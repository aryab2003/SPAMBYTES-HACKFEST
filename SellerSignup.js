import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SellerSignup = () => {
  const navigate= useNavigate();
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
      <h1 className="m-0 absolute top-[183px] left-[433px] text-[inherit] font-semibold font-inherit inline-block w-[595px] h-[55px]">
        Seller SignUp
      </h1>
      <input
        className="[border:none] bg-white absolute top-[370px] left-[362px] w-[781px] h-[81px]"
        type="text"
      />
      <h1 className="m-0 absolute top-[327px] left-[511px] text-[inherit] font-semibold font-inherit inline-block w-[440px] h-[30px]">
        Full Address
      </h1>
     
      <input
        className="[border:none]  bg-white absolute top-[532px] left-[302px]"
        type="text"
      />
      
      <input
        className="[border:none] bg-white absolute top-[532px] left-[851px] w-[419px] h-[50px]"
        type="text"
      />
      <h1 className="m-0 absolute top-[491px] left-[362px] text-[inherit] font-semibold font-inherit inline-block w-[283px] h-[37px]">
        Country
      </h1>
      <h1 className="m-0 absolute top-[493px] left-[956px] text-[inherit] font-semibold font-inherit inline-block w-[265px] h-[37px]">
        State
      </h1>
      <input
        className="[border:none] bg-white absolute top-[775px] left-[374px] w-[379px] h-[37px]"
        type="text"
      />
      <h1 className="m-0 absolute top-[708px] left-[417px] text-[inherit] font-semibold font-inherit inline-block w-[272px] h-[37px]">
        City
      </h1>
      <input
        className="[border:none] bg-white absolute top-[775px] left-[899px] w-[371px] h-[37px]"
        type="text"
      />
      <h1 className="m-0 absolute top-[716px] left-[968px] text-[inherit] font-semibold font-inherit inline-block w-[276px] h-[37px]">
        Pincode
      </h1>
      <Button
        className="w-[552px] absolute top-[941px] left-[537px]"
        variant="primary"
        onClick={()=>{
          navigate("/selller-signup-2")
        }}
      >
        Verify Phone Number
      </Button>
      
    </div>
  );
};

export default SellerSignup;
