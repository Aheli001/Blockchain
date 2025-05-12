docs.integratingOtherLib = `
<h1 class="heading">ReactJS − Integrating with Other Libraries</h1>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <p class="contentText">Even though react provides all necessary feature to create a complete web application, integration with other libraries are a must due to legacy system coded in another library, migration from another framework, etc., React can co-exists with other libraries and provides necessary infrastructure to use along with other systems.</p>
        <p class="contentText">Let us see how to use react component with other libraries like jQuery, backbone, etc., in this chapter.</p>
        </div>


<h1 class="contentHeading">CreateRoot based integration</h1>
 <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <p class="contentText">React use createRoot() method from ReactDOMClient module to attach itself to the main HTML document. createRoot() does not disturbs the HTML document except attached element. This behaviour can be exploited by the developer to intermix multiple libraries in the same document.</p>
        <p class="contentText">Let us see how to integrate jQuery and React component in a single document by attaching the react application in a separate element.</p>
        <p class="contentText">First of all, create a new react application and start it using below command.</p>
        </div>
        <div class="code-container">
  <pre><code>
create-react-app myapp
cd myapp
npm start
  </code></pre>
</div>
<p class="contentText">Next, create a react component, Hello under component folder (src/components/Hello.js)</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">"react"</span>;

<span class="keyword">class</span> <span class="function-name">Hello</span> <span class="keyword">extends</span> React.Component {
   <span class="function-name">constructor</span>(props) {
      <span class="keyword">super</span>(props)
   }
   <span class="function-name">render</span>() {
      <span class="keyword">return</span> (
         <span class="tag">&lt;div&gt;</span>Hello, {this.props.name}<span class="tag">&lt;/div&gt;</span>
      );
   }
}

<span class="keyword">export default</span> Hello;
  </code></pre>
</div>
<p class="contentText">Next, open index.html (public/index.html) and add a new container (jquery-root) as shown below −</p>
<div class="code-container">
  <pre><code>
<span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html</span> <span class="attr">lang=</span><span class="string">"en"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">charset=</span><span class="string">"utf-8"</span> <span class="tag">/&gt;</span>
    <span class="tag">&lt;link</span> <span class="attr">rel=</span><span class="string">"icon"</span> <span class="attr">href=</span><span class="string">"%PUBLIC_URL%/favicon.ico"</span> <span class="tag">/&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">name=</span><span class="string">"viewport"</span> <span class="attr">content=</span><span class="string">"width=device-width, initial-scale=1"</span> <span class="tag">/&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">name=</span><span class="string">"theme-color"</span> <span class="attr">content=</span><span class="string">"#000000"</span> <span class="tag">/&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">name=</span><span class="string">"description"</span> <span class="attr">content=</span><span class="string">"Web site created using create-react-app"</span> <span class="tag">/&gt;</span>
    <span class="tag">&lt;link</span> <span class="attr">rel=</span><span class="string">"apple-touch-icon"</span> <span class="attr">href=</span><span class="string">"%PUBLIC_URL%/logo192.png"</span> <span class="tag">/&gt;</span>
    <span class="tag">&lt;link</span> <span class="attr">rel=</span><span class="string">"manifest"</span> <span class="attr">href=</span><span class="string">"%PUBLIC_URL%/manifest.json"</span> <span class="tag">/&gt;</span>
    <span class="tag">&lt;script</span> <span class="attr">src=</span><span class="string">"https://code.jquery.com/jquery-3.6.1.slim.min.js"</span><span class="tag">&gt;&lt;/script&gt;</span>
    <span class="tag">&lt;title&gt;</span>React App<span class="tag">&lt;/title&gt;</span>
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    <span class="tag">&lt;noscript&gt;</span>You need to enable JavaScript to run this app.<span class="tag">&lt;/noscript&gt;</span>
    <span class="tag">&lt;div</span> <span class="attr">style=</span><span class="string">"padding: 10px;"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;div</span> <span class="attr">id=</span><span class="string">"root"</span><span class="tag">&gt;&lt;/div&gt;</span>
      <span class="tag">&lt;div</span> <span class="attr">id=</span><span class="string">"jquery-root"</span><span class="tag">&gt;&lt;/div&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;script&gt;</span>
      $(document).ready(function() {
        $("#jquery-root").text("Hello, from jQuery")
      });
    <span class="tag">&lt;/script&gt;</span>
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span>
  </code></pre>
</div>
<p class="contentText">Here,</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    jQuery library in linked through CDN
  </li>
  <li>
    It is initialized as done traditionally through $(document).ready method
  </li>
  <li>
    And is used to append the message using jQuery selector (#jquery-root) and text method
  </li>
</ul>
</div>
<p class="contentText">Next, open index.js (src/index.js) and attach our hello component into the root container as shown below −</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> React <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> ReactDOM <span class="keyword">from</span> <span class="string">'react-dom/client'</span>;
<span class="keyword">import</span> <span class="string">'./index.css'</span>;
<span class="keyword">import</span> Hello <span class="keyword">from</span> <span class="string">'./Components/Hello'</span>;
<span class="keyword">import</span> reportWebVitals <span class="keyword">from</span> <span class="string">'./reportWebVitals'</span>;

<span class="keyword">const</span> root = ReactDOM.createRoot(document.getElementById(<span class="string">'root'</span>));
root.render(
   <span class="tag">&lt;React.StrictMode&gt;</span>
      <span class="tag">&lt;Hello</span> <span class="attr">name=</span><span class="string">"from React"</span> <span class="tag">/&gt;</span>
   <span class="tag">&lt;/React.StrictMode&gt;</span>
);

reportWebVitals();
  </code></pre>
</div>
<p class="contentText">Here,</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>
    React application is attached using createRoot() method.
  </li>
  <li>
    Rendered a Hello component into the root element in the HTML document.
  </li>
</ul>
</div>

<h1 class="contentHeading">Ref based integration</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">React provides a powerful feature called refs that allows direct access to DOM elements. This can be particularly useful when integrating with third-party libraries that need direct DOM manipulation. Let's see how to use refs to integrate with a jQuery plugin.</p>
    <p class="contentText">Here's an example of using refs to integrate with a jQuery plugin:</p>
</div>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> React, { useRef, useEffect } <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> $ <span class="keyword">from</span> <span class="string">'jquery'</span>;

<span class="keyword">function</span> <span class="function-name">JQueryPluginComponent</span>() {
   <span class="keyword">const</span> elementRef = useRef(null);

   useEffect(() => {
      <span class="comment">// Initialize jQuery plugin when component mounts</span>
      $(elementRef.current).someJQueryPlugin({
         option1: <span class="string">'value1'</span>,
         option2: <span class="string">'value2'</span>
      });

      <span class="comment">// Cleanup when component unmounts</span>
      <span class="keyword">return</span> () => {
         $(elementRef.current).someJQueryPlugin(<span class="string">'destroy'</span>);
      };
   }, []);

   <span class="keyword">return</span> (
      <span class="tag">&lt;div</span> <span class="attr">ref=</span>{elementRef}<span class="tag">&gt;</span>
         <span class="comment">// Content for jQuery plugin</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}

<span class="keyword">export default</span> JQueryPluginComponent;
  </code></pre>
</div>

<h1 class="contentHeading">jQuery Slick Plugin Integration</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">Let's look at a practical example of integrating the popular jQuery Slick carousel plugin with React. First, install the required dependencies:</p>
</div>
<div class="code-container">
  <pre><code>
npm install jquery slick-carousel
  </code></pre>
</div>
<p class="contentText">Now, create a SlickCarousel component:</p>
<div class="code-container">
  <pre><code>
<span class="keyword">import</span> React, { useRef, useEffect } <span class="keyword">from</span> <span class="string">'react'</span>;
<span class="keyword">import</span> $ <span class="keyword">from</span> <span class="string">'jquery'</span>;
<span class="keyword">import</span> <span class="string">'slick-carousel/slick/slick.css'</span>;
<span class="keyword">import</span> <span class="string">'slick-carousel/slick/slick-theme.css'</span>;

<span class="keyword">function</span> <span class="function-name">SlickCarousel</span>() {
   <span class="keyword">const</span> sliderRef = useRef(null);

   useEffect(() => {
      $(sliderRef.current).slick({
         dots: <span class="keyword">true</span>,
         infinite: <span class="keyword">true</span>,
         speed: <span class="number">500</span>,
         slidesToShow: <span class="number">1</span>,
         slidesToScroll: <span class="number">1</span>
      });

      <span class="keyword">return</span> () => {
         $(sliderRef.current).slick(<span class="string">'unslick'</span>);
      };
   }, []);

   <span class="keyword">return</span> (
      <span class="tag">&lt;div</span> <span class="attr">ref=</span>{sliderRef}<span class="tag">&gt;</span>
         <span class="tag">&lt;div&gt;</span>Slide 1<span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span>Slide 2<span class="tag">&lt;/div&gt;</span>
         <span class="tag">&lt;div&gt;</span>Slide 3<span class="tag">&lt;/div&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
   );
}

<span class="keyword">export default</span> SlickCarousel;
  </code></pre>
</div>

<h1 class="contentHeading">Summary</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
    <p class="contentText">React provides multiple ways to integrate with other libraries and frameworks:</p>
    <ul style="margin: 0;">
        <li>createRoot() method allows React to coexist with other libraries in the same document</li>
        <li>Refs provide a way to directly access DOM elements for third-party library integration</li>
        <li>useEffect hook helps manage the lifecycle of third-party library initialization and cleanup</li>
        <li>Proper cleanup is essential to prevent memory leaks and conflicts</li>
    </ul>
    <p class="contentText">When integrating with other libraries, it's important to:</p>
    <ul style="margin: 0;">
        <li>Handle initialization and cleanup properly</li>
        <li>Manage state updates carefully to avoid conflicts</li>
        <li>Consider performance implications of mixing libraries</li>
        <li>Follow best practices for component lifecycle management</li>
    </ul>
</div>

`;  