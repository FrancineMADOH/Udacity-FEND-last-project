# Mobile Web Specialist Certification Course

## Three Stage Course Material Project - Restaurant Reviews

### What is this project about

In this project we are suppose to convert a static webpage to a mobile-ready web application. we will first take a static design that lacks accessibility and convert the design to be responsive on different sized and displays and be accessible for screen reader use. we will also add a service worker to begin the process of creating a seamless offline experience for our  users.(see the *project rubric below*).

### DEPANDANCIES

The code is provide by  [Udacity](https://github.com/udacity/mws-restaurant-stage-1).In ather to install and run he service worker we have added two other js files [sw.js,swreg.js].

### FEATURES

1. CSS RESPONSIVES DESIGN

We first started by making th website responsive using

* flexbox mostly in the index.html document (flex, flexwrap).
* the max-width and min-width property to making the imagesresponsives
* media-queries in the restaurant.html files . In this one we prefered the vw css units to size element so they can work on differents devices.

2. WEB-ACCESSIBILITY.

* The main point about accessibity was to provide an alt for the images
* Then we use the aria role on certain HTML elements(ul,map,select...) and for the main layout elements
* We finaly use the HTML tabindex attribute to make it easy for keyboard users.

3. OFFLINE WORKING.

We have install the service worker  and make it run  with theses two file [serviceWorker.js,swWorking.js]
Here are some ressources we use to make our way in the offline part

* [<https://developers.google.com/web/fundamentals/primers/service-workers/]>
* [<https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/update]>
* [<https://stackoverflow.com/questions/47527223/a-bad-http-response-code-404-was-received-when-fetching-the-script>
50828568]
* [<https://developer.mozilla.org/en-US/docs/Web/API/Cache/match#Parameters*/]>
* [<https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/update/]>
* [ <https://developers.google.com/web/fundamentals/primers/service-workers/]>.
* Others [Youtube channe: Ryan Waite, Mohamed Riaad]
* [<https://airbrake.io/blog/http-errors/401-unauthorized-error]>

4. TOOLS.

* the google map API key has to be  replace in the [index.html] and the [restaurant.html] file

### USING THEPROJECT LOCALLY

using this project locally  demands to run the server locally(learn more abou it from the [What do I do from here?](#what-do-i-do-from-here) rubric below)) using python <<https://www.python.org/>

### HOW THE PROJECT WORK step by step

1. Firstly download or clone the repository to your local environment.
2. From a terminal, run your local Python server with the command.

```python
py -m http.server 8080
```

3. From a browser, navigate to your local server instance (i.e. `http://localhost:8080`). Since my server port was different from the one given in the project rubric i replace the giving server port with mine at line 11 in the [dbhelper.js] file.

4. Enjoy it

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### Project Rubric

Your project will be evaluated by a Udacity code reviewer according to the [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view). Please review for detailed project requirements. The rubric should be a resource you refer to periodically to make sure your project meets specifications.

### What do I do from here

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
    * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.
