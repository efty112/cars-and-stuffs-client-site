import { useEffect, useState } from "react";
import CommonBanner from "../Common/CommonBanner";
import Swal from "sweetalert2";

const AddProducts = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://cars-and-stuffs-server-site.vercel.app/carBrandNames')
            .then(res => res.json())
            .then(data => {
                setBrands(data)
            })
    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const brandName = form.cars.value;
        const carModel = form.carModel.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortDescription = form.description.value;

        const product = { brandName, carModel, photo, price, rating, shortDescription };
        // console.log(product);

        fetch('https://cars-and-stuffs-server-site.vercel.app/cardetails', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Successfully added",
                        text: "You successfully added a product",
                        icon: "success"
                    });
                    form.reset();
                }
            });
    }

    return (
        <div>
            <CommonBanner name={'Add Products'}></CommonBanner>

            <div className="hero my-10">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleFormSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <select id="cars" name="cars">
                                {
                                    brands.map(brand => <option key={brand.id} value={brand.brand_name}>{brand.brand_name}</option>)
                                }
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Model</span>
                            </label>
                            <input type="text" name='carModel' placeholder="Car Model" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price $</span>
                            </label>
                            <input type="text" name='price' placeholder="Price ($)" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea name="description" className="input input-bordered" placeholder="Short Description" rows="4" cols="50">
                            </textarea>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <select id="rating" name="rating">
                                <option value='1'>1 star</option>
                                <option value='2'>2 star</option>
                                <option value='3'>3 star</option>
                                <option value='4'>4 star</option>
                                <option value='5'>5 star</option>
                            </select>
                        </div>



                        <div className="form-control mt-6">
                            <button className="btn bg-red-600 text-white text-xl p-3 rounded-lg">Add </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddProducts;