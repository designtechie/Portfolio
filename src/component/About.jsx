import React from "react";
import AboutImg from "../assets/Double dimond.png";

const About = () => {
  return (
    <section className="bg-primary text-white px-16 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 w-[180px] pb-2">
            About Me
          </h2>

          <p className="pb-5">
          I'm Krishna Chaitanya, a versatile UX designer and developer committed to delivering intuitive digital experiences through meticulous design. Proficient in tools like Figma and ProtoPie, I specialize in wireframing and prototyping to ensure seamless interactions for users.


          </p>
        

          <p className="pb-5">My focus lies in user research and user-centric design principles, guiding the creation of interfaces that prioritize usability and satisfaction. 

In addition to my design expertise, I possess strong frontend skills utilizing HTML and CSS to build robust foundations for web interfaces. 

       </p>

 
        </div>

        <div className="about-img">
          <div className="rounded-2xl ">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="flex w-[70%] md:ml-auto"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
