var typed = undefined;
var prevDir = "guest@randyzhou:~$ ";

function loadNav(){
  document.getElementById("faceContent").outerHTML =
    `<div id="facewrapper"><img src="images/headshot.png" id="myface" onclick="squelchface();"></div>`;

  document.getElementById("masterContent").outerHTML =
    `<hr class="bar fade">
    <div class="other fade">
      <div class="el" id="projects" onclick="showProjects()"><h3>Projects</h3></div>
      <div class="el" id="about" onclick="showAbout()"><h3>About</h3></div>
      <div class="el" id="links" onclick="showLinks()"><h3>Links</h3></div>
    </div>
    <hr class="bar fade">
    <div class="fade" id="content">
    </div>`;

  document.getElementById("footer").outerHTML =
    `<div class="footer fade">
      <div class="footerbar"></div>
      Built from scratch, just as it should be.<br>
      Randy Zhou 2020
    </div>`;
}



function showProjects() {
    typeNormal("cd ~/projects","~/projects", (function(){
        document.getElementById("content").innerHTML =
          `<h1 class="title">Projects</h1>

          <div class="project-tab project-thiswebsite" onclick="typeNormal('cat web/index.html','~/projects',(()=>{window.open('https://github.com/rzhou1999/rzhou1999.github.io');}));">
            <h1 class="tab-title">This Website</h1>
            <p class="tab-desc">The very website you're viewing right now.<br><br>Static webpage built 100% from scratch using HTML, CSS and native JavaScript. Just as it should be.</p>
          </div>

          <div class="project-tab project-malrecgraph" onclick="typeNormal('cat web/MALRecGraph.html','~/projects',(()=>{window.open('http://randyzhou.com/MALRecGraph/');}));">
            <h1 class="tab-title">MALRecGraph</h1>
            <p class="tab-desc">Visualizer for MyAnimeList userrecs.<br><br>Front end written in JavaScript using vis.js for visualization. Back end written in Python with Flask, Connexion and BeautifulSoup.</p>
          </div>

          <div class="project-tab project-logisim" onclick="typeNormal('ls comparch/logisim-evolution','~/projects',(()=>{window.open('https://github.com/rzhou1999/logisim-evolution');}));">
            <h1 class="tab-title">Feature development for Logisim Evolution</h1>
            <p class="tab-desc">Development on Logisim Evolution, Cornell CS3410's fork of the digital logic simulator Logisim. Features include a batch attribute change option for Logisim components and a more comprehensive changelog feature using Swing. Written in Java.</p>
          </div>

          <div class="project-tab project-terminaltyper" onclick="typeNormal('ls web/terminaltyper','~/projects',(()=>{window.open('https://github.com/rzhou1999/terminaltyper');}));">
            <h1 class="tab-title">terminaltyper</h1>
            <p class="tab-desc">A lightweight, fast and easy-to-use typer for simulating terminals in native js, used to power this very page. Written in a single codepen session (so please excuse the mess).</p>
          </div>

          <div class="project-tab project-stockmarketproject" onclick="typeNormal('ls python/Stock_Market_Project','~/projects',(()=>{window.open('https://github.com/rzhou1999/Stock-Market-Project');}));">
            <h1 class="tab-title">Stock Market Project</h1>
            <p class="tab-desc-noimg">Program for automatically tracking and identifying stock splits from Yahoo news.<br><br>Developed for my senior project during high school under Max Eringros of G6 Capital. Written in Python with a MySQL database, using YQL to retrieve information and basic machine learning to filter out and identify stock splits.</p>
          </div>

          <div class="project-tab project-stockmarketproject" onclick="typeNormal('ls web/repapp','~/projects',(()=>{window.open('https://github.com/rzhou1999/repapp');}));">
            <h1 class="tab-title">College Rep Visit App Backend</h1>
            <p class="tab-desc-noimg">System for scheduling college rep visits to the Commonwealth School of Boston.<br><br>Created during my senior year of high school by the Commonwealth School's CS4 class. Written in JavaScript / Node.js with a PostgreSQL database.</p>
          </div>`;
    })
  );
}

