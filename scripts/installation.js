docs.installation = `
<h1 class="heading">ReactJS − Installation</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
<p class="contentText">This chapter explains the installation of React library and its related tools in your machine. Before moving to the installation, let us verify the prerequisite first.</p>
<p class="contentText">React provides CLI tools for the developer to fast forward the creation, development and deployment of the React based web application. React CLI tools depends on the Node.js and must be installed in your system. Hopefully, you have installed Node.js on your machine. We can check it using the below command −</p>
</div>

<div class="code-container">
  <pre><code>
node --version
  </code></pre>
</div>

<p class="contentText">You could see the version of Nodejs you might have installed. It is shown as below for me,</p>

<div class="code-container">
  <pre><code>
v14.2.0
  </code></pre>
</div>

<p class="contentText">If Nodejs is not installed, you can download and install by visiting <a href="https://nodejs.org/en/download/"> https://nodejs.org/en/download/.</a></p>

        <h1 class="contentHeading">Toolchain</h1>
        <p class="contentText">To develop lightweight features such as form validation, model dialog, etc., React library can be directly included into the web application through content delivery network (CDN). It is similar to using jQuery library in a web application. For moderate to big application, it is advised to write the application as multiple files and then use bundler such as webpack, parcel, rollup, etc., to compile and bundle the application before deploying the code.</p>
        <p class="contentText">React toolchain helps to create, build, run and deploy the React application. React toolchain basically provides a starter project template with all necessary code to bootstrap the application.</p>
        <p class="contentText">Some of the popular toolchain to develop React applications are −</p>
        
         <ul>
          <li>
            Create React App − SPA oriented toolchain
          </li>
          <li>
            Next.js − server-side rendering oriented toolchain
          </li>
          <li>
            Gatsby − Static content oriented toolchain
          </li>
        </ul>
        <p class="contentText">Tools required to develop a React application are −</p>
        
         <ul>
          <li>
            The serve, a static server to serve our application during development
          </li>
          <li>
            Babel compiler
          </li>
          <li>
            Create React App CLI
          </li>
        </ul>
       
       <p class="contentText">Let us learn the basics of the above mentioned tools and how to install those in this chapter.</p>
<h1 class="contentHeading">The serve static server</h1>
<p class="contentText">The serve is a lightweight web server. It serves static site and single page application. It loads fast and consume minimum memory. It can be used to serve a React application. Let us install the tool using npm package manager in our system.</p>
<div class="code-container">
  <pre><code>
npm install serve -g
  </code></pre>
</div>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
<p class="contentText">Let us create a simple static site and serve the application using serve app.</p>
<p class="contentText">Open a command prompt and go to your workspace.</p>
</div>
<div class="code-container">
  <pre><code>
cd /go/to/your/workspace
  </code></pre>
</div>
<p class="contentText">Create a new folder, static_site and change directory to newly created folder.</p>
<div class="code-container">
  <pre><code>
mkdir static_site 
cd static_site
  </code></pre>
</div>
<p class="contentText">Next, create a simple webpage inside the folder using your favorite html editor.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attribute">charset=</span><span class="string">"UTF-8"</span> <span class="tag">/&gt;</span>
    <span class="tag">&lt;title&gt;</span>Static website<span class="tag">&lt;/title&gt;</span>
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    <span class="tag">&lt;div&gt;</span><span class="tag">&lt;h1&gt;</span>Hello!<span class="tag">&lt;/h1&gt;</span><span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span>
  </code></pre>
</div>
<p class="contentText">Next, run the serve command.</p>
<div class="code-container">
  <pre><code>
serve . 
  </code></pre>
</div>
<p class="contentText">We can also serve single file, index.html instead of the whole folder.</p>
<div class="code-container">
  <pre><code>
serve ./index.html
  </code></pre>
</div>
<p class="contentText">Next, open the browser and enter http://localhost:5000 in the address bar and press enter. serve application will serve our webpage as shown below.</p>
<div style="display: flex; justify-content: center; align-items: center;">
<img src="images/hello.jpg" alt="output" style="object-fit:cover;" />
</div>
<p class="contentText">The serve will serve the application using default port, 5000. If it is not available, it will pick up a random port and specify it.</p>
<div class="code-container">
  <pre><code>
Serving!

  - Local: http://localhost:57311
  - On Your Network: http://192.168.56.1:57311

  This port was picked because 5000 is in use.

  Copied local address to clipboard!
  </code></pre>
</div>
<h1 class="contentHeading">Babel Compiler</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
<p class="contentText">Babel is a JavaScript compiler which compiles many variant (es2015, es6, etc.,) of JavaScript into standard JavaScript code supported by all browsers. React uses JSX, an extension of JavaScript to design the user interface code. Babel is used to compile the JSX code into JavaScript code.</p>
<p class="contentText">To install Babel and it's React companion, run the below command −</p>
</div>
<div class="code-container">
  <pre><code>
npm install babel-cli@6 babel-preset-react-app@3 -g
... 
... 
+ babel-cli@6.26.0 
+ babel-preset-react-app@3.1.2 
updated 2 packages in 8.685s
  </code></pre>
</div>
<p class="contentText">Babel helps us to write our application in next generation of advanced JavaScript syntax.</p>
<h1 class="contentHeading">Create React App toolchain</h1>
<p class="contentText">Create React App is a modern CLI tool to create single page React application. It is the standard tool supported by React community. It handles babel compiler as well. Let us install Create React App in our local system.</p>
<div class="code-container">
  <pre><code>
> npm install -g create-react-app
+ create-react-app@4.0.1 
added 6 packages from 4 contributors, removed 37 packages and updated 12 packages in 4.693s
  </code></pre>
</div>
<h1 class="contentHeading">Updating the toolchain</h1>
<p class="contentText">React Create App toolchain uses the react-scripts package to build and run the application. Once we started working on the application, we can update the react-script to the latest version at any time using npm package manager.</p>
<div class="code-container">
  <pre><code>
npm install react-scripts@latest
  </code></pre>
</div>
<h1 class="contentHeading">Advantages of using React toolchain</h1>
<div class="contentText">
<p class="contentText">React toolchain provides lot of features out of the box. Some of the advantages of using React toolchain are −</p>
<ul>
          <li>
            Predefined and standard structure of the application.
          </li>
          <li>
            Ready-made project template for different type of application.
          </li>
          <li>
            Development web server is included.
          </li>
          <li>
            Easy way to include third party React components.
          </li>
          <li>
            Default setup to test the application.
          </li>
        </ul>
</div>
`