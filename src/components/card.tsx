import { Technology } from "../types/types";

const Card = ({ technology }: { technology: Technology }) => {
  return (
    <div className="group rounded-2xl p-3 sm:p-4 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-[#121224] transition-all duration-300">
      <div className="flex justify-center items-center h-2/3">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-16 sm:h-20 lg:h-24 transition-transform group-hover:scale-105"
        />
      </div>
      <div className="text-center text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm">
        {technology.name}
      </div>
    </div>
  );
};

export default Card;
