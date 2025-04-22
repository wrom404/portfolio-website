import { FormEvent, useEffect, useState } from "react";
import { Mail, MapPin, Globe, Github, Linkedin, Facebook } from "lucide-react";
import { type FormData } from "../types/types";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // error in .env

  console.log("SERVICE:", import.meta.env.VITE_SERVICE_ID);
  console.log("TEMPLATE:", import.meta.env.VITE_TEMPLATE_ID);
  console.log("PUBLIC KEY:", import.meta.env.VITE_PUBLIC_KEY);

  useEffect(() => {
    console.log("SERVICE_ID:", import.meta.env.VITE_SERVICE_ID);
    console.log("TEMPLATE_ID:", import.meta.env.VITE_TEMPLATE_ID);
    console.log("PUBLIC_KEY:", import.meta.env.VITE_PUBLIC_KEY);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          e.target as HTMLFormElement,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            toast.success("Message sent successfully.");
            setFormData({ name: "", email: "", message: "" });
          },
          function (err) {
            console.log("FAILED...", err);
          }
        );
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div
      className="px-36 py-4 h-screen flex flex-col justify-center"
      id="contact"
    >
      <div className="">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Get In Touch
        </h2>
        <h3 className="text-base text-gray-400 mb-10 text-center">
          Interested in working together? Let's connect
        </h3>
      </div>
      <div className="flex py-2">
        <div className="w-4/10 flex flex-col items-center justify-between pr-8">
          <div className="text-center">
            <div className="flex justify-center my-1.5">
              <div className="w-fit h-fit p-2 rounded-full bg-indigo-950 text-indigo-500">
                <Mail size={20} />
              </div>
            </div>
            <h3 className="text-lg text-gray-100">Email</h3>
            <span className="text-base text-gray-400">
              wendelrom404@gmail.com
            </span>
          </div>
          <div className="text-center">
            <div className="flex justify-center my-1.5">
              <div className="w-fit h-fit p-2 rounded-full bg-indigo-950 text-indigo-500">
                <MapPin size={20} />
              </div>
            </div>
            <h3 className="text-lg text-gray-100">Location</h3>
            <span className="text-base text-gray-400">
              Ormoc City, Leyte, Philippines
            </span>
          </div>
          <div className="text-center">
            <div className="flex justify-center my-1.5">
              <div className="w-fit h-fit p-2 rounded-full bg-indigo-950 text-indigo-500">
                <Globe size={20} />
              </div>
            </div>
            <h3 className="text-lg text-gray-100">Social</h3>
            <div className="flex gap-6 my-1.5">
              <span
                onClick={() => openExternalLink("https://github.com/wrom404")}
                className="text-gray-400 bg-gray-900 rounded-full p-2 cursor-pointer hover:text-gray-100"
              >
                <Github size={20} />
              </span>
              <span
                onClick={() =>
                  openExternalLink("https://www.linkedin.com/in/wendel-rom/")
                } // Replace with your actual LinkedIn URL
                className="text-gray-400 bg-gray-900 rounded-full p-2 cursor-pointer hover:text-gray-100"
              >
                <Linkedin size={20} />
              </span>
              <span
                onClick={() =>
                  openExternalLink("https://www.facebook.com/wendel.rom.1/")
                } // Replace with your actual Facebook URL
                className="text-gray-400 bg-gray-900 rounded-full p-2 cursor-pointer hover:text-gray-100"
              >
                <Facebook size={20} />
              </span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-6/10">
          {/* Right Section (Send Me A Message Form) */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Send Me A Message
          </h3>
          <div className="mb-5">
            <label className="text-sm text-gray-300" htmlFor="">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name || ""}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-1 py-2 px-3 block w-full sm:text-sm border-gray-300 rounded-md bg-transparent text-gray-900 dark:text-white border dark:border-gray-700"
            />
          </div>
          <div className="mb-5">
            <label className="text-sm text-gray-300" htmlFor="">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email || ""}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="mt-1 py-2 px-3 block w-full sm:text-sm border-gray-300 rounded-md bg-transparent text-gray-900 dark:text-white border dark:border-gray-700"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300" htmlFor="">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message || ""}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="mt-1 py-2 px-3 block w-full sm:text-sm border-gray-300 rounded-md bg-transparent text-gray-900 dark:text-white border dark:border-gray-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-5 cursor-pointer bg-indigo-600 w-full hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
