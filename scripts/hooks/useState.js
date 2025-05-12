docs.useState = `
<h1 class="heading">ReactJS - useState</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <p class="contentText">useState is a fundamental React hook that enables state management in function components. It allows components to maintain and update their state, triggering re-renders when the state changes.</p>
</div>

<h1 class="contentHeading">Signature</h1>
<div class="code-container">
  <pre><code>
<span class="keyword">const</span> [<span class="variable">state</span>, <span class="function-name">setState</span>] = <span class="function-name">useState</span>(<span class="value">initialValue</span>)
  </code></pre>
</div>

<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
  <ul style="margin: 0;">
    <li><strong>initialValue</strong> − The starting value for the state</li>
    <li><strong>state</strong> − Current state value</li>
    <li><strong>setState</strong> − Function to update the state</li>
  </ul>
</div>

<h1 class="contentHeading">Basic Usage</h1>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useState &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function-name">Counter</span>() &#123;
   <span class="keyword">const</span> [count, setCount] = useState(0);

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;p&gt;</span>Count: &#123;count&#125;<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;() => setCount(count + 1)&#125;<span class="tag">&gt;</span>
            Increment
         <span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Login Form Example</h1>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useState &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">export default function</span> <span class="function-name">LoginForm</span>() &#123;
   <span class="keyword">const</span> [username, setUsername] = useState(<span class="string">''</span>)
   <span class="keyword">const</span> [password, setPassword] = useState(<span class="string">''</span>)
   
   <span class="keyword">let</span> isEmpty = (val) => &#123;
      <span class="keyword">if</span>(val == <span class="keyword">null</span> || val == <span class="string">''</span>) &#123;
         <span class="keyword">return</span> <span class="keyword">true</span>;
      &#125; <span class="keyword">else</span> &#123;
         <span class="keyword">return</span> <span class="keyword">false</span>;
      &#125;
   &#125;
   
   <span class="keyword">let</span> validate = (e) => &#123;
      e.preventDefault()
      <span class="keyword">if</span>(!isEmpty(username) && !isEmpty(password)) &#123;
         alert(JSON.stringify(&#123;
            username: username,
            password: password
         &#125;))
      &#125; <span class="keyword">else</span> &#123;
         alert(<span class="string">"Please enter username / password"</span>)
      &#125;
   &#125;

   <span class="keyword">return</span> (
      <span class="tag">&lt;form</span> <span class="attr">onSubmit=</span>&#123;validate&#125;<span class="tag">&gt;</span>
         <span class="tag">&lt;div&gt;</span>
            <span class="tag">&lt;label&gt;</span>Username:<span class="tag">&lt;/label&gt;</span>
            <span class="tag">&lt;input</span>
               <span class="attr">type=</span><span class="string">"text"</span>
               <span class="attr">value=</span>&#123;username&#125;
               <span class="attr">onChange=</span>&#123;(e) => setUsername(e.target.value)&#125;
            <span class="tag">/&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span>
            <span class="tag">&lt;label&gt;</span>Password:<span class="tag">&lt;/label&gt;</span>
            <span class="tag">&lt;input</span>
               <span class="attr">type=</span><span class="string">"password"</span>
               <span class="attr">value=</span>&#123;password&#125;
               <span class="attr">onChange=</span>&#123;(e) => setPassword(e.target.value)&#125;
            <span class="tag">/&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">type=</span><span class="string">"submit"</span><span class="tag">&gt;</span>Login<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/form&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Key Features</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
  <ul style="margin: 0;">
    <li><strong>Lazy Initialization</strong> − Accepts a function for expensive initial state calculations</li>
    <li><strong>State Updates</strong> − Triggers re-renders only when state actually changes</li>
    <li><strong>Batched Updates</strong> − Multiple state updates are batched for performance</li>
    <li><strong>Functional Updates</strong> − Supports functional updates for state based on previous state</li>
    <li><strong>Type Safety</strong> − Works with TypeScript for type-safe state management</li>
  </ul>
</div>

<h1 class="contentHeading">Best Practices</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
  <ul style="margin: 0;">
    <li><strong>Minimize State</strong> − Only use state for values that change over time</li>
    <li><strong>State Splitting</strong> − Split complex state into multiple useState calls</li>
    <li><strong>Functional Updates</strong> − Use functional updates when new state depends on previous state</li>
    <li><strong>Initialization</strong> − Use lazy initialization for expensive calculations</li>
    <li><strong>Type Safety</strong> − Define proper types for state values</li>
  </ul>
</div>

<h1 class="subHeading">Summary</h1>
<p class="contentText">useState is a powerful hook that enables state management in function components. It provides a simple and efficient way to handle component state, with features like lazy initialization, value comparison, and batched updates. The login form example demonstrates practical usage of useState for form handling and validation. Following best practices ensures optimal performance and maintainability.</p>
`;
