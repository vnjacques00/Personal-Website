function App() {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src="jq_original.webp" width="150" height="150" alt="Logo" />
        </div>
        <h1>Hi there, I'm Jacques van Niekerk</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <div className="profile-picture">
            <img src="profile-picture2.webp" width="375" height="375" alt="Jacques' Profile" />
          </div>
          <p>
            I'm a student at Langara College who is currently enrolled in the
            Computer Science Transfer Program. I have a deep-rooted passion for
            storytelling and have always been captivated by the power of
            narrative to inspire, educate, and connect people from diverse
            backgrounds. This fascination has led me to pursue a dual path of
            studying computer science and honing my storytelling craft.
          </p>

          <p>
            Driven by a desire to merge my two passions, I am is on a mission to
            develop cutting-edge software and tools that empower individuals to
            enhance their storytelling skills. Through innovative technologies
            such as artificial intelligence, natural language processing, and
            interactive multimedia platforms, I aim to democratize the art of
            storytelling, making it accessible to aspiring writers, filmmakers,
            game developers, and educators alike.
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>Currently I am working on GoodGame, an application where users are able to 
          search for board games online, with the assistance from an Artificial Intelligence 
          chatbot. The second project I am working on is this profile website. The repositories 
          listed below:</p>
          <div className="project-links">
            <a href="https://github.com/vnjacques00/GoodGame" target="_blank" rel="noopener noreferrer">GoodGame</a>
            <a href="https://github.com/vnjacques00/personal-website" target="_blank" rel="noopener noreferrer">Personal Website</a>
          </div>
        </section>
        <section id="contact">
          <h2>Contact Information</h2>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/j-van-niekerk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/jcqsvnnkrk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://github.com/vnjacques00"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Jacques van Niekerk</p>
      </footer>
    </div>
  );
}

export default App;
