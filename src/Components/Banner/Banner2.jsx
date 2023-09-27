import './bnr.css';

const Banner2 = () => {
    return (
        <div className='bnr flex justify-center items-center'>
            <div className='transbox z-20 text-center text-[#000000]'>
                <h1 className='text-5xl font-bold mb-10'>I Grow By Helping People In Need</h1>
                <input type="text" placeholder="Search here...." className="input input-bordered input-success w-full max-w-xs" />
                <button className="bg-[#FF444A] py-3 rounded-lg px-7  text-white font-semibold">Search</button>
            </div>
        </div>
    );
};

export default Banner2;