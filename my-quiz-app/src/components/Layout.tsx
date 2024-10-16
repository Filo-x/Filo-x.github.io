import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode; // Ensures children can be React elements
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header style={headerStyle}>
        <h1>Papio Creek Gems</h1>
        <nav>
          <a href="/" className="head">
            {" "}
            Home{" "}
          </a>
          <a href="/shop" className="head">
            {" "}
            Shop{" "}
          </a>
          <a href="/about" className="head">
            {" "}
            About Us{" "}
          </a>
        </nav>
      </header>
      <main>{children}</main> {/* Displays the wrapped content */}
      <footer style={footerStyle}>
        <p>&copy; 2024 Papio Creek Gems</p>
        <nav>
          <a href="/contact" className="head">
            Contact
          </a>
          <a href="/faq" className="head">
            FAQ
          </a>
        </nav>
      </footer>
    </div>
  );
};

// Simple inline styles
const headerStyle: React.CSSProperties = {
  backgroundColor: "#f8f8f8",
  padding: "20px",
  textAlign: "center",
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#f8f8f8",
  padding: "10px",
  textAlign: "center",
  marginTop: "20px",
};

export default Layout;
