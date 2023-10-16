import React from "react";

const App = () => {
  const portfolioData = {
    name: "K.Vijaya Bhaskar",
    reg:"21BCE9390",
    place: "Nandyal,Andhra Pradesh,India",
    skills: ["Java App Developer","Novice in Data Analysis", "Beginner in Database Management(SQL,MonogoDB)"],
    languages:["Python,Java,R,SQL"],
    projects: [
      {
        title: "Water Quality Monitor",
        description: "A model based on Arduino which  monitors Water quality (about temperature,smell,impurities concentration,etc) and gives the result based on the purity",
      },
      {
        title: "Data Analysis on Climate Change",
        description: "Using analytic tools such as tableau, to give a detailed analysis on the Climate change causes",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>Portfolio</h1>
          <h2><u>Name</u>:{portfolioData.name}</h2>
          <h2><u>Registration no</u>:{portfolioData.reg}</h2>
          <h2><u>Location</u>:{portfolioData.place}</h2>
        </div>
        <div className="body">
          <div className="about">
            <h3><u><i>Description about me:</i></u></h3>
            <p>Hello! I am Vijaya Bhaskar, studying B-Tech 3rd year in CSE core from Vellore Institute of Technology-AP.
              I always try to learn new things because there is much out there that is to know.<br/>
              As a CS Engineer I think computers are one of the best ways to find and create anything.<br/></p>
          </div>
          <div className="skills">
            <h3><u><i>Skills:</i></u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u><i>Projects:</i></u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </ul>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;