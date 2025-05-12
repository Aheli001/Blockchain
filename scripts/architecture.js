docs.architecture = `
<h1 class="heading">ReactJS − Architecture</h1>
        <div class="contentText">
<p class="contentText">React library is built on a solid foundation. It is simple, flexible and extensible. As we learned earlier, React is a library to create user interface in a web application. React's primary purpose is to enable the developer to create user interface using pure JavaScript. Normally, every user interface library introduces a new template language (which we need to learn) to design the user interface and provides an option to write logic, either inside the template or separately.</p>
<p class="contentText">Instead of introducing new template language, React introduces three simple concepts as given below −</p>
</div>
<h1 class="subHeading">React elements</h1>
<p class="contentText">JavaScript representation of HTML DOM. React provides an API, <strong>React.createElement</strong> to create React Element.</p>
<h1 class="subHeading">JSX</h1>
<p class="contentText">A JavaScript extension to design user interface. JSX is an XML based, extensible language supporting HTML syntax with little modification. JSX can be compiled to React Elements and used to create user interface.</p>
<h1 class="subHeading">React component</h1>
<div class="contentText">
<p class="contentText">React component is the primary building block of the React application. It uses React elements and JSX to design its user interface. React component is basically a JavaScript class (extends the React.component class) or pure JavaScript function. React component has properties, state management, life cycle and event handler. React component can be able to do simple as well as advanced logic.</p> 
<p class="contentText">Let us learn more about components in the React Component chapter.</p> 
</div>
<h1 class="contentHeading">Architecture of the React Application</h1>
<div class="contentText">
<p class="contentText">React library is just UI library and it does not enforce any particular pattern to write a complex application. Developers are free to choose the design pattern of their choice. React community advocates certain design pattern. One of the patterns is Flux pattern. React library also provides lot of concepts like Higher Order component, Context, Render props, Refs etc., to write better code. React Hooks is evolving concept to do state management in big projects. Let us try to understand the high level architecture of a React application.</p>
<ul>
          <li>
            React app starts with a single root component.
          </li>
          <li>
            Root component is build using one or more component.
          </li>
          <li>
            Each component can be nested with other component to any level.
          </li>
          <li>
            Composition is one of the core concepts of React library. So, each component is build by composing smaller components instead of inheriting one component from another component.
          </li>
          <li>
            Most of the components are user interface components.
          </li>
          <li>
            React app can include third party component for specific purpose such as routing, animation, state management, etc.
          </li>
        </ul>
</div>
<h1 class="contentHeading">Workflow of a React application</h1>
<div class="contentText">
<p class="contentText">Let us understand the workflow of a React application in this chapter by creating and analyzing a simple React application.</p>
<p class="contentText">Open a command prompt and go to your workspace.</p>
</div>
<div class="code-container">
  <pre><code>
cd /go/to/your/workspace
  </code></pre>
</div>
<p class="contentText">Next, create a folder, static_site and change directory to newly created folder.</p>
<div class="code-container">
  <pre><code>
mkdir static_site 
cd static_site
  </code></pre>
</div>
<h1 class="subHeading">Example</h1>
<p class="contentText">Next, create a file, hello.html and write a simple React application.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attribute">charset=</span><span class="string">"UTF-8"</span> <span class="tag">/&gt;</span>
    <span class="tag">&lt;title&gt;</span>React Application<span class="tag">&lt;/title&gt;</span>
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    <span class="tag">&lt;div id=</span><span class="attribute">"react-app"</span><span class="tag">&gt;</span><span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;script src=</span><span class="string">"https://unpkg.com/react@17/umd/react.development.js"</span> <span class="tag">crossorigin</span><span class="tag">&gt;&lt;/script&gt;</span>
    <span class="tag">&lt;script src=</span><span class="string">"https://unpkg.com/react-dom@17/umd/react-dom.development.js"</span> <span class="tag">crossorigin</span><span class="tag">&gt;&lt;/script&gt;</span>
    <span class="tag">&lt;script language=</span><span class="attribute">"JavaScript"</span><span class="tag">&gt;</span>
      <span class="tag">element =</span> <span class="function">React.createElement</span>(<span class="string">'h1'</span>, {}, <span class="string">'Hello React!'</span>)
      <span class="tag">ReactDOM.render</span>(element, document.getElementById(<span class="string">'react-app'</span>));
    <span class="tag">&lt;/script&gt;</span>
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span>
  </code></pre>
</div>
<p class="contentText">Next, serve the application using serve web server.</p>
<div class="code-container">
  <pre><code>
serve ./hello.html
  </code></pre>
</div>
<h1 class="subHeading">Output</h1>
<p class="contentText">Next, open your favorite browser. Enter <strong> http://localhost:5000 </strong> in the address bar and then press enter.</p>
<div style="display: flex; justify-content: center; align-items: center;">
<img src="images/react_hello.jpg" alt="output" style="object-fit:cover;" />
</div>
<div class="contentText">
<p class="contentText">Let us analyse the code and do little modification to better understand the React application.</p>
<p class="contentText">Here, we are using two API provided by the React library.</p>
</div>
<h1 class="subHeading">React.createElement</h1>
<p class="contentText">Used to create React elements. It expects three parameters −</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px;">
<ul style="margin: 0;">
  <li>
    Element tag
  </li>
  <li>
    Element attributes as object
  </li>
  <li>
    Element content - It can contain nested React element as well
  </li>
</ul>
</div>
<h1 class="subHeading">ReactDOM.render</h1>
<p class="contentText">Used to render the element into the container. It expects two parameters −</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px;">
<ul style="margin: 0;">
  <li>
    React Element OR JSX
  </li>
  <li>
    Root element of the webpage
  </li>
</ul>
</div>
<h1 class="subHeading">Nested React element</h1>
<p class="contentText">As <strong> React.createElement</strong> allows nested React element, let us add nested element as shown below −</p>
<h1 class="subHeading"><strong>Example</strong></h1>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attribute">charset=</span><span class="string">"UTF-8"</span> <span class="tag">/&gt;</span>
    <span class="tag">&lt;title&gt;</span>React Application<span class="tag">&lt;/title&gt;</span>
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    <span class="tag">&lt;div id=</span><span class="attribute">"react-app"</span><span class="tag">&gt;</span><span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;script src=</span><span class="string">"https://unpkg.com/react@17/umd/react.development.js"</span> <span class="tag">crossorigin</span><span class="tag">&gt;&lt;/script&gt;</span>
    <span class="tag">&lt;script src=</span><span class="string">"https://unpkg.com/react-dom@17/umd/react-dom.development.js"</span> <span class="tag">crossorigin</span><span class="tag">&gt;&lt;/script&gt;</span>
    <span class="tag">&lt;script language=</span><span class="attribute">"JavaScript"</span><span class="tag">&gt;</span>
      <span class="tag">element =</span> <span class="function">React.createElement</span>(<span class="string">'div'</span>, {}, <span class="function">React.createElement</span>(<span class="string">'h1'</span>, {}, <span class="string">'Hello React!'</span>));
      <span class="tag">ReactDOM.render</span>(element, document.getElementById(<span class="string">'react-app'</span>));
    <span class="tag">&lt;/script&gt;</span>
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span>
  </code></pre>
</div>
<h1 class="subHeading"><strong>Output</strong></h1>
<p class="contentText">It will generate the below content −</p>
<div class="code-container">
  <pre><code>
<div><h1> Hello React!</h1></div> 
  </code></pre>
</div>
<h1 class="subHeading">Use JSX</h1>
<p class="contentText">Next, let us remove the React element entirely and introduce JSX syntax as shown below −</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attribute">charset=</span><span class="string">"UTF-8"</span> <span class="tag">/&gt;</span>
    <span class="tag">&lt;title&gt;</span>React Application<span class="tag">&lt;/title&gt;</span>
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    <span class="tag">&lt;div id=</span><span class="attribute">"react-app"</span><span class="tag">&gt;</span><span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;script src=</span><span class="string">"https://unpkg.com/react@17/umd/react.development.js"</span> <span class="tag">crossorigin</span><span class="tag">&gt;&lt;/script&gt;</span>
    <span class="tag">&lt;script src=</span><span class="string">"https://unpkg.com/react-dom@17/umd/react-dom.development.js"</span> <span class="tag">crossorigin</span><span class="tag">&gt;&lt;/script&gt;</span>
    <span class="tag">&lt;script src=</span><span class="string">"https://unpkg.com/@babel/standalone/babel.min.js"</span><span class="tag">&gt;&lt;/script&gt;</span>
    <span class="tag">&lt;script type=</span><span class="attribute">"text/babel"</span><span class="tag">&gt;</span>
      <span class="tag">ReactDOM.render</span>(<span class="tag">&lt;div&gt;</span><span class="tag">&lt;h1&gt;</span>Hello React!<span class="tag">&lt;/h1&gt;</span><span class="tag">&lt;/div&gt;</span>, 
      document.getElementById(<span class="string">'react-app'</span>));
    <span class="tag">&lt;/script&gt;</span>
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span>
  </code></pre>
</div>
<p class="contentText">Here, we have included babel to convert JSX into JavaScript and added type="text/babel" in the script tag.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;script src=</span><span class="string">"https://unpkg.com/@babel/standalone/babel.min.js"</span><span class="tag">&gt;&lt;/script&gt;</span>
<span class="tag">&lt;script type=</span><span class="attribute">"text/babel"</span><span class="tag">&gt;</span>
  <span class="tag">...</span>
  <span class="tag">...</span>
<span class="tag">&lt;/script&gt;</span>
  </code></pre>
</div>
<p class="contentText">Next, run the application and open the browser. The output of the application is as follows −</p>
<div style="display: flex; justify-content: center; align-items: center;">
<img src="images/hello_jsx.jpg" alt="output" style="object-fit:cover;" />
</div>
<p class="contentText">Next, let us create a new React component, Greeting and then try to use it in the webpage.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;script type=</span><span class="attribute">"text/babel"</span><span class="tag">&gt;</span>
  <span class="tag">function</span> <span class="function">Greeting</span>() <span class="tag">{</span>
    <span class="tag">return</span> <span class="function">&lt;div&gt;</span><span class="tag">&lt;h1&gt;</span>Hello JSX!<span class="tag">&lt;/h1&gt;</span><span class="function">&lt;/div&gt;</span>
  <span class="tag">}</span>
  <span class="tag">ReactDOM.render</span>(<span class="function">&lt;Greeting /&gt;</span>, document.getElementById(<span class="string">'react-app'</span>));
<span class="tag">&lt;/script&gt;</span>
  </code></pre>
</div>
<p class="contentText">The result is same and as shown below −</p>
<div style="display: flex; justify-content: center; align-items: center;">
<img src="images/hello_jsx.jpg" alt="output" style="object-fit:cover;" />
</div>
<p class="contentText">By analyzing the application, we can visualize the workflow of the React application as shown in the below diagram.</p>
<div style="display: flex; justify-content: center; align-items: center;">
<img src="images/workflow_jsx.jpg" alt="output" style="object-fit:cover;" />
</div>
<div class="contentText">
<p class="contentText">React app calls ReactDOM.render method by passing the user interface created using React component (coded in either JSX or React element format) and the container to render the user interface.</p>
<p class="contentText">ReactDOM.render processes the JSX or React element and emits Virtual DOM.</p>
<p class="contentText">Virtual DOM will be merged and rendered into the container.</p>
</div>
<h1 class="contentHeading">Architecture of the React Application</h1>
<p class="contentText">React library is just UI library and it does not enforce any particular pattern to write a complex application. Developers are free to choose the design pattern of their choice. React community advocates certain design pattern. One of the patterns is Flux pattern. React library also provides lot of concepts like Higher Order component, Context, Render props, Refs etc., to write better code. React Hooks is evolving concept to do state management in big projects. Let us try to understand the high level architecture of a React application.</p>
`;