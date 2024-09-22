import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LOGIN_PAGE_IMAGES } from "../../configs/imageContainer";
import { APIS } from "../../configs/apis";
import { validateEmailAddress } from "../../utils/utilities";
import "./style.css";
import { setUserData } from "../../redux/reducers/appReducer";
import { useNavigate } from "react-router-dom";
import BasicLoader from "../../components/Loader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isShow, setShow] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitted, setSubmitted] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPW, setErrorPW] = useState("");
  const [isLoading, setLoading] = useState(false);

  /**
   * @description Handle input email/password
   * @param {String} type
   * @returns
   */
  const handleChange = (type) => (event) => {
    console.log("type", type, event.target.value);
    if (type == "email") {
      setLoginData({ ...loginData, email: event.target.value });
    } else if (type == "password") {
      setLoginData({ ...loginData, password: event.target.value });
    }
  };

  /**
   * @description Show/Hide password
   */
  const handlePasswordView = () => {
    setShow(!isShow);
  };

  /**
   * @description Getting login data from API
   * @returns
   */
  const handleSubmit = async () => {
    setSubmitted(true);
    await handleValidation();

    if (errorEmail || errorPW) return;
    try {
      setLoading(true);
      const api = APIS.login_api;
      const payload = {
        username: "emilys", // use your email or username when you have your own api -loginData.email,
        password: "emilyspass",
      };
      const { status, data = {} } = await axios.post(api, payload);
      if (status == 200) {
        dispatch(setUserData(data));
        localStorage.setItem("user_data", JSON.stringify(data));
        // /homepage
        setLoading(false);
        navigate("/homepage");
      }
    } catch (err) {
      console.error("--error in login api --", err);
      setLoading(false);
    }
  };

  /**
   * @description validation and error handling
   */
  const handleValidation = () => {
    const isValidEmail = validateEmailAddress(loginData.email);
    if (loginData.email.length < 6 || loginData.email.length > 25) {
      setErrorEmail("Email address must be greater than 6 and less than 25");
    } else if (!isValidEmail) {
      setErrorEmail("Email address is not valid");
    } else if (
      loginData.password.length < 6 ||
      loginData.password.length > 25
    ) {
      setErrorPW("Password must be greater than 6 and less than 25");
    } else {
      setErrorEmail("");
      setErrorPW("");
    }
  };

  return (
    <>
      <Header />
      <Box className="login-container" sx={{ bgcolor: "bg.main" }}>
        {isLoading && <BasicLoader />}
        <Box className="login-section">
          <Box className="image-section" sx={{ bgcolor: "primary.main" }}>
            <Box className="text-section">
              <Typography variant="h1" style={{ height: "70px" }}>
                Login
              </Typography>
              <Typography variant="body2">
                Get access to your Orders, Wishlist and Recommendations
              </Typography>
            </Box>
            <Box className="center">
              <img src={LOGIN_PAGE_IMAGES.login} alt="login image" />
            </Box>
          </Box>
          <Box className="form-section">
            <Box className="input-container">
              <TextField
                id="standard-basic"
                label="Enter Email address"
                variant="standard"
                fullWidth
                margin="normal"
                onChange={handleChange("email")}
                error={isSubmitted && Boolean(errorEmail)}
                helperText={isSubmitted && Boolean(errorEmail) && errorEmail}
              />

              <TextField
                id="standard-basic"
                label="Enter password"
                variant="standard"
                fullWidth
                margin="normal"
                type={isShow ? "text" : "password"}
                onChange={handleChange("password")}
                error={isSubmitted && Boolean(errorPW)}
                helperText={isSubmitted && Boolean(errorPW) && errorPW}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton onClick={handlePasswordView}>
                        {!isShow ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Typography variant="body1" className="t-and-c">
                By continuing, you agree to Flipkart's &nbsp;
                <Link href="#" underline="none">
                  Terms of Use
                </Link>
                &nbsp; and &nbsp;
                <Link href="#" underline="none">
                  Privacy Policy
                </Link>
                .
              </Typography>
              <Box>
                <Button
                  variant="contained"
                  className="login-btn"
                  disabled={!loginData.email || !loginData.password}
                  onClick={handleSubmit}
                  color="button"
                >
                  Login
                </Button>
              </Box>
            </Box>
            <Link
              href="#"
              underline="none"
              className="center"
              style={{ fontWeight: 600 }}
              variant="h6"
            >
              New to Flipkart? Create an account
            </Link>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Login;
