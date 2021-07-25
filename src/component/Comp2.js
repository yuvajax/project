import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import '../component/Comp2.css'

function Comp2() {
    useEffect(()=> {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div data-aos="fade-right" className='Container1'>
            <div className='contant'>
            <p>THE BEST AGRICULTURE PRODUCT</p>
            <h1>WELCOME TO AGRICULTURE FORM</h1>
            <button>Discover More</button>
        </div>
        </div>
    )
}

export default Comp2
