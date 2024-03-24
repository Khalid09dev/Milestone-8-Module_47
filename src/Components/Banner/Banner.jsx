import user from '../../assets/user.png'

const Banner = () => {
    return (
        <div>
            <div className='flex items-center'>
                <div>
                    <h1 className='text-[white] text-[55px] font-bold '>One Step <br /> Closer To Your <br /> <span className='text-[#9873FF]'>Dream Job</span></h1>
                    <p className='pt-3 text-[white] text-[16px] font-medium'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-[#7E90FE] py-3 px-6 rounded-lg text-white text-base font-semibold hover:bg-[#9873FF] mt-6'>Get Started</button>
                </div>
                <div>
                    <img src={user} alt="#" />
                </div>
            </div>
        </div>
    );
};

export default Banner;