import React from "react";
import plugins from "../assets/plugins.png";
import casestudy from "../assets/case study.png";
import keyboard from "../assets/keyboard.png";


const Blogs = () => {
  const Blogs = [
    {
      img: casestudy,
      title: "Design",
      desc: "Case Study ",
      view: "https://medium.com/@designtechie/rhythmic-music-app-a-case-study-in-designing-a-user-centered-music-listening-experience-433f7c1d59d9"
      
    },
    {
      img: keyboard,
      title: "Spatial",
      desc: "Android Hexagon keyboard",
      view: "https://medium.com/@designtechie/the-hexagon-keyboard-for-android-a-revolutionary-typing-experience-7ee68d0f1a9f",
    },
    {
      img: plugins,
      title: "css projects",
      desc: "Article on figma plugins",
      view: "https://medium.com/@designtechie/boost-your-figma-designing-skills-with-these-top-10-plugins-baf633ec4368",
    },
   
  ];

  return (
    <section className="bg-primary text-white px-16 py-32" id="blogs">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5  pb-2 text-white">
            Blogs
          </h2>

          <p className="pb-5 htext">
          Check out some of my best projects! Explore and witness the creativity and innovation in action.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="blogs container mx-auto grid md:grid-cols-4 gap-10 ">
  {Blogs.map((Blogs, i) => {
    return (
      <div className="relative" key={i}>
        <img
          src={Blogs.img}
          alt={Blogs.title}
          className="w-full h-full object-cover"
        />
        <div className="flex absolute left-0 right-0 top-[13px] bottom-[13px] mx-auto w-[90%] h-[90%] bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
          <p className="py-5 text-center font-bold px-2 text-white">
            {Blogs.desc}
          </p>
      

                <div className="mx-auto">
                  <a
                    href={Blogs.view}
                    className="px-4 py-2 bg-center rounded-md  bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                   View
                  </a>

                  
                
          
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
