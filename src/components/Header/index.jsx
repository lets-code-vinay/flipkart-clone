import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { HEADER_IMAGES } from "../../configs/imageContainer";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import UserSettings from "./UserSettings";

const Header = () => {
  const { userData } = useSelector((state) => state?.app);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isUSerSetting, setUserSetting] = useState(false);
  const [userDataHeader, setUserDataHeader] = useState({});

  useEffect(() => {
    setUserDataHeader(userData);
  }, [userData]);

  const handleUserSettingOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setUserSetting(true);
  };

  const handleUserSettingClose = () => {
    setAnchorEl(null);
    setUserSetting(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const isUserLoggedIn = userDataHeader?.accessToken;

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Box sx={{ bgcolor: "primary.main", py: 2 }}>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Box>
            <img
              src={HEADER_IMAGES.header_logo}
              alt="flipkart-logo"
              height={"30px"}
            />
          </Box>

          <TextField
            id="standard-basic"
            size="small"
            label="Search"
            variant="outlined"
            margin="normal"
            type={"text"}
            // onChange={handleChange("password")}
            sx={{ width: "30%", bgcolor: "white.main" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                  // onClick={handlePasswordView}
                  >
                    <SearchIcon sx={{ fontSize: "2px" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {isUserLoggedIn ? (
            <>
              <Button
                onClick={handleUserSettingOpen}
                aria-describedby={id}
                color={"white"}
                startIcon={
                  userDataHeader?.image ? (
                    <img
                      src={userDataHeader?.image}
                      alt="user image"
                      width={"25px"}
                    />
                  ) : (
                    <AccountCircleOutlinedIcon />
                  )
                }
                endIcon={
                  <>
                    {!isUSerSetting ? (
                      <ExpandMoreOutlinedIcon />
                    ) : (
                      <ExpandLessOutlinedIcon />
                    )}
                  </>
                }
              >
                {userDataHeader?.firstName}
              </Button>
              <UserSettings
                isOpen={open}
                id={id}
                anchorEl={anchorEl}
                onCloseUserSetting={handleUserSettingClose}
              />
            </>
          ) : (
            <Button color={"white"} onClick={handleLogin}>
              Login
            </Button>
          )}

          <Button
            color={"white"}
            startIcon={isUserLoggedIn ? <StorefrontOutlinedIcon /> : ""}
          >
            Become Seller
          </Button>

          {!isUserLoggedIn && (
            <Button
              color={"white"}
              startIcon={isUserLoggedIn ? <StorefrontOutlinedIcon /> : ""}
            >
              More
            </Button>
          )}

          <Button
            startIcon={
              isUserLoggedIn ? (
                <Badge color="secondary" badgeContent={1}>
                  <ShoppingCartIcon color="white" sx={{ fontSize: "25px" }} />
                </Badge>
              ) : (
                <ShoppingCartIcon color="white" sx={{ fontSize: "25px" }} />
              )
            }
          >
            Cart
          </Button>
          {isUserLoggedIn && (
            <IconButton>
              <MoreVertIcon color="white" sx={{ fontSize: "25px" }} />
            </IconButton>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default Header;
