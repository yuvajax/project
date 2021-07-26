import React, {useEffect} from 'react'
import '../component/Comp3.css'
import Aos from 'aos'
import "aos/dist/aos.css";
import img from '../images/image3.jpg'
import img1 from '../images/image4.jpg'
import img2 from '../images/image5.jpg'
import img3 from '../images/image1.png'
import img4 from '../images/image2.png'

function Comp3() {
useEffect(()=> {
    Aos.init({ duration: 1000 });
}, []);
    return (
        <div className='containers'>
            <div data-aos="fade-up" className='containers2'>
                <div className='circle'></div>
                <div className='image'>
                    <img src={img} className='firstimg'/>
                    <img src={img1} className='secimg'/>
                    <img src={img2} className='thridimg'/>
                </div>
            </div>
            <div data-aos="fade-down" className='conntainers1'>
                <div className='inner-containers'>
                    <div className='containers-in'>
                    <p>ABOUT AGRICULTURE</p>
                    <h1 id='header1'>WE'RE LEADER 
                        IN AGRICULTURE MARKET</h1>
                    <p>Agriculture is the practice of cultivating plants and livestock.
                        Agriculture was the key development in the rise of sedentary human civilization</p>
                    <div className='image'>
                        <img src={img3} className='forthimg'></img> 
                        <h1 id='header2'>Growing Fruits and Vegetables</h1>
                        <img src={img4} className='fifthimg'></img>
                        <h1 id='header3'>Tips for reiping your Fruits</h1>
                    </div>
                    <p>After gathering wild grains beginning at least 105,000 years ago,
                        nascent farmers began to plant them around 11,500 years ago</p>
                    <button>Learn More</button>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Comp3
