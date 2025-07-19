import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaSnapchatGhost, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t mt-10">
      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Logo & Description */}
        <div>
          <img
            src="https://s3.us-west-2.amazonaws.com/royoorders2.0-assets/prods/LTzBW4fQ9xXK2iG1SjWatbp9TWoTtzQNhZzAQkN2.png"
            alt="Tareeqk Logo"
            className="h-8 mb-4"
          />
          <p>
            In 2022, Tareeqk was created by a group of entrepreneurs, with a vision to make driving on the road easier and eliminate any complications. UAE is a country of possibilities, where the citizens are passionate to achieve number one in each field.
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaSnapchatGhost />
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* HOME */}
        <div>
          <h3 className="text-base font-bold mb-2 border-b w-fit border-black">HOME</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>FAQs</li>
            <li>Driver's FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <h3 className="text-base font-bold mb-2 border-b w-fit border-black">POLICIES</h3>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div>
          <h3 className="text-base font-bold mb-2 border-b w-fit border-black">CONTACT US</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>Tareeqk Office #126, Bel Resheed 3 - Ras Al Khor - Dubai United Arab Emirates</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              +97142232269
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              info@tareeqk.ae
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs py-4 border-t bg-gray-50">
        © 2023 Tareeqk. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
