import Chips from "../Chips";
import TeamWork1 from "../../images/teamwork-1.webp";
import TeamWork2 from "../../images/teamwork-2.webp";
import TeamWork3 from "../../images/teamwork-3.webp";
import TeamWork4 from "../../images/teamwork-4.webp";
import TeamWork5 from "../../images/teamwork-5.webp";

export default function Projects(props) {
  const images = [
    {
      icon: TeamWork1,
      title: "Vaccine Guru",
      link: "https://vaccine-guru.vercel.app/",
      github: "https://github.com/jparasha/vaccine-guru",
      tech: ["React", "Next.js", "PWA"],
      description:
        "A web application that helps you find and book covid-19 vaccines in India for allowed age-groups.",
    },
    {
      icon: TeamWork4,
      title: "Next.js Enzyme Boilerplate",
      link: "https://github.com/jparasha/next-scss-enzyme-boilerplate",
      github: "https://github.com/jparasha/next-scss-enzyme-boilerplate",
      tech: ["Next.js", "SCSS", "Jest", "Enzyme"],
      description:
        "A boilerplate for next.js with scss and enzyme testing. It includes a basic layout, header, footer, and a basic style guide.",
    },
    {
      icon: TeamWork3,
      title: "SpaceX Launch Tracker",
      link: "https://spacex-missions.vercel.app/",
      github: "https://github.com/jparasha/spacex-launches",
      tech: ["React", "Next.js", "RWA"],
      description:
        "A Responsive web application that tracks SpaceX launches. User can filter results by launch year, success, or date.",
    },
    {
      icon: TeamWork2,
      title: "Netflix Clone",
      link: "https://jparasha.github.io/yet-another-netflix-clone/",
      github: "https://github.com/jparasha/yet-another-netflix-clone",
      tech: ["React", "SCSS", "RestAPI"],
      description:
        "A web application that helps you find movies and TV shows similar to Netflix.",
    },
    {
      icon: TeamWork5,
      title: "Weather Info",
      link: "https://jparasha.github.io/weatherinfo/",
      github: "https://github.com/jparasha/weatherinfo",
      tech: ["React", "Redux", "OpenWeatherMap"],
      description:
        "Simple Weather application that shows the weather of a city. User can search for a city and get the weather information.",
    },
    {
      icon: TeamWork1,
      inProgress: true,
      title: "Courier Tracker",
      link: "",
      github: "https://github.com/jparasha/courier-dev",
      tech: ["React", "Redux", "SCSS", "Mongo"],
      description:
        "Courier Tracker helps find the status of your courier. User can search for a courier and get the status of the courier.",
    },
  ];

  const githubRedirect = (event, url) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <section className='App-projects px-1 py-1' id='projects'>
      <h2>Projects</h2>
      <p className='sub-text'>
        Here is a showcase of some of my best projects that I made. They can be
        found on my <strong className='g-text'>GitHub</strong> !
      </p>
      <h3 className='info-text'>Check Out Projects &#8594;</h3>
      <div className='card-row'>
        {images.map(
          (
            { icon, title, link, description, github, inProgress, tech },
            idx
          ) => (
            <a
              href={link || "#"}
              key={idx}
              title={`${
                inProgress ? title + " is under development" : "Visit " + title
              }`}>
              <div className='card'>
                <img
                  className='card-cover-image'
                  src={icon}
                  alt=''
                  loading='lazy'
                />
                <Chips chipsData={tech} />
                <h3 className='card-heading g-text'>
                  {title ||
                    " It is a long established fact that a reader will be distracted."}
                </h3>
                <p className='card-details'>
                  {description ||
                    "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}
                </p>
                <button
                  className='read-more'
                  disabled={inProgress}
                  onClick={(e) => githubRedirect(e, github)}>
                  <span className='km-text'>Know more </span>&#8594;
                </button>
              </div>
            </a>
          )
        )}
      </div>
    </section>
  );
}
