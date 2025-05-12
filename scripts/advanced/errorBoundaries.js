docs.errorBoundaries = `
<h1 class="heading">ReactJS − Error Boundaries</h1>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <p class="contentText">In general, it is quite challenging to catch error and process it without affecting the UI of the application. React introduces a concept called error boundaries to catch a error during UI rendering, process it in the background and show a fallback UI in the front-end application. This will not affect the UI application as it is handled using alternative UI like warning message instead of broken pages.</p>
        <p class="contentText">Let us learn what is error boundary and how to apply it in our application in this chapter.</p>
        </div>
        <h1 class="contentHeading">Complete Error Boundary Implementation</h1>
        <p class="contentText">Here's a complete implementation of an error boundary component:</p>
        <div class="code-container">
  <pre><code>
<span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">class</span> <span class="class-name">SimpleErrorBoundary</span> <span class="keyword">extends</span> React.Component {
   
   <span class="function-name">constructor</span>(<span class="param">props</span>) {
      <span class="keyword">super</span>(props);
      <span class="keyword">this</span>.state = { <span class="property">hasError</span>: <span class="literal">false</span> };
   }

   <span class="keyword">static</span> <span class="function-name">getDerivedStateFromError</span>(<span class="param">error</span>) {
      <span class="keyword">return</span> { <span class="property">hasError</span>: <span class="literal">true</span> };
   }
   
   <span class="function-name">componentDidCatch</span>(<span class="param">error</span>, <span class="param">errorInfo</span>) {
      console.log(error);
      console.log(errorInfo);
   }
   
   <span class="function-name">render</span>() {
      <span class="keyword">if</span> (<span class="keyword">this</span>.state.hasError) {
         <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Please contact the administrator.<span class="tag">&lt;/h1&gt;</span>;
      }
      <span class="keyword">return</span> <span class="keyword">this</span>.props.children;
   }
}

<span class="keyword">export</span> <span class="keyword">default</span> SimpleErrorBoundary;
  </code></pre>
</div>
<h1 class="contentHeading">Understanding the Implementation</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>hasError</strong> is a state variable initialized with false value.</li>
  <li><strong>getDerivedStateFromError</strong> updates the error state when there is an error.</li>
  <li><strong>componentDidCatch</strong> logs the error into the console.</li>
  <li><strong>render</strong> will render either error UI or children based on the error in the application.</li>
</ul>
</div>
<h1 class="contentHeading">Concept of Error Boundary</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <p class="contentText">Error boundaries are normal react component with special features to catch all the errors occurred anywhere in the component tree. The error caught during the process can be logged and then alternative user interface specifying the error can be shown to the user.</p>
        <p class="contentText">A normal react class based component can be upgraded to a component supporting error boundary by implementing two functions.</p>
        <p class="contentText"><strong>static getDerivedStateFromError() −</strong> This is a static function and will be called when an error occurs in the application.</p>
        </div>
        <div class="code-container">
  <pre><code>
<span class="keyword">static</span> <span class="function-name">getDerivedStateFromError</span>(<span class="param">error</span>) {
   <span class="keyword">return</span> { <span class="property">hasError</span>: <span class="literal">true</span> };
}
  </code></pre>
</div>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <p class="contentText">Here,<strong> hasError</strong> is a custom state variable specifying that the application has some error and can be used in subsequent render to show fallback UI instead of normal UI.</p>
        <p class="contentText"><strong>componentDidCatch() −</strong> This is a component life cycle event called with the error information when an error occurs in the component tree</p>
        </div>
        <div class="code-container">
  <pre><code>
<span class="function-name">componentDidCatch</span>(<span class="param">error</span>, <span class="param">errorInfo</span>) {
   <span class="comment">// log the error in console or store it somewhere using a log service</span>
}
  </code></pre>
</div>
<p class="contentText">Once a component is upgraded to handle the error, then it can be use anywhere in the application as normal component. Let us consider the name of the component is SimpleErrorBoundary, then it can be use as shown below −</p>
<div class="code-container">
  <pre><code>
<span class="tag">&lt;</span><span class="component">SimpleErrorBoundary</span><span class="tag">&gt;</span>
   <span class="tag">&lt;</span><span class="component">MyComponent</span><span class="tag"> /&gt;</span>
<span class="tag">&lt;/</span><span class="component">SimpleErrorBoundary</span><span class="tag">&gt;</span>
  </code></pre>
</div>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
<p class="contentText">Here,</p>
<p class="contentText>React will catch the error occurs anywhere in the MyComponent component and send it to SimpleErrorBoundary component for further processing.</p>
<p class="contentText">React will not catch all error except error occurring in below scenarios,</p>
</div>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Event handlers − Event handlers are plain javascript function, which can use try/catch and render fallback UI itself and may not need error boundary hint.</li>
  <li>Async code like setTimeout.</li>
  <li>Server side rendering. Error boundary is exclusively for front-end application.</li>
  <li>Error happening in the error boundary component itself.</li>
</ul>
</div>
`;