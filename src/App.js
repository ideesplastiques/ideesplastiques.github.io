import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MobileDOWNLOAD from "./pages/MobileDOWNLOAD";
import MobileMAIN from "./pages/MobileMAIN";
import DesktopMAIN from "./pages/DesktopMAIN";
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
      case "/mobile-main":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-main":
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
      <Route path="/" element={<MobileDOWNLOAD />} />
      <Route path="/mobile-main" element={<MobileMAIN />} />
      <Route path="/desktop-main" element={<DesktopMAIN />} />
    </Routes>
  );
}
export default App;
