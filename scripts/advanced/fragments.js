docs.fragments = `
<h1 class="heading">ReactJS − Fragments</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Fragments in React provide a way to group multiple elements without adding extra nodes to the DOM. They are particularly useful when you need to return multiple elements from a component's render method.</p>
    <p class="contentText">Without fragments, you would need to wrap multiple elements in a parent div, which can lead to unnecessary DOM nesting and potential styling issues. Fragments solve this problem by allowing you to group elements without creating an additional DOM node.</p>
</div>

<h1 class="contentHeading">Basic Usage</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Here's a simple example of using fragments:</p>
    <div class="code-container">
  <pre><code>
<span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function-name">MyComponent</span>() {
    <span class="keyword">return</span> (
        <span class="tag">&lt;React.Fragment&gt;</span>
            <span class="tag">&lt;h1&gt;</span>Title<span class="tag">&lt;/h1&gt;</span>
            <span class="tag">&lt;p&gt;</span>Paragraph 1<span class="tag">&lt;/p&gt;</span>
            <span class="tag">&lt;p&gt;</span>Paragraph 2<span class="tag">&lt;/p&gt;</span>
        <span class="tag">&lt;/React.Fragment&gt;</span>
    );
}
  </code></pre>
</div>

    <p class="contentText">This renders the elements without any wrapper div in the DOM.</p>
</div>

<h1 class="contentHeading">Short Syntax</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">React also provides a shorter syntax using empty tags:</p>
    <div class="code-container">
  <pre><code>
<span class="keyword">function</span> <span class="function-name">MyComponent</span>() {
    <span class="keyword">return</span> (
        <span class="tag">&lt;&gt;</span>
            <span class="tag">&lt;h1&gt;</span>Title<span class="tag">&lt;/h1&gt;</span>
            <span class="tag">&lt;p&gt;</span>Paragraph 1<span class="tag">&lt;/p&gt;</span>
            <span class="tag">&lt;p&gt;</span>Paragraph 2<span class="tag">&lt;/p&gt;</span>
        <span class="tag">&lt;/&gt;</span>
    );
}
  </code></pre>
</div>

    <p class="contentText">This is equivalent to using React.Fragment but with a more concise syntax.</p>
</div>

<h1 class="contentHeading">Keyed Fragments</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">When you need to map over an array of elements, you can use keyed fragments:</p>
    <div class="code-container">
  <pre><code>
<span class="keyword">function</span> <span class="function-name">ListItems</span>() {
    <span class="keyword">const</span> items = [<span class="string">'Item 1'</span>, <span class="string">'Item 2'</span>, <span class="string">'Item 3'</span>];
    
    <span class="keyword">return</span> (
        <span class="tag">&lt;React.Fragment&gt;</span>
            {items.map(item =&gt; (
                <span class="tag">&lt;React.Fragment</span> <span class="attr">key=</span><span class="string">{item}</span><span class="tag">&gt;</span>
                    <span class="tag">&lt;li&gt;</span>{item}<span class="tag">&lt;/li&gt;</span>
                    <span class="tag">&lt;li&gt;</span>Description for {item}<span class="tag">&lt;/li&gt;</span>
                <span class="tag">&lt;/React.Fragment&gt;</span>
            ))}
        <span class="tag">&lt;/React.Fragment&gt;</span>
    );
}
  </code></pre>
</div>

    <p class="contentText">Note that the key prop is only supported with the explicit React.Fragment syntax, not with the short syntax.</p>
</div>

<h1 class="contentHeading">Benefits of Using Fragments</h1>
<div class="contentText">
    <ul>
        <li>Reduced DOM nesting, leading to better performance</li>
        <li>Cleaner HTML output</li>
        <li>No unnecessary wrapper elements that might interfere with CSS styling</li>
        <li>Better semantic structure of your components</li>
    </ul>
</div>

<h1 class="contentHeading">Common Use Cases</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Fragments are particularly useful in these scenarios:</p>
    <ul>
        <li>When returning multiple elements from a component</li>
        <li>When mapping over arrays to create multiple elements</li>
        <li>When you need to group elements without affecting the DOM structure</li>
        <li>When working with CSS Grid or Flexbox layouts where extra wrapper elements would break the layout</li>
    </ul>
</div>

<h1 class="contentHeading">Example: Table Structure</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Here's a practical example using fragments in a table structure:</p>
    <div class="code-container">
  <pre><code>
<span class="keyword">function</span> <span class="function-name">Table</span>() {
    <span class="keyword">return</span> (
        <span class="tag">&lt;table&gt;</span>
            <span class="tag">&lt;tbody&gt;</span>
                <span class="tag">&lt;tr&gt;</span>
                    <span class="function-name">Columns</span> />
                <span class="tag">&lt;/tr&gt;</span>
            <span class="tag">&lt;/tbody&gt;</span>
        <span class="tag">&lt;/table&gt;</span>
    );
}

<span class="keyword">function</span> <span class="function-name">Columns</span>() {
    <span class="keyword">return</span> (
        <span class="tag">&lt;React.Fragment&gt;</span>
            <span class="tag">&lt;td&gt;</span>Column 1<span class="tag">&lt;/td&gt;</span>
            <span class="tag">&lt;td&gt;</span>Column 2<span class="tag">&lt;/td&gt;</span>
            <span class="tag">&lt;td&gt;</span>Column 3<span class="tag">&lt;/td&gt;</span>
        <span class="tag">&lt;/React.Fragment&gt;</span>
    );
}
  </code></pre>
</div>

    <p class="contentText">Without fragments, this would require an extra div wrapper which would break the table structure.</p>
</div>
`;