function showAbout() {
  typeNormal("cd ~/about","~/about", (function(){
    document.getElementById("content").innerHTML =
      `<h1 class="title">About</h1>

        <p>I am a computer scientist studying at Cornell University interested in computer architecture and systems.
        </p>

        <h2 class="subtitle">Academic</h2>
        <p>
        I graduated from Commonwealth High School of Boston in 2017. I am currently a fourth year university student majoring in CS and minoring in China and Asia Pacific Studies, Asian American Studies and Asian Studies. I plan to apply to graduate programs in the fields of computer architecture and distributed systems this Fall.
        <br><br>
        I have been conducting research with Cornell's <a href="https://sail.ece.cornell.edu/">SAIL group</a> under Professor Christina Delimitrou since Fall 2019, where I have primarily worked with applications of processing-in-memory in datacenter settings.
        <br>
        </p>

        <h2 class="subtitle">Teaching</h2>
        <p>
        From Spring 2019 to Spring 2020, I was part of the <a href="https://www.cs.cornell.edu/courses/cs3410/2019sp/">Cornell CS 3410 Computer System Organization and Programming</a> course staff as a teaching assistant, where I have been twice nominated by professors for student TA recognition. Throughout my time as a CS3410 TA, I played a crucial part in the CS3410 ISA change from MIPS to RISCV by porting and rewriting major grading scripts for some of the largest/most complex projects in the course, and continue to manage autograder framework and deployment to this day.
        <br><br>
        As of Fall 2020, I have joined the <a href="https://www.cs.cornell.edu/courses/cs5414/2020fa/">CS 5414 Distributed Computing Principles</a> course staff.
        <br>
        </p>

        <h2 class="subtitle">Industry</h2>
        <p>
        For the 2019 Summer, I interned in software development at Pearson K-12 Learning. I worked to help decide coding standards for new projects in the edtech platform Pearson Realize, and automated initial project scaffolding/integration of commonly used libraries/services according to those standards.
        <br><br>
        I (virtually) interned at Amazon in the Summer of 2020 under the devices organization where I worked on privacy compliance. During my internship, I implemented a data transformation service for company-wide compliance with data privacy legislature.
        <br>
        </p>

        <h2 class="subtitle">Other</h2>
        <p>
        When I'm not in front of a computer screen (which, admittedly, isn't too often), I enjoy choral singing (which I started sophomore year of high school). I sing bass, and am currently a member of the Cornell Chorale (membership currently on hold as of Fall 2020 in light of the Coronavirus pandemic).
        <br><br>
        In case the list of minors didn't clue you in already, I also spend a fair bit of time thinking about Asia and Asian-America. I have studied Mandarin to an advanced level (and thus hopefully mitigated at least to some extent my parents' dissapointment in me) over the past 5-6 years, and am still learning to this day.
        </p>
        `;
    })
  );
}

function showLinks() {

  typeNormal("cd ~/links","~/links", (function(){
    document.getElementById("content").innerHTML =
      `<h1 class="title">Links</h1>

      <div class="links">
        <div class="link" onclick="typeNormal('cat resume.pdf','~/links',(()=>{window.open('resume_web.pdf');}));">
          <h3 class="link-title">Resume</h3>
          <span class="mega-octicon octicon-file-pdf"></span>
        </div>
        <div class="link" onclick="typeNormal('ls github','~/links',(()=>{window.open('https://github.com/rzhou1999/');}));">
          <h3 class="link-title">GitHub</h3>
          <span class="mega-octicon octicon-mark-github"></span>
        </div>
        <div class="link" onclick="showEmail();">
          <h3 class="link-title">Email</h3>
          <span class="mega-octicon octicon-mail"></span>
        </div>
      </div>

      <div id="email"></div>`
    })
  );
}

var state = false;

function showEmail(){
  state = !state;
  if (state){
    typeNormal('cat super-secret-email.txt','~/links',(()=>{document.getElementById("email").innerHTML = "<p class='title'>randyzhou1999 at gmail dot com</p>";}));
  }
  else{
    document.getElementById("email").innerHTML = "";
  }
}

function typeNormal(inp, newDir, cb){
  typer.type(inp, "guest@randyzhou:" + newDir + "$ ", cb);
}

function squelchface(){
  document.getElementById("content").innerHTML = '<center><iframe width="560" height="315" src="https://www.youtube.com/embed/BQStjCPV2EU?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>I usually put a song I like here.</p></center>'
  typeNormal("yes that is my face ","~",(function(){return;}));
}
