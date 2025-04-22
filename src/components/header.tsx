const Header = () => {
  return (
    <header className="flex justify-around items-center bg-[var(--background-color)] text-gray-100 py-5 absolute w-full">
      <div className="cursor-pointer text-lg">
        wendel. <span className="text-indigo-600">rom</span>
      </div>
      <div className="">
        <ul className="flex gap-4">
          <li className="hover:text-gray-300">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="">
          <button className="border rounded-2xl px-3 py-1.5 text-sm text-indigo-500 border-indigo-500 hover:text-indigo-400 hover:border-indigo-400 cursor-pointer">
            Contact me
          </button>
        </div>
        <div className="">toggle</div>
      </div>
    </header>
  );
};

export default Header;
