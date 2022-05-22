import {Box} from '@mui/material'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({children}){
  return <Box id="app-body" 
  sx={{ minHeight:{xs:`calc(100vh - 56px)`, md:`calc(100vh - 140px)`},
  display:'flex',
  flexDirection:'column'
  }} >
  <div id="app-header">
    <Navigation/>
    </div>
    <Box id="app-main" component='main' >
    {children}
    </Box>
    <Box id="app-footer" component='footer' >
      <Footer/>
    </Box>
  </Box>
}