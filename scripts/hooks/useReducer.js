docs.useReducer = `
<h1 class="heading">ReactJS - useReducer</h1>
<div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <p class="contentText">The useReducer hook in React is a powerful state management tool that is particularly useful when dealing with complex state logic. It follows the reducer pattern, similar to Redux, allowing you to manage state transitions in a predictable way.</p>
<p class="contentText">useReducer is often preferred over useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.</p>
</div>

<h1 class="contentHeading">Basic Usage</h1>
<p class="contentText">Here's a simple example of using useReducer to manage a counter with increment, decrement, and reset actions:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useReducer &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">const</span> initialState = &#123; count: 0 &#125;;

<span class="keyword">function</span> <span class="function-name">reducer</span>(state, action) &#123;
   <span class="keyword">switch</span> (action.type) &#123;
      <span class="keyword">case</span> <span class="string">'increment'</span>:
         <span class="keyword">return</span> &#123; count: state.count + 1 &#125;;
      <span class="keyword">case</span> <span class="string">'decrement'</span>:
         <span class="keyword">return</span> &#123; count: state.count - 1 &#125;;
      <span class="keyword">case</span> <span class="string">'reset'</span>:
         <span class="keyword">return</span> initialState;
      <span class="keyword">default</span>:
         <span class="keyword">throw</span> <span class="keyword">new</span> Error();
   &#125;
&#125;

<span class="keyword">function</span> <span class="function-name">Counter</span>() &#123;
   <span class="keyword">const</span> [state, dispatch] = useReducer(reducer, initialState);

   <span class="keyword">return</span> (
      <span class="tag">&lt;div&gt;</span>
         <span class="tag">&lt;p&gt;</span>Count: &#123;state.count&#125;<span class="tag">&lt;/p&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;() =&gt; dispatch(&#123; type: <span class="string">'increment'</span> &#125;)&#125;<span class="tag">&gt;</span>+<span class="tag">&lt;/button&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;() =&gt; dispatch(&#123; type: <span class="string">'decrement'</span> &#125;)&#125;<span class="tag">&gt;</span>-<span class="tag">&lt;/button&gt;</span>
         <span class="tag">&lt;button</span> <span class="attr">onClick=</span>&#123;() =&gt; dispatch(&#123; type: <span class="string">'reset'</span> &#125;)&#125;<span class="tag">&gt;</span>Reset<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Common Use Cases</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Complex State Logic</strong> − When state updates involve multiple sub-values or complex calculations</li>
  <li><strong>State Dependencies</strong> − When the next state depends on the previous state</li>
  <li><strong>Multiple Actions</strong> − When you need to handle multiple types of state updates</li>
  <li><strong>State Sharing</strong> − When you need to share state logic between components</li>
  <li><strong>Testing</strong> − When you need to make state transitions more predictable and testable</li>
</ul>
</div>

<h1 class="contentHeading">Form Handling Example</h1>
<p class="contentText">Example of using useReducer to manage form state:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useReducer &#125; <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">const</span> initialState = &#123;
   firstName: <span class="string">''</span>,
   lastName: <span class="string">''</span>,
   email: <span class="string">''</span>,
   errors: &#123;&#125;
&#125;;

<span class="keyword">function</span> <span class="function-name">formReducer</span>(state, action) &#123;
   <span class="keyword">switch</span> (action.type) &#123;
      <span class="keyword">case</span> <span class="string">'UPDATE_FIELD'</span>:
         <span class="keyword">return</span> &#123;
            ...state,
            [action.field]: action.value,
            errors: &#123;
               ...state.errors,
               [action.field]: <span class="string">''</span>
            &#125;
         &#125;;
      <span class="keyword">case</span> <span class="string">'SET_ERRORS'</span>:
         <span class="keyword">return</span> &#123;
            ...state,
            errors: action.errors
         &#125;;
      <span class="keyword">case</span> <span class="string">'RESET'</span>:
         <span class="keyword">return</span> initialState;
      <span class="keyword">default</span>:
         <span class="keyword">return</span> state;
   &#125;
&#125;

<span class="keyword">function</span> <span class="function-name">Form</span>() &#123;
   <span class="keyword">const</span> [state, dispatch] = useReducer(formReducer, initialState);

   <span class="keyword">const</span> handleSubmit = (e) =&gt; &#123;
      e.preventDefault();
      <span class="keyword">const</span> errors = validateForm(state);
      <span class="keyword">if</span> (Object.keys(errors).length === 0) &#123;
         <span class="comment">// Submit form</span>
      &#125; <span class="keyword">else</span> &#123;
         dispatch(&#123; type: <span class="string">'SET_ERRORS'</span>, errors &#125;);
      &#125;
   &#125;;

   <span class="keyword">return</span> (
      <span class="tag">&lt;form</span> <span class="attr">onSubmit=</span>&#123;handleSubmit&#125;<span class="tag">&gt;</span>
         <span class="tag">&lt;input</span>
            <span class="attr">value=</span>&#123;state.firstName&#125;
            <span class="attr">onChange=</span>&#123;(e) =&gt; dispatch(&#123;
               type: <span class="string">'UPDATE_FIELD'</span>,
               field: <span class="string">'firstName'</span>,
               value: e.target.value
            &#125;)&#125;
         <span class="tag">/&gt;</span>
         &#123;state.errors.firstName &amp;&amp; <span class="tag">&lt;span&gt;</span>&#123;state.errors.firstName&#125;<span class="tag">&lt;/span&gt;</span>&#125;
         <span class="comment">// ... other form fields</span>
      <span class="tag">&lt;/form&gt;</span>
   );
&#125;
  </code></pre>
</div>

<h1 class="contentHeading">Important Considerations</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>State Immutability</strong> − Always return a new state object, never mutate the existing state</li>
  <li><strong>Action Types</strong> − Use constants for action types to prevent typos and make refactoring easier</li>
  <li><strong>Initial State</strong> − Define initial state separately for better organization and reusability</li>
  <li><strong>Reducer Purity</strong> − Keep reducers pure functions with no side effects</li>
  <li><strong>Performance</strong> − Consider using useCallback for dispatch functions passed to child components</li>
</ul>
</div>

<h1 class="contentHeading">Best Practices</h1>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>Start Simple</strong> − Begin with useState and refactor to useReducer when complexity increases</li>
  <li><strong>Action Creators</strong> − Use action creator functions to encapsulate action creation logic</li>
  <li><strong>Type Safety</strong> − Consider using TypeScript for better type safety with actions and state</li>
  <li><strong>Testing</strong> − Write unit tests for reducers to ensure state transitions work as expected</li>
  <li><strong>Documentation</strong> − Document action types and state shape for better maintainability</li>
</ul>
</div>

<h1 class="subHeading">Summary</h1>
<p class="contentText">useReducer is a powerful state management tool in React that provides a predictable way to handle complex state logic. It's particularly useful when dealing with state that involves multiple sub-values or when the next state depends on the previous one. While it requires more boilerplate than useState, it offers better organization and maintainability for complex state management scenarios.</p>
`;
