export default function Projects(props) {
  const images = [
    "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg",
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
        {[1, 2, 3, 4, 5, 6].map((data) => (
          <a href='#' key={data}>
            <div class='card'>
              <img
                class='card-cover-image'
                src={images[Math.floor(Math.random() * images.length)]}
                alt=''
              />
              <h3 class='card-heading'>
                It is a long established fact that a reader will be distracted.
              </h3>
              <p class='card-details'>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <span class='read-more'>Read more &#8594;</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
