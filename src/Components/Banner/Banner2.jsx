import './bnr.css';

const Banner2 = () => {
    return (
        <div className='bnr flex justify-center items-center'>
            <div className='z-20 text-center text-[#000000]'>
                <h1 className='text-5xl font-bold mb-10'>I Grow By Helping People In Need</h1>
                <input type="text" placeholder="Search here...." className="input input-bordered input-success w-full max-w-xs" />
                <button className="bg-[#FF444A] py-3 rounded-lg px-7  text-white font-semibold">Search</button>
            </div>
        </div>
        // <div>
        //     <div className="hero min-h-screen bg-img" >
        //         <div className="hero-overlay bg-opacity-60"></div>
        //         <div className="hero-content text-center text-neutral-content">
        //             <div className="max-w-md text-black">
        //                 <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        //                 <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //                 <button className="btn btn-primary">Get Started</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner2;