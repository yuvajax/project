import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import img from '../images/image7.jpg'
import img1 from '../images/image12.jpg'
import '../component/Comp7.css'

function Comp7() {
    return (
        <div className='footer'>
            <div className='footcontainer'>
                <div className='inner-footer'>
                    <div className='footer-col1'>
                        <h1>ABOUT</h1>
                        <p>Agriculture was the key sedentary by the human civilization,
                            food in surpluses that enabled people to live in cities</p>
                    </div>
                    <div className='footer-col2'>
                        <h1>EXPLORE</h1>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">services</a></li>
                            <li><a href="">Our Projects</a></li>
                            <li><a href="">Meet Farmer</a></li>
                            <li><a href="">Latest News</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className='footer-col3'>
                        <h1>NEWS</h1>
                        {/* <img src={img} className='firfootimage'/> */}
                        <p>Learn 10 Best Tips For NEw Formers 30 Oct,2019</p>
                        {/* <img src={img1} className='secfootimage'/> */}
                        <p>Farmer Sentiment Darkens Hopes Fade 30 Oct,2019</p>
                    </div>
                    <div className='footer-col4'>
                        <h1>CONTACT</h1>
                        <p>66 Broklyn Street,New own DC 5752, New Tork</p>
                        <p></p>
                        <ul>
                            <li><a href="">needhelp@grikol.com</a></li>
                            <li><a href="">666 888 0000</a></li>
                            <li id='icon'><a href=""><FacebookIcon/></a> </li>
                            <li id='icon'><a href=""><TwitterIcon/></a></li>
                            <li id='icon'><a href=""><InstagramIcon/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp7
