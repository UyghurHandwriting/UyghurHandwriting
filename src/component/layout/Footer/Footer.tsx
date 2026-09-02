import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Footer.scss";
import { useSelector } from "react-redux";
import {
  selectFPhone35,
  selectFSubTitle34,
  selectFTitle33,
  selectFCopyright65,
} from "../../../features/language/languageSlice";

const Footer: React.FunctionComponent = () => {
  const footerText1 = useSelector(selectFTitle33);
  const footerText2 = useSelector(selectFSubTitle34);
  const copyrightTemplate = useSelector(selectFCopyright65);
  const copyrightText = copyrightTemplate.replace(
    "{year}",
    String(new Date().getFullYear())
  );

  return (
    <footer className="Footer">
      <div className="Footer--content">
        <div className="Footer--text">
          <p>{footerText1}</p>
          <p>{footerText2}</p>
        </div>
        <div className="Footer--social-icon--group">
          <FaEnvelope className="Footer--social-icon" />
          <p style={{ color: "white" }}>362yasen2@gmail.com</p>
          <FaFacebook className="Footer--social-icon" />
          <FaTwitter className="Footer--social-icon" />
          <FaInstagram className="Footer--social-icon" />
        </div>
        <p className="Footer--copyright">{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
