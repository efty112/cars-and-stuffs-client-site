import { Navigate, useLoaderData } from "react-router-dom";
import CommonBanner from "../Common/CommonBanner";
import Swal from "sweetalert2";

const Update = () => {
    const loadedData = useLoaderData();
    // console.log(loadedData)

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const carModel = form.carModel.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortDescription = form.description.value;

        const updatedData = { carModel, photo, price, rating, shortDescription };
        // console.log(updatedData);


        fetch(`http://localhost:5000/details/${loadedData._id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(json)

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Successfully Update",
                        text: "You successfully update a product",
                        icon: "success"
                    });
                    form.reset();
                }
            });
    }

    return (
        <div>
            <CommonBanner name={'Update'}></CommonBanner>

            <div className="hero my-10">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleUpdate} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Car Model</span>
                            </label>
                            <input type="text" defaultValue={loadedData.carModel} name='carModel' placeholder="Car Model" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" defaultValue={loadedData.photo} name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price $</span>
                            </label>
                            <input type="text" defaultValue={loadedData.price} name='price' placeholder="Price ($)" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea name="description" defaultValue={loadedData.shortDescription} className="input input-bordered" placeholder="Short Description" rows="4" cols="50">
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
                            <button className="btn bg-red-600 text-white text-xl p-3 rounded-lg">Update </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Update;