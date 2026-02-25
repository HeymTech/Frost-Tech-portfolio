import { FaCode,FaRocket } from "react-icons/fa";

function Projects() {

  const projects = [
    {
      id: 1,
      name: "Chellamay Baby Shop",
      description:
        "A fully developed e-commerce website for baby products with product listings and responsive UI.",
      link: "https://www.chellamaybabyshop.com/",
    },
    {
      id: 2,
      name: "Skin & Wellness Clinic",
      description:
        "A modern clinic website featuring services, appointment info, and elegant healthcare branding.",
      link: "https://pathumai-skin-care.vercel.app/",
    },
    {
      id: 3,
      name: "R.A Traders",
      description:
        "A professional business website showcasing trading services and structured product system.",
      link: "https://www.ratradein.com/",
    },
    {
      id: 4,
      name: "Designrz TOUCH",
      description:
        "A creative agency portfolio website with branding and modern UI components.",
      link: "https://designrz-touch-project.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 px-8 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition duration-300 shadow-lg"
          >
            {/* Common Icon + Title */}
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="bg-blue-500/20 p-2 rounded-full">
                <FaRocket className="text-blue-500 text-lg" />
              </div>
              <h3 className="text-lg font-semibold">
                {project.name}
              </h3>
            </div>

            <p className="text-gray-400 mb-6 text-sm">
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              View Live Site →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;