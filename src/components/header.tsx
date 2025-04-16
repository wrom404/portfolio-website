const Header = () => {
  return (
    <header className="flex justify-around items-center bg-[var(--background-color)] text-gray-100 py-5 absolute w-full">
      <div className="cursor-pointer text-lg">
        wendel. <span className="text-cyan-400">rom</span>
      </div>
      <div className="">
        <ul className="flex gap-4">
          <li className="hover:text-cyan-400">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-cyan-400">
            <a href="skills">Skills</a>
          </li>
          <li className="hover:text-cyan-400">
            <a href="projects">Projects</a>
          </li>
          <li className="hover:text-cyan-400">
            <a href="services">Services</a>
          </li>
          <li className="hover:text-cyan-400">
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="">
          <button className="border rounded-2xl px-3 py-1.5 text-sm hover:text-cyan-400 hover:border-cyan-400 cursor-pointer">
            Contact me
          </button>
        </div>
        <div className="">toggle</div>
      </div>
    </header>
  );
};

export default Header;
