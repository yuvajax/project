import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import '../component/Comp5.css'
import img from '../images/image3.png'
import img1 from '../images/image4.png'
import img2 from '../images/image5.png'
import img3 from '../images/image6.png'
import img4 from '../images/image7.png'

function Comp5() {
    useEffect(()=> {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className='headerdiv'>
        <div className='firstcontainer'>
            <div className='secondcontainer'>
                <div data-aos="fade-down" className='firin-container'>
                    <img src={img} className='firimage'/>
                    <img src={img1} className='secimage'/>
                    <img src={img2} className='thridimage'/>
                    <img src={img1} className='forimage'/>
                    <img src={img2} className='fifimage'/>
                </div>
                <div data-aos="fade-up" className='secin-container'>
                    <p>WE SALE BEST AGRICULTURE PRODUCTS</p>
                    <p>WEVE 40 YEARS EXPERIENCE IN FIELD</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Comp5

