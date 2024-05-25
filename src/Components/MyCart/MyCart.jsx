import { Link, useLoaderData } from "react-router-dom";
import CommonBanner from "../Common/CommonBanner";
import Swal from "sweetalert2";
import { useState } from "react";

const MyCart = () => {
    const cartItems = useLoaderData();
    const [items, setItems] = useState(cartItems);

    // console.log(cartItems)
    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

                const remainingItems = items.filter(item => item._id != id);
                setItems(remainingItems);
            }
        });
    }

    return (
        <div>
            <CommonBanner name={'My Cart'}></CommonBanner>

            <div className="overflow-x-auto">
                <table className="table container mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Brand Name</th>
                            <th>Car Model</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(cartItem => <tr key={cartItem._id}>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cartItem.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{cartItem.brandName}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    {cartItem.carModel}
                                    <br />
                                </td>

                                <td>{cartItem.price}</td>
                                <th>
                                    <Link to={`/details/${cartItem.originalId}`}>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </Link>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(cartItem._id)} className="btn btn-ghost btn-xs">X</button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;