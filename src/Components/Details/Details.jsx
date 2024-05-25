import { useLoaderData } from "react-router-dom";
import CommonBanner from "../Common/CommonBanner";
import Swal from "sweetalert2";

const Details = () => {
    let data = useLoaderData();
    // console.log(data)
    let { _id: originalId, ...rest } = data;
    data = { originalId, ...rest };


    const handleAddToCart = () => {

        fetch('http://localhost:5000/cart', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Successfully added",
                        text: "You successfully added a product",
                        icon: "success"
                    });
                }
            });
    }

    return (
        <div>
            <CommonBanner name={`Details : (${data.carModel})`}></CommonBanner>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={data.photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold uppercase">{data.brandName} : {data.carModel}</h1>
                        <p className="py-6 text-lg"> <span className="font-bold">Price :</span> {data.price}</p>
                        <p className="pt-6 text-lg font-bold">Description :</p>
                        <p className="pb-6">{data.shortDescription}</p>

                        <button onClick={handleAddToCart} className="btn-wide bg-red-600 text-white text-xl p-3 rounded-lg flex-grow">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;