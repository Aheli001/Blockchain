docs.stylingComponents = `
<h1 class="heading">ReactJS − Styling</h1>

        <p class="contentText">In general, React allows component to be styled using CSS class through className attribute. Since, the React JSX supports JavaScript expression, a lot of common CSS methodology can be used. Some of the top options are as follows −</p>
        <div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    <strong>CSS stylesheet</strong> − Normal CSS styles along with className
  </li>
  <li>
    <strong>Inline styling</strong> − CSS styles as JavaScript objects along with camelCase properties.
  </li>
  <li>
    <strong>CSS Modules</strong> − Locally scoped CSS styles.
  </li>
  <li>
    <strong>Sass stylesheet</strong> − Supports Sass based CSS styles by converting the styles to normal css at build time.
  </li>
  <li>
    <strong>Post processing stylesheet</strong> − Supports Post processing styles by converting the styles to normal css at build time.
  </li>
</ul>
</div>
<p class="contentText">Let use learn how to apply the three important methodology to style our component in this chapter.</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    CSS Stylesheet
  </li>
  <li>
    Inline Styling
  </li>
  <li>
  CSS Modules
  </li>
</ul>
</div>
<h1 class="contentHeading">CSS Stylesheet</h1>
<div class="contentText">
<p class="contentText">CSS stylesheet is usual, common and time-tested methodology. Simply create a CSS stylesheet for a component and enter all your styles for that particular component. Then, in the component, use className to refer the styles.</p>
<p class="contentText">Let us style our ExpenseEntryItem component.</p>
<p class="contentText">Open expense-manager application in your favorite editor.</p>
<p class="contentText">Next, open ExpenseEntryItem.css file and add few styles.</p>
</div>
<div class="code-container">
  <pre><code>
div.itemStyle &#123; 
   color: brown; 
   font-size: 14px; 
&#125;
  </code></pre>
</div>
<p class="contentText">Next, open ExpenseEntryItem.js and add className to the main container.</p>
<div class="code-container">
  <pre><code>
import <span class="keyword">React</span> from <span class="keyword">'react'</span>;
import './ExpenseEntryItem.css';

<span class="keyword">class</span> ExpenseEntryItem <span class="keyword">extends</span> React.Component {
   <span class="keyword">render</span>() {
      <span class="keyword">return</span> (
            &lt;div className="itemStyle"&gt;
            &lt;div&gt;&lt;b&gt;Item:&lt;/b&gt; &lt;em&gt;Mango Juice&lt;/em&gt;&lt;/div&gt;
            &lt;div&gt;&lt;b&gt;Amount:&lt;/b&gt; &lt;em&gt;30.00&lt;/em&gt;&lt;/div&gt;
            &lt;div&gt;&lt;b&gt;Spend Date:&lt;/b&gt; &lt;em&gt;2020-10-10&lt;/em&gt;&lt;/div&gt;
            &lt;div&gt;&lt;b&gt;Category:&lt;/b&gt; &lt;em&gt;Food&lt;/em&gt;&lt;/div&gt;
         &lt;/div&gt;
      );
   }
}
<span class="keyword">export</span> <span class="keyword">default</span> ExpenseEntryItem;
  </code></pre>
</div>
<p class="contentText">Next, serve the application using npm command.</p>
<div class="code-container">
  <pre><code>
npm start
  </code></pre>
</div>
<p class="contentText">Next, open the browser and enter http://localhost:3000 in the address bar and press enter.</p>
<div style="display: flex; justify-content: center; align-items: center;">
<img src="images/css_stylesheet.jpg" alt="output" style="object-fit:cover;" />
</div>
<p class="contentText">CSS stylesheet is easy to understand and use. But, when the project size increases, CSS styles will also increase and ultimately create lot of conflict in the class name. Moreover, loading the CSS file directly is only supported in Webpack bundler and it may not supported in other tools.</p>

<h1 class="contentHeading">Inline Styling</h1>
<p class="contentText">Inline styling in React allows you to apply styles directly to components using JavaScript objects. This approach has several advantages:</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Styles are scoped to the component</li>
  <li>No class name conflicts</li>
  <li>Dynamic styles based on props or state</li>
  <li>No need for separate CSS files</li>
</ul>
</div>

<p class="contentText">Let's modify our ExpenseEntryItem component to use inline styling:</p>
<div class="code-container">
  <pre><code>
import <span class="keyword">React</span> from <span class="keyword">'react'</span>;

<span class="keyword">class</span> ExpenseEntryItem <span class="keyword">extends</span> React.Component {
   <span class="keyword">render</span>() {
      const itemStyle = {
         color: 'brown',
         fontSize: '14px',
         padding: '10px',
         border: '1px solid #ddd',
         borderRadius: '4px',
         margin: '10px 0'
      };

      const labelStyle = {
         fontWeight: 'bold',
         marginRight: '5px'
      };

      <span class="keyword">return</span> (
         &lt;div style={itemStyle}&gt;
            &lt;div&gt;&lt;span style={labelStyle}&gt;Item:&lt;/span&gt; &lt;em&gt;Mango Juice&lt;/em&gt;&lt;/div&gt;
            &lt;div&gt;&lt;span style={labelStyle}&gt;Amount:&lt;/span&gt; &lt;em&gt;30.00&lt;/em&gt;&lt;/div&gt;
            &lt;div&gt;&lt;span style={labelStyle}&gt;Spend Date:&lt;/span&gt; &lt;em&gt;2020-10-10&lt;/em&gt;&lt;/div&gt;
            &lt;div&gt;&lt;span style={labelStyle}&gt;Category:&lt;/span&gt; &lt;em&gt;Food&lt;/em&gt;&lt;/div&gt;
         &lt;/div&gt;
      );
   }
}
<span class="keyword">export</span> <span class="keyword">default</span> ExpenseEntryItem;
  </code></pre>
</div>

<p class="contentText">Key points about inline styling in React:</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Style properties are written in camelCase (e.g., fontSize instead of font-size)</li>
  <li>Values are strings or numbers</li>
  <li>Styles are passed as JavaScript objects</li>
  <li>You can use template literals for dynamic values</li>
  <li>Styles can be computed based on props or state</li>
</ul>
</div>

<p class="contentText">While inline styling is powerful, it's important to note that it doesn't support all CSS features like pseudo-classes, media queries, or animations. For complex styling needs, you might want to consider other approaches like CSS Modules or styled-components.</p>

<h1 class="contentHeading">CSS Modules</h1>
<p class="contentText">CSS Modules provide a way to scope CSS locally to components, preventing style conflicts. Each CSS class is automatically given a unique name, making it perfect for larger applications.</p>

<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Automatic unique class names</li>
  <li>Full CSS feature support</li>
  <li>No naming conflicts</li>
  <li>Easy to maintain</li>
  <li>Works with existing CSS</li>
</ul>
</div>

<p class="contentText">Let's create a CSS Module for our ExpenseEntryItem component:</p>

<p class="contentText">First, create a new file named ExpenseEntryItem.module.css:</p>
<div class="code-container">
  <pre><code>
.item {
   color: brown;
   font-size: 14px;
   padding: 10px;
   border: 1px solid #ddd;
   border-radius: 4px;
   margin: 10px 0;
}

.label {
   font-weight: bold;
   margin-right: 5px;
}

.item:hover {
   background-color: #f5f5f5;
   transition: background-color 0.3s ease;
}
  </code></pre>
</div>

<p class="contentText">Now, let's update our component to use the CSS Module:</p>
<div class="code-container">
  <pre><code>
import <span class="keyword">React</span> from <span class="keyword">'react'</span>;
import styles from './ExpenseEntryItem.module.css';

<span class="keyword">class</span> ExpenseEntryItem <span class="keyword">extends</span> React.Component {
   <span class="keyword">render</span>() {
      <span class="keyword">return</span> (
         &lt;div className={styles.item}&gt;
            &lt;div&gt;&lt;span className={styles.label}&gt;Item:&lt;/span&gt; &lt;em&gt;Mango Juice&lt;/em&gt;&lt;/div&gt;
            &lt;div&gt;&lt;span className={styles.label}&gt;Amount:&lt;/span&gt; &lt;em&gt;30.00&lt;/em&gt;&lt;/div&gt;
            &lt;div&gt;&lt;span className={styles.label}&gt;Spend Date:&lt;/span&gt; &lt;em&gt;2020-10-10&lt;/em&gt;&lt;/div&gt;
            &lt;div&gt;&lt;span className={styles.label}&gt;Category:&lt;/span&gt; &lt;em&gt;Food&lt;/em&gt;&lt;/div&gt;
         &lt;/div&gt;
      );
   }
}
<span class="keyword">export</span> <span class="keyword">default</span> ExpenseEntryItem;
  </code></pre>
</div>

<p class="contentText">Key features of CSS Modules:</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Class names are automatically scoped to the component</li>
  <li>Supports all CSS features including pseudo-classes and media queries</li>
  <li>Can be used with preprocessors like Sass or Less</li>
  <li>Works with CSS-in-JS libraries</li>
  <li>Easy to debug with source maps</li>
</ul>
</div>

<p class="contentText">To use CSS Modules in your React project, you'll need to configure your build tool (like webpack) to handle .module.css files. Most modern React setups (like Create React App) support CSS Modules out of the box.</p>

`;
