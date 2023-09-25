import './banner.css'
const Banner = () => {
    return (
        <div className="banner absolute">
            <div>
                <img src={'https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR1D02pYwOrDFATU7bddAyiLXB3rJ-LgHzc8PvWXYS4DNbOAveXbJnLBblw'} alt="" />
            </div>
            <div className='relative text-center -top-96'>
                <h1 className='text-5xl font-bold mb-10'>I Grow By Helping People In Need</h1>
                <input type="text" placeholder="Search here...." className="input input-bordered input-success w-full max-w-xs" />
                <button className="bg-[#FF444A] py-3 rounded-lg px-7 text-white font-semibold">Search</button>
            </div>
        </div>
    );
};

export default Banner;