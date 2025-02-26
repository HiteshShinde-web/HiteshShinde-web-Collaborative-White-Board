import "./index.css";
import slateLogo from "../../assets/SlateAI-Logo.png";
import linkedin from "../../assets/linkedin.png";
import mail from "../../assets/mailIcon.png";

export const Footer = () => {
  return (
    <div className="h-auto mt-16 bg-white p-4 opacity-90 flex flex-col md:flex-row md:justify-between items-center">
      {/* Logo & Copyright */}
      

      {/* Social Links */}
      <div className="flex flex-col items-center mt-4 md:mt-0">
        <p className="font-semibold text-center text-lg text-gray-700">
          Let's Connect
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="https://www.linkedin.com/in/hitesh-shinde-4b108a24b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <img className="w-[24px] hover:opacity-75" src={linkedin} alt="LinkedIn" />
          </a>

          <a
            href="mailto:hiteshshinde8777@gmail.com"
            aria-label="Send Email"
          >
            <img className="w-[24px] hover:opacity-75" src={mail} alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
};
