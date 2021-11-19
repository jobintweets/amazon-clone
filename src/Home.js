import React from 'react'
import './Home.css';
import Product from './Product'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Home() {
     const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
        <div className = "home">
        <div className = "home__container">
       
      {/* <Slider {...settings} className="home_slider">
      <div>
        <img className = "home__containerImage" src = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Kamya/MiTV_banner_3000x12001._CB644141252_.jpg" alt = "slider" />
    </div>
      <div>
        <img className = "home__containerImage" src = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_3000x1200_CBCC._CB667391209_.jpg" alt = "slider" />
    </div>
      <div>
        <img className = "home__containerImage" src = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroJune21/2x_Echo_Dot_B084DWH53T_3000x1200_new._CB667724833_.jpg" alt = "slider" />
     </div>
      <div>
        <img className = "home__containerImage" src = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Kamya/RedmiTVbannerGW_3000x1200._CB643932692_.jpg" alt = "slider" />
     </div>
    <div>
    <img className = "home__containerImage" src = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/MSD_16thAug/Family/D20729242_IN_WLME_SamsungM_Family_DesktopTallHero_3000x1200_2._CB644529881_.jpg" alt = "slider" />
    </div>
    </Slider> */}
        <img className = "home__containerImage" src = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroJune21/2x_Echo_Dot_B084DWH53T_3000x1200_new._CB667724833_.jpg" alt = "slider" />

    </div>

            <div className = "home__row">
                <Product
                    id={11}
                    title="Apple Macbook Pro"
                    price="2500.99"
                    image="https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs-jpg.webp"
                    rating={5}
                />
                <Product
                    id={12}
                    title="Iphone 11 pro max"
                    price="2500.99"
                    image="https://images-eu.ssl-images-amazon.com/images/I/41FxzzJx6cL._SY445_SX342_QL70_FMwebp_.jpg"
                    rating={4}
                />
            </div>
            <div className = "home__row">
                 <Product
                    id={13}
                    title="Apple Macbook Pro"
                    price="2500.99"
                    image="https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs-jpg.webp"
                    rating={5}
                />
                <Product
                    id={14}
                    title="Iphone 11 pro max"
                    price="2500.99"
                    image="https://images-eu.ssl-images-amazon.com/images/I/41FxzzJx6cL._SY445_SX342_QL70_FMwebp_.jpg"
                    rating={4}
                />
                  <Product
                    id={15}
                    title="Iphone 11 pro max"
                    price="2500.99"
                    image="https://images-eu.ssl-images-amazon.com/images/I/41FxzzJx6cL._SY445_SX342_QL70_FMwebp_.jpg"
                    rating={4}
                />
            </div>
            <div className="home__row">
                  <Product
                    id={16}
                    title="It's very weird because I just follow the documentation and created a token 2 weeks ago on GitHub expires on Tue, Oct 26 2021. Why has this been removed today?"
                    price="2500.99"
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Kamya/MiTV_banner_3000x12001._CB644141252_.jpg"
                    rating={4}
                />
            </div>
        </div>
    )
}

export default Home
