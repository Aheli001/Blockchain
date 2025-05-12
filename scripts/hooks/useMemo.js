docs.useMemo = `
<h1 class="heading">ReactJS - useMemo</h1>
<div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <p class="contentText">The useMemo hook in React is a performance optimization tool that memoizes the result of expensive calculations. It helps prevent unnecessary recalculations by caching the result and only recomputing when its dependencies change.</p>
<p class="contentText">useMemo takes two arguments: a function that performs the calculation and an array of dependencies. The hook will only recompute the memoized value when one of the dependencies has changed.</p>
</div>

<h1 class="contentHeading">Basic Usage</h1>
<p class="contentText">Here's a simple example of using useMemo to optimize an expensive calculation:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useState, useMemo &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function-name">ExpensiveCalculation</span>() &#123;
   <span class="keyword">const</span> [count, setCount] = useState(0);
   <span class="keyword">const</span> [input, setInput] = useState('');

   <span class="keyword">const</span> expensiveResult = useMemo(() =&gt; &#123;
      console.log('Calculating expensive result...');
      <span class="keyword">let</span> result = 0;
      <span class="keyword">for</span> (<span class="keyword">let</span> i = 0; i &lt; 1000000; i++) &#123;
         result += count;
      &#125;
      <span class="keyword">return</span> result;
   &#125;, [count]);

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;p&gt;</span>Count: &#123;count&#125;<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;p&gt;</span>Expensive Result: &#123;expensiveResult&#125;<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;input</span>
            <span class="attr">value=</span>&#123;input&#125;
            <span class="attr">onChange=</span>&#123;(e) =&gt; setInput(e.target.value)&#125;
            <span class="attr">placeholder=</span><span class="string">"Type something..."</span>
         <span class="tag">/&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;() =&gt; setCount(count + 1)&#125;<span class="tag">&gt;</span>Increment<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Common Use Cases</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Expensive Calculations</strong> − Cache results of complex computations</li>
  <li><strong>Object Creation</strong> − Prevent unnecessary object recreation</li>
  <li><strong>Array Operations</strong> − Memoize filtered or transformed arrays</li>
  <li><strong>Component Props</strong> − Stabilize object references passed to child components</li>
  <li><strong>Derived State</strong> − Cache derived values from props or state</li>
</ul>
</div>

<h1 class="contentHeading">Object Memoization</h1>
<p class="contentText">Example of using useMemo to prevent unnecessary object recreation:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useState, useMemo &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function-name">UserProfile</span>() &#123;
   <span class="keyword">const</span> [name, setName] = useState('');
   <span class="keyword">const</span> [age, setAge] = useState(0);

   <span class="keyword">const</span> user = useMemo(() =&gt; (&#123;
      name,
      age,
      isAdult: age &gt;= 18
   &#125;), [name, age]);

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;input</span>
            <span class="attr">value=</span>&#123;name&#125;
            <span class="attr">onChange=</span>&#123;(e) =&gt; setName(e.target.value)&#125;
            <span class="attr">placeholder=</span><span class="string">"Name"</span>
         <span class="tag">/&gt;</span>
         <span class="tag">&lt;input</span>
            <span class="attr">type=</span><span class="string">"number"</span>
            <span class="attr">value=</span>&#123;age&#125;
            <span class="attr">onChange=</span>&#123;(e) =&gt; setAge(Number(e.target.value))&#125;
            <span class="attr">placeholder=</span><span class="string">"Age"</span>
         <span class="tag">/&gt;</span>
         <span class="tag">&lt;ChildComponent</span> <span class="attr">user=</span>&#123;user&#125; <span class="tag">/&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Important Considerations</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Dependency Array</strong> − Always include all dependencies used in the calculation</li>
  <li><strong>Performance Impact</strong> − Only use for expensive calculations or object creation</li>
  <li><strong>Memory Usage</strong> − Memoization uses memory, so use judiciously</li>
  <li><strong>Initial Render</strong> − The function is executed during the first render</li>
  <li><strong>React.memo</strong> − Different from React.memo, which memoizes components</li>
</ul>
</div>

<h1 class="contentHeading">Best Practices</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Profile First</strong> − Only use useMemo after identifying performance bottlenecks</li>
  <li><strong>Keep Dependencies Minimal</strong> − Include only necessary dependencies</li>
  <li><strong>Document Complex Logic</strong> − Add comments explaining why memoization is needed</li>
  <li><strong>Consider Alternatives</strong> − Sometimes simpler solutions like state management are better</li>
  <li><strong>Test Performance</strong> − Verify that memoization actually improves performance</li>
</ul>
</div>

<h1 class="subHeading">Summary</h1>
<p class="contentText">useMemo is a powerful optimization tool in React that helps prevent unnecessary recalculations of expensive operations. It's particularly useful for caching complex calculations, preventing unnecessary object recreation, and optimizing performance in components with heavy computations. However, it should be used judiciously and only when there's a clear performance benefit, as improper use can lead to increased memory usage and unnecessary complexity.</p>
`;
