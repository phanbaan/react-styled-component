import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRight,
  SocialIcon,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membershiip to recice the lastest news and trends
        </FooterSubHeading>
        <FooterSubText>you can unsubcribe at any time</FooterSubText>
        <Form>
          <FormInput
            type="email"
            placeholder="Your email"
            name="email"
          ></FormInput>
          <Button fontBig> Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>about us</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Contact us</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Video</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Social media</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">How it works</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrapper>
          <SocialLogo to="/">
            <SocialIcon>ULRTRA</SocialIcon>
          </SocialLogo>
          <WebsiteRight>ULTRA 2020</WebsiteRight>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="facebook">
              <FaFacebook />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrapper>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
