import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { CREDIT_CARDS, HEADER_IMAGES } from "../../configs/imageContainer";
import WorkIcon from "@mui/icons-material/Work";
import StarsIcon from "@mui/icons-material/Stars";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpIcon from "@mui/icons-material/Help";

import "./style.css";

const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "footer.main", py: 2 }}>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ justifyContent: "space-around", alignItems: "center" }}
        >
          <Box class="center">
            <WorkIcon color="secondary" sx={{ mr: 1, fontSize: "20px" }} />
            <Typography variant="h6" color={"white.main"}>
              Become a Seller
            </Typography>
          </Box>

          <Box class="center">
            <StarsIcon color="secondary" sx={{ mr: 1, fontSize: "20px" }} />
            <Typography variant="h6" color={"white.main"}>
              Advertise
            </Typography>
          </Box>

          <Box class="center">
            <CardGiftcardIcon
              color="secondary"
              sx={{ mr: 1, fontSize: "20px" }}
            />
            <Typography variant="h6" color={"white.main"}>
              Gift Cards
            </Typography>
          </Box>

          <Box class="center">
            <HelpIcon color="secondary" sx={{ mr: 1, fontSize: "20px" }} />
            <Typography variant="h6" color={"white.main"}>
              Help Center
            </Typography>
          </Box>

          <Box class="center">
            <Typography variant="h6" color={"white.main"}>
              © 2007-2024 Flipkart.com
            </Typography>
          </Box>

          <Box>
            {Object.values(CREDIT_CARDS).map((credit_card, index) => {
              return (
                <img
                  key={index}
                  src={credit_card}
                  alt="card"
                  width={"40px"}
                  className="credit-card"
                />
              );
            })}
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
