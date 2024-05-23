import '../Home/banner.css'
import PropTypes from 'prop-types'; 

const CommonBanner = ({name}) => {
    return (
        <div>
            <div id='banner-1'>
                <div className='container mx-auto py-32 px-1'>
                    <h1 className='text-6xl text-sky-400 font-bold text-center uppercase'>{name}</h1>
                </div>
            </div>
        </div>
    );
};

CommonBanner.propTypes = {
    name: PropTypes.node
}
export default CommonBanner;