docs.optimizingPerformance = `
<h1 class="heading">ReactJS − Optimizing Performance</h1>
        <p class="contentText">React internally handles the performance of the application and optimize it on every opportunities. As a developer, we can do certain things to get maximum performance of our application. Let us see some of the techniques to get maximum performance out of react library in this chapter.</p>


<h1 class="contentHeading">Techniques of Performance Optimization</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Some of the techniques of performance optimization are as follows −</p>
    <p class="contentText"><strong>Use production build</strong> − React has two mode, development and production. Development mode is for the developers, Development mode enables lot of useful stuff for developer to get better inside of the application and to debug the application. This will slow down the application. To get maximum performance, enable the production mode and deploy the application.</p>
    <p class="contentText"><strong>CDN Application</strong> Application using cdn to link the react library should use production build of the react library as shown below −</p>
</div>
<div class="code-container">
  <pre><code>
<span class="tag">&lt;script</span> <span class="attr">src=</span><span class="string">"https://unpkg.com/react@18/umd/react.production.min.js"</span><span class="tag">&gt;&lt;/script&gt;</span>
<span class="tag">&lt;script</span> <span class="attr">src=</span><span class="string">"https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"</span><span class="tag">&gt;&lt;/script&gt;</span>
  </code></pre>
</div>
<p class="contentText"><strong>Create react app</strong> − Application created using create-react-app CLI can use below command to create production version of the application.</p>
<div class="code-container">
  <pre><code>
npm run build
  </code></pre>
</div>
<p class="contentText"><strong>Brunch</strong> − Application using brunch should install terser-brunch plugin and then invoke production build to get efficient and performance code.</p>
<div class="code-container">
  <pre><code>
npm install --save-dev terser-brunch
brunch build -p
  </code></pre>
</div>
<p class="contentText"><strong>Rollup</strong> − Application using rollup should install commonjs, replace and terser plugins and configure it to get best production version.</p>
<div class="code-container">
  <pre><code>
npm install --save-dev rollup-plugin-commonjs rollup-plugin-replace rollup-plugin-terser
  </code></pre>
</div>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Use React devtools − React provides development tools for all browsers as extension. Once the extension is installed, the developer tools section of the browser will show a dedicated section for react. One of the tool provided by react extension is Profiler (React DevTool Profiler). The application can be profiled and optimized before deploying the application to the production.</p>
    <p class="contentText"><strong>Windowing technique</strong> − If the data to be shown in the front end is huge, then the performance of the application will get affected instantly. One way is to show only a small subset of the data through pagination and other similar technique. If those techniques are not feasible, React recommends windowing technique, which will render only a small subset of data at a time automatically. We will learn by applying window technique later in this chapter.</p>
    <p class="contentText"><strong>Avoid Reconciliation (shouldComponentUpdate)</strong> − Reconciliation is a a powerful technique to increase the performance of the react application. Still, reconciliation takes some time to run and apply it in our application. Skipping rendering (and subsequently reconciliation) will improve the performance. React provides an API, shouldComponentUpdate to give hint to the react core whether to skip or continue the rendering. Below code will skip the rendering of the application</p>
</div>
    <div class="code-container">
  <pre><code>
shouldComponentUpdate(nextProps, nextState) {
   return false;
}
  </code></pre>
</div>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Components can analyze its current state and props with its updated one and decide whether the rendering part can be skipped.</p>
    <p class="contentText">Pure component − Instead of writing shouldComponentUpdate, write a pure version of component by extending React.PureComponent. Pure component will usually emit same output if the given input is same. Pure component will do the shallow comparison and skip the reconciliation. But, there is one issue. If the changes are no shallow, then react skip the updates and rendering. To fix it, it is enough that the changes are done through visible mutation as shown below −</p>
</div>
<div class="code-container">
  <pre><code class="language-js">
// non-mutation (wrong way to code)
<span class="keyword">const</span> words = <span class="keyword">this</span>.state.words;
words.push(<span class="string">'john'</span>);
<span class="keyword">this</span>.setState({ words: words });

// mutated version (right way to code)
<span class="keyword">this</span>.setState(state => ({
   words: state.words.concat([<span class="string">'marklar'</span>])
}));
  </code></pre>
</div>
<p class="contentText">Here,</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    In the first version of the code, the object is not mutated. So the comparison with old object succeeds and skip the reconciliation.
  </li>
  <li>
    In the second version of the code, the object is mutated and will get caught during comparison.
  </li>
</ul>
</div>

<h1 class="contentHeading">Applying Windowing Technique</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Windowing (or virtualization) is a technique used to efficiently render large lists of data by only rendering the items that are currently visible in the viewport. This significantly improves performance when dealing with thousands of items. React provides libraries like <code>react-window</code> and <code>react-virtualized</code> to implement this technique.</p>
    <p class="contentText">Here's a basic example using react-window:</p>
</div>
<div class="code-container">
  <pre><code class="language-js">
import { FixedSizeList } from 'react-window';

const Row = ({ index, style }) => (
  &lt;div style={style}&gt;
    Row {index}
  &lt;/div&gt;
);

const ListComponent = () => (
  &lt;FixedSizeList
    height={400}
    width={300}
    itemCount={1000}
    itemSize={35}
  &gt;
    {Row}
  &lt;/FixedSizeList&gt;
);
  </code></pre>
</div>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">In this example:</p>
    <ul>
        <li>Only the visible rows are rendered in the DOM</li>
        <li>The list maintains a fixed height and width</li>
        <li>Each row has a fixed height of 35px</li>
        <li>Scrolling is handled efficiently without rendering all 1000 items</li>
    </ul>
</div>

<h1 class="contentHeading">Summary</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Optimizing React performance involves several key strategies:</p>
    <ul>
        <li>Using production builds for deployment</li>
        <li>Leveraging React DevTools for profiling</li>
        <li>Implementing windowing for large lists</li>
        <li>Using PureComponent and proper state management</li>
        <li>Optimizing reconciliation through shouldComponentUpdate</li>
    </ul>
    <p class="contentText">By applying these techniques appropriately, you can significantly improve the performance of your React applications, especially when dealing with large datasets or complex UIs.</p>
</div>
`;  