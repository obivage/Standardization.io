import React from "react";
import { Icon } from "react-icons-kit";

import { instagram } from "react-icons-kit/feather/instagram";
import { facebook2 } from "react-icons-kit/icomoon/facebook2";
import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="landingPage-footer">
      <div className="footer-bar">
        <span className="footer-header header-bold">Bandage</span>
        <div className="footer-social-link">
          <Icon icon={facebook2} className="footer-reach-us" />
          <Icon icon={instagram} className="footer-reach-us" />
          <Icon icon={socialTwitter} className="footer-reach-us" />
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          <h1 className="footer-colum-h1 header-bold">Company Info</h1>
          <span className="colum-text small-text">About Us</span>
          <span className="colum-text small-text">Carrier</span>
          <span className="colum-text small-text">We are hiring</span>
          <span className="colum-text small-text">Blog</span>
        </div>
        <div className="footer-content">
          <h1 className="footer-colum-h1 header-bold">Legal</h1>
          <span className="colum-text small-text">About Us</span>
          <span className="colum-text small-text">Carrier</span>
          <span className="colum-text small-text">We are hiring</span>
          <span className="colum-text small-text">Blog</span>
        </div>
        <div className="footer-content">
          <h1 className="footer-colum-h1 header-bold">Features</h1>
          <span className="colum-text small-text">Business Marketing</span>
          <span className="colum-text small-text">User Analytic</span>
          <span className="colum-text small-text">Live Chat</span>
          <span className="colum-text small-text">Unlimited Support</span>
        </div>
        <div className="footer-content">
          <h1 className="footer-colum-h1 header-bold">Resources</h1>
          <span className="colum-text small-text">IOS & Android</span>
          <span className="colum-text small-text">Watch a Demo</span>
          <span className="colum-text small-text">Customers</span>
          <span className="colum-text small-text">API</span>
        </div>
        <div className="footer-content">
          <h1 className="footer-colum-h1 header-bold">Get In Touch</h1>
          <div className="footer-call-to-action">
            <input
              type="Email"
              placeholder="Your Email"
              className="footer-input"
            />
            <button className="footer-btn">Subscribe</button>
          </div>
          <span className="colum-text-action">Lore imp sum dolor Amit</span>
        </div>
      </div>
      <p className="footer-p small-text">
        Made With Love By Finland All Right Reserved{" "}
      </p>
    </footer>
  );
};

export default Footer;
