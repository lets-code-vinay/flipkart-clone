import React from "react";
import { userSettings } from "../configs";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../redux/reducers/appReducer";
import { useNavigate } from "react-router-dom";
import {
  ListItemIcon,
  Menu,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";

const UserSettings = ({
  isOpen = false,
  id = "",
  anchorEl = {},
  onCloseUserSetting = () => {},
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenuEvent = (type) => (e) => {
    if (type == "logout") {
      localStorage.clear();
      dispatch(setUserData({}));
      navigate("/login");
    }
  };
  return (
    <>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={onCloseUserSetting}
        id={id}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={isOpen}
          onClose={onCloseUserSetting}
          //   onClick={handleClose}

          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {Object.values(userSettings).map((menu, index) => {
            return (
              <MenuItem
                onClick={handleMenuEvent(menu.value)}
                key={`${index}-${menu.value}`}
              >
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <Typography variant="subtitle">{menu.label}</Typography>
              </MenuItem>
            );
          })}
        </Menu>
      </Popover>
    </>
  );
};

export default UserSettings;
