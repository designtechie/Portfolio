
import dashboard from "../assets/Dashboard.png";
import page from "../assets/Landing page.png";
import Threads from "../assets/Thread app.png";
import Spatial from "../assets/Spatial.webp";
import Masts from "../assets/masts.png";
import Flipkart from "../assets/Flipkart.png";
import SmartVilla from "../assets/Smartvilla.png";
import Foodie from "../assets/Foodie.png";
import Intelli from "../assets/Intelli.png";
import Bento from "../assets/Bento.png";

const Projects = () => {
  const projects = [

    {
      img: Foodie,
      title: "get Inspired",
      desc: "Foodie Case study",
      view:"https://www.figma.com/proto/ecA0Yz8qYOqQHoCfPlpHgY/Foodie-App?page-id=0%3A1&type=design&node-id=1-4&viewport=125%2C753%2C0.07&t=n3WH9OgvuI2g4gBW-1&scaling=scale-down-width&starting-point-node-id=1%3A4&mode=design",
    },
    

    {
      img: Intelli,
      title: "get Inspired",
      desc: "Home Automation App",
      view: "https://www.figma.com/proto/UP8bs5DbjQDuUm4aXYiTAy/Intellihome?page-id=0%3A1&type=design&node-id=70-147&viewport=-931%2C1047%2C0.17&t=dXP4w1S9xAQh9nse-1&scaling=min-zoom&starting-point-node-id=70%3A147&show-proto-sidebar=1&mode=design",
     
    },
    
    {
      img: page,
      title: "Design",
      desc: "Apartments rental website  ",
      view: "https://www.figma.com/proto/PHXvJcOpQpaVMDZN9OLE7I/Apartments-website-(Mercor)?page-id=0%3A1&type=design&node-id=7-635&viewport=893%2C126%2C0.1&t=ZBSFvyjMFi31YY1G-1&scaling=min-zoom&starting-point-node-id=7%3A635&mode=design"
      
    },
    {
      img: Spatial,
      title: "Spatial",
      desc: "Trello Spatial design",
      view: "https://www.behance.net/gallery/174682131/Trello-apple-spatial-design",
    },

    {
      img: Bento,
      title: "Bento website",
      desc: "Bento portfolio website",
      view: "https://www.figma.com/proto/ttghEQ4aoHW4vLpUbMQYFJ/Bento-macbook?page-id=0%3A1&type=design&node-id=7-2&viewport=402%2C242%2C0.08&t=EWMVP1chNzbf9W8V-1&scaling=scale-down&mode=design",
    },

    {
      img: dashboard,
      title: "css projects",
      desc: "CRM Dashboard",
      view: "https://www.behance.net/gallery/132411257/CRM-Dashboard",
    },
    {
      img: Threads,
      title: "get Inspirred",
      desc: "Revamp",
      view: "https://www.behance.net/gallery/174945439/Threads-App-revamp",
    },
    {
      img: Masts,
      title: "get Inspirred",
      desc: "Masts is a cyber security website",
      view: "https://www.behance.net/gallery/148795225/Website-Redesign",
    },
    {
      img: Flipkart,
      title: "get Inspirred",
      desc: "Redesign",
      view: "https://www.behance.net/gallery/154890267/Flipkart-Application",
    },

    {
      img: SmartVilla,
      title: "Smart-Villa",
      desc: "Appartments booking website",
      view: "https://www.behance.net/gallery/177431997/Smart-Villa",
    },
    
   
    
   
  ];

  return (
    
    <section className="bg-primary text-white px-16 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:center-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl mb-5  pb-2 text-white font-bold  w-[300px] ">
           My projects
          </h2>
          
          <p className="pb-5 text-white">
            There are additional projects I've handled under confidentiality that aren't featured in my portfolio. However, I'm available for a call to discuss comprehensive project case studies.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-4  gap-10 py-8">
      
       {projects.map((project, i) => {
           return (
      <div className="relative" key={i}>
        <img src={project.img} alt={project.title} className="w-full h-full object-cover"/>
        <div className="flex absolute left-0 right-0 top-[13px] bottom-[13px] rounded-md mx-auto w-[90%] h-[90%] bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100">
          <p className="py-5 text-center  px-2 htext">
            {project.desc}
          </p>
      

                <div className="mx-auto">
                  <a 
                    href={project.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-center bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
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

export default Projects;
