var typed = undefined;
var prevDir = "guest@randyzhou:~$ ";

function loadNav(){
  document.getElementById("faceContent").outerHTML =
    `<div id="facewrapper"><img src="images/headshot.png" id="myface" onclick="squelchface();"></div>`;

  document.getElementById("masterContent").outerHTML =
    `<hr class="bar fade">
    <div class="other fade">
      <div class="el" id="about" onclick="showAbout()"><h3>About</h3></div>
      <div class="el" id="projects" onclick="showProjects()"><h3>Projects</h3></div>
      <div class="el" id="links" onclick="showLinks()"><h3>Links</h3></div>
    </div>
    <hr class="bar fade">
    <div class="fade" id="content">
    </div>`;

  document.getElementById("footer").outerHTML =
    `<div class="footer fade">
      <div class="footerbar"></div>
      Last Updated 12/4/20<br>
      Randy Zhou 2020
    </div>`;
}



function showProjects() {
    typeNormal("cd ~/projects","~/projects", (function(){
        document.getElementById("content").innerHTML =
          `<h1 class="title">Projects</h1>
          <p>This tab lists some of the personal projects I have worked on, most of which were simply for fun (and thus are projects for which I can publicly post source code). For my research/academic/industry work, please see the "About" section, or my resume/CV (in the "Links" section).</p>

          <div class="project-tab project-thiswebsite" onclick="typeNormal('cat web/index.html','~/projects',(()=>{window.open('https://github.com/rzhou1999/rzhou1999.github.io');}));">
            <h1 class="tab-title">This Website</h1>
            <p class="tab-desc">The very website you're viewing right now.<br><br>Static webpage built 100% from scratch using HTML, CSS and native JavaScript. Just as it should be.</p>
          </div>

          <div class="project-tab project-iro" onclick="typeNormal('cat web/Iro.html','~/projects',(()=>{window.open('http://randyzhou.com/Iro/');}));">
            <h1 class="tab-title">Iro</h1>
            <p class="tab-desc">An interactive chromatic movie visualizer.<br><br>Written for a Cornell class (ASIAN 2252) project using D3.js, Color Thief and copious amounts of duct tape.</p>
          </div>

          <div class="project-tab project-malrecgraph" onclick="typeNormal('cat web/MALRecGraph.html','~/projects',(()=>{window.open('http://randyzhou.com/MALRecGraph/');}));">
            <h1 class="tab-title">MALRecGraph</h1>
            <p class="tab-desc">Visualizer for MyAnimeList userrecs.<br><br>Front end written in JavaScript using vis.js for visualization. Back end written in Python with Flask, Connexion and BeautifulSoup.</p>
          </div>

          <div class="project-tab project-logisim" onclick="typeNormal('ls comparch/logisim-evolution','~/projects',(()=>{window.open('https://github.com/rzhou1999/logisim-evolution');}));">
            <h1 class="tab-title">Logisim Evolution</h1>
            <p class="tab-desc">Feature development on Logisim Evolution, Cornell CS3410's fork of the digital logic simulator Logisim. Features include a batch attribute change option for Logisim components and a more comprehensive changelog. Written in Java.</p>
          </div>

          <div class="project-tab project-terminaltyper" onclick="typeNormal('ls web/terminaltyper','~/projects',(()=>{window.open('https://github.com/rzhou1999/terminaltyper');}));">
            <h1 class="tab-title">terminaltyper</h1>
            <p class="tab-desc">A lightweight, fast and easy-to-use typer for simulating terminals in native js, used to power this very page. Written in a single codepen session (so please excuse the mess).</p>
          </div>
          `;
    })
  );
}

