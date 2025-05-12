docs.forwardingRefs = `
<h1 class="heading">ReactJS − Forwarding Refs</h1>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <p class="contentText">Ref is an escape hatch to manipulate the DOM directly without the effect of state changes updating the component. Ref can be applied to DOM element but to apply the Ref to a React component and get the DOM element deep inside the component, Forwarding Ref is the choice. Forwarding Ref lets a component to receive a ref from the top level component and pass it further down into the next level component for the purpose of getting the DOM element.</p>
        <p class="contentText">Let us learn how to use Forwarding ref in this chapter.</p>
        </div>
        <h1 class="contentHeading">
  Signature of the forwardRef method
</h1>
<p class="contentText">The signature of the forwardRef method is as follows −</p>
<div class="code-container">
  <pre><code>
<span class="keyword">const</span> <span class="variable">newComponent</span> = React.<span class="method">forwardRef</span>(<span class="function">fn</span>);
  </code></pre>
</div>
<p class="contentText">Where the signature of the fn is as follows −</p>
<div class="code-container">
  <pre><code>
<span class="paren">(</span><span class="param">props, ref</span><span class="paren">)</span> =&gt; <span class="brace">{</span>
   <span class="comment">// renders a react component by attaching the ref and returns it</span>
<span class="brace">}</span>
  </code></pre>
</div>
<p class="contentText">A simple example of using forwardRef is as follows −</p>
<div class="code-container">
  <pre><code>
<span class="keyword">const</span> MyInput = React.forwardRef(<span class="paren">(</span>props, ref<span class="paren">)</span> =&gt; (
   <span class="tag">&lt;input</span> <span class="attr">type=</span><span class="string">"text"</span> <span class="attr">ref=</span><span class="brace">{ref}</span> <span class="attr">value=</span><span class="brace">{props.value}</span> <span class="tag">/&gt;</span>
));

<span class="keyword">const</span> myRef = React.createRef();
<span class="tag">&lt;MyInput</span> <span class="attr">ref=</span><span class="brace">{myRef}</span> <span class="attr">value=</span><span class="string">"Hi"</span> <span class="tag">/&gt;</span>
  </code></pre>
</div>
<p class="contentText">Here,</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>MyInput gets the ref from the top level and pass it to the underlying input element.</li>
  <li>myRef is is assigned to MyInput component.</li>
  <li>MyInput component passes myRef to underlying input element.</li>
  <li>Finally, myRef points to the input element.</li>
</ul>
</div>
    <h1 class="contentHeading">Applying forwardRef in a component</h1>
        <p class="contentText">Let's see a complete example of using forwardRef in a React application:</p>
        <div class="code-container">
          <pre><code>
<span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">"react"</span>;
<span class="keyword">const</span> SimpleForwardRef = React.forwardRef(<span class="paren">(</span>props, ref<span class="paren">)</span> =&gt; (
   <span class="tag">&lt;input</span> <span class="attr">type=</span><span class="string">"text"</span> <span class="attr">ref=</span><span class="brace">{ref}</span> <span class="attr">value=</span><span class="brace">{props.value}</span> <span class="tag">/&gt;</span>
));
<span class="keyword">export</span> <span class="keyword">default</span> SimpleForwardRef
          </code></pre>
        </div>

        <div class="code-container">
          <pre><code>
<span class="keyword">import</span> <span class="string">'./App.css'</span>
<span class="keyword">import</span> React, { useEffect } <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> SimpleForwardRef <span class="keyword">from</span> <span class="string">'./Components/SimpleForwardRef'</span>
<span class="keyword">function</span> App() {
   <span class="keyword">const</span> myRef = React.createRef();
   useEffect(<span class="paren">(</span><span class="paren">)</span> =&gt; {
      setTimeout(<span class="paren">(</span><span class="paren">)</span> =&gt; {
         myRef.current.value = <span class="string">"Hello"</span>
      }, 5000)
   })
   <span class="keyword">return</span> (
      <span class="tag">&lt;div</span> <span class="attr">className=</span><span class="string">"container"</span><span class="tag">&gt;</span>
         <span class="tag">&lt;div</span> <span class="attr">style=</span><span class="brace">{{ padding: "10px" }}</span><span class="tag">&gt;</span>
            <span class="tag">&lt;div&gt;</span>
               <span class="tag">&lt;SimpleForwardRef</span> <span class="attr">ref=</span><span class="brace">{myRef}</span> <span class="attr">value=</span><span class="string">"Hi"</span> <span class="tag">/&gt;</span>
            <span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;/div&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}
<span class="keyword">export</span> <span class="keyword">default</span> App;
          </code></pre>
        </div>

        <p class="contentText">In this example:</p>
        <div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
        <ul style="margin: 0;">
          <li>myRef is created using createRef method and passed it into SimpleForwardRef component.</li>
          <li>myRef represent the input element rendered by SimpleForwardRef component.</li>
          <li>useEffect will access the input element through myRef and try to change the value of input from hi to Hello.</li>
        </ul>
        </div>
`;      