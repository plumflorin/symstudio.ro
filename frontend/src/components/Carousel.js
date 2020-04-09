import React from "react";
import { Carousel } from "react-responsive-carousel";

const Mycarousel = () => {



return (
    <div className="carousel-container">
        <Carousel showThumbs={false} autoPlay infiniteLoop={true} stopOnHover swipeable dynamicHeight={true} centerSlidePercentage={50} showStatus={false}>
                <div>
                    <img src="img/beauty2.jpg" alt="" />
                </div>
                <div>
                    <img src="img/spa1.jpg" alt="" />
                </div>
                <div>
                    <img src="img/beauty3.jpg" alt="" />
                </div>
                <div>
                    <img src="img/spa2.jpg" alt="" />
                </div>
                <div>
                    <img src="img/beauty4.jpg" alt="" />
                </div>
        </Carousel>
    </div>
)
};

export default Mycarousel
