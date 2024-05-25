import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SeeAllCarsCard = ({ car }) => {
    // console.log(car);
    const { _id, brandName, carModel, photo, price, rating } = car;

    return (
        <div>
            <div className="card card-compact w-96 h-96 bg-base-100 shadow-md m-5 flex flex-col">
                <figure className='flex-grow h-full'><img src={photo} alt="Car" className='h-full' /></figure>

                <div className="card-body flex flex-col">
                    <h2 className="text-2xl font-bold text-center flex-grow uppercase">{brandName} {carModel}</h2>
                    <p className='text-center text-lg'>Price : {price}</p>
                    <p className='text-center text-lg'>Rating : {rating} star</p>

                    <div className="card-actions justify-center">
                        <Link to={`/details/${_id}`}>
                            <button className="btn-wide bg-red-600 text-white text-xl p-3 rounded-lg flex-grow">See Details</button>
                        </Link>
                    </div>

                    <div className="card-actions justify-center">
                        <Link to={`/update/${_id}`}>
                            <button className="btn-wide bg-red-600 text-white text-xl p-3 rounded-lg flex-grow">Update Information</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};


SeeAllCarsCard.propTypes = {
    car: PropTypes.object,
}
export default SeeAllCarsCard;