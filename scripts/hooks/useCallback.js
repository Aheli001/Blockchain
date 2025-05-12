docs.useCallback = `
<h1 class="heading">ReactJS - useCallback</h1>
<div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <p class="contentText">The useCallback hook in React is a performance optimization tool that memoizes callback functions. It returns a memoized version of the callback that only changes if one of the dependencies has changed, preventing unnecessary re-renders of child components that depend on the callback.</p>
<p class="contentText">useCallback is particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g., when using React.memo).</p>
</div>

<h1 class="contentHeading">Basic Usage</h1>
<p class="contentText">Here's a simple example of using useCallback to optimize a callback function:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useState, useCallback &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function-name">ParentComponent</span>() &#123;
   <span class="keyword">const</span> [count, setCount] = useState(0);
   <span class="keyword">const</span> [text, setText] = useState('');

   <span class="keyword">const</span> handleIncrement = useCallback(() =&gt; &#123;
      setCount(prevCount =&gt; prevCount + 1);
   &#125;, []);

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;p&gt;</span>Count: &#123;count&#125;<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;input</span>
            <span class="attr">value=</span>&#123;text&#125;
            <span class="attr">onChange=</span>&#123;(e) =&gt; setText(e.target.value)&#125;
            <span class="attr">placeholder=</span><span class="string">"Type something..."</span>
         <span class="tag">/&gt;</span>
         <span class="tag">&lt;ChildComponent</span> <span class="attr">onIncrement=</span>&#123;handleIncrement&#125; <span class="tag">/&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Common Use Cases</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Event Handlers</strong> − Memoize event handler functions passed to child components</li>
  <li><strong>Optimized Components</strong> − Prevent unnecessary re-renders in React.memo components</li>
  <li><strong>Dependency Arrays</strong> − Stabilize function references in useEffect dependencies</li>
  <li><strong>Custom Hooks</strong> − Return stable callback functions from custom hooks</li>
  <li><strong>Performance Optimization</strong> − Reduce unnecessary re-renders in large component trees</li>
</ul>
</div>

<h1 class="contentHeading">With React.memo</h1>
<p class="contentText">Example of using useCallback with React.memo to optimize child components:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useState, useCallback, memo &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">const</span> ChildComponent = memo((&#123; onIncrement &#125;) =&gt; &#123;
   console.log('ChildComponent rendered');
   <span class="keyword">return</span> (
      <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;onIncrement&#125;<span class="tag">&gt;</span>Increment<span class="tag">&lt;/button&gt;</span>
   );
&#125;);

<span class="keyword">function</span> <span class="function-name">ParentComponent</span>() &#123;
   <span class="keyword">const</span> [count, setCount] = useState(0);
   <span class="keyword">const</span> [text, setText] = useState('');

   <span class="keyword">const</span> handleIncrement = useCallback(() =&gt; &#123;
      setCount(prevCount =&gt; prevCount + 1);
   &#125;, []);

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;p&gt;</span>Count: &#123;count&#125;<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;input</span>
            <span class="attr">value=</span>&#123;text&#125;
            <span class="attr">onChange=</span>&#123;(e) =&gt; setText(e.target.value)&#125;
            <span class="attr">placeholder=</span><span class="string">"Type something..."</span>
         <span class="tag">/&gt;</span>
         <span class="tag">&lt;ChildComponent</span> <span class="attr">onIncrement=</span>&#123;handleIncrement&#125; <span class="tag">/&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Important Considerations</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Dependency Array</strong> − Include all values from the component scope that are used in the callback</li>
  <li><strong>Performance Impact</strong> − Only use when necessary for performance optimization</li>
  <li><strong>Memory Usage</strong> − Memoization uses memory, so use judiciously</li>
  <li><strong>Initial Render</strong> − The callback is created during the first render</li>
  <li><strong>Closures</strong> − Be careful with closures and stale values in the callback</li>
</ul>
</div>

<h1 class="contentHeading">Best Practices</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Profile First</strong> − Only use useCallback after identifying performance issues</li>
  <li><strong>Correct Dependencies</strong> − Always include all dependencies used in the callback</li>
  <li><strong>Combine with React.memo</strong> − Use together with React.memo for maximum benefit</li>
  <li><strong>Document Usage</strong> − Add comments explaining why memoization is needed</li>
  <li><strong>Test Performance</strong> − Verify that memoization actually improves performance</li>
</ul>
</div>

<h1 class="subHeading">Summary</h1>
<p class="contentText">useCallback is a powerful optimization tool in React that helps prevent unnecessary re-renders by memoizing callback functions. It's particularly useful when working with optimized child components that rely on reference equality to prevent unnecessary renders. However, it should be used judiciously and only when there's a clear performance benefit, as improper use can lead to increased memory usage and unnecessary complexity.</p>
`;
