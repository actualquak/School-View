# School-View

This is the GitHub repository for the New Town High School School View web application.
It is combining old technologies to make a new technology: we are combining street view with a unique way of conveyning information. 
Really, it's nothing fancy: it's a school assignment, and we're developing slowly - no one on the project has created a web app with HTML, CSS and JavaScript before.
We're deploying this on GitHub Pages, so have a look: https://frlegg.github.io/School-View

Someone else is deciding to use our idea, but without the animations and with PHP. His repository is here: https://github.com/epikgamer696969/school-website It's far better, and we envy his work.

## Features
- About page - only contains developer socials currently
- Panorama - room navigation difficult, not all images uploaded
- Information page - purely for looks right now
## Coming soon
- Expand about page
- Make information page better (https://jsfiddle.net/3f5sxrag/4/)
- Actually make information
- School Map (copying Oliver again)

# School View (The Presentation)
You might find it weird that we're using a md file to present our project, but in the programming world, if you want to be introduced with the context of the product, you will always read an md file. This is ours.

## Target Audiance

### What is our target audiance?
Our target audiance is boomers, I mean parents. Of course, our group would've loved to put trackers on the website to work out the user's personality to serve individually created content, but according to Mr. Harrison, we would'nt be allowed to do that. 😢

![Target Audiance](https://raw.githubusercontent.com/actualquak/School-View/main/README.md-images/parents.jfif "Target Audiance")

### How are we accomodating for our target audiance

Our target audiance loves a good website. They need text-based navigation (People who haven't spent as much time on the internet can't understand the emoji and icon language), and like smooth animations (even though it makes it look like a PowerPoint). They also hate memes, especially if the user viewing the content is a Karen (Do not mention the manager for this type of boomer, I mean parent), thus meaning all the content we produce has to be respectful and the styles not outlandish.

## Tools used to accomplish task
### Pannellum
Pannellum is a lightweight, free, and open source panorama viewer for the web. Built using HTML5, CSS3, JavaScript, and WebGL, it is plug-in free. The reasons why we used it may be foreign to you, but they are important to us.
- Open Source. Spyware and trackers are an ever present threat that many services use to make money, and making the software open source means that everyone can see it. This means that people can see trackers and report them, making it less likely, if the software is open source, to have them.
- Free. One of the many problems that the rest of the class has had is that they cannot use the service after the free trial has expired. Pannellum does not have that problem.
- Customisable. Pannellum can be customised easily, and is thus a perfect choice for our project.

![Pannellum Demo](https://raw.githubusercontent.com/actualquak/School-View/main/README.md-images/pannellum.png "Pannellum Demo")

### Traditional web languages
This was a mistake. The web is a horrible place to develop, from CSS bugs to JS stuffups to HTML syntax issues. We should've used a framework such as Ruby on Rails. Here's what we did with each of these languages
- HTML5 (Skeleton)
  + The video element
  + The iframe - this is needed to display the pannellum widget
- CSS3 (Styles)
  + Animations
  + Fonts
- JavaScript (Logic)
  + Syncing the animations with button clicks
  + Advanced animations and styling - button ripple
  + Loading in images efficiently
  + Navigation
  + URL Params

![coding index.html](https://raw.githubusercontent.com/actualquak/School-View/main/README.md-images/developing.png "index.html")

### JQuery
JQuery is awesome. It is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. There are 2 main ways that it makes developing for us more efficient.
- **Code Abbreviations** As a lazy dev, before using JQuery, it hurt to have to write: `docuemnt.getElementById("about")` or `document.getElementsByClass("sideArticle")`
instead of `$("#about")` or `$(".sideArticle")`
- **Asynchronous Loading** On our website, we needed to load in many data files for our panorama, and JavaScript (the logic language for programming) can't do this. Therefore we went to JQuery for our solution, and managed to make it work.

![JQuery](https://raw.githubusercontent.com/actualquak/School-View/main/README.md-images/JQuery.PNG "JQuery")

## Features
As you know, we didn't use a crappy website builder for this, we used the real deal. Here's the features we accomplished:
### Navigation
The front-end loves to have cool animations, and why not use cool animations to provide smooth naviagtion across the different pages. We did this through linking in registering a button click in JavaScript, which would initiate a CSS animation and move everything into place. 

### Information
Making videos and articles display on websites is easy: just use basic HTML. What was difficult here was how to provide a seamless animation between the dashboard and the information appearing.

![Information Section](https://raw.githubusercontent.com/actualquak/School-View/main/README.md-images/information-section.png "Information Section")

### Panorama 
We of course used Pannellum for our 3D image viewer. It provided us with the compass, auto-loading and other features, but we had to add in the map. We tried to make this process as smooth as possible, thus meaning that Stanley had to tediously fill in JSON data files to perfect the expereince. Credit to Oliver for making his code open source so we could copy it, which helped our website because of it.

### About
The about page was the eastist thing to accomplish about the entire website. All was needed was to link the socials with each developer. This wasn't hard: import Font Awesome icons, open a URL on click, make the URLs right. 
