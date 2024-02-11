import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { Button } from "@mui/material";
import { FaYoutube } from "react-icons/fa";
import { makeStyles, useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  button: {
    height: 60,
    width: 150,
    borderRadius: 18,
    marginLeft: 10,
    marginTop: -5, // Default marginTop
    [theme.breakpoints.down("xs")]: {
      marginTop: 10, // Add marginTop for small devices (xs breakpoint)
    },
  },
}));
const HeroSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <TextLoop>
              Hi, I am <br />
            </TextLoop>
            <Title>{Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton
              style={{ marginBottom: "15px" }}
              href={Bio.resume}
              target="display"
            >
              Check Resume
            </ResumeButton>
            <Button
              variant="contained"
              color="error"
              size="large"
              className={classes.button}
              onClick={() =>
                window.open("https://www.youtube.com/@arsil_malek")
              }
            >
              <FaYoutube size={"medium"} />
              &nbsp;YouTube
            </Button>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
