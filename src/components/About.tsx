import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "../Assets/image/ProfileImage.png";

const About = () => {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" },
    { number: "150+", label: "Problem Solved" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn more about my journey, skills, and what drives me to create
            amazing digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className=" w-fit h-fit xl:w-96 xl:h-96 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-full p-1">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <img
                    src={Image}
                    alt="Profile"
                    className=" w-fit h-fit xl:w-96 xl:h-96  rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Full-Stack Developer & Problem Solver
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              With over 2 years practical experience in web development, I
              specialize in creating scalable, user-friendly applications using
              modern technologies. My passion lies in transforming complex
              problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest industry trends. When I'm not coding,
              you can find me contributing to open-source projects or learning
              new technologies.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <Badge
                variant="secondary"
                className="bg-purple-600/20 text-purple-400 border-purple-600/30"
              >
                JavaScript
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-600/20 text-purple-400 border-purple-600/30"
              >
                TypeScript
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-600/20 text-purple-400 border-purple-600/30"
              >
                React
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-600/20 text-purple-400 border-purple-600/30"
              >
                Next
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-600/20 text-purple-400 border-purple-600/30"
              >
                Express
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-600/20 text-purple-400 border-purple-600/30"
              >
                Node.js
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-600/20 text-purple-400 border-purple-600/30"
              >
                MongoDB
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
