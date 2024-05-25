import { useLoaderData, useLocation } from "react-router-dom";
import CommonBanner from "../Common/CommonBanner";
import SeeAllCarsCard from "./SeeAllCarsCard";
import Carousel from "react-multi-carousel";

const SeeAllCars = () => {
    const location = useLocation();
    const brandName = location.pathname.slice(12);

    const carData = useLoaderData();
    // console.log(carData);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div>
            <CommonBanner name={brandName}></CommonBanner>
            <div className="my-10">
                <Carousel responsive={responsive} removeArrowOnDeviceType={'mobile'} centerMode={true}>
                    {
                        carData.map(car => <SeeAllCarsCard key={car._id} car={car}></SeeAllCarsCard>)
                    }
                </Carousel>
            </div>

        </div>
    );
};

export default SeeAllCars;