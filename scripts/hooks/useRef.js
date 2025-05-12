docs.useRef = `
<h1 class="heading">ReactJS - useRef</h1>
<div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <p class="contentText">The useRef hook in React is a powerful tool that allows you to create a mutable reference that persists across renders. Unlike state variables, changes to refs don't trigger re-renders, making them ideal for storing values that need to persist between renders without causing updates.</p>
<p class="contentText">useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
</div>

<h1 class="contentHeading">Basic Usage</h1>
<p class="contentText">Here's a simple example of using useRef to access a DOM element:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useRef &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function-name">TextInput</span>() &#123;
   <span class="keyword">const</span> inputRef = useRef(null);

   <span class="keyword">const</span> focusInput = () =&gt; &#123;
      inputRef.current.focus();
   &#125;;

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;input</span> <span class="attr">ref=</span>&#123;inputRef&#125; <span class="attr">type=</span><span class="string">"text"</span> <span class="tag">/&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;focusInput&#125;<span class="tag">&gt;</span>Focus Input<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Common Use Cases</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>DOM Access</strong> − Access and manipulate DOM elements directly</li>
  <li><strong>Previous Value Tracking</strong> − Store previous values of props or state</li>
  <li><strong>Interval/Timer Management</strong> − Store interval IDs for cleanup</li>
  <li><strong>Mutable Values</strong> − Store values that don't need to trigger re-renders</li>
  <li><strong>Component Instance Values</strong> − Store values that persist between renders</li>
</ul>
</div>

<h1 class="contentHeading">Tracking Previous Values</h1>
<p class="contentText">Here's an example of using useRef to track previous values:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useState, useEffect, useRef &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function-name">Counter</span>() &#123;
   <span class="keyword">const</span> [count, setCount] = useState(0);
   <span class="keyword">const</span> prevCountRef = useRef();

   useEffect(() =&gt; &#123;
      prevCountRef.current = count;
   &#125;);

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;p&gt;</span>Current: &#123;count&#125;<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;p&gt;</span>Previous: &#123;prevCountRef.current&#125;<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;() =&gt; setCount(count + 1)&#125;<span class="tag">&gt;</span>Increment<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Managing Intervals</h1>
<p class="contentText">Example of using useRef to manage intervals:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useState, useEffect, useRef &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function-name">Timer</span>() &#123;
   <span class="keyword">const</span> [seconds, setSeconds] = useState(0);
   <span class="keyword">const</span> intervalRef = useRef();

   useEffect(() =&gt; &#123;
      intervalRef.current = setInterval(() =&gt; &#123;
         setSeconds(prev =&gt; prev + 1);
      &#125;, 1000);

      <span class="keyword">return</span> () =&gt; clearInterval(intervalRef.current);
   &#125;, []);

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;p&gt;</span>Seconds: &#123;seconds&#125;<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;() =&gt; clearInterval(intervalRef.current)&#125;<span class="tag">&gt;</span>Stop Timer<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Important Considerations</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>No Re-renders</strong> − Changes to refs don't trigger component re-renders</li>
  <li><strong>Mutable</strong> − The .current property can be modified</li>
  <strong>Initialization</strong> − Refs are initialized only once when the component mounts</li>
  <li><strong>Cleanup</strong> − Remember to clean up refs in useEffect cleanup functions</li>
  <li><strong>DOM Access</strong> − Refs are null during the first render when used with DOM elements</li>
</ul>
</div>

<h1 class="contentHeading">Best Practices</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Use Sparingly</strong> − Only use refs when necessary, prefer state for UI updates</li>
  <li><strong>Cleanup</strong> − Always clean up refs in useEffect cleanup functions</li>
  <li><strong>Type Safety</strong> − Use TypeScript for better type checking with refs</li>
  <li><strong>Documentation</strong> − Document why a ref is being used</li>
  <li><strong>Performance</strong> − Use refs for values that don't need to trigger re-renders</li>
</ul>
</div>

<h1 class="subHeading">Summary</h1>
<p class="contentText">useRef is a versatile hook in React that provides a way to persist values between renders without causing re-renders. It's particularly useful for accessing DOM elements, tracking previous values, managing intervals, and storing mutable values. While powerful, it should be used judiciously and with proper cleanup to avoid memory leaks and maintain clean code.</p>
`;
