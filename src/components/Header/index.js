export default function Header(props) {
  return (
    <header className='App-header' id='profile'>
      <section className='App-profile px-1 py-1'>
        <h2>Projects</h2>
        <p className='sub-text'>fd</p>
        <ul>
          <li>
            <a
              className='flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
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
              className='flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
              title='Reddit'
              aria-label='Reddit'
              target='_blank'
              href='https://www.reddit.com/user/MrTurnerj'
              rel='noopener noreferrer'>
              <span className='fab fa-reddit-alien'></span>
            </a>
          </li>
          <li>
            <a
              className='flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
              title='GitHub'
              aria-label='GitHub'
              target='_blank'
              href='https://github.com/Turnerj'
              rel='noopener noreferrer'>
              <span className='fab fa-github'></span>
            </a>
          </li>
          <li>
            <a
              className='flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
              title='LinkedIn'
              aria-label='LinkedIn'
              target='_blank'
              href='https://au.linkedin.com/in/jamesturner7'
              rel='noopener noreferrer'>
              <span className='fab fa-linkedin'></span>
            </a>
          </li>
          <li>
            <a
              className='flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
              title='Stack Overflow'
              aria-label='Stack Overflow'
              target='_blank'
              href='https://stackoverflow.com/users/1676444/turnerj'
              rel='noopener noreferrer'>
              <span className='fab fa-stack-overflow'></span>
            </a>
          </li>
          <li>
            <a
              className='flex pa2 f2 theme-dark-grey hover-text-gradient no-underline'
              title='Email'
              aria-label='Email'
              href='mailto:james@turnerj.com'>
              <span className='fa-brands fa-rocketchat'></span>
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
}
