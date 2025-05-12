docs.useEffect = `
<h1 class="heading">ReactJS - useEffect</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
<p class="contentText">The useEffect hook in React is a powerful tool that allows you to perform side effects in function components. It serves as a replacement for lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.</p>
<p class="contentText">useEffect enables you to handle side effects such as data fetching, subscriptions, timers, and manual DOM mutations in a declarative way.</p>
</div>

<h1 class="contentHeading">Signature</h1>
<p class="contentText">The useEffect hook has the following signature:</p>
<div class="code-container">
  <pre><code>
useEffect(() => {
  // Effect function
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]); // Dependency array (optional)
  </code></pre>
</div>

<h1 class="contentHeading">Basic Usage</h1>
<p class="contentText">Here's a simple example of using useEffect to fetch data and update the document title:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useState, useEffect &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function-name">DataFetcher</span>() &#123;
   <span class="keyword">const</span> [data, setData] = useState(<span class="keyword">null</span>);
   <span class="keyword">const</span> [loading, setLoading] = useState(<span class="keyword">true</span>);

   useEffect(() => &#123;
      <span class="comment">// Update document title</span>
      document.title = <span class="string">'Loading data...'</span>;

      <span class="comment">// Fetch data</span>
      fetch(<span class="string">'https://api.example.com/data'</span>)
         .then(response => response.json())
         .then(data => &#123;
            setData(data);
            setLoading(<span class="keyword">false</span>);
            document.title = <span class="string">'Data loaded'</span>;
         &#125;);

      <span class="comment">// Cleanup function</span>
      <span class="keyword">return</span> () => &#123;
         document.title = <span class="string">'React App'</span>;
      &#125;;
   &#125;, []); <span class="comment">// Empty dependency array means run once on mount</span>

   <span class="keyword">if</span> (loading) <span class="keyword">return</span> <span class="tag">&lt;p&gt;</span>Loading...<span class="tag">&lt;/p&gt;</span>;
   <span class="keyword">return</span> <span class="tag">&lt;div&gt;</span>&#123;JSON.stringify(data)&#125;<span class="tag">&lt;/div&gt;</span>;
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Features of Effect Hook</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Lifecycle Management</strong> − Combines mounting, updating, and unmounting behaviors</li>
  <li><strong>Cleanup Function</strong> − Optional return function for cleanup operations</li>
  <li><strong>Dependency Control</strong> − Second argument controls when the effect runs</li>
  <li><strong>Multiple Effects</strong> − Can use multiple useEffect calls in one component</li>
  <li><strong>Async Operations</strong> − Supports asynchronous operations and cleanup</li>
</ul>
</div>

<h1 class="contentHeading">Features of Data Using Effect</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Data Fetching</strong> − Fetch and update data from APIs</li>
  <li><strong>State Synchronization</strong> − Keep state in sync with external data</li>
  <li><strong>Error Handling</strong> − Handle errors in data operations</li>
  <li><strong>Loading States</strong> − Manage loading states during data operations</li>
  <li><strong>Data Transformation</strong> − Transform data before setting state</li>
</ul>
</div>

<h1 class="contentHeading">DOM Mutations Example</h1>
<p class="contentText">Example of using useEffect for DOM mutations and event listeners:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useState, useEffect &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function-name">WindowSizeTracker</span>() &#123;
   <span class="keyword">const</span> [windowSize, setWindowSize] = useState(&#123;
      width: window.innerWidth,
      height: window.innerHeight
   &#125;);

   useEffect(() => &#123;
      <span class="keyword">const</span> handleResize = () => &#123;
         setWindowSize(&#123;
            width: window.innerWidth,
            height: window.innerHeight
         &#125;);
      &#125;;

      <span class="comment">// Add event listener</span>
      window.addEventListener(<span class="string">'resize'</span>, handleResize);

      <span class="comment">// Cleanup function</span>
      <span class="keyword">return</span> () => &#123;
         window.removeEventListener(<span class="string">'resize'</span>, handleResize);
      &#125;;
   &#125;, []); <span class="comment">// Empty dependency array means run once on mount</span>

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;p&gt;</span>Window width: &#123;windowSize.width&#125;px<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;p&gt;</span>Window height: &#123;windowSize.height&#125;px<span class="tag">&lt;/p&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Important Considerations</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Dependency Array</strong> − Always include all dependencies used in the effect</li>
  <li><strong>Cleanup</strong> − Always clean up subscriptions and event listeners</li>
  <li><strong>Performance</strong> − Be mindful of effect frequency and dependencies</li>
  <li><strong>Race Conditions</strong> − Handle potential race conditions in async operations</li>
  <li><strong>Infinite Loops</strong> − Avoid creating infinite update loops</li>
</ul>
</div>

<h1 class="contentHeading">Best Practices</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Separate Concerns</strong> − Use multiple effects for different concerns</li>
  <li><strong>Custom Hooks</strong> − Extract complex effects into custom hooks</li>
  <li><strong>Dependency Management</strong> − Keep dependency arrays minimal and accurate</li>
  <li><strong>Error Handling</strong> − Implement proper error handling in effects</li>
  <li><strong>Testing</strong> − Test effects with different dependency scenarios</li>
</ul>
</div>

<h1 class="subHeading">Summary</h1>
<p class="contentText">useEffect is a versatile hook that enables side effects in function components. It provides a unified way to handle component lifecycle events, data fetching, subscriptions, and DOM mutations. By following best practices and understanding its features, you can create robust and maintainable React applications. Remember to always clean up after your effects and manage dependencies carefully to avoid common pitfalls.</p>
`;
