export default function Header(props) {
  return (
    <header className='App-header' id='profile'>
      <section className='App-profile px-1 py-1'>
        <h1>Jayant Parashar</h1>
        <p className='sub-text'>
          (aka <strong className='g-text'>jparasha</strong>) Hey There, I'm a
          FrontEnd Developer from <strong className='flag'>India</strong>
          <br />I love to create web apps that would make life easy, accessible
          and enjoyable for people.
        </p>
        <ul>
          <li>
            <a
              className='github flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
              title='GitHub'
              aria-label='GitHub'
              target='_blank'
              href='https://github.com/jparasha'
              rel='noopener noreferrer'>
              <span className='fab fa-github'></span>
            </a>
          </li>
          <li>
            <a
              className='linkedin flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
              title='LinkedIn'
              aria-label='LinkedIn'
              target='_blank'
              href='https://in.linkedin.com/in/jparasha'
              rel='noopener noreferrer'>
              <span className='fab fa-linkedin'></span>
            </a>
          </li>
          <li>
            <a
              className='twitter flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
              title='Twitter'
              aria-label='Twitter'
              target='_blank'
              href='https://twitter.com/ActuallyJayant'
              rel='noopener noreferrer'>
              <span className='fab fa-twitter'></span>
            </a>
          </li>
          <li>
            <a
              className='stackoverflow flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
              title='Stack Overflow'
              aria-label='Stack Overflow'
              target='_blank'
              href='https://stackoverflow.com/users/6265883/j-parashar'
              rel='noopener noreferrer'>
              <span className='fab fa-stack-overflow'></span>
            </a>
          </li>
          <li>
            <a
              className='outlook flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
              title='Email'
              aria-label='Email'
              href='mailto:jayantparashar03@outlook.com'>
              <span className='fa-brands fa-internet-explorer'></span>
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
}
