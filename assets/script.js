const homeSection=document.getElementById("home"),aboutMeSection=document.getElementById("about-me"),technologiesSection=document.getElementById("technologies"),projectsSection=document.getElementById("projects"),gangsacademySection=document.getElementById("gangsacademy"),nextgenrpSection=document.getElementById("nextgenrp"),snkSection=document.getElementById("snk"),navLinks=document.querySelectorAll(".nav-link"),progressBar=document.createElement("div");progressBar.id="progress-bar",document.body.appendChild(progressBar);const sections=[homeSection,aboutMeSection,technologiesSection,projectsSection,gangsacademySection,nextgenrpSection,snkSection],totalSections=sections.length-1;function updateProgressBar(e){progressBar.style.width=e/totalSections*100+"%"}function showSection(e,t){sections.forEach(e=>e.style.display="none"),e.style.display="flex",navLinks.forEach(e=>e.classList.remove("active")),t.classList.add("active");let o=sections.indexOf(e);updateProgressBar(o)}navLinks.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=e.getAttribute("href");"#home"===o?showSection(homeSection,e):"#about-me"===o?showSection(aboutMeSection,e):"#technologies"===o?showSection(technologiesSection,e):"#projects"===o?showSection(projectsSection,e):"#gangsacademy"===o?showSection(gangsacademySection,e):"#nextgenrp"===o?showSection(nextgenrpSection,e):"#snk"===o&&showSection(snkSection,e)})}),showSection(homeSection,document.querySelector('.nav-link[href="#home"]'));const toggleDarkMode=document.getElementById("dark-mode-toggle");"enabled"===localStorage.getItem("dark-mode")&&(document.body.classList.add("dark-mode"),document.querySelector(".footer").classList.add("dark-mode")),toggleDarkMode.addEventListener("click",function(){document.body.classList.toggle("dark-mode"),document.querySelector(".footer").classList.toggle("dark-mode"),document.body.classList.contains("dark-mode")?localStorage.setItem("dark-mode","enabled"):localStorage.setItem("dark-mode","disabled")});var TxtType=function(e,t,o){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(o,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};TxtType.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var o=this,s=200-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500):(s=this.period,this.isDeleting=!0),setTimeout(function(){o.tick()},s)},window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var o=e[t].getAttribute("data-type"),s=e[t].getAttribute("data-period");o&&new TxtType(e[t],JSON.parse(o),s)}var i=document.createElement("style");i.type="text/css",i.innerHTML=`
        .typewrite > .wrap { 
            border-right: 0.05em solid #A0DD9E; 
        }`,document.body.appendChild(i)};const progressBarStyle=document.createElement("style");progressBarStyle.type="text/css",progressBarStyle.innerHTML=`
    #progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 5px;
        background-color: #A0DD9E;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3);
        z-index: 100;
        transition: width 0.8s ease;
    }
    .dark-mode #progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 5px;
        background-color: #A0DD9E;
        box-shadow: 0 4px 8px rgba(255, 255, 255, 0.4), 0 6px 20px rgba(255, 255, 255, 0.3);
        z-index: 100;
        transition: width 0.8s ease;
    }    
`,document.head.appendChild(progressBarStyle);