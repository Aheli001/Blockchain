docs.codeSplitting = `
<h1 class="heading">ReactJS − Code-Splitting</h1>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <p class="contentText">Bundling is one of the important stage in a front end application. It bundles all the front end code along with dependency into one large bundle (bundle.js). The final bundle is size optimized by the bundler. Some of the popular bundler are webpack, parcel and rollup. The final bundle will be fine in most cases. If the final bundled code is big, then the bundler can be instructed to bundle the code into multiple item instead of single, big chunk.</p>
        <p class="contentText">Let us learn how to hint the bundler to split the code and bundle it separately.</p>
        </div>
        <h1 class="contentHeading">
  Dynamic import
</h1>
<p class="contentText">Dynamic import instruct the bundler to split the code. Dynamic import is basically fetching the required module based on the necessity. The code to do normal is as shown below −</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> { <span class="function-name">round</span> } <span class="keyword">from</span> <span class="string">'./math'</span>;
<span class="function-name">console</span>.log(<span class="function-name">round</span>(<span class="number">67.78</span>));
  </code></pre>
</div>
<p class="contentText">The same code can be imported dynamically as shown below −</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span>(<span class="string">"./math"</span>).<span class="function-name">then</span>(math =&gt; {
  <span class="function-name">console</span>.log(math.<span class="function-name">round</span>(<span class="number">67.78</span>));
});
  </code></pre>
</div>
<h1 class="contentHeading">
  React Lazy component
</h1>
<p class="contentText">React provides a function, React.lazy to dynamically import a component. Normally, as we know, a react component will be imported as shown below −</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> <span class="class-name">MyComponent</span> <span class="keyword">from</span> <span class="string">'./MyComponent'</span>;
  </code></pre>
</div>

<p class="contentText">To import the above component dynamically using React.lazy() function is as shown below −</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> React, { <span class="class-name">Suspense</span> } <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">const</span> <span class="class-name">MyComponent</span> = React.lazy(() => <span class="keyword">import</span>(<span class="string">'./MyComponent'</span>));

<span class="keyword">function</span> <span class="function-name">App</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;Suspense</span> <span class="attr">fallback</span>=<span class="tag">{&lt;div&gt;</span>Loading...<span class="tag">&lt;/div&gt;}</span><span class="tag">&gt;</span>
            <span class="tag">&lt;MyComponent /&gt;</span>
         <span class="tag">&lt;/Suspense&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}
  </code></pre>
</div>
<p class="contentText">Suspense component is used to load a temporary UI during the loading of the original component. Suspense component includes a fallback props to specify the fallback UI. The fallback UI can be any React element. Sometimes, the dynamic component may fail to load due to network issue or code error. We can use error boundary to handle those situation as shown below −</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> React, { <span class="class-name">Suspense</span> } <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> <span class="class-name">MyErrorBoundary</span> <span class="keyword">from</span> <span class="string">'./MyErrorBoundary'</span>;
<span class="keyword">const</span> <span class="class-name">MyComponent</span> = React.lazy(() => <span class="keyword">import</span>(<span class="string">'./MyComponent'</span>));

<span class="keyword">const</span> <span class="function-name">AnotherComponent</span> = () => (
   <span class="tag">&lt;div&gt;</span>
      <span class="tag">&lt;MyErrorBoundary&gt;</span>
         <span class="tag">&lt;Suspense</span> <span class="attr">fallback</span>=<span class="tag">{&lt;div&gt;</span>Loading...<span class="tag">&lt;/div&gt;}</span><span class="tag">&gt;</span>
            <span class="tag">&lt;section&gt;</span>
               <span class="tag">&lt;MyComponent /&gt;</span>
            <span class="tag">&lt;/section&gt;</span>
         <span class="tag">&lt;/Suspense&gt;</span>
      <span class="tag">&lt;/MyErrorBoundary&gt;</span>
   <span class="tag">&lt;/div&gt;</span>
);
  </code></pre>
</div>

<h1 class="contentHeading">
  Benefits of React Lazy Loading
</h1>
<p class="contentText">React lazy loading offers several advantages for modern web applications:</p>
<ul class="contentList">
  <li>Reduced initial bundle size, leading to faster initial page load times</li>
  <li>Improved performance by loading components only when needed</li>
  <li>Better user experience with progressive loading of application features</li>
  <li>Optimized resource utilization by loading code on demand</li>
</ul>

<h1 class="contentHeading">
  Best Practices for React Lazy Loading
</h1>
<p class="contentText">When implementing lazy loading in React applications, consider these best practices:</p>
<ul class="contentList">
  <li>Use lazy loading for large components or routes that are not immediately visible</li>
  <li>Implement proper loading states and error boundaries for better user experience</li>
  <li>Group related components together to minimize the number of chunks</li>
  <li>Consider using preloading for components that will likely be needed soon</li>
</ul>

<h1 class="contentHeading">
  Route-based Code Splitting
</h1>
<p class="contentText">A common use case for lazy loading is route-based code splitting. Here's how to implement it:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> React, { <span class="class-name">Suspense</span>, <span class="class-name">lazy</span> } <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> { <span class="class-name">BrowserRouter</span> <span class="keyword">as</span> Router, <span class="class-name">Routes</span>, <span class="class-name">Route</span> } <span class="keyword">from</span> <span class="string">'react-router-dom'</span>;

<span class="keyword">const</span> <span class="class-name">Home</span> = lazy(() => <span class="keyword">import</span>(<span class="string">'./routes/Home'</span>));
<span class="keyword">const</span> <span class="class-name">About</span> = lazy(() => <span class="keyword">import</span>(<span class="string">'./routes/About'</span>));
<span class="keyword">const</span> <span class="class-name">Contact</span> = lazy(() => <span class="keyword">import</span>(<span class="string">'./routes/Contact'</span>));

<span class="keyword">function</span> <span class="function-name">App</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;Router&gt;</span>
         <span class="tag">&lt;Suspense</span> <span class="attr">fallback</span>=<span class="tag">{&lt;div&gt;</span>Loading...<span class="tag">&lt;/div&gt;}</span><span class="tag">&gt;</span>
            <span class="tag">&lt;Routes&gt;</span>
               <span class="tag">&lt;Route</span> <span class="attr">path</span>=<span class="string">"/"</span> <span class="attr">element</span>=<span class="tag">{&lt;Home /&gt;}</span> <span class="tag">/&gt;</span>
               <span class="tag">&lt;Route</span> <span class="attr">path</span>=<span class="string">"/about"</span> <span class="attr">element</span>=<span class="tag">{&lt;About /&gt;}</span> <span class="tag">/&gt;</span>
               <span class="tag">&lt;Route</span> <span class="attr">path</span>=<span class="string">"/contact"</span> <span class="attr">element</span>=<span class="tag">{&lt;Contact /&gt;}</span> <span class="tag">/&gt;</span>
            <span class="tag">&lt;/Routes&gt;</span>
         <span class="tag">&lt;/Suspense&gt;</span>
      <span class="tag">&lt;/Router&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="contentHeading">
  Preloading Components
</h1>
<p class="contentText">You can preload components that you expect will be needed soon using the following pattern:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">const</span> <span class="class-name">MyComponent</span> = lazy(() => <span class="keyword">import</span>(<span class="string">'./MyComponent'</span>));

<span class="comment">// Preload the component</span>
<span class="keyword">const</span> <span class="function-name">preloadComponent</span> = () => {
   <span class="keyword">import</span>(<span class="string">'./MyComponent'</span>);
};

<span class="comment">// Call preloadComponent when needed, e.g., on hover or before navigation</span>
<span class="function-name">preloadComponent</span>();
  </code></pre>
</div>

<p class="contentText">This approach allows you to start loading components before they're actually needed, reducing the perceived loading time for users.</p>

<h1 class="contentHeading">
  Performance Considerations
</h1>
<p class="contentText">While lazy loading can improve performance, it's important to consider these factors:</p>
<ul class="contentList">
  <li>Too many small chunks can lead to increased network requests</li>
  <li>Each lazy-loaded component requires a separate network request</li>
  <li>Consider using tools like webpack's chunk naming to better organize your bundles</li>
  <li>Monitor and optimize chunk sizes to find the right balance between initial load time and subsequent navigation</li>
</ul>

`;