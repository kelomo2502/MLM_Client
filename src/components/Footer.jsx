import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/Aisling (1).jpg";

const Footer = () => {
  return (
    <footer className=" bg-white py-10 flex flex-col items-center gap-3">
      <div className="flex justify-center items-center w-full max-w-md gap-5 ">
        <div className="footer__img__container  bg-pink-500 ">
          <img src={logo} alt="aislings" className="footer__img" />
        </div>
        <div className="flex  gap-2 ">
          <a href="">
            {" "}
            <FaFacebook size={25} color="blue" />
          </a>
          <a href="">
            <BsTwitterX size={25} color="black" />
          </a>
          <a href="">
            {" "}
            <FaInstagram size={25} color="brown" />
          </a>
          <a href="">
            {" "}
            <FaWhatsapp size={25} color="green" />
          </a>
        </div>
      </div>
      <p className="text-center">
        Copyright &copy; Aislings {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
