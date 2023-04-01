import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/FrameComponent";
import CustomerSignup2 from "./pages/CustomerSignup2";
import Product from "./pages/Product";
import SellerSignup from "./pages/SellerSignup";
import SelllerSignup2 from "./pages/SelllerSignup2";
import CustomerOtp from "./pages/CustomerOtp";
import CustomerSignup from "./pages/CustomerSignup";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/customer-signup-2":
        title = "";
        metaDescription = "";
        break;
      case "/product":
        title = "";
        metaDescription = "";
        break;
      case "/seller-signup":
        title = "";
        metaDescription = "";
        break;
      case "/selller-signup-2":
        title = "";
        metaDescription = "";
        break;
      case "/customer-otp":
        title = "";
        metaDescription = "";
        break;
      case "/customer-signup":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={< CustomerSignup/>} />
      <Route path="/customer-signup-2" element={<CustomerSignup2 />} />
      <Route path="/product" element={<Product />} />
      <Route path="/seller-signup" element={<SellerSignup />} />
      <Route path="/selller-signup-2" element={<SelllerSignup2 />} />
      <Route path="/customer-otp" element={<CustomerOtp />} />
      <Route path="/frame-component" element={<FrameComponent />} />
    </Routes>
  );
}
export default App;
