import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "../navbar";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const emailUserId = process.env.REACT_APP_EMAIL_USER_ID;
const emailTemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const emailServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID;

const ContactMePage = () => {
  const { t } = useTranslation();
  const contactMePageContent = t("contact_me_page", { returnObjects: true });

  const isNonMobile = useMediaQuery("(min-width:1100px)");

  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors((prevErrors) => {
      console.log(prevErrors);
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[name];
      return updatedErrors;
    });

    console.log(errors);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required";
    }
    if (!formData.company) {
      formErrors.company = "Company name is required";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Please enter a valid email";
    }
    if (!formData.message) {
      formErrors.message = "Message is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      emailjs.send(emailServiceId, emailTemplateId, formData, emailUserId).then(
        (result) => {
          console.log(result.text);
          alert("Email successfully sent!");
        },
        (error) => {
          console.log(error.text);
          alert("There was an error, please try again.");
        }
      );
      setFormData({ name: "", company: "", email: "", message: "" });
      setErrors({});
    }
  };
  console.log(errors);
  const style = {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "6px",
    fontSize: "1rem",
    padding: " 0.5rem",
    width: "100%",
  };

  return (
    <Box backgroundColor= {theme.palette.background.alt} height="100vh" >
      <Navbar />
      <form onSubmit={sendEmail}>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
          gap="30px"
          padding={isNonMobile ? "4rem 25%" : " 2rem 10%"}
        >
          <Box gridColumn={!isNonMobile && "span 2"}>
            <input
              text
              style={style}
              label={contactMePageContent.name}
              placeholder={contactMePageContent.name}
              onChange={handleChange}
              value={formData.name}
              name="name"
            />
            {errors.name && (
              <Typography style={{ color: "red" }}>{errors.name}</Typography>
            )}
          </Box>

          <Box gridColumn={!isNonMobile && "span 2"}>
            <input
              text
              style={style}
              label={contactMePageContent.company}
              onChange={handleChange}
              placeholder={contactMePageContent.company}
              value={formData.company}
              name="company"
            />
            {errors.company && (
              <Typography style={{ color: "red" }}>{errors.company}</Typography>
            )}
          </Box>

          <Box sx={{ gridColumn: "span 2" }}>
            <input
              email
              style={style}
              label={contactMePageContent.email}
              onChange={handleChange}
              placeholder={contactMePageContent.email}
              value={formData.email}
              name="email"
            />
            {errors.email && (
              <Typography style={{ color: "red" }}>{errors.email}</Typography>
            )}
          </Box>
          <Box sx={{ gridColumn: "span 2" }}>
            <textarea
              style={style}
              rows={10}
              name="message"
              placeholder={contactMePageContent.message}
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && (
              <Typography style={{ color: "red" }}>{errors.message}</Typography>
            )}
          </Box>
          <Box sx={{ gridColumn: "2 /3 ", justifySelf: " end " }}>
            <Box
              component="button"
              sx={{
                padding: "10px 20px",
                fontSize: "1rem",
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: "8px",
                backgroundColor: `${theme.palette.primary.light}`,
                color: `${theme.palette.primary.dark}`,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: `${theme.palette.primary.main}`,
                },
              }}
            >
              Send
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default ContactMePage;
