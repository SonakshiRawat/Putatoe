import "./Footer.css";
function Footer() {
  return (
    <div className="foot_bg">
      <div className="lef">
        <img src="images/pot.png" className="foot" alt="unavailable" />
        <div className="loc">
          <div className="bold">PUTATOE SOLUTIONS PVT. LTD.</div>
          <p>
            233 Harahawa Phatak, Near SBI Bank, Gorakhpur, Uttar Pradesh -
            273001
          </p>
        </div>
      </div>
      <div className="rig">
        <div className="link">Useful Links</div>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
