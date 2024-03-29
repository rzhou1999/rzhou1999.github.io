var typed = undefined;
var selectedElId = "";
var prevDir = "guest@randyzhou:~$ ";

function loadNav() {
  document.getElementById("faceContent").outerHTML =
    `<div id="facewrapper"><img src="images/headshot.png" id="myface" onclick="squelchface();"></div>`;

  document.getElementById("masterContent").outerHTML =
    `<hr class="bar fade">
    <div class="other fade">
      <div class="el" id="about" onclick="showAbout()"><h3>About</h3></div>
      <div class="el" id="projects" onclick="showProjects()"><h3>Projects</h3></div>
      <div class="el" id="links" onclick="showLinks()"><h3>Links</h3></div>
      <div class="el" id="pc" onclick="showPc()"><h3>PC Build</h3></div>
    </div>
    <hr class="bar fade">
    <div class="fade" id="content">
    </div>`;

  document.getElementById("footer").outerHTML =
    `<div class="footer fade">
      <div class="footerbar"></div>
      Last Updated 11/11/21<br>
      Randy Zhou 2021
    </div>`;
}

function changeSelectedEl(newSelectedElId) {
  state = false;
  if (selectedElId != "")
    document.getElementById(selectedElId).classList.remove("selectedEl");
  document.getElementById(newSelectedElId).classList.add("selectedEl");
  selectedElId = newSelectedElId;
}

