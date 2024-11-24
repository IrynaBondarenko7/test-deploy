import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
export const SocialMediaLinks = () => {
  return (
    <ul className="flex gap-4">
      <li className="w-8 h-8">
        <a
          href="https://www.linkedin.com/in/iryna-bondarenko-bd/"
          className=" hover:shadow-sm inline-block hover:shadow-white hover:text-bgColor focus:bg-white focus:shadow-white focus:text-bgColor hover:bg-white transition-all duration-300 rounded-sm"
        >
          <IoLogoLinkedin className="w-8 h-8 fill-current" />
        </a>
      </li>
      <li className="w-8 h-8">
        <a
          href="https://github.com/IrynaBondarenko7"
          className=" hover:shadow-sm inline-block hover:shadow-white hover:text-bgColor focus:bg-white focus:shadow-white focus:text-bgColor hover:bg-white transition-all duration-300 rounded-sm"
        >
          <FaSquareGithub className="w-8 h-8 fill-current" />
        </a>
      </li>
    </ul>
  );
};
