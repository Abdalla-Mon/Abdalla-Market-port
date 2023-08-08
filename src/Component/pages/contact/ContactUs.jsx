import { Typography, Paper, Box } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
let arr = [
  {
    title: "Contact support",
    text: "Help with returns and complains",
    icon: <FontAwesomeIcon icon="fa-solid fa-envelope" />,
    gmail: "abdalla-contact@g.co",
  },
  {
    title: "Contact sales",
    text: "Information on team licenses",
    icon: <FontAwesomeIcon icon="fa-solid fa-mobile-screen" />,
    gmail: "011 223 215 45",
  },
  {
    title: "Report abuse",
    text: "Copyright, trademark, or inappropriate content   ",
    icon: <FontAwesomeIcon icon="fa-solid fa-flag" />,
    gmail: "abdalla-report@g.co",
  },
  {
    title: "Partnerships",
    text: "For collaborations, integrations, and co-marketing",
    icon: <FontAwesomeIcon icon="fa-solid fa-handshake" />,
    gmail: "abdalla-partner@g.co",
  },
  {
    title: "Contact support",
    text: "Help with returns and complains",
    icon: <FontAwesomeIcon icon="fa-solid fa-envelope" />,
    gmail: "abdalla-contact@g.co",
  },
  {
    title: "Contact sales",
    text: "Information on team licenses",
    icon: <FontAwesomeIcon icon="fa-solid fa-mobile-screen" />,
    gmail: "011 223 215 45",
  },
];
export default function ContactUs() {
  return (
    <section className="contact">
      <div className="contact-landing  flex flex-col items-center justify-center ">
        <div className="container mx-auto text-center">
          <Typography variant="h3">Get in touch</Typography>
          <Typography variant="h5">
            We&apos;re happy to hear from you. What&apos;s on your mind?
          </Typography>
        </div>
      </div>
      <div className="contact-details">
        <div className="container mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {arr.map((ele) => (
              <ContactELe ele={ele} key={ele.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactELe({ ele }) {
  return (
    <>
      <Paper elevation={8}>
        <Box className="flex sm:flex-col  items-center contact-ele">
          <div className="co-icon">{ele.icon}</div>
          <div className="co-text">
            <Typography variant="h5">{ele.title}</Typography>
            <Typography variant="body1" className="text-center">
              {ele.gmail}
            </Typography>
          </div>
        </Box>
      </Paper>
    </>
  );
}
