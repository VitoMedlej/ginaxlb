"use client"
import React from 'react'
import { Box,  Container, Divider, Grid, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Testimonials from './Testimonials/Testimonials'
import Btn from './Btn/Btn'

const 
PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  
  const industrialServices = [
    {
      id: 1,
      title: 'Manufacturing Solutions',
      img: 'https://industrial.bold-themes.com/yellow-factory/wp-content/uploads/sites/10/2016/07/inner_1.jpg'
    },
    {
      id: 2,
      title: 'Supply Chain Management',
      img: 'https://industrial.bold-themes.com/yellow-factory/wp-content/uploads/sites/10/2016/07/inner_2.jpg'
    },
    {
      id: 3,
      title: 'Quality Control',
      img: 'https://industrial.bold-themes.com/yellow-factory/wp-content/uploads/sites/10/2016/07/inner_3.jpg'
    },
    {
      id: 4,
      title: 'Product Design and Prototyping',
      img: 'https://industrial.bold-themes.com/yellow-factory/wp-content/uploads/sites/10/2016/07/inner_4.jpg'
    },
    {
      id: 5,
      title: 'Industrial Automation',
      img: 'https://industrial.bold-themes.com/yellow-factory/wp-content/uploads/sites/10/2016/07/inner_5.jpg'
    },
    {
      id: 6,
      title: 'Industrial Automation',
      img: 'https://industrial.bold-themes.com/yellow-factory/wp-content/uploads/sites/10/2016/07/inner_6.jpg'
    }
  ];
  
  
  // [{img:'https://ucarecdn.com/4635c19f-1ac8-454f-aaf7-8c67adfe4fd0/WhatsAppImage20230824at191722.jpeg',category:'Cricut machines'},
  // {img:'https://4.bp.blogspot.com/-Jt0CZBa0r6s/WQoWgzdYryI/AAAAAAAAuE4/WNVqO4RNJEoJZeWAGCCDtT-YdkxV-JaPwCPcB/s640/wholesale%2Bcraft%2Bblanks.JPG',category:'Customizable Blanks'},
  // {img:'https://ucarecdn.com/e490c41b-ddd1-4ef1-a06c-b1b0692bd83a/WhatsAppImage20230824at191716.jpeg',category:'Hot offers'} ,
  // {img:'https://ucarecdn.com/bfb9f54b-ee34-4cdc-930c-3a97234595fe/WhatsAppImage20230824at191719.jpeg',category: 'New Arrivals'}  ,
  // {img:'https://ucarecdn.com/d01c6f74-4d3b-46c4-9d31-67966950b09e/WhatsAppImage20230824at191720.jpeg',category:'Materials'}  ,
  
  // ]
  // const twinImages =resImages?.categoryImage && resImages?.categoryImage?.length > 1 ? resImages?.categoryImage  :  [{img:'https://ucarecdn.com/e79d337c-b709-4ea4-aec0-6f3403afff1e/WhatsAppImage20230824at191717.jpeg'},{img:'https://ucarecdn.com/3a54db45-c216-4076-996c-3ec4524be8f0/WhatsAppImage20230824at191727.jpeg'}]
  return (
    <Box >
      <MainCarousel resImages={resImages}/>
      {/* <Perks/> */}

    <Container   maxWidth='lg'   sx={{my:{xs:3,sm:6,md:6}}}>
      <Typography  sx={{fontSize:{xs:'2em',sm:'2.1em'},fontWeight:600}} className='center color text-center auto '>
     Our Services
      </Typography>
      <Typography sx={{width:'100%',maxWidth:'800px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',pt:.15}} className='center text-center auto'>
      How we can help you?
        </Typography>
    </Container>
    
     <Container sx={{maxWidth:'lg'}} className='flex wrap row justify-between'>
      {industrialServices.map(i=>{
        return <Box key={i.id} className='relative flex ' sx={{my:1,width:{xs:'49%',sm:'32%'}}}>
          <Box sx={{height:'100%'}}>
            <img src={i.img} alt="" className="img" />
          </Box>
          <Box sx={{top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.13}} className="absolute">

</Box>
                   <Box  sx={{zIndex:11423,alignItems:'end',background:'#ffffffb8',height:'inherit',bottom:0,width:'auto'}} className="absolute bg flex ">

                  <Typography  sx={{px:1,py:.25,fontWeight:500,fontSize:{xs:'.9em',sm:'1.12em'},color:'black'}}>
                    {i.title}
                  </Typography>
</Box>
        </Box>
      })}
     </Container>

 
      {/* <Container sx={{maxWidth:'lg'}} className='flex wrap row justify-between'>

      {textsArray.map(i=>{
        return <Box key={i.id} className='flex row wrap' sx={{borderBottom:'1px solid white',width:{xs:'98%'},maxWidth:'lg',justifyContent:'space-between',my:5.5}} >
         <Box sx={{width:{xs:'100%',sm:'48%'}}}>

  
          <Typography  className='color'>
            .0{i.id}
          </Typography>
          <Typography  sx={{maxWidth:'400px',fontSize:{xs:'1.5em',sm:'2em'},fontWeight:500}}>
            {i.title}
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:{xs:'.88em',sm:'1em'},pb:.65,maxWidth:'350px'}}>
            {i.desc}
          </Typography>
          </Box>
          <Box sx={{height:{xs:'200px',sm:'300px'},mt:.5,borderRadius:'6px', width:{xs:'100%',sm:'48%'}}}>
            <img style={{borderRadius:'6px'}} src={i.img} alt="" className="img" />
          </Box>
        </Box>
      })}
      </Container> */}

  

    <Grid  sx={{width:'100%',pt:16,pb:4}} container>
    <Grid  maxWidth='lg' item xs={12} sm={6}>
      <Box sx={{height:'500px',maxWidth:'450px'}} className='auto'>
        <img src="https://industrial.bold-themes.com/yellow-factory/wp-content/uploads/sites/10/2016/10/background-factory-open-doors.jpg" alt="" className="img" />
      </Box>
    </Grid>
    <Grid maxWidth='lg' item xs={12} sm={6}>
    <Container  className='wrap col   auto flex' sx={{alignItems:'left',px:{sm:1},pt:{xs:2,sm:4},display:'flex'}}>
        <Typography sx={{fontWeight:400}} className='color'>
          ABOUT US
        </Typography>
        <Typography sx={{width:'100%',maxWidth:'600px',fontSize:{xs:'2em',sm:'3em'},fontWeight:800}} className=''>
        Create,
Enhance
and Sustain
        </Typography>
        <Typography sx={{width:'100%',maxWidth:'500px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',mt:2}} className=''>
        Explore our portfolio and let our work speak for itself. DesignCompass invites you to embark on a journey of transformation, where your spaces become a canvas for creativity and your ideas find a home
        </Typography>
        <Typography sx={{width:'100%',maxWidth:'500px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',mt:.5}} className=''>
        Explore our portfolio and let our work speak for itself. DesignCompass invites you to embark on a journey of transformation, where your spaces become a canvas for creativity and your ideas find a home
        </Typography>
        <Btn  className='color ' sx={{width:'150px',color:'black',mt:2,px:0}}>
          Learn More
        </Btn>
    </Container>

    </Grid>
   
   
    </Grid>
 




      <Box/>

        
    
        
          <Divider light></Divider>
      <Container  className='wrap row  center auto flex' sx={{background:'white',alignItems:'left',px:{sm:1},py:{xs:3,sm:12},display:'flex'}}>
      <Typography  className='center text-center' sx={{my:4,width:'100%',fontSize:{xs:'1.5em',sm:'2em'},fontWeight:500}}>
            Our Projects
          </Typography>
        <Box className='flex row wrap' sx={{justifyContent:'space-between'}}>
            {['https://ucarecdn.com/316065b7-a516-4526-8fc7-a0ab3929f15b/23507574_1493701307351302_6374379917131382784_n.jpg',
              `https://ucarecdn.com/16be367e-43fd-4ad5-a658-d12675d51a42/23498931_1377232645739030_7966314244088004608_n.jpg`,
              `https://ucarecdn.com/7cf34891-6321-456f-8d9a-3ff45d04a77d/23667868_375021612955656_3939029088299122688_n.jpg`
        ].map(i=>{
            return <Box key={i} sx={{my:1.5,width:{xs:'95%',sm:'32%'}}}>
              <Box sx={{width:'100%'}}>
                <img src={`${i}`} alt="" className="img" />
              </Box>
              <Box>
              {/* <Typography  className='center' sx={{maxWidth:'400px',fontSize:{xs:'.8em',sm:'1em'},fontWeight:300}}>
            David R. Stevenson
          </Typography> */}
              </Box>
            </Box>
          })}
        </Box>
      </Container>
      <Container  className='wrap row  center auto flex' sx={{background:'white',alignItems:'left',px:{sm:1},py:{xs:3,sm:8},display:'flex'}}>
        {
        [1,2,3].map(i=>{
          return <Box key={i} sx={{mx:2}} className='flex col items-center center'>
              <Box sx={{width:'20px'}}>
                <img src="https://www.svgrepo.com/show/447781/secure.svg" alt="" className="img" />
              </Box>
              <Box >
              <Typography className='center text-center'  sx={{maxWidth:'400px',fontSize:{xs:'.99em',sm:'1.1em'},fontWeight:500}}>
              Feature One
          </Typography>
          <Typography className='center text-center' sx={{color:'#4d555e',fontSize:{xs:'.75em',sm:'.8em'},pb:.65,maxWidth:'350px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut auctor gravida nulla.
          </Typography>
              </Box>
          </Box>
        })
        }
    </Container>
  </Box>
  )
}

export default PreLoader