import { Box, useTheme, Typography } from "@mui/material";

const PersonalWidget = ({ title, image, description }) => {
  const getRandomRotation = (index) => {
    const angle = (index % 2 === 0 ? 1 : -1) * (10 + Math.random() * 10);
    return `rotate(${angle}deg)`;
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        padding: "1rem 2rem",
        backgroundColor: theme.palette.neutral.light,
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        fontSize="4rem"
        sx={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translateX(-50%)",
          color: theme.palette.primary.light,
          zIndex: 10,
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
          pointerEvents: "none",
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // Allows wrapping of items
          justifyContent: "center", // Centers items horizontally
          gap: "16px", // Spacing between images
          marginTop: "60px", // Space below title
        }}
      >
        {image.map((imgSrc, index) => (
          <Box
            key={index}
            sx={{
              width: "calc(33.33% - 16px)", // 3 columns layout
              height: "auto",
              position: "relative", // For handling image hover effects
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={imgSrc}
              alt={`Image ${index + 1}`}
              sx={{
                width: "100%",
                height: "auto",
                opacity: 0,
                animation:'fadeIn 0.6s forwards',
                animationDelay: `${index * 0.3}s`,
                transform: getRandomRotation(index), // Random rotation
                transition: "transform 0.3s ease",
                zIndex: 0,
                position: 'relative',
                "&:hover": {
                  transform: "scale(2)", // Hover effect to enlarge image
                  zIndex: 10, 
                },
                borderRadius: "8px", // Optional: rounded corners
              }}
            />
          </Box>
        ))}
      </Box>
      <Box sx={{ marginTop: "40px", padding: "20px" }}>
        <Typography color={theme.palette.neutral.mediumMain} fontSize="1.2rem">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default PersonalWidget;
