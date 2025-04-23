import { FormEvent, useState } from "react";
import { Mail, MapPin, Globe, Github, Linkedin, Facebook } from "lucide-react";
import { type FormData } from "../types/types";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully.");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <div
      className="w-full min-h-screen px-4 md:px-20 py-10 flex flex-col justify-center items-center"
      id="contact"
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Get In Touch
        </h2>
        <h3 className="text-base text-gray-400">
          Interested in working together? Let's connect
        </h3>
      </div>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 items-center justify-start">
          {/* Email */}
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-2">
              <div className="p-2 rounded-full bg-indigo-950 text-indigo-500">
                <Mail size={20} />
              </div>
            </div>
            <h3 className="text-lg text-gray-100">Email</h3>
            <span className="text-base text-gray-400">
              wendelrom404@gmail.com
            </span>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-2">
              <div className="p-2 rounded-full bg-indigo-950 text-indigo-500">
                <MapPin size={20} />
              </div>
            </div>
            <h3 className="text-lg text-gray-100">Location</h3>
            <span className="text-base text-gray-400">
              Ormoc City, Leyte, Philippines
            </span>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-2">
              <div className="p-2 rounded-full bg-indigo-950 text-indigo-500">
                <Globe size={20} />
              </div>
            </div>
            <h3 className="text-lg text-gray-100">Social</h3>
            <div className="flex gap-4 justify-center">
              <span
                onClick={() => openExternalLink("https://github.com/wrom404")}
                className="bg-gray-900 text-gray-400 hover:text-white p-2 rounded-full cursor-pointer"
              >
                <Github size={20} />
              </span>
              <span
                onClick={() =>
                  openExternalLink("https://www.linkedin.com/in/wendel-rom/")
                }
                className="bg-gray-900 text-gray-400 hover:text-white p-2 rounded-full cursor-pointer"
              >
                <Linkedin size={20} />
              </span>
              <span
                onClick={() =>
                  openExternalLink("https://www.facebook.com/wendel.rom.1/")
                }
                className="bg-gray-900 text-gray-400 hover:text-white p-2 rounded-full cursor-pointer"
              >
                <Facebook size={20} />
              </span>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Send Me A Message
          </h3>

          <div className="mb-4">
            <label className="text-sm text-gray-300">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-1 py-2 px-3 block w-full text-sm rounded-md bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-300">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="mt-1 py-2 px-3 block w-full text-sm rounded-md bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="mt-1 py-2 px-3 block w-full text-sm rounded-md bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 w-full rounded-md"
          >
            Send
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
