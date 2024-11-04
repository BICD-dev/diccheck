import "./contact.css";
import phone from "./assets/phone.svg";
import location from "./assets/location.svg";
import mail from "./assets/mail.svg";
const Login = () => {
  return (
    <>
      <div className="contact">
        <h1>Contact Us</h1>
        <p>
          we are here to meet any bussiness need to promote your company online
        </p>
        <section>
          <img src={phone} alt="phone-icon" /><label>Phone: </label> <span>1234567890</span>
          <br />
          <img src={location} alt="phone-icon" /><label>Location: </label> <span>75 street sample, WI 63025</span> <br />
          <img src={mail} alt="phone-icon" /><label>Mail: </label> <span>template@sample.com</span>
        </section>
      </div>
    </>
  );
};

export default Login;
