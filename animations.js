// Get URL parameters

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
};

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
};

startPage = getUrlParam("startPage", 1);

// Act on URL parameters

if (startPage == 0) {
    currentSection = "#information";
    $("#startPage").hide(); 
    openNav(); 
    initiatePages();
}
function startPageUp() {
    $("#startPage").addClass("comeUpFromMiddle");
    currentSection = "#information";
    window.setTimeout(function(){ openNav() }, 2000);
    initiatePages();
  }

function openNav() { 
    $("#nav").show();
    $("#nav").addClass("comeOut"); 
}

function initiatePages() {
    $(".featuredDevs").css("width", ((window.innerWidth - 310) / 3) + "px");
    $("#panorama").css("width", (window.innerWidth - 240) + "px");
    if (page == "information") {
        switchSections('#information')
    } else if (page == "tour") {
        switchSections('#tour')
    } else {
        switchSections('#about')
    }
}     

// Button Ripple Effect

function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}

