docs.profilerApi = `
<h1 class="heading">ReactJS − Profiler API</h1>

<h1 class="contentHeading">Introduction to Profiler API</h1>
<p>The Profiler API is a powerful tool in React that helps measure the "cost" of rendering - how long it takes to render a React application and how often it renders. It's particularly useful for identifying performance bottlenecks in your application.</p>

<h1 class="contentHeading">Basic Usage of Profiler Component</h1>
<p>The Profiler component is a built-in component in React that can be used to measure the rendering performance of a part of your application. Here's how you can use it:</p>

<div class="code-container">
  <pre><code>
<span class="keyword">import</span> { Profiler } <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function-name">App</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;Profiler</span> <span class="attr">id=</span><span class="string">"Navigation"</span> <span class="attr">onRender=</span>{callback}<span class="tag">&gt;</span>
         <span class="tag">&lt;Navigation</span> <span class="tag">/&gt;</span>
      <span class="tag">&lt;/Profiler&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="contentHeading">Profiler Props</h1>
<ul>
  <li><strong>id</strong>: A string identifying the part of the UI being measured</li>
  <li><strong>onRender</strong>: A callback function that React calls any time a component within the profiled tree "commits" an update</li>
</ul>

<h1 class="contentHeading">Understanding the onRender Callback</h1>
<p>The onRender callback receives several parameters that provide detailed information about the render:</p>

<div class="code-container">
  <pre><code>
<span class="keyword">function</span> <span class="function-name">onRenderCallback</span>(
   id,           <span class="comment">// the "id" prop of the Profiler tree that has just committed</span>
   phase,        <span class="comment">// either "mount" (if the tree just mounted) or "update" (if it re-rendered)</span>
   actualDuration, <span class="comment">// time spent rendering the committed update</span>
   baseDuration,   <span class="comment">// estimated time to render the entire subtree without memoization</span>
   startTime,      <span class="comment">// when React began rendering this update</span>
   commitTime,     <span class="comment">// when React committed this update</span>
   interactions    <span class="comment">// the Set of interactions belonging to this update</span>
) {
   <span class="comment">// Aggregate or log render timings...</span>
}
  </code></pre>
</div>

<h1 class="contentHeading">Using React DevTools Profiler</h1>
<p>React DevTools provides a more visual way to profile your application:</p>
<ol>
  <li>Open React DevTools in your browser</li>
  <li>Switch to the "Profiler" tab</li>
  <li>Click the "Record" button</li>
  <li>Interact with your application</li>
  <li>Click "Stop" to see the profiling results</li>
</ol>

<h1 class="contentHeading">Best Practices</h1>
<ul>
  <li>Use Profiler in development only, not in production</li>
  <li>Profile specific components rather than the entire application</li>
  <li>Compare performance before and after optimizations</li>
  <li>Use the data to identify components that need optimization</li>
</ul>

<h1 class="contentHeading">Common Performance Issues to Look For</h1>
<ul>
  <li>Unnecessary re-renders</li>
  <li>Expensive calculations in render methods</li>
  <li>Large component trees</li>
  <li>Inefficient list rendering</li>
</ul>

<h1 class="contentHeading">Conclusion</h1>
<p>The React Profiler API is an essential tool for optimizing React applications. By understanding how to use both the Profiler component and React DevTools, you can identify performance bottlenecks and make informed decisions about where to focus your optimization efforts. Remember that profiling should be part of your regular development process, especially when working on complex applications or when you notice performance issues.</p>
`;  