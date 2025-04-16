import { Code2, Database, Layout, Server } from "lucide-react";
import { Service } from "../types/types";

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Building responsive and dynamic web applications using modern frameworks and best practices.",
    icon: <Code2 className="w-full h-full" />,
  },
  {
    title: "Backend Engineering",
    description:
      "Developing robust server-side applications and APIs with Node.js and Express.",
    icon: <Server className="w-full h-full" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces with a focus on user experience.",
    icon: <Layout className="w-full h-full" />,
  },
  {
    title: "Database Optimization",
    description:
      "Designing and optimizing database schemas for better performance and scalability.",
    icon: <Database className="w-full h-full" />,
  },
];
