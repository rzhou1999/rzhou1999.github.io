var typed = undefined;
var prevDir = "guest@randyzhou:~$ ";

function loadNav(){
  document.getElementById("faceContent").outerHTML = multiline(function(){/*
          <div id="facewrapper"><img src="images/headshot.png" id="myface" onclick="squelchface();"></div>
          */});

  document.getElementById("masterContent").outerHTML = multiline(function(){/*  <hr class="fade">
    <div class="other fade">
      <div class="el" id="projects" onclick="showProjects()"><h3>Projects</h3></div>
      <div class="el" id="about" onclick="showAbout()"><h3>About</h3></div>
      <div class="el" id="links" onclick="showLinks()"><h3>Links</h3></div>
    </div>
    <hr class="fade">
    <div class="fade" id="content">
    </div>*/});
}



function showProjects() {
    typeNormal("cd ~/projects","~/projects", (function(){
        document.getElementById("content").innerHTML = multiline(function(){/*

          <h1 class="title">Projects</h1>

          <div class="project-tab project-thiswebsite" onclick="typeNormal('cat web/index.html','~/projects',(()=>{window.open('https://github.com/rzhou1999/rzhou1999.github.io');}));">
            <h1 class="tab-title">This Website</h1>
            <p class="tab-desc">The very website you're viewing right now.<br><br>Static webpage built from scratch using HTML, CSS and a touch of JavaScript.</p>
          </div>

          <div class="project-tab project-malrecgraph" onclick="typeNormal('cat web/MALRecGraph.html','~/projects',(()=>{window.open('http://randyzhou.com/MALRecGraph/');}));">
            <h1 class="tab-title">MALRecGraph</h1>
            <p class="tab-desc">Visualizer for MyAnimeList userrecs.<br><br>Front end written in JavaScript using vis.js for visualization. Back end written in Python with Flask, Connexion and BeautifulSoup.</p>
          </div>

          <div class="project-tab project-logisim" onclick="typeNormal('ls comparch/logisim-evolution','~/projects',(()=>{window.open('https://github.com/rzhou1999/logisim-evolution');}));">
            <h1 class="tab-title">Feature development for Logisim Evolution</h1>
            <p class="tab-desc">Development on Logisim Evolution, Cornell CS3410's fork of the digital logic simulator Logisim. Features include a batch attribute change option for Logisim components and a more comprehensive changelog feature using Swing. Written in Java.</p>
          </div>

          <div class="project-tab project-stockmarketproject" onclick="typeNormal('ls python/Stock_Market_Project','~/projects',(()=>{window.open('https://github.com/rzhou1999/Stock-Market-Project');}));">
            <h1 class="tab-title">Stock Market Project</h1>
            <p class="tab-desc-noimg">Program for automatically tracking and identifying stock splits from Yahoo news.<br><br>Developed for my senior project during high school under Max Eringros of G6 Capital. Written in Python with a MySQL database, using YQL to retrieve information and basic machine learning to filter out and identify stock splits.</p>
          </div>

          <div class="project-tab project-stockmarketproject" onclick="typeNormal('ls web/repapp','~/projects',(()=>{window.open('https://github.com/rzhou1999/repapp');}));">
            <h1 class="tab-title">College Rep Visit App Backend</h1>
            <p class="tab-desc-noimg">System for scheduling college rep visits to the Commonwealth School of Boston.<br><br>Created during my senior year of high school by the Commonwealth School's CS4 class. Written in JavaScript / Node.js with a PostgreSQL database.</p>
          </div>
    */});
    })
  );
}

function showAbout() {
  typeNormal("cd ~/about","~/about", (function(){
    document.getElementById("content").innerHTML = multiline(function(){/*
      <h1 class="title">About</h1>

      <p class="tab-desc-noimg">
        Hi there! I am a programmer studying at Cornell University. My primary interests involve lower level/systems-focused programming,
        but I often make forays into higher level programming and front-end development as well (this website is the result of one of them!).
        Some of my favorite classes/topics so far have been CS 3410 Computer System Organization and Programming, CS 4410 Operating Systems, and CS 4420 Computer Architecture.
        <br><br>
        I graduated from Commonwealth High School of Boston in 2017. I am currently a second year university student majoring in CS and minoring in China and Asia Pacific Studies.
        <br><br>
        In September 2018, I joined the Cornell Hyperloop project team as a member of the electrical software subteam. As of Spring 2019, I will also be a
        teaching assistant for Cornell's CS 3410 Computer System Organization and Programming course.
        <br><br>
        When I'm not in front of a computer screen (which, admittedly, isn't too often), I enjoy choral singing. I sing bass, and am currently a member of the Cornell Chorale.
      </p>
      */});
    })
  );
}

function showLinks() {

  typeNormal("cd ~/links","~/links", (function(){
    document.getElementById("content").innerHTML = multiline(function(){/*
      <h1 class="title">Links</h1>

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

      <div id="email"></div>
      */});
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
  document.getElementById("content").innerHTML = '<center><iframe width="560" height="315" src="https://www.youtube.com/embed/LDU_Txk06tM?start=75&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>';
  document.getElementById("squelch").width = 150+500* Math.random();
  document.getElementById("squelch").height = 150+500* Math.random();
  typeNormal("yes that is my face ","~",(function(){return;}));
}
