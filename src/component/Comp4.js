import React from 'react'
import '../component/Comp4.css'
import img from '../images/image10.jpg'
import img1 from '../images/image7.jpg'
import img2 from '../images/image12.jpg'
import img3 from '../images/image9.jpg'

function Comp4() {
    return (
        <div className='firstdiv'>
            <div className='secdiv'>
                <p id='para'>WHAT WE DO</p>
                <h1 id='head'>SERVICE WE OFFER</h1>
            </div>
            <div className='secinner'>
                <div className='thriddiv1'>
                    <div className='innerdiv1'>
                        <h1>FRESH VEGETABLES</h1>
                        <p> vegetables contain important vitamins, minerals and plant</p>
                    </div>
                    <div className='content1'>
                        <img src={img} className='image1'/>
                    </div>
                </div>
                <div className='thriddiv2'>
                    <div className='innerdiv2'>
                        <h1>FRESH VEGETABLES</h1>
                        <p> vegetables contain important vitamins, minerals and plant</p>
                    </div>
                    <div className='content1'>
                        <img src={img1} className='image2'/>
                    </div>
                </div>
                <div className='thriddiv3'>
                    <div className='innerdiv3'>
                        <h1>FRESH VEGETABLES</h1>
                        <p> vegetables contain important vitamins, minerals and plant</p>
                    </div>
                    <div className='content1'>
                        <img src={img2} className='image3'/>
                    </div>
                </div>
                <div className='thriddiv4'>
                    <div className='innerdiv4'>
                        <h1>FRESH VEGETABLES</h1>
                        <p> vegetables contain important vitamins, minerals and plant</p>
                    </div>
                    <div className='content1'>
                        <img src={img3} className='image4'/>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Comp4
