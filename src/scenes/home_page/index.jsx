import { Box, useMediaQuery, Typography, useTheme } from "@mui/material";
import Navbar from "../navbar";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import '../../style/styles.css'
import FlexBetween from "../../components/FlexBetween";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const sentences = t("homepage_slogan",{ returnObjects: true });
 
  const [displayedText, setDisplayedText] = useState([]);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0); 

  const theme = useTheme();
  const dark = theme.palette.dark;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const isNonMobileScreens = useMediaQuery("(min-width: 1100px)");

useEffect(()=>{
    setDisplayedText([]);
    setSentenceIndex(0);
    setWordIndex(0);
}, [i18n.language]);

useEffect(() => {
    if (sentenceIndex < sentences.length) {
      const words = sentences[sentenceIndex].split(' '); // Split each sentence into words
      if (wordIndex < words.length) {
        const timeoutId = setTimeout(() => {
          // Append the next word to the current sentence
          setDisplayedText((prev) => {
            const newDisplayedText = [...prev];
            if (newDisplayedText[sentenceIndex]) {
              newDisplayedText[sentenceIndex] += ' ' + words[wordIndex];
            } else {
              newDisplayedText[sentenceIndex] = words[wordIndex];
            }
            return newDisplayedText;
          });
          setWordIndex(wordIndex + 1); // Move to the next word
        }, 200); // Adjust word rendering speed
        return () => clearTimeout(timeoutId);
      } else {
        setWordIndex(0); // Reset word index for the next sentence
        setSentenceIndex(sentenceIndex + 1); // Move to the next sentence
      }
    }
  }, [sentenceIndex, wordIndex, sentences]);

  return (
    <Box>
      <Navbar/>
      {isNonMobileScreens ? (
        <Box
        width="100%"
        padding="2rem 6%"
        height="80vh"
        backgroundColor={alt}
        sx={{
          backgroundImage: "url(/assets/home_page-removebg-preview.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            padding: "1rem 2rem",
            backgroundColor: theme.palette.neutral.light,
            borderRadius: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
            maxWidth: "400px",
            position: "relative",
            textAlign: "left",
          }}
        >
          <Typography fontSize="1.5rem" color="primary" sx={{ whiteSpace: "pre-wrap" }}>
          {displayedText.map((sentence, index) => (
              <div key={index} className="fade-in-word">
                {sentence}
              </div>
            ))}
          </Typography>
          <Box
            sx={{
              position: "absolute",
              bottom: "-15px",
              left: "50px",
              width: "0",
              height: "0",
              borderLeft: "15px solid transparent",
              borderRight: "15px solid transparent",
              borderTop: "15px solid #f0f4ff",
            }}
          />
        </Box>
      </Box>
      ):(
        <FlexBetween flexDirection='column' backgroundColor={alt}>
        <Box
        width="100%"
        padding="2rem 6%"
        height="65vh"
        backgroundColor={alt}
        sx={{
          backgroundImage: "url(/assets/home_page-removebg-preview.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        
      </Box>
      <Box
      sx={{
        padding: "1rem 2rem",
        backgroundColor: theme.palette.neutral.light,
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        maxWidth: "400px",
        position: "relative",
        textAlign: "left",
      }}
    >
      <Typography fontSize="1.5rem" color="primary" sx={{ whiteSpace: "pre-wrap" }}>
      {displayedText.map((sentence, index) => (
          <div key={index} className="fade-in-word">
            {sentence}
          </div>
        ))}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          bottom: "-15px",
          left: "50px",
          width: "0",
          height: "0",
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderTop: "15px solid #f0f4ff",
        }}
      />
    </Box>
    </FlexBetween>
      )}
      
    </Box>
  );
};

export default HomePage;
