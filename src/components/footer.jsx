import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
            <img className="mb-1 ml-[-10px] w-40" src={assets.logo} alt="Logo" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci veritatis illum eius nostrum cumque officiis dolore aperiam, voluptas laudantium temporibus sint, commodi quo nesciunt nisi minus fugit, sequi corporis.
            </p>
        </div>
        {/* Center Section */}
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className=" flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        {/* Right Section */}
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul  className=" flex flex-col gap-2 text-gray-600">
                <li>+91-9987521390</li>
                <li>healthsutra@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        {/* Copyright Text */}
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
