import Card from "../components/card";
import { technologies } from "../data/technologies";

const Skills = () => {
  return (
    <div
      className="min-h-[80vh] flex flex-col justify-center items-center"
      id="skills"
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center my-6">
        Technologies
      </h2>
      <div className="grid grid-cols-6 gap-4">
        {technologies.map((technology) => (
          <Card technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
