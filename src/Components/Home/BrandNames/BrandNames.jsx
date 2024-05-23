import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BrandNames = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/carBrandNames')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

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
        <div className="my-16 space-y-5">
            <h1 className="text-5xl font-bold text-center text-red-600">Brands</h1>
            {/* {
                brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
            } */}
            <div>
                <Carousel responsive={responsive} removeArrowOnDeviceType={'mobile'} centerMode={true}>
                    {
                        brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                    }
                </Carousel>
            </div>

        </div>
    );
};

export default BrandNames;