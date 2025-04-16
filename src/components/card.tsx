import { Technology } from "../types/types";

const Card = ({ technology }: { technology: Technology }) => {
  return (
    <div className="group rounded-2xl p-2 w-48 h-48 bg-[#121224]">
      <div className="flex justify-center items-center p-6">
        <img src={technology.icon} alt="tech icon" className="h-24 hover:scale-105 transition-transform" />
      </div>
      <div className="text-center text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {technology.name}
      </div>
    </div>
  );
};

export default Card;
