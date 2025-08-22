import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} MyPortfolio · All rights reserved.</p>
      </div>
    </footer>
  );
}
