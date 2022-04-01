import TeamWork1 from "../../images/teamwork-1.webp";
import TeamWork2 from "../../images/teamwork-2.webp";
import TeamWork3 from "../../images/teamwork-3.webp";
import TeamWork4 from "../../images/teamwork-4.webp";
import TeamWork5 from "../../images/teamwork-5.webp";

export default function Projects(props) {
  const images = [
    TeamWork1,
    TeamWork2,
    TeamWork3,
    TeamWork4,
    TeamWork5,
    TeamWork1,
  ];

  return (
    <section className='App-projects px-1 py-1' id='projects'>
      <h2>Projects</h2>
      <p className='sub-text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <h3 className='info-text'>Check Out Projects &#8594;</h3>
      <div className='card-row'>
        {images.map((data, idx) => (
          <a href='#' key={idx}>
            <div className='card'>
              <img
                className='card-cover-image'
                // teamwork-1
                src={data}
                alt=''
              />
              <h3 className='card-heading'>
                It is a long established fact that a reader will be distracted.
              </h3>
              <p className='card-details'>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <span className='read-more'>Read more &#8594;</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
