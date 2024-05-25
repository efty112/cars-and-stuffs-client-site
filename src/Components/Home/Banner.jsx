import { Link } from 'react-router-dom';
import './banner.css'
import { useContext } from 'react';
import { LevelContext } from '../../ContextProvider/ContextProvider';

const Banner = () => {
    const { currentUser } = useContext(LevelContext);

    return (
        <div id='banner-1'>
            <div className='container mx-auto lg:flex items-center justify-between py-44 px-10'>
                <div className='space-y-5'>
                    <h1 className='text-6xl text-sky-400 font-bold'>Experience the Thrill <br /> of the Drive</h1>
                    <p className='text-2xl text-white'>Discover the ultimate driving experience with the latest in automotive innovation.</p>

                    {
                        currentUser ? <div>
                            <Link to='/addProducts'>
                                <button className="btn-wide bg-red-600 text-white text-xl p-3 rounded-lg">Add Products</button>
                            </Link>
                        </div> : <div>
                            <Link to='/logIn'>
                                <button className="btn-wide bg-red-600 text-white text-xl p-3 rounded-lg">LogIn</button>
                            </Link>
                        </div>
                    }


                </div>

                <div>
                    <img src={'https://i.postimg.cc/PfKxBZTt/5bbf6b2de5449b7017df18f45a494846-removebg-preview.png'} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;