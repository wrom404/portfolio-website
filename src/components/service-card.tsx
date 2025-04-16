import { Service } from "../types/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className=" rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-[#121224]">
      <div className="flex items-center justify-center w-12 h-12 mb-4 text-blue-600 dark:text-blue-400">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
    </div>
  );
}
