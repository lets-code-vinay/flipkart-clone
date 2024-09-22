import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ChecklistIcon from "@mui/icons-material/Checklist";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export const userSettings = {
  profile: {
    label: "My profile",
    icon: <AccountCircleOutlinedIcon sx={{ fontSize: "20px" }} />,
    value: "my_profile",
  },
  superCoin: {
    label: "Super Coin Zone",
    icon: <MonetizationOnIcon sx={{ fontSize: "20px" }} />,
    value: "super_coin_zone",
  },
  fpPlus: {
    label: "Flipkart Plus Zone",
    icon: <AddBoxIcon sx={{ fontSize: "20px" }} />,
    value: "flipkart_plus_zone",
  },
  wishlist: {
    label: "Wishlist",
    icon: <ChecklistIcon sx={{ fontSize: "20px" }} />,
    value: "wishlist",
  },
  order: {
    label: "Order",
    icon: <MonetizationOnIcon sx={{ fontSize: "20px" }} />,
    value: "order",
  },
  coupan: {
    label: "Coupan",
    icon: <LoyaltyOutlinedIcon sx={{ fontSize: "20px" }} />,
    value: "coupan",
  },
  gift_card: {
    label: "Gift Card",
    icon: <CardGiftcardIcon sx={{ fontSize: "20px" }} />,
    value: "gift_card",
  },
  notification: {
    label: "Notification",
    icon: <NotificationAddOutlinedIcon sx={{ fontSize: "20px" }} />,
    value: "notification",
  },
  logout: {
    label: "Logout",
    icon: <LogoutOutlinedIcon sx={{ fontSize: "20px" }} />,
    value: "logout",
  },
};
