"use client"
import Link from 'next/link';
import {Box, Typography } from '@mui/material'
import './style.css'
import { useRouter } from 'next/navigation';
// import SMicons from './SMicons';
// // import Logo from '../../assets/icons/logo';


const Footer = () => 
{
  const router= useRouter()
  return (
  <Box component='footer' className="site-footer  relative bgfooter" sx={{backgroundRepeat:'no-repeat',
 backgroundPosition: {xs:'center !important',md:'center !important'},
  backgroundImage: {xs:"url('https://th.bing.com/th/id/R.ca5edfef6ed6212a432cf0740d26ff90?rik=pVwR27L68dpplQ&pid=ImgRaw&r=0')",sm:"url('https://th.bing.com/th/id/R.ca5edfef6ed6212a432cf0740d26ff90?rik=pVwR27L68dpplQ&pid=ImgRaw&r=0')" },
  backgroundSize:{xs:'cover !important',md:'cover !important'}
  
  ,marginTop:'3em',color:'black',background:'white'}}>
    <Box sx={{display:'flex',width:'100%',position:'absolute',height:'100%',background:'black',opacity:.7,top:0,right:0}}>

    </Box>

    <div className="container relative " style={{zIndex:2414,background:'transparent',color:'black'}}>
      <div className="site-footer__top  relative">
        <div className="site-footer__description relative">
          <div className='logos cursor relative'>

            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
            <img className='img ' src='https://ucarecdn.com/d345b1ff-8098-485e-bd36-54d5baade053/renderimage.png' alt="Footer Logo" />
            </Link>
          </div>
          <Typography component='p' sx={{ fontWeight:700,fontSize: '1.2em' ,color:'white' }}  className='  '>
          Join us at Solution Atelier and embark on a journey of engineering excellence. Whether you&apos;re seeking top-tier engineering services, professional training, or a community of driven individuals, we&apos;re here to guide you. With our authorized certified instructors, cutting-edge software skills enhancement, and a thriving network of 1200+ students, we&apos;re committed to shaping the future of civil engineering in Lebanon and beyond.
          </Typography>
          {/* <SMicons/> */}

          {/* <ul className="site-footer__social-networks">
          <li><a href="https://www.facebook.com/profile.php?id=100063581229923" rel="noreferrer" target='_blank'><i className="icon-facebook"></i></a></li>
        <li><a href="#"><i className="icon-twitter"></i></a></li>
          <li><a href="#"><i className="icon-linkedin"></i></a></li>
          <li><a href={`${process.env.NEXT_PUBLIC_INSTA}`}rel="noreferrer" target='_blank' ><i className="icon-instagram"></i></a></li>
          <li><a href="#"><i className="icon-youtube-play"></i></a></li>
        </ul> */}
        </div>

        <div className=" white site-footer__links relative ">
        {/* <div>
        <iframe style={{height:'100%',width:'100%',border:0}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Beirut,+Lebanon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div> */}
          <ul className='white ul-white'>
            <li className='white link-title'>
              <Typography sx={{fontSize:'1.45em',fontWeight:600}} component='h1'>
              Site links
              </Typography>
              </li>
            <li><Link  href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            {/* <li><Link href="/certifications">Certifications</Link></li> */}
            {/* <li><Link href="/recipes">Recipes</Link></li> */}

            {/* <li><Link href="/cart">Cart</Link></li> */}
            <li><Link href="/courses">Courses</Link></li>
     
          </ul>
     
          <ul  className='ul-white white' style={{color:'black'}}>
          <li className='link-title white'>
              <Typography 
              onClick={()=>router.push('#contact')}
              sx={{fontSize:'1.45em',fontWeight:600}} component='h1'>
              Contact
              </Typography>
              </li>
            {/* <li><Link href="#"> Lebanon</Link></li> */}
            
            {/* <li><a href="https://www.facebook.com/profile.php?id=100076163602459/" target="_blank" rel="noreferrer" >Facebook</a></li> */}

            <li><a href="https://www.instagram.com/Solution Atelier/" target="_blank" rel="noreferrer" >Solution Atelier Instagram</a></li>
            <li><a href={'https://wa.me/78859497'} rel="noreferrer" target='_blank' >{` +961 78859497 `}</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="center text-center  relative " style={{background:'#232323',textAlign:'center',color:'black',borderTop:"1px solid #0000001f"}}>
      <div className="  white " style={{background:'#232323',}}>
        <Box sx={{py:2}}>Website Developed By{' '}
          <a className='white' href={`${'https://www.onbeirut.com'}`}>OnBeirut Agency </a></Box>
      </div>
    </div>
  </Box>
);

}


export default Footer