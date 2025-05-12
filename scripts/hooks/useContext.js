docs.useContext = `
<h1 class="heading">ReactJS - useContext</h1>
<div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <p class="contentText">The useContext hook in React provides a way to pass data through the component tree without having to pass props manually at every level. It allows you to share values like themes, user authentication, or language preferences across multiple components without prop drilling.</p>
<p class="contentText">useContext is particularly useful when you need to access the same data in many components at different nesting levels, making your code cleaner and more maintainable.</p>
</div>

<h1 class="contentHeading">Basic Usage</h1>
<p class="contentText">Here's a simple example of using useContext to share a theme across components:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; createContext, useContext, useState &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">const</span> ThemeContext = createContext();

<span class="keyword">function</span> <span class="function-name">ThemeProvider</span>(&#123; children &#125;) &#123;
   <span class="keyword">const</span> [theme, setTheme] = useState(<span class="string">'light'</span>);

   <span class="keyword">const</span> toggleTheme = () =&gt; &#123;
      setTheme(prevTheme =&gt; prevTheme === <span class="string">'light'</span> ? <span class="string">'dark'</span> : <span class="string">'light'</span>);
   &#125;;

   <span class="keyword">return</span> (
      <span class="tag">&lt;ThemeContext.Provider</span> <span class="attr">value=</span>&#123;&#123; theme, toggleTheme &#125;&#125;<span class="tag">&gt;</span>
         &#123;children&#125;
      <span class="tag">&lt;/ThemeContext.Provider&gt;</span>
   );
&#125;

<span class="keyword">function</span> <span class="function-name">ThemedButton</span>() &#123;
   <span class="keyword">const</span> &#123; theme, toggleTheme &#125; = useContext(ThemeContext);

   <span class="keyword">return</span> (
      <span class="tag">&lt;button</span>
         <span class="attr">onClick=</span>&#123;toggleTheme&#125;
         <span class="attr">style=</span>&#123;&#123;
            backgroundColor: theme === <span class="string">'light'</span> ? <span class="string">'white'</span> : <span class="string">'black'</span>,
            color: theme === <span class="string">'light'</span> ? <span class="string">'black'</span> : <span class="string">'white'</span>
         &#125;&#125;
      <span class="tag">&gt;</span>
         Toggle Theme
      <span class="tag">&lt;/button&gt;</span>
   );
&#125;

<span class="keyword">function</span> <span class="function-name">App</span>() &#123;
   <span class="keyword">return</span> (
      <span class="tag">&lt;ThemeProvider&gt;</span>
         <span class="tag">&lt;ThemedButton /&gt;</span>
      <span class="tag">&lt;/ThemeProvider&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Common Use Cases</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Theme Management</strong> − Share theme settings across the application</li>
  <li><strong>User Authentication</strong> − Access user data and authentication state</li>
  <li><strong>Language Preferences</strong> − Manage internationalization settings</li>
  <li><strong>Global State</strong> − Share state between distant components</li>
  <li><strong>Configuration</strong> − Distribute app-wide configuration settings</li>
</ul>
</div>

<h1 class="contentHeading">Authentication Example</h1>
<p class="contentText">Example of using useContext for authentication state management:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; createContext, useContext, useState &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">const</span> AuthContext = createContext();

<span class="keyword">function</span> <span class="function-name">AuthProvider</span>(&#123; children &#125;) &#123;
   <span class="keyword">const</span> [user, setUser] = useState(<span class="keyword">null</span>);

   <span class="keyword">const</span> login = (userData) =&gt; &#123;
      setUser(userData);
   &#125;;

   <span class="keyword">const</span> logout = () =&gt; &#123;
      setUser(<span class="keyword">null</span>);
   &#125;;

   <span class="keyword">return</span> (
      <span class="tag">&lt;AuthContext.Provider</span> <span class="attr">value=</span>&#123;&#123; user, login, logout &#125;&#125;<span class="tag">&gt;</span>
         &#123;children&#125;
      <span class="tag">&lt;/AuthContext.Provider&gt;</span>
   );
&#125;

<span class="keyword">function</span> <span class="function-name">LoginButton</span>() &#123;
   <span class="keyword">const</span> &#123; login &#125; = useContext(AuthContext);

   <span class="keyword">return</span> (
      <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;() =&gt; login(&#123; name: <span class="string">'John Doe'</span> &#125;)&#125;<span class="tag">&gt;</span>
         Login
      <span class="tag">&lt;/button&gt;</span>
   );
&#125;

<span class="keyword">function</span> <span class="function-name">UserProfile</span>() &#123;
   <span class="keyword">const</span> &#123; user, logout &#125; = useContext(AuthContext);

   <span class="keyword">if</span> (!user) &#123;
      <span class="keyword">return</span> <span class="tag">&lt;p&gt;</span>Please log in<span class="tag">&lt;/p&gt;</span>;
   &#125;

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;p&gt;</span>Welcome, &#123;user.name&#125;!<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;logout&#125;<span class="tag">&gt;</span>Logout<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Important Considerations</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Performance</strong> − Context updates trigger re-renders in all consuming components</li>
  <li><strong>Default Value</strong> − Provide meaningful default values when creating context</li>
  <li><strong>Context Splitting</span> − Split contexts by concern to optimize performance</li>
  <li><strong>Provider Location</strong> − Place providers as close as possible to where they're needed</li>
  <li><strong>Type Safety</strong> − Use TypeScript or PropTypes to ensure correct context usage</li>
</ul>
</div>

<h1 class="contentHeading">Best Practices</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Minimize Context Usage</strong> − Only use context for truly global data</li>
  <li><strong>Combine with useMemo</strong> − Memoize context values to prevent unnecessary re-renders</li>
  <li><strong>Custom Hooks</strong> − Create custom hooks for context consumption</li>
  <li><strong>Error Boundaries</strong> − Wrap context providers in error boundaries</li>
  <li><strong>Testing</strong> − Test components with different context values</li>
</ul>
</div>

<h1 class="subHeading">Summary</h1>
<p class="contentText">useContext is a powerful tool for sharing data across the component tree without prop drilling. It's particularly useful for managing global state like themes, authentication, and user preferences. While it simplifies data sharing, it should be used judiciously to avoid unnecessary re-renders and maintain component independence. Proper context organization and following best practices can help create maintainable and performant applications.</p>
`;
