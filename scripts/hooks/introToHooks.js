docs.introToHooks = `
<h1 class="heading">ReactJS − Introduction to Hooks</h1>
<div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <p class="contentText">Until React 16.8, function components are simply stateless component. To add state to a component, we need to convert the function component into class based component. Also, function component does not have option to manipulate lifecycle events of a component. To enable state and lifecycle events in the function component, React introduced a new concept called Hooks.</p>
<p class="contentText">Hooks are plain JavaScript functions having access to state and lifecycle events of the component in which it is used / applied. In general, hooks starts with use keyword. React comes with a few built-in hooks and allows the creation of custom hooks as well.</p>
</div>
        <h1 class="contentHeading">Built-in hooks</h1>
        <p class="contentText">Let us know the list of hooks available in React and its basic usage.</p>
        <div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>useState</strong> − Used to manipulate state of the component.</li>
  <li><strong>useReducer</strong> − Advanced version of useState hooks with reducer concept.</li>
  <li><strong>useEffect</strong> − Used to hook into lifecycle of the component.</li>
  <li><strong>useLayoutEffect</strong> − Similar to useEffect, but gets triggered synchronously after all DOM mutation or just before the DOM is going to be painted on the screen.</li>
  <li><strong>useContext</strong> − Provides access to the context provider inside a component.</li>
  <li><strong>useMemo</strong> − Used to return a memoized version of a variable/function, which only changes based on a predefined set of dependencies. This reduces recomputation of expensive calculations and improves performance.</li>
  <li><strong>useCallback</strong> − Returns a memoized version of a callback function, which only changes based on a predefined set of dependencies.</li>
  <li><strong>useRef</strong> − Provides access to a raw DOM node based on a React ref object.</li>
  <li><strong>useImperativeHandle</strong> − Used to expose ref-based values in the child component to the parent component.</li>
  <li><strong>useDeferredValue</strong> − Used to defer a value, similar to debouncing or throttling, to delay updates.</li>
  <li><strong>useDebug</strong> − Used to display labels for custom hooks in React DevTools.</li>
  <li><strong>useTransition</strong> − Used to identify the pending state of a transition.</li>
  <li><strong>useId</strong> − Used to create a unique ID for an element in the application.</li>
</ul>
</div>
        <h1 class="contentHeading">Applying hooks</h1>
<div class="contentText>
<p class="contentText">Let us learn how to use a hook in a function component by creating an application.</p>
<p class="contentText">Create a React application using create-react-app and start the application using below command</p>
</div>
<div class="code-container">
  <pre><code>
create-react-app myapp
cd myapp
npm start
  </code></pre>
</div>
<p class="contentText">Next, let us create a new Function component HelloWorld (src/components/HelloWorld.js), which render an input element and renders a greeting message based on the data entered into the input element by the user.</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> &#123; useState &#125; <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">export default function</span> <span class="function-name">HelloWorld</span>() &#123;
   <span class="keyword">const</span> [name, setName] = useState(<span class="string">"World"</span>);
   <span class="keyword">return</span> (
      <span class="tag">&lt;div</span> <span class="attr">style=</span>&#123;&#123; textAlign: <span class="string">"center"</span>, padding: <span class="string">"5px"</span> &#125;&#125;<span class="tag">&gt;</span>
         <span class="tag">&lt;input</span> <span class="attr">id=</span><span class="string">"name"</span> <span class="attr">name=</span><span class="string">"name"</span>
            <span class="attr">value=</span>&#123;name&#125;
            <span class="attr">onChange=</span>&#123;(e) =&gt; setName(e.target.value)&#125; <span class="tag">/&gt;</span>
         <span class="tag">&lt;div&gt;</span>Hello &#123;name&#125;<span class="tag">&lt;/div&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
&#125;
  </code></pre>
</div>
<p class="contentText">Here,</p>
        <div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li><strong>useState</strong> − A hook that receives an initial value and returns an array with two items: the current state value and a function to update it. In this case, it receives <code>"World"</code> and returns <code>[name, setName]</code> using array destructuring.</li>
  <li><strong>onChange Event</strong> − Attached to the input element, it captures the user's input through <code>event.target.value</code> and updates the state using the <code>setName</code> function.</li>
  <li><strong>State Update Cycle</strong> − Whenever the user types in the input, the <code>onChange</code> event fires, triggering a state update via <code>setName</code>, which causes the component to re-render with the new state.</li>
</ul>
</div>
<p class="contentText">Next, let us apply our component in our application (App.js) as shown below −</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> <span class="string">'./App.css'</span>;
<span class="keyword">import</span> HelloWorld <span class="keyword">from</span> <span class="string">'./components/HelloWorld'</span>;

<span class="keyword">function</span> <span class="function-name">App</span>() &#123;
   <span class="keyword">return</span> (
      <span class="tag">&lt;HelloWorld /&gt;</span>
   );
&#125;

<span class="keyword">export default</span> App;
  </code></pre>
</div>

<p class="contentText">Finally, open the browser and check the results by changing the input value. The message gets updated whenever the input changes as shown below −</p>
<div style="display: flex; justify-content: center; align-items: center;">
<img src="images/applying_hooks.jpg" alt="output" style="object-fit:cover;" />
</div>
<h1 class="contentHeading">Advantages of Hooks</h1>
<p class="contentText">Function component have many advantages over class based component when used along with Hooks. They are as follows −</p>
        <div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <ul style="margin: 0;">
  <li><strong>Simplicity</strong> − Hooks are easy to understand and allow developers to quickly start coding using function components.</li>
  <li><strong>Lower Complexity</strong> − Hooks help keep application complexity minimal, even in large applications, unlike class-based components where managing state and lifecycle becomes harder as the project grows.</li>
  <li><strong>No <code>this</code> Keyword</strong> − Function components and hooks do not rely on <code>this</code>, which is often confusing for beginners, making the learning curve much smoother.</li>
  <li><strong>Reusable Logic</strong> − Hooks allow the reuse of stateful logic between components, improving maintainability and reducing redundancy.</li>
  <li><strong>Interoperability</strong> − Function components with hooks can be used alongside class-based components, making them easy to adopt in existing projects of any size.</li>
  <li><strong>Concise Syntax</strong> − Function components are generally more concise and readable than class-based components, reducing boilerplate code.</li>
</ul>

</div>
<h1 class="contentHeading">Disadvantages of Hooks</h1>
<p class="contentText">Hooks are alternative methodology to create components and it has its own disadvantages as well. They are as follows −</p>
        <div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
  <ul style="margin: 0;">
  <li><strong>Rules of Hooks</strong> − Hooks should only be called at the top level of a function component or custom hook. They should not be used inside conditions, loops, or nested functions to ensure consistent behavior across renders.</li>
  <li><strong>Not Always Suitable</strong> − Hooks are powerful, but they might not be the best fit in every situation. In some advanced use cases, reverting to class-based components may offer better control or compatibility.</li>
  <li><strong>Limited Flexibility</strong> − React abstracts the internals of hooks for optimization purposes, which may limit flexibility and make them less suitable for certain performance-critical or low-level operations.</li>
</ul>
</div>
<h1 class="subHeading">Summary</h1>
<p class="contentText">Hooks are relatively new way of creating components. Large collection of project are still using class based component. Converting the component in those projects from class based to function based is not practically possible and we have to live with it. Instead, we can convert the application in the phased manner.</p>
`;
