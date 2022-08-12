import { AppBar, Box, Button, IconButton, Toolbar, Typography, Tooltip, Avatar, InputBase } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";
import Link from 'next/link'
import { useRouter } from 'next/router'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));




export default function Header({ openDrawer, setOpenDrawer, menuItems }) {
  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };
  const router = useRouter();
  const location = router.asPath;
  const handleRoute = (rLink) => {
    // e.preventDefault();
    router.push(rLink);
  }

  return (
    <>
      <Box>
        {/* <AppBar color="transparent" sx={{backdropFilter:"blur(20px)"}}> */}
        <AppBar>
          <Toolbar>
            <Typography onClick={() => handleRoute('/')} variant="h6" component="div" sx={{ flexGrow: 1, mr: 2 }}>
              AMA
            </Typography>
            <Box component="div" sx={{ flexGrow: 1 }}>
              {/** this blank space to fill and send login button to right side of the nav*/}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'block' }}}>
              {Object.keys(menuItems).map((text, index) => (
                <Button className={`header-link-btn ` + ((menuItems[text].link === location) ? `active-link` : '')} onClick={() => handleRoute(menuItems[text].link)} key={index} >{text}</Button>
              ))}
            </Box>

            <Search sx={{ mx: 2 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                
              />
            </Search>


            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                onKeyDown={() => toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>

            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={toggleDrawer(true)} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="https://v1.anshumemorial.in/assets/static/img/ama/ama-128x128.png" />
                </IconButton>
              </Tooltip>
            </Box> */}
          </Toolbar>
        </AppBar>
        {/* below toolbar only used for top space so element can be below the toolbar */}
        <Toolbar />
      </Box>
    </>
  );
};
