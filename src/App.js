import "./App.css";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider.js";
import data from "./data/data.json";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCT" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}  // Corrected property name
            />
          }
        />
        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
            music={data.hotAccessories.smartDevice}
            musicCover={data.hotAccessoriesCover.smartDevice}  // Corrected property name
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
            music={data.hotAccessories.home}
            musicCover={data.hotAccessoriesCover.home}  // Corrected property name
            />
          }
        />
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
            music={data.hotAccessories.lifeStyle}
            musicCover={data.hotAccessoriesCover.lifeStyle}  // Corrected property name
            />
          }
        />
        
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
            music={data.hotAccessories.mobileAccessories}
            musicCover={data.hotAccessoriesCover.mobileAccessories}  // Corrected property name
            />
          }
        />
        
      </Routes>
      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>
        <Heading text= "Latest Models" />
         <Videos videos={data.videos} /> 
       <Heading text="IN THE PRESS" />
       <Banner banner = {data.banner} /> 
       <Footer footer = {data.footer}/>
    </Router>
  );
}

export default App;
