function App() {
  return (
    <div className="container">
      <header>
        <h1>Hi there, I'm Jacques van Niekerk</h1>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <div className="profile-picture">
          <img src="profile-picture.jpg" alt="Jacques' Profile Picture" />
          </div>
          <p>I'm a student at Langara College who is currently enrolled in the Computer Science Transfer Program. 
            I have a deep-rooted passion for storytelling and have always been captivated by the power of narrative to inspire, educate, and connect people from diverse backgrounds. 
            This fascination has led me to pursue a dual path of studying computer science and honing my storytelling craft.</p>
            
          <p>Driven by a desire to merge my two passions, I am is on a mission to develop cutting-edge software and tools that 
            empower individuals to enhance their storytelling skills. Through innovative technologies such as artificial intelligence, 
            natural language processing, and interactive multimedia platforms, I aim to democratize the art of storytelling, 
            making it accessible to aspiring writers, filmmakers, game developers, and educators alike.</p>
       </section>
        {/* <section id="projects">
          <h2>Projects</h2>
          <p>Here you can showcase some of your projects or works.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>You can put your contact information or a contact form here.</p>
        </section> */}
      </main>
      <footer>
        <p>&copy; 2024 Jacques van Niekerk</p>
      </footer>
    </div>
  );
}

export default App;
