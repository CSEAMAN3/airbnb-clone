import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-section">
          <h6 className="footer-heading">Support</h6>
          <ul className="footer-list footer-support-list">
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Help Centre</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Cancellation options</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">AirCover</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Our COVID-19 Response</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Supporting people with disabilities</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Report a neighbourhood concern</li>
            </Link>
          </ul>
        </div>
        <div className="footer-section">
          <h6 className="footer-heading">Community</h6>
          <ul className="footer-list footer-community-list">
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Airbnb.org: disaster relief housing</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Combating discrimination</li>
            </Link>
          </ul>
        </div>
        <div className="footer-section">
          <h6 className="footer-heading">Hosting</h6>
          <ul className="footer-list footer-hosting-list">
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Airbnb your home</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">AirCover for Hosts</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Explore hosting resources</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Visiting our Community forum</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">How to host responsibly</li>
            </Link>
          </ul>
        </div>
        <div className="footer-section">
          <h6 className="footer-heading">Airbnb</h6>
          <ul className="footer-list footer-airbnb-list">
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Newsroom</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Learn about new features</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Letter from our founders</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Careers</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Investors</li>
            </Link>
            <Link to="/" className="footer-link">
              <li className="footer-list-item">Gift cards</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
