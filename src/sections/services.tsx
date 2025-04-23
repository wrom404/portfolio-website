import { services } from "../data/services";
import { ServiceCard } from "../components/service-card";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 min-h-screen h-full flex justify-center items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Services
        </h2>
        <h3 className="text-base text-gray-400 mb-10 text-center">
          Ways I can help you bring your digital ideas to life.
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Start slightly lower
              whileInView={{ opacity: 1, y: 0 }} // Move up smoothly
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: index * 0.1,
              }} // Faster animation
              viewport={{ amount: 0.5, once: true }}
              className=""
            >
              <ServiceCard key={service.title} service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
