import React from "react";
import "./style.css";
import { Box, Skeleton } from "@mui/material";

export const LoginShimmer = () => {
  return (
    <>
      <Box className="login-shimmer-container">
        {/* <HeaderShimmer /> */}
        <Skeleton variant="rounded" />
        {/* <FooterShimmer /> */}
      </Box>
    </>
  );
};

export const HomepageShimmer = () => {
  return (
    <>
      <Box className="homepage-shimmer-container">
        {/* <HeaderShimmer /> */}
        <Skeleton variant="rounded" />
        {/* <FooterShimmer /> */}
      </Box>
    </>
  );
};
