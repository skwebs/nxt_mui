import { useState } from "react";
import AppBarComponent from "./AppBarComponent";
import Sidebar from "./Sidebar";
import {
  Home as HomeIcon,
  LanguageOutlined,
  Login as LoginIcon,
  MailOutline,
  Person as PersonIcon,
} from "@mui/icons-material";
// import ResponsiveAppBar from "./ResponsiveAppBar";
const navData = [
  {
    label: "Listings",
    href: "/listings",
  },
  {
    label: "Mentors",
    href: "/mentors",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];

const menuItems = {
    Home: {
      icon: <HomeIcon />,
      link: "/",
    },
    "About Us": {
      icon: <PersonIcon />,
      link: "/about",
    },
    "Contact Us": {
      icon: <MailOutline />,
      link: "/contact",
    },
    Login: {
      icon: <LoginIcon />,
      link: "/login",
    },
    Sitemap: {
      icon: <LanguageOutlined />,
      link: "/sitemap",
    },
  };
  
const Navigation = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Sidebar menuItems={menuItems} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <AppBarComponent menuItems={menuItems} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      {/* <ResponsiveAppBar /> */}
    </>
  );
};

export default Navigation;
