docs.application = `
<h1 class="heading">ReactJS − Creating a React Application
</h1>
        <div class="contentText">
<p class="contentText">As we learned earlier, React library can be used in both simple and complex application. Simple application normally includes the React library in its script section. In complex application, developers have to split the code into multiple files and organize the code into a standard structure. Here, React toolchain provides pre-defined structure to bootstrap the application. Also, developers are free to use their own project structure to organize the code.</p>
<p class="contentText">Let us see how to create simple as well as complex React application −</p>
</div>
 <div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    Simple application using CDN
  </li>
  <li>
    Complex application using React Create App cli
  </li>
  <li>
    Complex application using customized method
  </li>
</ul>
</div>
<h1 class="contentHeading">Using Rollup bundler</h1>
<div class="contentText">
<p class="contentText">Rollup is one of the small and fast JavaScript bundlers. Let us learn how to use rollup bundler in this chapter.</p>
<p class="contentText">Following are the steps to creating an application using Rollup bundler −</p>
<p class="contentText"><strong>Step 1</strong> − Open a terminal and go to your workspace.</p>
</div>
<div class="code-container">
  <pre><code>
cd /go/to/your/workspace
  </code></pre>
</div>
<p class="contentText"><strong>Step 2</strong> − Next, create a folder, expense-manager-rollup and move to newly created folder. Also, open the folder in your favorite editor or IDE.</p>
<div class="code-container">
  <pre><code>
mkdir expense-manager-rollup 
cd expense-manager-rollup
  </code></pre>
</div>
<p class="contentText">Then, create and initialize the project.</p>
<div class="code-container">
  <pre><code>
npm init -y
  </code></pre>
</div>
<p class="contentText"><strong>Step 3</strong> − To install React libraries (react and react-dom), follow the command below.</p>
<div class="code-container">
  <pre><code>
npm install react@^17.0.0 react-dom@^17.0.0 --save
  </code></pre>
</div>
<p class="contentText">Then install babel and its preset libraries as development dependency using the following commands.</p>
<div class="code-container">
  <pre><code>
npm install @babel/preset-env @babel/preset-react 
@babel/core @babel/plugin-proposal-class-properties -D
  </code></pre>
</div>
<p class="contentText">Next, install rollup and its plugin libraries as development dependency.</p>
<div class="code-container">
  <pre><code>
npm i -D rollup postcss@8.1 @rollup/plugin-babel 
@rollup/plugin-commonjs @rollup/plugin-node-resolve 
@rollup/plugin-replace rollup-plugin-livereload 
rollup-plugin-postcss rollup-plugin-serve postcss@8.1 
postcss-modules@4 rollup-plugin-postcss
  </code></pre>
</div>
<p class="contentText">Next, install corejs and regenerator runtime for async programming.</p>
<div class="code-container">
  <pre><code>
npm i regenerator-runtime core-js
  </code></pre>
</div>
<p class="contentText"><strong>Step 4</strong> − Later, create a babel configuration file, .babelrc under the root folder to configure the babel compiler.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">{</span>
  <span class="tag">&quot;presets&quot;:</span>
  <span class="tag">[</span>
    <span class="tag">[</span>
      <span class="string">&quot;@babel/preset-env&quot;</span>,
      <span class="tag">{</span>
        <span class="tag">&quot;useBuiltIns&quot;:</span> <span class="string">&quot;usage&quot;</span>,
        <span class="tag">&quot;corejs&quot;:</span> <span class="number">3</span>,
        <span class="tag">&quot;targets&quot;:</span> <span class="string">&quot;&gt; 0.25%, not dead&quot;</span>
      <span class="tag">}</span>
    <span class="tag">],</span>
    <span class="string">&quot;@babel/preset-react&quot;</span>
  <span class="tag">],</span>
  <span class="tag">&quot;plugins&quot;:</span>
  <span class="tag">[</span>
    <span class="string">&quot;@babel/plugin-proposal-class-properties&quot;</span>
  <span class="tag">]</span>
<span class="tag">}</span>
  </code></pre>
</div>
<div style="display: flex; flex-direction: column;">
<p class="contentText"><strong>rollup.config.js:</strong></p>
<p class="contentText">Next, create a rollup.config.js file in the root folder to configure the rollup bundler.</p>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">import</span> babel <span class="tag">from</span> <span class="string">'@rollup/plugin-babel'</span>;
<span class="tag">import</span> resolve <span class="tag">from</span> <span class="string">'@rollup/plugin-node-resolve'</span>;
<span class="tag">import</span> commonjs <span class="tag">from</span> <span class="string">'@rollup/plugin-commonjs'</span>;
<span class="tag">import</span> replace <span class="tag">from</span> <span class="string">'@rollup/plugin-replace'</span>;
<span class="tag">import</span> serve <span class="tag">from</span> <span class="string">'rollup-plugin-serve'</span>;
<span class="tag">import</span> livereload <span class="tag">from</span> <span class="string">'rollup-plugin-livereload'</span>;
<span class="tag">import</span> postcss <span class="tag">from</span> <span class="string">'rollup-plugin-postcss'</span>;

<span class="tag">export</span> <span class="tag">default</span> {
   <span class="tag">input</span>: <span class="string">'src/index.js'</span>,
   <span class="tag">output</span>: {
      <span class="tag">file</span>: <span class="string">'public/index.js'</span>,
      <span class="tag">format</span>: <span class="string">'iife'</span>,
   },
   <span class="tag">plugins</span>: [
      commonjs({
         <span class="tag">include</span>: [
            <span class="string">'node_modules/**'</span>,
         ],
         <span class="tag">exclude</span>: [
            <span class="string">'node_modules/process-es6/**'</span>,
         ],
      }),
      resolve(),
      babel({
         <span class="tag">exclude</span>: <span class="string">'node_modules/**'</span>
      }),
      replace({
         <span class="tag">'process.env.NODE_ENV'</span>: <span class="tag">JSON.stringify</span>(<span class="string">'production'</span>),
      }),
      postcss({
         <span class="tag">autoModules</span>: <span class="tag">true</span>
      }),
      livereload(<span class="string">'public'</span>),
      serve({
         <span class="tag">contentBase</span>: <span class="string">'public'</span>,
         <span class="tag">port</span>: <span class="number">3000</span>,
         <span class="tag">open</span>: <span class="tag">true</span>,
      }), <span class="tag">// index.html should be in root of project</span>
   ]
}
  </code></pre>
</div>
<div style="display: flex; flex-direction: column;">
<p class="contentText"><strong>package.json</strong></p>
<p class="contentText">Next, update the package.json and include our entry point (public/index.js and public/styles.css) and command to build and run the application.</p>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">...</span>
<span class="tag">&quot;main&quot;:</span> <span class="string">&quot;public/index.js&quot;</span>,
<span class="tag">&quot;style&quot;:</span> <span class="string">&quot;public/styles.css&quot;</span>,
<span class="tag">&quot;files&quot;:</span>
  <span class="tag">[</span>
    <span class="string">&quot;public&quot;</span>
  <span class="tag">]</span>,
<span class="tag">&quot;scripts&quot;:</span>
  <span class="tag">{</span>
    <span class="tag">&quot;start&quot;:</span> <span class="string">&quot;rollup -c -w&quot;</span>,
    <span class="tag">&quot;build&quot;:</span> <span class="string">&quot;rollup&quot;</span>
  <span class="tag">}</span>,
<span class="tag">...</span>
  </code></pre>
</div>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
<p class="contentText"><strong>Step 5</strong> − Next, create a src folder in the root directory of the application, which will hold all the source code of the application.</p>
<p class="contentText">Next, create a folder, components under src to include our React components. The idea is to create two files, <component>.js to write the component logic and <component.css> to include the component specific styles.</p>
<p class="contentText">The final structure of the application will be as follows −</p>
</div>
<div class="code-container">
  <pre><code id="htmlCode">
|-- package-lock.json
|-- package.json
|-- rollup.config.js
|-- .babelrc
'-- public
   |-- index.html
'-- src
   |-- index.js
   '-- components
      |-- mycom.js
      |-- mycom.css
  </code></pre>
</div>
<div class="contentText">
<p class="contentText">Now, let us create a new component, HelloWorld to confirm our setup is working fine.</p>
<p class="contentText"><strong>HelloWorld.js</strong></p>
<p class="contentText">Create a file, HelloWorld.js under components folder and write a simple component to emit Hello World message.</p>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">"react"</span>;

<span class="tag">class</span> HelloWorld <span class="tag">extends</span> React.Component {
   <span class="tag">render</span>() {
      <span class="tag">return</span> (
         <span class="tag">&lt;div&gt;</span>
            <span class="tag">&lt;h1&gt;</span>Hello World!<span class="tag">&lt;/h1&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
      );
   }
}
<span class="tag">export</span> <span class="tag">default</span> HelloWorld;
  </code></pre>
</div>
<div class="contentText">
<p class="contentText"><strong>index.js</strong></p>
<p class="contentText">Next, create our main file, index.js under src folder and call our newly created component.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">'react'</span>;
<span class="tag">import</span> ReactDOM <span class="tag">from</span> <span class="string">'react-dom'</span>;
<span class="tag">import</span> HelloWorld <span class="tag">from</span> <span class="string">'./components/HelloWorld'</span>;

ReactDOM.render(
   <span class="tag">&lt;React.StrictMode&gt;</span>
    <span class="tag">&lt;HelloWorld /&gt;</span>
   <span class="tag">&lt;/React.StrictMode&gt;</span>,
   document.getElementById(<span class="string">'root'</span>)
);
  </code></pre>
</div>
<div class="contentText">
<p class="contentText">Create a public folder in the root directory.</p>
<p class="contentText"><strong>index.html</strong></p>
<p class="contentText">Next, create a html file, index.html (under public folder*), which will be our entry point of the application.</p>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html lang=</span><span class="attribute">&quot;en&quot;</span><span class="tag">&gt;</span>
   <span class="tag">&lt;head&gt;</span>
      <span class="tag">&lt;meta charset=</span><span class="attribute">&quot;utf-8&quot;</span><span class="tag">&gt;</span>
      <span class="tag">&lt;title&gt;</span>Expense Manager <span class="tag">::</span> Rollup version<span class="tag">&lt;/title&gt;</span>
   <span class="tag">&lt;/head&gt;</span>
   <span class="tag">&lt;body&gt;</span>
      <span class="tag">&lt;div id=</span><span class="attribute">&quot;root&quot;</span><span class="tag">&gt;</span><span class="tag">&lt;/div&gt;</span>
      <span class="tag">&lt;script type=</span><span class="attribute">&quot;text/JavaScript&quot;</span> <span class="tag">src=</span><span class="string">&quot;./index.js&quot;</span><span class="tag">&gt;&lt;/script&gt;</span>
   <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span>
  </code></pre>
</div>
<p class="contentText">Lastly, build and run the application.</p>
<div class="code-container">
  <pre><code>
npm start
  </code></pre>
</div>
<p class="contentText">The npm build command will execute the rollup and bundle our application into a single file, dist/index.js file and start serving the application. The dev command will recompile the code whenever the source code is changed and also reload the changes in the browser.</p>
<div class="code-container">
  <pre><code>
> expense-manager-rollup@1.0.0 build /path/to/your/workspace/expense-manager-rollup 
> rollup -c 
rollup v2.36.1 
bundles src/index.js  dist\index.js... 
LiveReload enabled 
http://localhost:10001 -> /path/to/your/workspace/expense-manager-rollup/dist 
created dist\index.js in 4.7s 

waiting for changes...
  </code></pre>
</div>
<p class="contentText">
Open the browser and enter http://localhost:3000 in the address bar and press enter. serve application will serve our webpage as shown below.</p>
<div style="display: flex; justify-content: center; align-items: center;">
<img src="images/hello_world.jpg" alt="output" style="object-fit:cover;" />
</div>
<h1 class="contentHeading">Using Parcel bundler</h1>
<div class="contentText">
<p class="contentText">Parcel is fast bundler with zero configuration. It expects just the entry point of the application and it will resolve the dependency itself and bundle the application. Let us learn how to use parcel bundler in this chapter.</p>
<p class="contentText"><strong>Step 1</strong> − First, install the parcel bundler.</p>
</div>
<div class="code-container">
  <pre><code>
npm install -g parcel-bundler
  </code></pre>
</div>
<p class="contentText">Then, open a terminal and go to your workspace.</p>
<div class="code-container">
  <pre><code>
cd /go/to/your/workspace
  </code></pre>
</div>
<p class="contentText"><strong>Step 2</strong> − Next, create a folder, expense-manager-parcel and move to newly created folder. Also, open the folder in your favorite editor or IDE.</p>
<div class="code-container">
  <pre><code>
npm install -g parcel-bundler
  </code></pre>
</div>
<p class="contentText">Then, open a terminal and go to your workspace.</p>
<div class="code-container">
  <pre><code>
mkdir expense-manager-parcel 
cd expense-manager-parcel
  </code></pre>
</div>
<p class="contentText">Create and initialize the project using the following command.</p>
<div class="code-container">
  <pre><code>
npm init -y
  </code></pre>
</div>
<p class="contentText"><strong>Step 3</strong> − Install React libraries (react and react-dom).</p>
<div class="code-container">
  <pre><code>
npm install react@^17.0.0 react-dom@^17.0.0 --save
  </code></pre>
</div>
<p class="contentText">Install babel and its preset libraries as development dependency.</p>
<div class="code-container">
  <pre><code>
npm install @babel/preset-env @babel/preset-react @babel/core @babel/plugin-proposal-class-properties -D
  </code></pre>
</div>
<p class="contentText">Then, you create a babel configuration file, .babelrc under the root folder to configure the babel compiler.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">{</span>
   <span class="tag">&quot;presets&quot;:</span>
   <span class="tag">[</span>
      <span class="string">&quot;@babel/preset-env&quot;</span>,
      <span class="string">&quot;@babel/preset-react&quot;</span>
   <span class="tag">],</span>
   <span class="tag">&quot;plugins&quot;:</span>
   <span class="tag">[</span>
      <span class="string">&quot;@babel/plugin-proposal-class-properties&quot;</span>
   <span class="tag">]</span>
<span class="tag">}</span>
  </code></pre>
</div>
<p class="contentText"><strong>Step 4</strong> − Update the package.json and include our entry point (src/index.js) and commands to build and run the application.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">...</span>
<span class="tag">&quot;main&quot;:</span> <span class="string">&quot;src/index.js&quot;</span>,
<span class="tag">&quot;scripts&quot;:</span>
   <span class="tag">{</span>
      <span class="tag">&quot;start&quot;:</span> <span class="string">&quot;parcel public/index.html&quot;</span>,
      <span class="tag">&quot;build&quot;:</span> <span class="string">&quot;parcel build public/index.html --out-dir dist&quot;</span>
   <span class="tag">}</span>,
<span class="tag">...</span>
  </code></pre>
</div>
<div class="contentText">
<p class="contentText"><strong>Step 5</strong> − Create a src folder in the root directory of the application, which will hold all the source code of the application.</p>
<p class="contentText">Next, create a folder, components under src to include our React components. The idea is to create two files, <component>.js to write the component logic and <component.css> to include the component specific styles.</p>
<p class="contentText">The final structure of the application will be as follows −</p>
</div>
<div class="code-container">
  <pre><code id="htmlCode">
|-- package-lock.json
|-- package.json
|-- .babelrc
'-- public
   |-- index.html
'-- src
   |-- index.js
   '-- components
      |-- mycom.js
      |-- mycom.css
  </code></pre>
</div>
<div class="contentText">
<p class="contentText">Let us create a new component, HelloWorld to confirm our setup is working fine. Create a file, HelloWorld.js under components folder and write a simple component to emit Hello World message.</p>
<p class="contentText"><strong>HelloWorld.js</strong></p>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">&quot;react&quot;</span>;

<span class="tag">class</span> HelloWorld <span class="tag">extends</span> React.Component {
   <span class="tag">render</span>() {
      <span class="tag">return</span> (
         <span class="tag">&lt;div&gt;</span>
            <span class="tag">&lt;h1&gt;</span>Hello World!<span class="tag">&lt;/h1&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
      );
   }
}
<span class="tag">export</span> <span class="tag">default</span> HelloWorld;
  </code></pre>
</div>
<div class="contentText">
<p class="contentText"><strong>index.js</strong></p>
<p class="contentText">Now, create our main file, index.js under src folder and call our newly created component.</p>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">'react'</span>;
<span class="tag">import</span> ReactDOM <span class="tag">from</span> <span class="string">'react-dom'</span>;
<span class="tag">import</span> HelloWorld <span class="tag">from</span> <span class="string">'./components/HelloWorld'</span>;

ReactDOM.render(
   <span class="tag">&lt;React.StrictMode&gt;</span>
    <span class="tag">&lt;HelloWorld /&gt;</span>
   <span class="tag">&lt;/React.StrictMode&gt;</span>,
   document.getElementById(<span class="string">'root'</span>)
);
  </code></pre>
</div>
<div class="contentText">
<p class="contentText">Next, create a public folder in the root directory.<strong>index.html</strong></p>
<p class="contentText">Create a html file, index.html (in the public folder), which will be our entry point of the application.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html lang=</span><span class="attribute">&quot;en&quot;</span><span class="tag">&gt;</span>
   <span class="tag">&lt;head&gt;</span>
      <span class="tag">&lt;meta charset=</span><span class="attribute">&quot;utf-8&quot;</span><span class="tag">&gt;</span>
      <span class="tag">&lt;title&gt;</span>Expense Manager <span class="tag">::</span> Parcel version<span class="tag">&lt;/title&gt;</span>
   <span class="tag">&lt;/head&gt;</span>
   <span class="tag">&lt;body&gt;</span>
      <span class="tag">&lt;div id=</span><span class="attribute">&quot;root&quot;</span><span class="tag">&gt;&lt;/div&gt;</span>
      <span class="tag">&lt;script type=</span><span class="attribute">&quot;text/JavaScript&quot;</span> <span class="tag">src=</span><span class="string">&quot;../src/index.js&quot;</span><span class="tag">&gt;&lt;/script&gt;</span>
   <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span>
  </code></pre>
</div>
<p class="contentText">Lastly, build and run the application.</p>
<div class="code-container">
  <pre><code>
npm start
  </code></pre>
</div>
<p class="contentText">The npm build command will execute the parcel command. It will bundle and serve the application on the fly. It recompiles whenever the source code is changed and also reload the changes in the browser.</p>
<div class="code-container">
  <pre><code>
> expense-manager-parcel@1.0.0 dev /go/to/your/workspace/expense-manager-parcel 
> parcel index.html Server running at http://localhost:1234 
 Built in 10.41s.
  </code></pre>
</div>
<p class="contentText">Open the browser and enter <strong>http://localhost:1234</strong> in the address bar and press enter.</p>
<div style="display: flex; justify-content: center; align-items: center;">
<img src="images/hello_world.jpg" alt="output" style="object-fit:cover;" />
</div>
<p class="contentText">To create the production bundle of the application to deploy it in production server, use build command. It will generate a index.js file with all the bundled source code under dist folder.</p>
<div class="code-container">
  <pre><code>
npm run build
> expense-manager-parcel@1.0.0 build /go/to/your/workspace/expense-manager-parcel
> parcel build index.html --out-dir dist

&sqrt;  Built in 6.42s.

dist\src.80621d09.js.map    270.23 KB     79ms
dist\src.80621d09.js        131.49 KB    4.67s
dist\index.html                 221 B    1.63s
  </code></pre>
</div>
`;