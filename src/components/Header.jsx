import logo from "../assets/Aisling (1).jpg";

function Header() {
  return (
    <section className="flex justify-between items-center gap-3 w-full mb-5">
      <img src={logo} alt="aislings" width={"100px"} height={"100px"} />
      <h1 className="text-pink-500 font-bold text-center">
        REALTOR PORTAL
      </h1>
    </section>
  );
}

export default Header;
