docs.nestedComponents = `
<h1 class="heading">ReactJS − Nested Components</h1>
<div class="contentText">
<p class="contentText">A nested component in React is a component that is related to an another component. You can also consider it as a child component inside a parent component; but they are not linked together using the inheritance concept but with the composition concept. Therefore, all the components are nested together in order to create a bigger component rather than a smaller component inheriting from the parent component.</p>
<p class="contentText">The React component is a building block of a React application. A React component is made up of the multiple individual components. React allows multiple components to be combined to create larger components. Also, React components can be nested to any arbitrary level.</p>
<p class="contentText">Nested components will make your code more efficient and structured. However, if the components are not nested or assembled properly, there is chance your code can become more complex resulting in lower efficiency. Let us see how React components can be composed properly in this chapter.</p>
</div>
<h1 class="contentHeading">FormattedMoney component</h1>
<div class="contentText">
<p class="contentText">Let us create a component, FormattedMoney to format the amount to two decimal places before rendering.</p>
<p class="contentText"><strong>Step 1</strong> − Open our expense-manager application in your favourite editor.</p>
<p class="contentText">Create a file named FormattedMoney.js in the src/components folder and, Import React library.</p>
</div>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">'react'</span>;
  </code></pre>
</div>
<p class="contentText"><strong>Step 2</strong> − Then create a class, FormattedMoney by extending React.Component.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">class</span> FormattedMoney <span class="tag">extends</span> React.Component { 
}
  </code></pre>
</div>
<p class="contentText">Next, introduce construction function with argument props as shown below −</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">constructor</span>(<span class="tag">props</span>) { 
   <span class="tag">super</span>(<span class="tag">props</span>); 
}
  </code></pre>
</div>
<p class="contentText">Create a method format() to format the amount.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">format</span>(<span class="tag">amount</span>) { 
   <span class="tag">return</span> parseFloat(<span class="tag">amount</span>).<span class="tag">toFixed</span>(<span class="tag">2</span>); 
}
  </code></pre>
</div>
<p class="contentText">Create another method render() to emit the formatted amount.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">render</span>() { 
   <span class="tag">return</span> ( 
      <span class="tag">&lt;span&gt;</span>{<span class="tag">this</span>.<span class="tag">format</span>(<span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">value</span>)}
      <span class="tag">&lt;/span&gt;</span> 
   ); 
}
  </code></pre>
</div>
<div class="contentText">
<p class="contentText">Here, we have used the format method by passing value attribute through this.props.</p>
<p class="contentText"><strong>Step 3</strong> − Next, specify the component as default export class.</p>
</div>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">export</span> <span class="tag">default</span> FormattedMoney;
  </code></pre>
</div>
<p class="contentText">Now, we have successfully created our FormattedMoney React component.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">'react'</span>;

<span class="tag">class</span> FormattedMoney <span class="tag">extends</span> React.Component {
   <span class="tag">constructor</span>(<span class="tag">props</span>) {
      <span class="tag">super</span>(<span class="tag">props</span>);
   }
   <span class="tag">format</span>(<span class="tag">amount</span>) {
      <span class="tag">return</span> parseFloat(<span class="tag">amount</span>).<span class="tag">toFixed</span>(<span class="tag">2</span>);
   }
   <span class="tag">render</span>() {
      <span class="tag">return</span> (
         <span class="tag">&lt;span&gt;</span>{<span class="tag">this</span>.<span class="tag">format</span>(<span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">value</span>)}
         <span class="tag">&lt;/span&gt;</span>
      );
   }
}

<span class="tag">export</span> <span class="tag">default</span> FormattedMoney;
  </code></pre>
</div>
<h1 class="contentHeading">FormattedDate Component</h1>
<div class="contentText">
<p class="contentText">Let us create another component, FormattedDate to format and show the date and time of the expense.</p>
<p class="contentText"><strong>Step 1</strong> − Open our expense-manager application in your favorite editor.</p>
<p class="contentText">Create a file, FormattedDate.js in the src/components folder and import React library.</p>
</div>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">'react'</span>;
  </code></pre>
</div>
<p class="contentText"><strong>Step 2</strong> − Next, create a class by extending React.Component.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">class</span> FormattedDate <span class="tag">extends</span> React.Component { 
}
  </code></pre>
</div>
<p class="contentText">Then introduce construction function with argument props as shown below −</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">constructor</span>(<span class="tag">props</span>) { 
   <span class="tag">super</span>(<span class="tag">props</span>); 
}
  </code></pre>
</div>
<p class="contentText"><strong>Step 3</strong> − Next, create a method format() to format the date.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">format</span>(<span class="tag">val</span>) { 
   <span class="tag">const</span> months = [<span class="string">"JAN"</span>, <span class="string">"FEB"</span>, <span class="string">"MAR"</span>, <span class="string">"APR"</span>, <span class="string">"MAY"</span>, <span class="string">"JUN"</span>, <span class="string">"JUL"</span>, <span class="string">"AUG"</span>, <span class="string">"SEP"</span>, <span class="string">"OCT"</span>, <span class="string">"NOV"</span>, <span class="string">"DEC"</span>];
   <span class="tag">let</span> parsed_date = <span class="tag">new</span> Date(<span class="tag">Date</span>.<span class="tag">parse</span>(<span class="tag">val</span>));
   <span class="tag">let</span> formatted_date = parsed_date.<span class="tag">getDate</span>() + 
      <span class="string">"-"</span> + months[parsed_date.<span class="tag">getMonth</span>()] + 
      <span class="string">"-"</span> + parsed_date.<span class="tag">getFullYear</span>();
   <span class="tag">return</span> formatted_date;
}
  </code></pre>
</div>
<p class="contentText">Create another method render() to emit the formatted date.</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">render</span>() { <span class="tag">return</span> ( <span class="tag">&lt;span&gt;</span>{<span class="tag">this</span>.<span class="tag">format</span>(<span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">value</span>)} <span class="tag">&lt;/span&gt;</span> ); }
  </code></pre>
</div>
<div class="contentText">
<p class="contentText">Here, we have used the format method by passing value attribute through this.props.</p>
<p class="contentText"><strong>Step 4</strong> − Next, specify the component as default export class.</p>
</div>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">export</span> <span class="tag">default</span> FormattedDate;
  </code></pre>
</div>
<p class="contentText">Now, we have successfully created our FormattedDate React component. The complete code is as follows −</p>
<div class="code-container">
  <pre><code id="htmlCode">
<span class="tag">import</span> React <span class="tag">from</span> <span class="string">'react'</span>;
<span class="tag">class</span> FormattedDate <span class="tag">extends</span> React.<span class="tag">Component</span> {
   <span class="tag">constructor</span>(<span class="tag">props</span>) {
      <span class="tag">super</span>(<span class="tag">props</span>)
   }
   <span class="tag">format</span>(<span class="tag">val</span>) {
      <span class="tag">const</span> months = [<span class="string">"JAN"</span>, <span class="string">"FEB"</span>, <span class="string">"MAR"</span>, <span class="string">"APR"</span>, <span class="string">"MAY"</span>, <span class="string">"JUN"</span>, <span class="string">"JUL"</span>, <span class="string">"AUG"</span>, <span class="string">"SEP"</span>, <span class="string">"OCT"</span>, <span class="string">"NOV"</span>, <span class="string">"DEC"</span>];
      <span class="tag">let</span> parsed_date = <span class="tag">new</span> Date(<span class="tag">Date</span>.<span class="tag">parse</span>(<span class="tag">val</span>));
      <span class="tag">let</span> formatted_date = parsed_date.<span class="tag">getDate</span>() + 
         <span class="string">"-"</span> + months[parsed_date.<span class="tag">getMonth</span>()] + 
         <span class="string">"-"</span> + parsed_date.<span class="tag">getFullYear</span>();
      <span class="tag">return</span> formatted_date;
   }
   <span class="tag">render</span>() {
      <span class="tag">return</span> (
         <span class="tag">&lt;span&gt;</span>{<span class="tag">this</span>.<span class="tag">format</span>(<span class="tag">this</span>.<span class="tag">props</span>.<span class="tag">value</span>)}
         <span class="tag">&lt;/span&gt;</span> 
      );
   }
}
<span class="tag">export</span> <span class="tag">default</span> FormattedDate;
  </code></pre>
</div>

`;
