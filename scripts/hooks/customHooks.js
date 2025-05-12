docs.customHooks = `
<h1 class="heading">ReactJS - Custom Hooks</h1>
<div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <p class="contentText">Custom Hooks are a powerful feature in React that allows you to extract component logic into reusable functions. They enable you to share stateful logic between components without changing your component hierarchy.</p>
<p class="contentText">A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks. Custom Hooks are a way to reuse stateful logic, not state itself. Each call to a custom Hook creates a completely isolated state.</p>
</div>

<h1 class="contentHeading">Creating Custom Hooks</h1>
<p class="contentText">Let's create a custom hook called useCounter that manages a counter state and provides increment and decrement functions:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useState &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function-name">useCounter</span>(initialValue = 0) &#123;
   <span class="keyword">const</span> [count, setCount] = useState(initialValue);

   <span class="keyword">const</span> increment = () =&gt; setCount(count + 1);
   <span class="keyword">const</span> decrement = () =&gt; setCount(count - 1);
   <span class="keyword">const</span> reset = () =&gt; setCount(initialValue);

   <span class="keyword">return</span> &#123; count, increment, decrement, reset &#125;;
&#125;

<span class="keyword">export default</span> useCounter;
  </code></pre>
</div>

<p class="contentText">Now, let's use this custom hook in a component:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> useCounter <span class="keyword">from</span> <span class="string">'./useCounter'</span>;

<span class="keyword">function</span> <span class="function-name">Counter</span>() &#123;
   <span class="keyword">const</span> &#123; count, increment, decrement, reset &#125; = useCounter(0);

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;p&gt;</span>Count: &#123;count&#125;<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;increment&#125;<span class="tag">&gt;</span>Increment<span class="tag">&lt;/button&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;decrement&#125;<span class="tag">&gt;</span>Decrement<span class="tag">&lt;/button&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;reset&#125;<span class="tag">&gt;</span>Reset<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Common Custom Hook Patterns</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>useForm</strong> − Manages form state and validation</li>
  <li><strong>useFetch</strong> − Handles data fetching with loading and error states</li>
  <li><strong>useLocalStorage</strong> − Synchronizes state with localStorage</li>
  <li><strong>useWindowSize</strong> − Tracks window dimensions</li>
  <li><strong>useDebounce</strong> − Debounces value changes</li>
  <li><strong>usePrevious</strong> − Tracks previous value of a prop or state</li>
</ul>
</div>

<h1 class="contentHeading">Rules for Custom Hooks</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Naming Convention</strong> − Always start with "use" prefix</li>
  <li><strong>Top-Level Calls</strong> − Only call Hooks at the top level of your custom Hook</li>
  <li><strong>Conditional Calls</strong> − Don't call Hooks inside conditions, loops, or nested functions</li>
  <li><strong>Return Values</strong> − Can return any value (state, functions, objects, etc.)</li>
  <li><strong>Isolation</strong> − Each call to a custom Hook creates an isolated state</li>
</ul>
</div>

<h1 class="contentHeading">Advantages of Custom Hooks</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Code Reusability</strong> − Share logic between components without duplication</li>
  <li><strong>Separation of Concerns</strong> − Keep component logic organized and maintainable</li>
  <li><strong>Testing</strong> − Easier to test logic in isolation</li>
  <li><strong>Composition</strong> − Combine multiple hooks to create complex behaviors</li>
  <li><strong>Community Sharing</strong> − Share hooks across projects or with the community</li>
</ul>
</div>

<h1 class="contentHeading">Best Practices</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Single Responsibility</strong> − Each custom hook should do one thing well</li>
  <li><strong>Clear Naming</strong> − Use descriptive names that indicate the hook's purpose</li>
  <li><strong>Documentation</strong> − Include JSDoc comments explaining the hook's purpose and parameters</li>
  <li><strong>Type Safety</strong> − Use TypeScript for better type checking and documentation</li>
  <li><strong>Performance</strong> − Memoize expensive calculations and callbacks when necessary</li>
</ul>
</div>

<h1 class="subHeading">Summary</h1>
<p class="contentText">Custom Hooks are a powerful pattern in React that allows you to extract and reuse stateful logic between components. By following the rules of hooks and best practices, you can create maintainable, reusable, and testable code. Custom hooks help keep your components clean and focused on rendering, while complex logic is moved into separate, reusable functions.</p>
`;
