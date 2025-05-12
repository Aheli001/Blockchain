docs.reconcillation = `
<h1 class="heading">ReactJS − Reconciliation</h1>

<h1 class="contentHeading">What is Reconciliation?</h1>
<p>Reconciliation is the process through which React updates the DOM to match the most recent React elements. When a component's state or props change, React needs to determine what has changed in the virtual DOM and then update the actual DOM efficiently.</p>

<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>React creates a virtual representation of the UI in memory</li>
  <li>When state or props change, a new virtual DOM tree is created</li>
  <li>React compares the new tree with the previous one</li>
  <li>Only the necessary changes are applied to the real DOM</li>
</ul>
</div>

<h1 class="subHeading">The Diffing Algorithm</h1>
<p>React's diffing algorithm is the core of the reconciliation process. It determines how to efficiently update the DOM by comparing the new virtual DOM with the previous one.</p>

<h1 class="contentHeading">Key Principles of Diffing</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Elements of Different Types:</strong> When the root elements have different types, React will tear down the old tree and build the new one from scratch</li>
  <li><strong>DOM Elements of the Same Type:</strong> React keeps the same underlying DOM node and only updates the changed attributes</li>
  <li><strong>Component Elements of the Same Type:</strong> React updates the props and calls the component's lifecycle methods</li>
  <li><strong>Recursion on Children:</strong> React recurses on the children by default</li>
</ul>
</div>

<h1 class="contentHeading">Example of Diffing in Action</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// Initial render</span>
<span class="keyword">function</span> <span class="function-name">App</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;Counter</span> <span class="attr">count=</span><span class="number">0</span> <span class="tag">/&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}

<span class="comment">// After state update</span>
<span class="keyword">function</span> <span class="function-name">App</span>() {
   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;Counter</span> <span class="attr">count=</span><span class="number">1</span> <span class="tag">/&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}
  </code></pre>
</div>

<p>In this example, React will:</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Compare the root <code>div</code> elements (same type)</li>
  <li>Compare the <code>Counter</code> components (same type)</li>
  <li>Update only the changed <code>count</code> prop</li>
  <li>Re-render the <code>Counter</code> component with the new prop</li>
</ul>
</div>


<h1 class="subHeading">Keys and Reconciliation</h1>
<p>Keys help React identify which items have changed, been added, or been removed. They should be given to the elements inside an array to give the elements a stable identity.</p>

<div class="code-container">
  <pre><code>
<span class="comment">// Without keys (not recommended)</span>
<span class="tag">&lt;ul&gt;</span>
   {items.map(item => (
      <span class="tag">&lt;li&gt;</span>{item.text}<span class="tag">&lt;/li&gt;</span>
   ))}
<span class="tag">&lt;/ul&gt;</span>

<span class="comment">// With keys (recommended)</span>
<span class="tag">&lt;ul&gt;</span>
   {items.map(item => (
      <span class="tag">&lt;li</span> <span class="attr">key=</span>{item.id}<span class="tag">&gt;</span>{item.text}<span class="tag">&lt;/li&gt;</span>
   ))}
<span class="tag">&lt;/ul&gt;</span>
  </code></pre>
</div>

<h2>Why Keys are Important</h2>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Keys help React identify which items have changed</li>
  <li>Keys should be stable, predictable, and unique</li>
  <li>Using array indices as keys can lead to issues when items are reordered</li>
  <li>Keys should be unique among siblings</li>
</ul>
</div>

<h1 class="subHeading">Performance Considerations</h1>
<p>Understanding reconciliation helps you write more efficient React applications. Here are some tips:</p>

<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Avoid Unnecessary Re-renders:</strong> Use <code>React.memo</code>, <code>useMemo</code>, and <code>useCallback</code> to prevent unnecessary re-renders</li>
  <li><strong>Virtualize Long Lists:</strong> Use libraries like <code>react-window</code> or <code>react-virtualized</code> for long lists</li>
  <li><strong>Use Keys Properly:</strong> Always provide stable, unique keys for list items</li>
  <li><strong>Keep Component Trees Shallow:</strong> Deep component trees can slow down reconciliation</li>
</ul>
</div>

<h1 class="subHeading">Common Reconciliation Patterns</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// Conditional rendering</span>
<span class="keyword">function</span> <span class="function-name">UserProfile</span>({ user }) {
   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         {user ? (
            <span class="tag">&lt;LoggedInUser</span> <span class="attr">user=</span>{user} <span class="tag">/&gt;</span>
         ) : (
            <span class="tag">&lt;LoginButton</span> <span class="tag">/&gt;</span>
         )}
      <span class="tag">&lt;/div&gt;</span>
   );
}

<span class="comment">// List rendering with keys</span>
<span class="keyword">function</span> <span class="function-name">TodoList</span>({ todos }) {
   <span class="keyword">return</span> (
      <span class="tag">&lt;ul&gt;</span>
         {todos.map(todo => (
            <span class="tag">&lt;TodoItem</span>
               <span class="attr">key=</span>{todo.id}
               <span class="attr">todo=</span>{todo}
            <span class="tag">/&gt;</span>
         ))}
      <span class="tag">&lt;/ul&gt;</span>
   );
}
  </code></pre>
</div>

<p>Understanding React's reconciliation process helps you write more efficient applications and avoid common performance pitfalls. By following these patterns and best practices, you can ensure your React applications perform optimally.</p>
`;  