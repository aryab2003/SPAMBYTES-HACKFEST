import { useNavigate } from "react-router-dom";

const FrameComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white w-full h-[1063px] overflow-hidden text-left text-21xl text-white font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[1460px] h-[1063px] object-cover"
        alt=""
        src="/960x0-1@2x.png"
      />
      <h1 className="m-0 absolute top-[44px] left-[163px] text-[inherit] font-semibold font-inherit inline-block w-[207px] h-[54px]">
        <p className="m-0">DeEcomm</p>
      </h1>
      <nav className="absolute top-[0px] left-[0px] bg-gainsboro-200 w-[1460px] h-[149px]" />
      <button className="cursor-pointer [border:none] p-0 bg-chocolate absolute top-[487px] left-[461px] rounded-[30px] shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] w-[537px] h-[90px] hover:bg-sky-700" >Connect with MetaMask</button>
      <img
        className="absolute top-[13px] left-[19px] w-[125px] h-[117px] object-cover"
        alt=""
        src="/whatsapp-image-20230329-at-621-1@2x.png"
      />
      <a className="absolute top-[57px] left-[72px] text-4xl font-semibold text-[inherit] inline-block w-[15px] h-[34px] [text-decoration:none]">
        D
      </a>
      <div className="absolute top-[734px] left-[1061px] w-[100px] h-[100px] overflow-hidden" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[50px] left-[1225px] text-11xl font-imprima text-white text-left inline-block">
        Working
      </button>
      <button onClick={()=> navigate("/product")} className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[48px] left-[858px] text-11xl font-imprima text-white text-left inline-block w-[100px] h-[37px]">
        <p className="m-0">Product</p>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[48px] left-[1049px] text-11xl font-imprima text-white text-left inline-block">
        UseCase
      </button>
    </div>
  );
};

export default FrameComponent;
