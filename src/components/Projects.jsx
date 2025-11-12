import React from "react";
import pudrcImage from "../assets/pudrc-image.png";
import afsImage from "../assets/afs-image.png";
import ramfebeImage from "../assets/ramfe+be-image.png";
import rpsImage from "../assets/rock-paper-scissors.png";
import emwaImage from "../assets/employee-management.png";
import textrpgImage from "../assets/rpg-game (text-based).png";

const projects = [
  {
    id: 1,
    name: "Employee management fullstack appllication",
    technologies: "Java + HTML/CSS + MySQL + Springboot + Bootstrap",
    image: emwaImage,
    github: "https://github.com/DgenR-8/employee-management-web-app",
  },
  {
    id: 2,
    name: "Pushup detecting rep counter (pudrc)",
    technologies: "Python + Mediapipe + OpenCV",
    image: pudrcImage,
    github: "https://github.com/DgenR-8/Motion-detecting-rep-counter",
  },
  {
    id: 3,
    name: "Rick and morty (RAM) front-end + back-end",
    technologies: "Python + Flask + MongoDB + Angular",
    image: ramfebeImage,
    github: "https://github.com/DgenR-8/RAM-FE-BE",
  },
  {
    id: 4,
    name: "Automating file sorter (AFS)",
    technologies: "Python",
    image: afsImage,
    github: "https://github.com/DgenR-8/Automating-file-sorter",
  },
  {
    id: 5,
    name: "Rock, Paper, Scissors",
    technologies: "Java",
    image: rpsImage,
    github: "https://github.com/DgenR-8/Rock-Paper-Scissors",
  },
  {
    id: 6,
    name: "Text-based rpg",
    technologies: "Java",
    image: textrpgImage,
    github: "https://github.com/DgenR-8/rpg-game-text-based"
  }

];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
