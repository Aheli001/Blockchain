docs.context = `
<h1 class="heading">ReactJS − Context</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
<p class="contentText">React Context is a powerful feature that allows you to share data between components without having to pass props manually at every level. It's particularly useful for sharing global data like themes, user authentication, or language preferences.</p>
<p class="contentText">Context consists of four main parts:</p>
</div>

<h1 class="contentHeading">1. Creating a Context</h1>
<p class="contentText">The first step is to create a new context using React.createContext(). This creates a context object with a Provider and Consumer component.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="comment">// Create a new context with a default value</span>
<span class="keyword">const</span> ThemeContext = React.createContext(<span class="string">'light'</span>);
  </code></pre>
</div>

<h1 class="contentHeading">2. Context Provider</h1>
<p class="contentText">The Provider component allows consuming components to subscribe to context changes. It accepts a value prop to be passed to consuming components.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="keyword">function</span> <span class="function-name">App</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;ThemeContext.Provider</span> <span class="attr">value</span>=<span class="string">"dark"</span><span class="tag">&gt;</span>
         <span class="tag">&lt;Toolbar /&gt;</span>
      <span class="tag">&lt;/ThemeContext.Provider&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="contentHeading">3. Context Consumer</h1>
<p class="contentText">The Consumer component subscribes to context changes. It requires a function as a child that receives the current context value.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="keyword">function</span> <span class="function-name">ThemedButton</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;ThemeContext.Consumer&gt;</span>
         {theme => (
            <span class="tag">&lt;button</span> <span class="attr">className</span>=<span class="string">"themed-button"</span><span class="tag">&gt;</span>
               Themed Button
            <span class="tag">&lt;/button&gt;</span>
         )}
      <span class="tag">&lt;/ThemeContext.Consumer&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="contentHeading">4. useContext Hook</h1>
<p class="contentText">The useContext hook provides a simpler way to access context values in function components.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="keyword">import</span> &#123; useContext &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function-name">ThemedButton</span>() {
   <span class="keyword">const</span> theme = useContext(ThemeContext);
   
   <span class="keyword">return</span> (
      <span class="tag">&lt;button</span> <span class="attr">className</span>=<span class="string">"themed-button"</span><span class="tag">&gt;</span>
         Themed Button
      <span class="tag">&lt;/button&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="contentHeading">Complete Example</h1>
<p class="contentText">Here's a complete example showing how to use context in a React application:</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="keyword">import</span> React, &#123; useContext &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="comment">// Create context</span>
<span class="keyword">const</span> ThemeContext = React.createContext(<span class="string">'light'</span>);

<span class="comment">// Provider component</span>
<span class="keyword">function</span> <span class="function-name">App</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;ThemeContext.Provider</span> <span class="attr">value</span>=<span class="string">"dark"</span><span class="tag">&gt;</span>
         <span class="tag">&lt;Toolbar /&gt;</span>
      <span class="tag">&lt;/ThemeContext.Provider&gt;</span>
   );
}

<span class="comment">// Intermediate component</span>
<span class="keyword">function</span> <span class="function-name">Toolbar</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;ThemedButton /&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}

<span class="comment">// Consumer component using useContext</span>
<span class="keyword">function</span> <span class="function-name">ThemedButton</span>() {
   <span class="keyword">const</span> theme = useContext(ThemeContext);
   
   <span class="keyword">return</span> (
      <span class="tag">&lt;button</span> <span class="attr">className</span>=<span class="string">"themed-button"</span><span class="tag">&gt;</span>
         Themed Button
      <span class="tag">&lt;/button&gt;</span>
   );
}
  </code></pre>
</div>

<h1 class="contentHeading">Best Practices</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Default Values</strong> − Always provide meaningful default values when creating context</li>
  <li><strong>Performance</strong> − Be mindful of context updates as they trigger re-renders in all consumers</li>
  <li><strong>Separation of Concerns</strong> − Split contexts based on different concerns (theme, auth, etc.)</li>
  <li><strong>Type Safety</strong> − Use TypeScript or PropTypes to ensure context values are properly typed</li>
  <li><strong>Documentation</strong> − Document the expected shape of context values</li>
</ul>
</div>

<h1 class="subHeading">Summary</h1>
<p class="contentText">React Context provides an elegant solution for sharing data between components without prop drilling. By understanding and properly implementing the four parts of context (creation, provider, consumer, and useContext hook), you can create more maintainable and efficient React applications. Remember to follow best practices to ensure optimal performance and code quality.</p>
`;