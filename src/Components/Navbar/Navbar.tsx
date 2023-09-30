"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
// import {CiShoppingCart} from 'react-icons/ci'

import { useEffect, useState} from 'react';
// import { CartContext, DrawerContext } from '../../../pages/_app'; import
import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Container, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineFieldTime} from 'react-icons/ai'
import {TbDeviceMobileMessage} from 'react-icons/tb'
import {FaInstagram,FaWhatsapp,FaFacebookF} from 'react-icons/fa'

import NavButtom from './NavButtom';
import { useCartContext, useDrawerContext } from '@/context/Contexts';
// import Btn from '../Btn/Btn';



export const categories = [
   'Home',
   'Services',
   'About',
   'Contact',
]
export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    
    const [localCart,
        setLocalCart] = useState([]);

    const {cartOpen, setCartOpen} = useCartContext();
    const router = useRouter()
    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('sgh2j40-tlsit') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])


    return ( <>
     <Box
     id='navy'
    className='center relative auto   bg flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',
                boxShadow:'none',
        background:'white',
        border: 'none',
        px:0,
        flexGrow: 1
    }}>
      
        <AppBar
     id='navy2'

    className='center relative  flex'

            sx={{

                boxShadow:'none',

                background:'white',
            // maxWidth: 'lg',
                width:'100%',
            margin: '0 auto',
        }}>
            <Box className=' ' sx={{background:'#232323',py:1}}>
                        <Container className='auto flex row justify-evenly' sx={{maxWidth:'lg',}}>

                        <Box className='flex items-center center'>
                                <AiOutlineFieldTime/>
                                {' '}
                                <Typography sx={{fontSize:{xs:'.65em',sm:'.9em'}}}>
                            Working hours:Mon - Sat 8.00 - 18.00
                            </Typography>
                        </Box>
                        <Box sx={{ml:2}} className='flex items-center center'>
                                <TbDeviceMobileMessage/>
                                {' '}
                                <Typography sx={{fontSize:{xs:'.65em',sm:'.9em'}}}>
                            Call Us:(+1) 555 234-8765
                            </Typography>
                        </Box>
                        <Box sx={{flex:1,display:{xs:'none',sm:'flex'},color:'white',justifyContent:'end'}} className=' items-center '>
                        <Box  className='flex items-center center' sx={{mx:1,py:.5,px:.5,height:'20px',width:'20px',border:'1px solid white',borderRadius:'50%'}}>

                            <a className='flex items-center center' href='/'>
                            <FaInstagram color='white'/>
                            </a>
                        </Box>
                        <Box  className='flex items-center center' sx={{mx:1,py:.5,px:.5,height:'20px',width:'20px',border:'1px solid white',borderRadius:'50%'}}>

                            <a className='flex items-center center' href='/'>
                            <FaWhatsapp color='white'/>
                            </a>
                        </Box>
                        <Box  className='flex items-center center' sx={{mx:1,py:.5,px:.5,height:'20px',width:'20px',border:'1px solid white',borderRadius:'50%'}}>

                            <a className='flex items-center center' href='/'>
                            <FaFacebookF color='white'/>
                            </a>
                        </Box>
                            
                            
                        </Box>
                        </Container>
            </Box>
               
            <Toolbar
     id='navy3'

    className='center relative  flex  w100  auto'

                sx={{
                
                background:'white',
                    maxWidth:'xl',
                px:'0 !important',
                
                flexWrap: 'wrap'
            }}> 
                  <Link className='flex center  aling-center items-center '  href='/' color='inherit'>

<Box
    sx={{
    mx: {
        sm: '1em'
    },
    height:'80px',
    width:{xs:'100px',sm: '110px'}
}}>
    <img
        className='img'
        src={`https://ucarecdn.com/d345b1ff-8098-485e-bd36-54d5baade053/renderimage.png`}
        alt="design compas  logo"/>
</Box>
</Link>
                <Box
                    sx={{
                    px:1,
                    display:{xs:'flex',md:'none'},

                    flex: 1,
                    flexWrap: 'wrap',
                    justifyContent: {
                        xs: 'right',
                    },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
                             
                        
{/*                              
                             <IconButton
                            onClick={() => router.push('/')}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                                margin : '8px',padding:0,
                            color: 'black',

                            // margin: '0.1em',
                            display: {
                                md: 'none'
                            }
                        }}>
                            <AiOutlineHome color='black'/>
                        </IconButton> */}
                      
    <IconButton
                            onClick={() => setOpen(!open)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            margin : '8px',padding:0,
                            color: 'black',
                            // margin: '0.1em',
                            display: {
                                md: 'none'
                            }
                        }}>
                            <IoIosMenu color='black'/>
                        </IconButton>
                   
   {/* <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' className='flex decor-none' rel='noopener'>

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                     
                            <AiOutlinePhone color='black'/>

                        </IconButton>
    </a> */}
                    
                    </Box>

                </Box>
<NavButtom/>

  {/* <SearchInput/> */}
  {/* <SearchInput
mobile
                    />  */}

                <Box
                    sx={{
                    px:1,
                    display:{xs:'none',md:'flex'},

                    // flex: 1,
                    flexWrap: 'wrap',
                    // justifyContent: {
                    //     xs: 'right',
                    //     sm: 'end'
                    // },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
 
 {/* <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            sx={{
                            color: 'black'
                        }}>

                                <CiSearch color='black'/>
                          
                        </IconButton> */}

                  



                            {/* <IconButton
                            onClick={() => setOpen(!open)}
                            edge="start"
                            aria-label="menu"
                            sx={{
                            color: 'black',
                            // margin: '0.1em',
                         
                        }}>
                            <IoIosMenu color='black'/>
                        </IconButton> */}
                    
                    </Box>

                </Box>
           
<SearchModal openModal={openModal} setOpenModal={setOpenModal }/>
             
            </Toolbar>
        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}