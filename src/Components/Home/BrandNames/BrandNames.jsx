import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BrandNames = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://cars-and-stuffs-server-site.vercel.app/carBrandNames')
            .then(res => res.json())
            .then(data => {
                setBrands(data)
                setLoading(false)
            })
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
            <div>
                {
                    loading ? <div className="flex justify-center"><span className="loading loading-bars loading-lg"></span></div> :
                        <Carousel responsive={responsive} removeArrowOnDeviceType={'mobile'} centerMode={true}>
                            {
                                brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                            }
                        </Carousel>
                }
            </div>
        </div>
    );
};

export default BrandNames;