function showProjects() {
  changeSelectedEl("projects");
  typeNormal("cd ~/projects", "~/projects", (function () {
    document.getElementById("content").innerHTML =
      `<h1 class="title">Projects</h1>
      <p>This tab lists some of the personal projects I have worked on, most of which were simply for fun (and thus are projects for which I can publicly post source code). For my research/academic/industry work, please see the "About" section, or my resume (in the "Links" section).</p>

      <div class="project-tab project-thiswebsite" onclick="typeNormal('cat web/index.html','~/projects',(()=>{window.open('https://github.com/rzhou1999/rzhou1999.github.io');}));">
        <h1 class="tab-title">This Website</h1>
        <p class="tab-desc">The very website you're viewing right now.<br><br>Static webpage built 100% from scratch using HTML, CSS and native JavaScript. Just as it should be.</p>
      </div>

      <div class="project-tab project-woosticker" onclick="typeNormal('cat web/woosticker.html','~/projects',(()=>{window.open('https://github.com/rzhou1999/woosticker');}));">
        <h1 class="tab-title">Woosticker</h1>
        <p class="tab-desc">An open source Android app for custom sticker keyboards. Does your fancy new messaging app not have native sticker support? woosticker is your answer.<br><br>Over 1000 downloads and counting.</p>
      </div>

      <div class="project-tab project-iro" onclick="typeNormal('cat web/Iro.html','~/projects',(()=>{window.open('http://rzhou1999.github.io/Iro/');}));">
        <h1 class="tab-title">Iro</h1>
        <p class="tab-desc">An interactive chromatic movie visualizer.<br><br>Written for a Cornell class (ASIAN 2252) project using D3.js, Color Thief and copious amounts of duct tape.</p>
      </div>

      <div class="project-tab project-malrecgraph" onclick="typeNormal('cat web/MALRecGraph.html','~/projects',(()=>{window.open('http://rzhou1999.github.io/MALRecGraph/');}));">
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
  changeSelectedEl("about");
  typeNormal("cd ~/about", "~/about", (function () {
    document.getElementById("content").innerHTML =
      `<h1 class="title">About</h1>

      <p>Hello. I am Randy.
      </p>

      <h2 class="subtitle">Academic</h2>
      <p>
      I graduated from Commonwealth High School of Boston in 2017. I graduated Magna Cum Laude from Cornell University in 2021, majoring in CS and minoring in China and Asia Pacific Studies and Asian Studies.
      <br><br>
      I conducted research with Cornell's <a href="https://sail.ece.cornell.edu/">SAIL group</a> under Professor Christina Delimitrou from 2019 to 2021, where I have previously worked with applications of processing-in-memory in datacenter settings, and profiled various microservice-based applications to study the effects of system task interference, such as those from garbage collection.
      <br>
      </p>

      <h2 class="subtitle">Teaching</h2>
      <p>
      From Spring 2019 to Spring 2021, I was part of the <a href="https://www.cs.cornell.edu/courses/cs3410/2019sp/">Cornell CS 3410 Computer System Organization and Programming</a> course staff as a teaching assistant, where I have been twice nominated by professors for student TA recognition. Throughout my time as a CS3410 TA, I played a crucial part in the CS3410 ISA change from MIPS to RISCV by porting and rewriting major grading scripts for some of the largest/most complex projects in the course, and continue to manage autograder framework and deployment to this day.
      <br><br>
      In Fall 2020, I joined the course staff of <a href="https://www.cs.cornell.edu/courses/cs5414/2020fa/">CS 5414 Distributed Computing Principles</a>, a graduate-level distributed systems class, as a TA.
      <br>
      </p>

      <h2 class="subtitle">Industry</h2>
      <p>
      For the 2019 Summer, I interned in software development at Pearson K-12 Learning. I worked to help decide coding standards for new projects in the edtech platform Pearson Realize, and automated initial project scaffolding/integration of commonly used libraries/services according to those standards.
      <br><br>
      I (virtually) interned at Amazon in the Summer of 2020 under the devices organization where I worked on privacy compliance. During my internship, I implemented a data transformation service for company-wide compliance with data privacy legislature. In the summer of 2021, I returned as an intern to Amazon, where I architected and implemented a "Session Journey Mapper" for easy and intuitive exploration of customer behavior within Kindle reading sessions.
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
  changeSelectedEl("links");
  typeNormal("cd ~/links", "~/links", (function () {
    document.getElementById("content").innerHTML =
      `<h1 class="title">Links</h1>

      <div class="links">
        <div class="link" onclick="typeNormal('xdg-open resume.pdf','~/links',(()=>{window.open('resume_web.pdf');}));">
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

function showPc() {
  changeSelectedEl("pc");
  typeNormal("cd ~/pc", "~/pc", (function () {
    document.getElementById("content").innerHTML =
      `<h1 class="title">Personal Computer Build</h1>
      <center>
        <img width=75% src="images/pc/12-22-2020_1.jpg">
      </center>
      <p>
        I've long been interested in consumer-grade hardware and building computers-- perhaps that's why I got interested in computer science to begin with. Regardless, I first built a computer when I was 14 (for my brother)-- to put the time scale in perspective, this was a time when AMD's CPU line was largely considered inferior to Intel's (oh how the turn tables...), and a R9 290 was considered both "new" and "good." This year, I decided to build my second... which was honestly and objectively not too smart of an idea given the complete and utter shortage of GPUs in the latter half of 2020. Regardless, I document the process and my attempts at not completely breaking the bank below.
        <br><br>
        Finalized PCPartPicker list (with component reviews) <a href="https://pcpartpicker.com/b/MnFG3C">here</a>.
      </p>

      <hr>
      <h2 class="subtitle">Quick Links</h2>
      <ul>
        <li><a href="#11/28/2020">11/28/2020</a></li><br>
        <li><a href="#12/1/2020">12/1/2020</a></li><br>
        <li><a href="#12/4/2020">12/4/2020</a></li><br>
        <li><a href="#12/9/2020">12/9/2020</a></li><br>
        <li><a href="#12/22/2020">12/22/2020</a></li><br>
      </ul>

      <hr id="11/28/2020">

      <p>
        <b>11/28/2020</b> Purchased Ryzen 3700x CPU and B550M motherboard to start, both from Microcenter. I chose the 3700x over budget CPUs such as the Ryzen 3600 for two reasons: 1. the 3600 hasn't been in stock for weeks basically anywhere and 2. I plan to use this rig for decent amounts of video editing for which the 3700x is better. Ultimately, choosing a Ryzen 7 CPU did cost quite a bit more, but based on <a href="https://www.pugetsystems.com/labs/articles/After-Effects-CPU-Roundup-AMD-Ryzen-3rd-Gen-AMD-Threadripper-2-Intel-9th-Gen-Intel-X-series-1533/">After Effects benchmarks from Puget Systems</a>, it seems that paying a little extra isn't all that bad of a choice. Getting a nicer processor also meant that I was more inclined to pick up a B550 motherboard (as opposed to a cheapo $60 B450...), which is probably going to help in the future when upgrading. Very well may have gone for a 5600x though... if I could find one at MSRP. Seems like the Zen 3 market is basically just as bad or worse than the 30XX market.
      </p>
      <center><img width=75% src="images/pc/11-28-2020.jpg"></center>

      <hr id="12/1/2020">

      <p>
        <b>12/1/2020</b> Received SSD (ADATA XPG SX8200 Pro) and case (Lancool 205). A little pick-me-up present for Stanford's PhD deadline? In any case (heh), the build is definitely starting to take shape-- waiting on PSU and RAM next.
      </p>
      <center>
        <img width=45% src="images/pc/12-1-2020_1.jpg">
        <img width=45% src="images/pc/12-1-2020_2.jpg">
      </center>
      <p>
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

      <hr id="12/4/2020">

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
        As a final note, it'll be a week or two before this arrives here, but I managed to buy a 3060 ti today!!! (and only 2 days after release, whew) With this, all of the parts have been ordered so I put the finalized parts list above (as a link to pcpartpicker). I'll continue to detail why I chose each part anyways though.
      </p>
      <center>
        <img width=90% src="images/pc/12-4-2020_4.jpg">
      </center>

      <hr id="12/9/2020">

      <p>
        <b>12/9/2020</b> And it's finished! All of the components have arrived, and I finished the build the day of. Build pictures below-- but first, unboxing.
      </p>
      <center>
        <img width=20% src="images/pc/12-9-2020_1.jpg">
        <img width=20% src="images/pc/12-9-2020_2.jpg">
        <img width=20% src="images/pc/12-9-2020_3.jpg">
        <img width=20% src="images/pc/12-9-2020_4.jpg">
      </center>
      <p>Starting with the motherboard; SSD installation was mostly painless.</p>
      <center>
        <img width=45% src="images/pc/12-9-2020_5.jpg">
        <img width=45% src="images/pc/12-9-2020_6.jpg">
      </center>
      <p>CPU, cooler and RAM come next-- installing the cooler feels terrifying every time I do it... Everything else was pretty straightforward though.</p>
      <center>
        <img width=30% src="images/pc/12-9-2020_7.jpg">
        <img width=30% src="images/pc/12-9-2020_8.jpg">
        <img width=30% src="images/pc/12-9-2020_9.jpg">
      </center>
      <p>GPU comes next (easily the hardest to get component). I basically spent a week tracking stock and jumped on the first 3060 ti I could find.</p>
      <center>
        <img width=45% src="images/pc/12-9-2020_10.jpg">
        <img width=45% src="images/pc/12-9-2020_11.jpg">
      </center>
      <p>
        And it's done! I actually screwed up a few times when installing the motherboard (I first used the wrong screws to attach the mobo to the case standoffs, and then I forgot to install some standoffs after redoing the screws a second time...), but luckily no DOA components at all.
        <br><br>
        Installing Windows with the exact same USB stick I used six years ago:</p>
      <center>
        <img width=75% src="images/pc/12-9-2020_12.jpg">
      </center>
      <p>And obligatory RGB shots:</p>
      <center>
        <img width=45% src="images/pc/12-9-2020_13.jpg">
        <img width=45% src="images/pc/12-9-2020_14.jpg">
        <img width=90% src="images/pc/12-9-2020_15.jpg">
      </center>

      <hr id="12/22/2020">

      <p>
        <b>12/22/2020</b> What's next?
        <br><br>
        There are a couple things I'd like to eventually add to this build.
        <ul>
          <li>First, the motherboard I used happens to have two M2 slots, one of which is currently unoccupied. I'd like to get a second NVMe drive (QLC/DRAMless will probably be fine) for file storage once I start filling my current one up.</li>
          <li>It also turns out that the RAM I bought was <a href="images/pc/12-22-2020_2.jpg">single rank</a>, which means that I'm technically losing out on a few percent compared to if I had went with dual rank memory. This motherboard <i>does</i> have four RAM slots, however, so I guess this gives me another reason to upgrade to 4x16gb RAM sticks in the future.</li>
          <li>Watercooling (some AIO, I don't think I'm ready for a custom loop yet) would also be nice to have. Have not experimented with overclocking the 3700x much, but it seems like a fun project.</li>
          <li>Extension cables would make the bottom part of the build look a lot cleaner. Right now there is an extra daisy chain connector hanging off of each PCIe 6+2 pin cable connected to the GPU, which is a little ugly.
        </ul>
      </p>
      `;
  })
  );
}

var state = false;

function showEmail() {
  state = !state;
  if (state) {
    typeNormal('cat super-secret-email.txt', '~/links', (() => { document.getElementById("email").innerHTML = "<p class='title'>randyzhou1999 at protonmail dot com</p>"; }));
  }
  else {
    document.getElementById("email").innerHTML = "";
  }
}

function typeNormal(inp, newDir, cb) {
  typer.type(inp, "guest@randyzhou:" + newDir + "$ ", cb);
}

function squelchface() {
  document.getElementById("content").innerHTML = '<center><iframe width="560" height="315" src="https://www.youtube.com/embed/PuMz4v5PYKc?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>I usually put a song I like here.</p></center>'
  typeNormal("yes that is my face ", "~", (function () { return; }));
}
