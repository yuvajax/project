import React from 'react'
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import img from '../images/image.png'
import './Comp1.css'

function Comp1() {
    return (
        <div className='container'>
            <div className='classcontainer'>
                <div className='inner-container'>
                    <ul>
                        <li><a href=""><DraftsOutlinedIcon/>needhelp@grikol.com</a></li>
                        <li><a href=""><PhoneInTalkOutlinedIcon/>666 888 0000</a></li>
                    </ul>
                </div>
            <img className='image' src={img}></img>
            <div className='second-container'>
            <ul>
                <li><a href=""><FacebookIcon/></a> </li>
                <li><a href=""><TwitterIcon/></a></li>
                <li><a href=""><InstagramIcon/></a></li>
            </ul>
            </div>
            </div>
            <div className='container-in'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Our Projects</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            </div>
            <div className='shop'>
                <a href=""><ShoppingCartOutlinedIcon/></a>
                </div>
        </div>
    )
}

export default Comp1
