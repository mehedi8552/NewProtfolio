import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

import Agancy from "../Assets/image/Digital Agency Website.png";
import CubeIT from "../Assets/image/Cube IT Landing Page.png";
import Quran from "../Assets/image/Quran Shikkha LMS Web Application.png";
import Protfolio from "../Assets/image/Protfolio.png";
import Recipe from "../Assets/image/Recipe page.png";
import OrderSummary from "../Assets/image/Order Summary.png";
const Projects = () => {
  const projects = [
    {
      title: "Digital Agency Website",
      description:
        "Online Service Provider can use this website for her Team or Organization. Technologies Used React JS, Tailwind CSS, Framer Motion, Shadcn, Typescript.",
      image: Agancy,
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
      liveUrl: "https://boldcraft-1.onrender.com/",
      githubUrl: "",
    },
    {
      title: "Cube IT Landing Page",
      description:
        "Online Service Provider can use this website for her Team or Organization. Technologies Used React JS, Tailwind CSS, Framer Motion",
      image: CubeIT,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://cubeit-wwj9.onrender.com/",
      githubUrl: "https://github.com/mehedi8552/CubeIT",
    },
    {
      title: "Quran Shikkha LMS Web Application",
      description:
        "Designed and developed a Quran Shikkha LMS Web Application using React, Node.js,express.js and MongoDB and many more technologies.",
      image: Quran,
      technologies: ["React", "Node.js", "Chart.js","express.js", "MongoDB", "Tailwind"],
      liveUrl: "https://learning-management-systemto.onrender.com/",
      githubUrl: "https://github.com/mehedi8552/Learning-management-system",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and featuring smooth animations and interactive elements.",
      image: Protfolio,
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      liveUrl: "https://protfoliome.onrender.com/",
      githubUrl: "https://github.com/mehedi8552/protfolioMe",
    },
    {
      title: "Recipe page",
      description:
        "A Recipe page in frontendmentor contest platform with user profiles, posts, comments, and real-time messaging functionality.",
      image: Recipe,
      technologies: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "https://www.frontendmentor.io/solutions/responsive-recipie-page-l_eh9zo8LT",
      githubUrl: "https://github.com/mehedi8552/frontend-mentor/tree/main/Order%20summary%20component",
    },
    {
      title: "Order Summary Component",
      description:
        "Order Summary Component in frontendmentor contest.",
      image:OrderSummary,
      technologies: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "https://66b5b2f4537063054c2dfa43--cheerful-custard-f6e90d.netlify.app/",
      githubUrl: "https://github.com/mehedi8552/frontend-mentor/tree/main/recipie%20app",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-2">
                    <a href={project.liveUrl}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live
                      </Button>
                    </a>
                    <a href={project.githubUrl}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-purple-600/20 text-purple-400 border-purple-600/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
