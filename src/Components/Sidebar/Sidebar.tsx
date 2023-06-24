"use client";
import {useContext} from 'react';
import {Drawer,List,Divider,ListItem,ListItemButton,ListItemText,ListItemIcon,Box, Typography} from '@mui/material';
import {MdPrecisionManufacturing} from 'react-icons/md';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import {BiCategoryAlt} from 'react-icons/bi';
import { DrawerContext } from '@/context/Contexts';
import {GrFormClose} from 'react-icons/gr'


export default function TemporaryDrawer({cates}:{cates:string[] | undefined}) {
 
  const {open, setOpen} = useContext(DrawerContext);
  const router = useRouter();
  const toggleDrawer =
    ( open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(open);
    };

  const Lista = () => (
    <Box
      sx={{ width:  'auto',py:1 }}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer( false)}
    >
      <Box className='flex justify-between items-center '
      sx={{margin:'0 .5em',borderBottom:'1px solid #00000040',    justifyContent: 'flex-end'}}
      
      >
        <Box>
          <Typography sx={{fontWeight:600}}>
            Menu
          </Typography>
        </Box>

              <IconButton 
        
        onClick={toggleDrawer(false)}>
                        <GrFormClose
                                color='red'
                                />
                        </IconButton>
                     

                                </Box>
      <List>
   
       { ['electronics','kitchen appliances','small kitchen appliances','vaccum cleaners','tvs'
       ,'heaters'
 ,      'fans'
,       'tools'
      ].map((text, index) => {
          if (!text) return;
          return <ListItem
          onClick={()=>router.push(`/category/${text}`)}
          key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <BiCategoryAlt /> : <MdPrecisionManufacturing />}
              </ListItemIcon>
              <ListItemText
              sx={{
                textTransform: 'capitalize'
              }}
              primary={text} />
            </ListItemButton>
          </ListItem>
        })
        
        }
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <div>

          <Drawer
            anchor={'right'}
            open={open}
            onClose={toggleDrawer(false)}
          >

  <Lista/>

      
      

          </Drawer>
    </div>
  );
}