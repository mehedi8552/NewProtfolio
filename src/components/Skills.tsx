
import { Card, CardContent } from "@/components/ui/card";
import Tailwind from "../Assets/Icon/tailwindcss.svg";
import React from "../Assets/Icon/react.svg";
import Node from "../Assets/Icon/nodedotjs.svg";
import TypeScript from "../Assets/Icon/typescript.svg";
import shadcn from "../Assets/Icon/shadcnui.svg";
import MongoDB from "../Assets/Icon/mongodb.svg";
import Git from "../Assets/Icon/git.svg";
import mui from "../Assets/Icon/mui.svg";



const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 85 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 40 },
      ]
    },
    {
      title: "Tools & Other",
      skills: [
        { name: "Git", level: 92 },
        { name: "Material UI", level: 75 },
        { name: "shadcn-ui", level: 70 },
        { name: "Figma", level: 85 },
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: React },
    { name: "Node.js", icon: Node },
    { name: "TypeScript", icon: TypeScript },
    { name: "shadcn-ui", icon: shadcn },
    { name: "MongoDB", icon: MongoDB },
    { name: "Tailwind CSS", icon: Tailwind},
    { name: "Material UI", icon: mui },
    { name: "Git", icon: Git},
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Technology Icons */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-slate-300 rounded-xl flex items-center justify-center text-2xl mb-2 group-hover:bg-purple-600/20 transition-colors duration-200">
                <img className="w-8 h-8 " src={tech.icon}></img>
              </div>
              <span className="text-gray-400 text-sm text-center">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
