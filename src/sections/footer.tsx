import { Github, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      className="h-60 flex justify-around items-center text-gray-300"
      id="footer"
    >
      <div className="text-base">wendel. <span className="text-indigo-600">rom</span></div>
      <div className="text-sm">
        @ 2025 Personal Portfolio. All rights reserved.
      </div>
      <div className="flex gap-1.5 my-1.5">
        <span
          onClick={() => openExternalLink("https://github.com/wrom404")}
          className="text-gray-400 bg-gray-900 rounded-full p-1.5 cursor-pointer hover:text-gray-100"
        >
          <Github size={18} />
        </span>
        <span
          onClick={() =>
            openExternalLink("https://www.linkedin.com/in/wendel-rom/")
          } // Replace with your actual LinkedIn URL
          className="text-gray-400 bg-gray-900 rounded-full p-1.5 cursor-pointer hover:text-gray-100"
        >
          <Linkedin size={18} />
        </span>
        <span
          onClick={() =>
            openExternalLink("https://www.facebook.com/wendel.rom.1/")
          } // Replace with your actual Facebook URL
          className="text-gray-400 bg-gray-900 rounded-full p-1.5 cursor-pointer hover:text-gray-100"
        >
          <Facebook size={18} />
        </span>
      </div>
    </div>
  );
};

export default Footer;
