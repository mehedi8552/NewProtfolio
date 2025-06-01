
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import CV from "../Assets/File/CV.pdf";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Full-Stack Developer", "React Specialist", "Node.js Expert", "UI/UX Enthusiast"];

  let GithubTo = "https://github.com/mehedi8552";
  let LinkedinTo = "https://www.linkedin.com/in/mdmehedihasan90/";
  let EmailTo = "mailto:mehedi193002106@gmail.com";

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timer = setTimeout(() => {
      if (displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      } else {
        setTimeout(() => {
          setDisplayText("");
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Md Mehedi Hasan</span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 h-12 flex items-center justify-center">
            <span className="border-r-2 border-purple-400 pr-2">{displayText}</span>
          </div>
        </div>
        
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating beautiful, functional web applications that solve real-world problems.
          I specialize in modern technologies and love bringing ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#projects">
            <Button  size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              View My Work
            </Button>
          </a>
          <a href={CV} download>
          <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
            Download CV
          </Button>
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a href={GithubTo} className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
            <Github size={24} />
          </a>
          <a href={LinkedinTo} className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
            <Linkedin size={24} />
          </a>
          <a href={EmailTo} className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-purple-400" size={32} />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
