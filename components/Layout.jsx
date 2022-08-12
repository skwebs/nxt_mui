import {Box} from '@mui/material'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({children}){
  return <Box id="app-body" sx={{ minHeight:{xs:`100vh`},
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

