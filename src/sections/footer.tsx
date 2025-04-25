import { Github, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-[#0a0a0a]" id="footer">
      <div className="py-6 max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center text-gray-300  gap-4">
        <div className="text-base text-center md:text-left">
          <a href="">
            wendel.<span className="text-indigo-600">rom</span>
          </a>
        </div>
        <div className="text-sm text-center">
          © 2025 Personal Portfolio. All rights reserved.
        </div>
        <div className="flex gap-3">
          <span
            onClick={() => openExternalLink("https://github.com/wrom404")}
            className="text-gray-400 bg-gray-900 rounded-full p-2 cursor-pointer hover:text-gray-100"
          >
            <Github size={18} />
          </span>
          <span
            onClick={() =>
              openExternalLink("https://www.linkedin.com/in/wendel-rom/")
            }
            className="text-gray-400 bg-gray-900 rounded-full p-2 cursor-pointer hover:text-gray-100"
          >
            <Linkedin size={18} />
          </span>
          <span
            onClick={() =>
              openExternalLink("https://www.facebook.com/wendel.rom.1/")
            }
            className="text-gray-400 bg-gray-900 rounded-full p-2 cursor-pointer hover:text-gray-100"
          >
            <Facebook size={18} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
