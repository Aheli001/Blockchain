docs.jsx = `
<h1 class="heading">ReactJS − JSX</h1>
<p class="contentText">As we learned earlier, React JSX is an extension to JavaScript. It allows writing a JavaScript code that looks like an HTML code. For instance, consider the following code:</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">const</span> element = <span class="tag">&lt;h1&gt;</span>Hello React!<span class="tag">&lt;/h1&gt;</span>;
  </code></pre>
</div>
<p class="contentText">The tag provided in the code above is known as JSX. JSX is mainly used to provide information about the appearance of an interface. However, it is not completely a template language but a syntax extension to JavaScript. JSX produces elements that are rendered into a DOM, in order to specify what the output must look like.</p>
<h1 class="contentHeading">Using JSX in ReactJS</h1>
<p class="contentText">JSX enables the developer to create a virtual DOM using XML syntax. It compiles down to pure JavaScript (React.createElement function calls), therefore, it can be used inside any valid JavaScript code.</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    Assign to a variable.
  </li>
</ul>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">var</span> greeting = <span class="tag">&lt;h1&gt;</span>Hello React!<span class="tag">&lt;/h1&gt;</span>;
  </code></pre>
</div>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    Assign to a variable based on a condition.
  </li>
</ul>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">var</span> canGreet = <span class="literal">true</span>;
<span class="tag">if</span>(canGreet) {
   greeting = <span class="tag">&lt;h1&gt;</span>Hello React!<span class="tag">&lt;/h1&gt;</span>;
}
  </code></pre>
</div>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    Can be used as return value of a function.
  </li>
</ul>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">function</span> Greeting() {
   <span class="tag">return</span> <span class="tag">&lt;h1&gt;</span>Hello React!<span class="tag">&lt;/h1&gt;</span>;
}
greeting = Greeting();
  </code></pre>
</div>

<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    Can be used as argument of a function.
  </li>
</ul>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">function</span> Greet(message) {
   ReactDOM.render(message, document.getElementById(<span class="string">'react-app'</span>));
}
Greet(<span class="tag">&lt;h1&gt;</span>Hello React!<span class="tag">&lt;/h1&gt;</span>);
  </code></pre>
</div>
<h1 class="contentHeading">Why JSX?</h1>
<p class="contentText">Using JSX with React is not mandatory, as there are various options to achieve the same thing as JSX; but it is helpful as a visual aid while working with UI inside a JavaScript code.</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px;">
<ul style="margin: 0;">
  <li>
    JSX performs optimization while translating the code to JavaScript, making it faster than regular JavaScript.
  </li>
  <li>
    React uses components that contain both markup and logic in a single file, instead of separate files.
  </li>
  <li>
    Most of the errors can be found at compilation time, as the data flow is unidirectional.
  </li>
  <li>
    Creating templates becomes easier with JSX.
  </li>
  <li>
    We can use JSX inside of conditional statements (if−else) and loop statements (for loops), can assign it to variables, accept it as arguments, or return it from functions.
  </li>
  <li>
    Using JSX can prevent Cross Site Scripting attacks, or injection attacks.
  </li>
</ul>
</div>
<h1 class="contentHeading">Expressions in JSX</h1>
<p class="contentText">JSX supports expression in pure JavaScript syntax. Expression has to be enclosed inside the curly braces, { }. Expression can contain all variables available in the context, where the JSX is defined. Let us create simple JSX with expression.</p>
<h1 class="subHeading">Example</h1>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;script type=</span><span class="string">&quot;text/babel&quot;</span><span class="tag">&gt;</span>
   <span class="tag">var</span> cTime = <span class="tag">new</span> Date().toTimeString();
   ReactDOM.render(
      <span class="tag">&lt;div&gt;&lt;p&gt;</span>The current time is {cTime}<span class="tag">&lt;/p&gt;&lt;/div&gt;</span>,
      document.getElementById(<span class="string">'react-app'</span>)
   );
<span class="tag">&lt;/script&gt;</span>
  </code></pre>
</div>
<h1 class="subHeading">Output</h1>
<p class="contentText">Here, cTime used in the JSX using expression. The output of the above code is as follows,</p>
<div class="code-container">
  <pre><code>
The Current time is 21:19:56 GMT+0530(India Standard Time)
  </code></pre>
</div>
<p class="contentText">One of the positive side effects of using expression in JSX is that it prevents Injection attacks as it converts any string into html safe string.</p>
<h1 class="contentHeading">Functions in JSX</h1>
<p class="contentText">JSX supports user defined JavaScript function. Function usage is similar to expression. Let us create a simple function and use it inside JSX.</p>
<h1 class="subHeading">Example</h1>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;script type=</span><span class="string">&quot;text/babel&quot;</span><span class="tag">&gt;</span>
   <span class="tag">var</span> cTime = <span class="tag">new</span> Date().toTimeString();
   ReactDOM.render(
      <span class="tag">&lt;div&gt;&lt;p&gt;</span>The current time is {cTime}<span class="tag">&lt;/p&gt;&lt;/div&gt;</span>,
      document.getElementById(<span class="string">'react-app'</span>)
   );
<span class="tag">&lt;/script&gt;</span>
  </code></pre>
</div>
<h1 class="subHeading">Output</h1>
<p class="contentText">Here, getCurrentTime() is used get the current time and the output is similar as specified below −</p>
<div class="code-container">
  <pre><code>
The Current time is 21:19:56 GMT+0530(India Standard Time)
  </code></pre>
</div>
<h1 class="contentHeading">Attributes in JSX</h1>
<p class="contentText">JSX supports HTML like attributes. All HTML tags and its attributes are supported. Attributes has to be specified using camelCase convention (and it follows JavaScript DOM API) instead of normal HTML attribute name. For example, class attribute in HTML has to be defined as className. The following are few other examples −</p>
 <div style="background-color: #EDEDED; padding: 10px; border-radius: 5px;">
<ul style="margin: 0;">
  <li>
    htmlFor instead of for
  </li>
  <li>
    tabIndex instead of tabindex
  </li>
  <li>
    onClick instead of onclick
  </li>
</ul>
</div>
<h1 class="subHeading">Example</h1>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;style&gt;</span>
   .red { color: red }
<span class="tag">&lt;/style&gt;</span>
<span class="tag">&lt;script type=</span><span class="string">&quot;text/babel&quot;</span><span class="tag">&gt;</span>
   <span class="tag">function</span> getCurrentTime() {
      <span class="tag">return</span> <span class="tag">new</span> Date().toTimeString();
   }
   ReactDOM.render(
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;p&gt;</span>
            The current time is <span class="tag">&lt;span className=</span><span class="string">&quot;red&quot;</span><span class="tag">&gt;</span>{getCurrentTime()}<span class="tag">&lt;/span&gt;</span>
         <span class="tag">&lt;/p&gt;</span>
      <span class="tag">&lt;/div&gt;</span>,
      document.getElementById(<span class="string">'react-app'</span>)
   );
<span class="tag">&lt;/script&gt;</span>
  </code></pre>
</div>
<h1 class="subHeading">Output</h1>
<p class="contentText">The output is as follows −</p>
<div class="code-container">
  <pre><code>
The Current time is <span style="color:red;">22:36:55 GMT+0530(India Standard Time)</span>
  </code></pre>
</div>
<h1 class="contentHeading">Using Expression within Attributes</h1>
<p class="contentText">JSX supports expression to be specified inside the attributes. In attributes, double quote should not be used along with expression. Either expression or string using double quote has to be used. The above example can be changed to use expression in attributes.</p>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;style&gt;</span>
   .red { color: red }
<span class="tag">&lt;/style&gt;</span>

<span class="tag">&lt;script type=</span><span class="string">&quot;text/babel&quot;</span><span class="tag">&gt;</span>
   <span class="tag">function</span> getCurrentTime() {
      <span class="tag">return</span> <span class="tag">new</span> Date().toTimeString();
   }
   <span class="tag">var</span> class_name = <span class="string">&quot;red&quot;</span>;
   ReactDOM.render(
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;p&gt;</span>
            The current time is <span class="tag">&lt;span className=</span><span class="string">&quot;{class_name}&quot;</span><span class="tag">&gt;</span>{getCurrentTime()}<span class="tag">&lt;/span&gt;</span>
         <span class="tag">&lt;/p&gt;</span>
      <span class="tag">&lt;/div&gt;</span>,
      document.getElementById(<span class="string">'react-app'</span>)
   );
<span class="tag">&lt;/script&gt;</span>
  </code></pre>
</div>
<h1 class="contentHeading">Nested Elements in JSX</h1>
<div class="contentText">
<p class="contentText">Nested elements in JSX can be used as JSX Children. They are very useful while displaying the nested components. You can use any type of elements together including tags, literals, functions, expressions etc. But false, null, undefined, and true are all valid elements of JSX; they just don't render as these JSX expressions will all render to the same thing. In this case, JSX is similar to HTML.</p>
<p class="contentText">Following is a simple code to show the usage of nested elements in JSX −</p>
</div>
<div class="code-container">
  
  <pre><code id="htmlCode">
<span class="tag">&lt;div&gt;</span>
   This is a list:
   <span class="tag">&lt;ul&gt;</span>
      <span class="tag">&lt;li&gt;</span>Element 1<span class="tag">&lt;/li&gt;</span>
      <span class="tag">&lt;li&gt;</span>Element 2<span class="tag">&lt;/li&gt;</span>
   <span class="tag">&lt;/ul&gt;</span>
<span class="tag">&lt;/div&gt;</span>
  </code></pre>
</div>

`;
