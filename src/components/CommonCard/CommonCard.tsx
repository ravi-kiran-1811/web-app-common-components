import React, { FunctionComponent, ReactNode } from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./BookAParcel.module.css";

interface CardProps {
  className?: string;
  titleClassName?: string;
  title?: string;
  image?: string;
  imageClassName?: string;
  video?: string;
  videoClassName?: string;
  paragraph?: string;
  paragraphClassName?: string;
  buttonText?: string;
}

const CommonCard: FunctionComponent<CardProps> = ({
  className = "",
  title,
  image,
  video,
  paragraph,
  titleClassName,
  imageClassName,
  videoClassName,
  paragraphClassName,
  buttonText,
}) => {
  return (
    <Box className={[styles.bookAParcel, className].join(" ")}>
      <Box className={styles.text} ml={2}>
        {title && (
          <Typography className={`${styles.title} ${titleClassName}`}>
            {title}
          </Typography>
        )}
        {image && (
          <Box mt={2}>
            <img
              className={`${styles.image} ${imageClassName}`}
              loading="lazy"
              alt="card image"
              src={image}
            />
          </Box>
        )}
        {video && (
          <Box mt={2}>
            <video
              className={`${styles.video} ${videoClassName}`}
              controls
              style={{ width: "100%" }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </Box>
        )}
        {paragraph && (
          <Typography
            variant="body2"
            className={`${styles.paragraph} ${paragraphClassName}`}
          >
            {paragraph}
          </Typography>
        )}
        {buttonText && (
          <Button variant="contained" color="primary">
            {buttonText}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CommonCard;