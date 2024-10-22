import React from "react";
import "../styles.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>&copy; Lockheed Martin {currentYear}. All rights reserved.</p>
    </div>
  );
}