function showAbout() {
  typeNormal("cd ~/about","~/about", (function(){
    document.getElementById("content").innerHTML =
      `<h1 class="title">About</h1>

        <p>I am a computer scientist studying at Cornell University interested in the design and utilization of computer architecture and systems for datacenter efficiency and performance. As economic and environmental reasons alike push datacenters towards innovative and creative solutions to maximize performance and efficiency, I believe that the solution to these issues lies in the two-pronged approach of custom-tailored development of datacenter-specific hardware, as well as the hardware-aware exploitation of these architectural resources through software.
        </p>

        <h2 class="subtitle">Academic</h2>
        <p>
        I graduated from Commonwealth High School of Boston in 2017. I am currently a fourth year university student majoring in CS and minoring in China and Asia Pacific Studies, Asian American Studies and Asian Studies. I plan to apply to graduate programs in the fields of computer architecture and distributed systems this Fall.
        <br><br>
        I have been conducting research with Cornell's <a href="https://sail.ece.cornell.edu/">SAIL group</a> under Professor Christina Delimitrou since Fall 2019, where I have previously worked with applications of processing-in-memory in datacenter settings. I am currently investigating the effects of garbage collection on cloud microservice performance for use in a deployment debugging system based on unsupervised machine learning. For more specific details, please view the corresponding section of my resume in the "Links" section.
        <br>
        </p>

        <h2 class="subtitle">Teaching</h2>
        <p>
        From Spring 2019 to Spring 2020, I was part of the <a href="https://www.cs.cornell.edu/courses/cs3410/2019sp/">Cornell CS 3410 Computer System Organization and Programming</a> course staff as a teaching assistant, where I have been twice nominated by professors for student TA recognition. Throughout my time as a CS3410 TA, I played a crucial part in the CS3410 ISA change from MIPS to RISCV by porting and rewriting major grading scripts for some of the largest/most complex projects in the course, and continue to manage autograder framework and deployment to this day.
        <br><br>
        As of Fall 2020, I have joined the course staff of <a href="https://www.cs.cornell.edu/courses/cs5414/2020fa/">CS 5414 Distributed Computing Principles</a>, a graduate-level distributed systems class, as a TA.
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
        <br><br>
        I began building a new computer in November 2020, and am documenting my attempts to brave the great GPU shortage of Fall 2020 <a onclick="showPc()">here</a>.
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
        <div class="link" onclick="typeNormal('xdg-open resume.pdf','~/links',(()=>{window.open('resume_web.pdf');}));">
          <h3 class="link-title">Resume</h3>
          <span class="mega-octicon octicon-file-pdf"></span>
        </div>
        <div class="link" onclick="typeNormal('xdg-open cv.pdf','~/links',(()=>{window.open('cv_web.pdf');}));">
          <h3 class="link-title">Resume (CV)</h3>
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

function showPc() {
    typeNormal("cd ~/pc","~/pc", (function(){
        window.scrollTo(0, 0);
        document.getElementById("content").innerHTML =
          `<h1 class="title">Personal Computer Build</h1>

          <p>
            I've long been interested in consumer-grade hardware and building computers-- perhaps that's why I got interested in computer architecture to begin with (and if you happen to be someone hiring/accepting candidates for designing hardware, please hit me up). Regardless, I first built a computer when I was 14 (for my brother)-- to put the time scale in perspective, this was a time when AMD's CPU line was largely considered inferior to Intel's (oh how the turn tables...), and a R9 290 was considered both "new" and "good." This year, I decided to build my second... which was honestly and objectively not too smart of an idea given the complete and utter shortage of GPUs in the latter half of 2020. Regardless, I document the process and my attempts at not completely breaking the bank below.
            <br><br>
            Finalized pcpartpicker list <a href="https://pcpartpicker.com/list/JZnfht">here</a>.
          </p>

          <hr>

          <p>
            <b>11/28/2020</b> Purchased Ryzen 3700x CPU and B550M motherboard to start, both from Microcenter. I chose the 3700x over budget CPUs such as the Ryzen 3600 for two reasons: 1. the 3600 hasn't been in stock for weeks basically anywhere and 2. I plan to use this rig for decent amounts of video editing for which the 3700x is better. Ultimately, choosing a Ryzen 7 CPU did cost quite a bit more, but based on <a href="https://www.pugetsystems.com/labs/articles/After-Effects-CPU-Roundup-AMD-Ryzen-3rd-Gen-AMD-Threadripper-2-Intel-9th-Gen-Intel-X-series-1533/">After Effects benchmarks from Puget Systems</a>, it seems that paying a little extra isn't all that bad of a choice. Getting a nicer processor also meant that I was more inclined to pick up a B550 motherboard (as opposed to a cheapo $60 B450...), which is probably going to help in the future when upgrading. Very well may have gone for a 5600x though... if I could find one at MSRP. Seems like the Zen 3 market is basically just as bad or worse than the 30XX market.
          </p>
          <center><img width=75% src="images/pc/11-28-2020.jpg"></center>
          <p>
          Total cost (before tax): $270 CPU + $110 motherboard - $20 bundle = $360
          </p>

          <hr>

          <p>
            <b>12/1/2020</b> Received SSD (ADATA XPG SX8200 Pro) and case (Lancool 205). A little pick-me-up present for Stanford's PhD deadline? In any case (heh), the build is definitely starting to take shape-- waiting on PSU and RAM next.
            <br><br>
            I won't claim to be an expert on case characteristics such as airflow or materials (or anything here, really), but Lian Li had a decent reputation and the 205 had pretty much everything I thought I would need in a budget case. For an SSD, since I don't plan on getting a secondary drive anytime soon, I was mainly just looking for an M2 TLC SSD that wasn't too expensive (I was perhaps most concerned about the endurance of using a QLC SSD as a boot drive, although with how good memory controllers are getting nowadays, maybe that concern was a little unwarranted). In any case, the SX8200 Pro checked all of those boxes, and was on sale to boot.</p>
          </p>
          <center>
            <img width=45% src="images/pc/12-1-2020_1.jpg">
            <img width=45% src="images/pc/12-1-2020_2.jpg">
          </center>
          <p>
            Total cost (before tax): $56 case + $100 SSD = $156
            <br><br>
            And now time for the fun stuff (sort of).
          </p>
          <center>
            <img width=30% src="images/pc/12-1-2020_3.jpg">
            <img width=30% src="images/pc/12-1-2020_4.jpg">
            <img width=30% src="images/pc/12-1-2020_5.jpg">
          </center>
          <p>
            Moving the pre-installed rear fan to the front (I have fancy argb fans for the rear and top, and the front panel of the case is solid, so no point in rgb'ing the front).
          </p>

          <hr>

          <p>
            <b>12/4/2020</b> RAM (2x16gb 3200mhz CL16) and fans (3x argb 120mm) arrived today. Had some fun instaling the fans (I first put them on the wrong side of the fan tray, then facing the wrong direction, and then finally in the correct position and orientation) for exhaust on the back and top of the case.
          </p>
          <center>
            <img width=30% src="images/pc/12-4-2020_1.jpg">
            <img width=30% src="images/pc/12-4-2020_2.jpg">
            <img width=30% src="images/pc/12-4-2020_3.jpg">
          </center>
          <p>
            I mentioned above that I ended up getting a more expensive B550 motherboard (as opposed to a B450), and I figured that I might as well make use of the argb headers and get some argb fans. They were pretty expensive to be honest (non-addressable rgb fans were $15 for 3 last week), but as everyone knows, more colors means more performance.
            <br><br>
            Total cost (before tax): $94 RAM + $40 fans = $134
            <br><br>
            As a final note, it'll be a week or two before this arrives here, but I managed to buy a 3060 ti today!!! (and only 2 days after release, whew) With this, all of the parts have been ordered so I put the finalized parts list above (as a link to pcpartpicker). I'll continue to detail why I chose each part anyways though.
          </p>
          <center>
            <img width=90% src="images/pc/12-4-2020_4.jpg">
          </center>
          `;
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
  document.getElementById("content").innerHTML = '<center><iframe width="560" height="315" src="https://www.youtube.com/embed/9xeZRQDKmLE?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>I usually put a song I like here.</p></center>'
  typeNormal("yes that is my face ","~",(function(){return;}));
}
