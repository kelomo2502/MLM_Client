import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/Aisling (1).jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-white py-10 flex flex-col items-center">
      <div className="flex justify-center items-center w-full max-w-md gap-5 ">
        <div className="footer__img__container  bg-pink-500 ">
          <Link to={"/"}>
            {" "}
            <img src={logo} alt="aislings" className="footer__img" />
          </Link>
        </div>
        <div className="flex  gap-2 ">
          <a href="https://web.facebook.com/aislingsrealty" target="__blank">
            {" "}
            <FaFacebook size={25} color="blue" />
          </a>
          <a href="https://x.com/home" target="__blank">
            <BsTwitterX size={25} color="black" />
          </a>
          <a href="https://www.instagram.com/aislingsrealty/" target="__blank">
            {" "}
            <FaInstagram size={25} color="brown" />
          </a>
          <a href="https://wa.me/2348135724403" target="__blank">
            {" "}
            <FaWhatsapp size={25} color="green" />
          </a>
        </div>
      </div>
      <p className="text-center">
        Copyright &copy; Aislings {new Date().getFullYear()}
      </p>
      <p>All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
