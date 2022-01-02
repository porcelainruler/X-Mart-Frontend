import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import MoreIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import * as Colors from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import logo_small from "../../../public/x-mart-shortened-logo.png";
// import logo from "../../../public/x-mart-logo.png";
// import logo from "../../../public/x-mart-logo_auto_x2_colored.jpg";
import { withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { userActionCreators } from "../../../state/user/userAction";
import { compIdentifier } from "../../../constants/componentIdentifiersList";
import { colorConfig } from "../../../constants/colorConfig";
import { Link } from "@mui/material";
import { routesData } from "../../../constants/routesData";
import { settingActionCreators } from "../../../state/setting/settingAction";

const muiTheme = createTheme({
  palette: {
    background: {
      main: "white",
      color: "white",
    },
    textColor: "black",
    primary1Color: Colors.grey,
    primary2Color: Colors.indigo,
    accent1Color: Colors.red,
    pickerHeaderColor: "black",
    alternateTextColor: Colors.red,
  },
  appBar: {
    height: 60,
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = ({ profileGlobal, settings }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [profile, setProfile] = React.useState({
    ...profileGlobal.profile,
  });
  const [setting, setSetting] = React.useState({...settings});

  React.useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    if (jwtToken) {
    } else {
    }
  });

  React.useEffect(() => {
    setProfile({
      ...profileGlobal.profile,
    });
  }, [profileGlobal]);
  
  React.useEffect(() => {
    setSetting({ ...settings });
  }, [settings]);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSettingModal = () => {
    dispatch(settingActionCreators.saveSetting({ ...setting, isSettingModalOpen: true }));
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Orders</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Change Password</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label={`show ${profile && profile.orderCount} products in cart`} color="inherit">
          <Badge badgeContent={profile && profile.orderCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label={`show ${profile && profile.messageCount} new mails`} color="inherit">
          <Badge badgeContent={profile && profile.messageCount} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label={`show ${profile && profile.notificationCount} new notifications`} color="inherit">
          <Badge badgeContent={profile && profile.notificationCount} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleSettingModal}>
        <IconButton size="large" aria-label={`customize website fonts, color and much more`} color="inherit">
            <SettingsIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>

      {!profile.isLoggedIn ? (
        <>
          <MenuItem>
            <IconButton size="large" aria-label="Click to login" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
              <LoginIcon />
            </IconButton>
            <p>Login</p>
          </MenuItem>
          <MenuItem>
            <IconButton size="large" aria-label="Click to register" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
              <AppRegistrationIcon />
            </IconButton>
            <p>Register</p>
          </MenuItem>
        </>
      ) : (
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton size="large" aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      )}
    </Menu>
  );

  //   const styles = React.StyleSheet.create({
  //     logoMobile: {
  //       flex: 1,
  //       width: null,
  //       height: null,
  //       resizeMode: "contain",
  //     },
  //     logoDesktop: {
  //       flex: 1,
  //       width: null,
  //       height: null,
  //       resizeMode: "contain",
  //     },
  //   });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={muiTheme}>
        <AppBar position="static" style={{ backgroundColor: colorConfig.mainColor }}>
          <Toolbar>
            <Typography className="mr-50 pr-5" variant="h6" component="div" sx={{ display: { xs: "none", sm: "block" } }} width="100px" minWidth="100px">
              <Link href={routesData.home} underline="none" color="inherit" style={{ color: "white", marginLeft: "4px" }}>
                X Mart
              </Link>
            </Typography>
            <Typography className="mr-50 pr-5" variant="h6" component="div" sx={{ display: { xs: "block", sm: "none" } }} width="100px" minWidth="100px">
              X Mart
            </Typography>

            {/* <Box sx={{ display: { xs: "none", md: "block" } }} width="100px" minWidth="100px">
              X-Mart
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }} width="50px" minWidth="50px">
              X-Mart
            </Box> */}

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="large" aria-label={`show ${profile && profile.orderCount} products in cart`} color="inherit">
                <Badge badgeContent={profile && profile.orderCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label={`show ${profile && profile.messageCount} new mails`} color="inherit">
                <Badge badgeContent={profile && profile.messageCount} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label={`show ${profile && profile.notificationCount} new notifications`} color="inherit">
                <Badge badgeContent={profile && profile.notificationCount} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label={`customize website fonts, color and much more`} color="inherit" onClick={handleSettingModal}>
                <SettingsIcon />
              </IconButton>

              {!profile.isLoggedIn
                ? [
                    <MenuItem>
                      <IconButton size="large" aria-label="Click to login" color="inherit" key={compIdentifier.login1}>
                        <LoginIcon />
                      </IconButton>
                      <p key={compIdentifier.login2}>Login</p>
                    </MenuItem>,
                    <MenuItem>
                      <IconButton size="large" aria-label="Click to register" color="inherit" key={compIdentifier.register1}>
                        <AppRegistrationIcon />
                      </IconButton>
                      <p key={compIdentifier.register2}>Register</p>
                    </MenuItem>,
                  ]
                : [
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      ,
                      <AccountCircle />,
                    </IconButton>,
                    <p>Profile</p>,
                  ]}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    profileGlobal: state.user,
    settings: state.setting,
  };
};

export default connect(mapStateToProps)(Header);
