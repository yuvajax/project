import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import '../component/Comp6.css'

function Comp6() {
    useEffect(()=> {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className='headcontainer'>
        <div className='outterdiv1'>
            <div className='outterfirdiv'>
                <div data-aos="fade-down" className='innerdiv'>
                <p>EXPLORE PROJECTS</p>
                <h1>OUR RECENT PROJECTS</h1>
                </div>
                <div className='innersubdiv'>
                    <div className='innersubconatiner'>
                        <div data-aos="fade-down" className='innersubdiv1'>
                            <img></img>
                            <p id='para1'>ORGANIC SOLUTIONS</p>
                        </div>
                        <div data-aos="fade-down" className='innersubdiv2'>
                            <img></img>
                            <p>HARVEST INNOVATIONS</p>
                        </div>
                        <div data-aos="fade-down" className='innersubdiv3'>
                            <img></img>
                            <p>AGRICULTURE FRAMING</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='downcontaner'>
                    <div data-aos="fade-up" className='outtersubdiv1'>
                        <p>OUR BENEFITS</p>
                        <h1>AGRICULTURE & ECO FARMING</h1>
                    </div>
                    <div data-aos="fade-down" className='outtersubdiv2'>
                        <p>Agriculture is the practice of cultivating plants and livestock. 
                            Agriculture was the key development in the rise of sedentary human civilization, whereby farming of
                            domesticated species created food surpluses that enabled people to live in cities</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Comp6
