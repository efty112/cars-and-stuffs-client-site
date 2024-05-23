import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
    const { brand_name, brand_logo } = brand;
    return (
        <div>
            <div className="card card-compact w-96 h-96 bg-base-100 shadow-md m-5 flex flex-col">
                <figure className='flex-grow h-full'><img src={brand_logo} alt="Car" className='w-full h-full' /></figure>

                <div className="card-body flex flex-col">
                    <h2 className="text-2xl font-bold text-center flex-grow">{brand_name}</h2>
                    <div className="card-actions justify-center">
                        <button className="btn-wide bg-red-600 text-white text-xl p-3 rounded-lg flex-grow">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object,
}
export default BrandCard;