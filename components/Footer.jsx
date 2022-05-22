import {Box, Typography, IconButton, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import {
  FacebookRounded as FacebookIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon
} from '@mui/icons-material'

export default function Footer(){
  return <>
    <Box>
      {/* first social icon section */}
      <Box sx={{
          bgcolor: "primary.main", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 2,
        }}>
        <Typography variant="p" component="div" sx={{ display:{xs:'none', md:'block'},  color: "rgba(255,255,255,.8)" , mr:2}}>
          Follow us on : 
        </Typography>
        <FacebookIcon className="footer-icon" />
        <YouTubeIcon className="footer-icon" />
        <InstagramIcon className="footer-icon" />
        <TwitterIcon className="footer-icon" />
      </Box>
      
      {/* Various Links section */}
      <Box sx={{ p:2 }} className="footer-links-section">
        <Link href='/about' passHref >
          <MuiLink underline="hover" color='grey.500'>
            About Us
          </MuiLink>
        </Link>
        |
        <Link href='/disclaimer' passHref >
          <MuiLink underline="hover" color='grey.500'>
            Disclaimer
          </MuiLink>
        </Link>
        |
        <Link href='/privacy' passHref sx={{ mx:1}}>
          <MuiLink underline="hover" color='grey.500'>
            Privacy-Policy
          </MuiLink>
        </Link>
        |
        <Link href='/terms' passHref >
          <MuiLink underline="hover" color='grey.500'>
            Terms &amp; Conditions
          </MuiLink>
        </Link>
      </Box>
      {/* Copyright section */}
      <Box sx={{
          bgcolor:"rgba(0,0,0,.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,}}>
        <Typography variant="p" component="div" sx={{ color: "gray"}}>
          &copy; 2022 Anshu Memorial Academy
        </Typography>
      </Box>
    </Box>
  </>
}