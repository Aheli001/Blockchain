docs.accessibility = `
<h1 class="heading">ReactJS − Accessibility</h1>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <p class="contentText">Accessibility (a11y) is designing the web application in such a way that the application will be accessible by everyone and support assistive technology to read the content of the application for the end user.</p>
        <p class="contentText">React supports all the aspects of accessibility in a web application. Let us see how react supports accessibility in this chapter.</p>
        </div>


<h1 class="contentHeading">
  ARIA (Accessible Rich Internet Applications) Attributes
</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <p class="contentText">ARIA attributes are special HTML attributes that help make web content more accessible to people with disabilities. They provide additional information about elements to assistive technologies like screen readers.</p>
  <p class="contentText">Common ARIA attributes include:</p>
  <ul>
    <li><strong>aria-label</strong>: Provides a text label for an element</li>
    <li><strong>aria-labelledby</strong>: References another element that labels the current element</li>
    <li><strong>aria-describedby</strong>: References elements that describe the current element</li>
    <li><strong>aria-hidden</strong>: Hides elements from assistive technologies</li>
    <li><strong>aria-live</strong>: Indicates that content will be updated dynamically</li>
    <li><strong>aria-expanded</strong>: Indicates whether a collapsible element is expanded</li>
    <li><strong>aria-pressed</strong>: Indicates the pressed state of toggle buttons</li>
  </ul>
</div>

<h1 class="contentHeading">
  Semantic HTML
</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <p class="contentText">Semantic HTML elements provide meaning to the content and structure of a webpage. Using semantic elements improves accessibility and makes the code more maintainable.</p>
  <p class="contentText">Key semantic elements include:</p>
  <ul>
    <li><strong>header</strong>: Represents introductory content</li>
    <li><strong>nav</strong>: Contains navigation links</li>
    <li><strong>main</strong>: Contains the main content of the document</li>
    <li><strong>section</strong>: Represents a standalone section</li>
    <li><strong>article</strong>: Represents self-contained content</li>
    <li><strong>aside</strong>: Contains content related to the main content</li>
    <li><strong>footer</strong>: Contains footer information</li>
    <li><strong>figure</strong> and <strong>figcaption</strong>: For images with captions</li>
  </ul>
</div>
<div class="code-container">
  <pre><code>
<span class="keyword">function</span> <span class="function-name">ShowItems</span>({ data }) {
   <span class="keyword">return</span> (
      <span class="tag">&lt;Fragment&gt;</span>
         <span class="tag">&lt;dt&gt;</span>{data.title}<span class="tag">&lt;/dt&gt;</span>
         <span class="tag">&lt;dd&gt;</span>{data.description}<span class="tag">&lt;/dd&gt;</span>
      <span class="tag">&lt;/Fragment&gt;</span>
   );
}
  </code></pre>
</div>


<h1 class="contentHeading">
  Keyboard Support
</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <p class="contentText">Proper keyboard support is essential for accessibility. Users should be able to navigate and interact with all content using only a keyboard.</p>
  
  <h2 class="subHeading">Focus Management</h2>
  <ul>
    <li>Ensure all interactive elements are focusable</li>
    <li>Maintain logical tab order</li>
    <li>Use tabindex appropriately</li>
    <li>Handle focus trapping in modals</li>
    <li>Return focus to triggering element when closing modals</li>
  </ul>

  <h2 class="subHeading">Skip Links</h2>
  <p class="contentText">Skip links allow keyboard users to bypass repetitive content and jump directly to the main content.</p>
  <ul>
    <li>Place skip links at the beginning of the page</li>
    <li>Make them visible when focused</li>
    <li>Link to the main content area</li>
  </ul>
  <div class="code-container">
  <pre><code>
<span class="tag">&lt;body&gt;</span>
  <span class="tag">&lt;a</span> <span class="attr">href=</span><span class="string">"#maincontent"</span><span class="tag">&gt;</span>Skip to main content<span class="tag">&lt;/a&gt;</span>
  ...
  <span class="tag">&lt;main</span> <span class="attr">id=</span><span class="string">"maincontent"</span><span class="tag">&gt;</span>
     ...
  <span class="tag">&lt;/main&gt;</span>
<span class="tag">&lt;/body&gt;</span>
  </code></pre>
</div>


  <h2 class="subHeading">Mouse and Pointer Functionality</h2>
  <p class="contentText">Ensure all functionality works with both mouse and keyboard:</p>
  <ul>
    <li>Support click and keypress events</li>
    <li>Provide visual feedback for hover states</li>
    <li>Ensure touch targets are large enough (minimum 44x44px)</li>
    <li>Maintain sufficient spacing between interactive elements</li>
  </ul>
</div>

<h1 class="contentHeading">
  ARIA Components
</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <p class="contentText">ARIA provides patterns for common UI components to ensure they are accessible:</p>
  <ul>
    <li><strong>Buttons</strong>: Use button role or native button element</li>
    <li><strong>Dialogs/Modals</strong>: Use dialog role with proper focus management</li>
    <li><strong>Accordions</strong>: Use appropriate roles and states</li>
    <li><strong>Carousels</strong>: Implement keyboard navigation and ARIA live regions</li>
    <li><strong>Menus</strong>: Use menu, menubar, and menuitem roles</li>
    <li><strong>Form Controls</strong>: Associate labels with inputs and provide error messages</li>
  </ul>
</div>

<h1 class="contentHeading">
  Accessibility Summary
</h1>
<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <p class="contentText">To create accessible React applications:</p>
  <ul>
    <li>Use semantic HTML elements</li>
    <li>Implement proper ARIA attributes</li>
    <li>Ensure keyboard navigation works</li>
    <li>Provide text alternatives for non-text content</li>
    <li>Maintain sufficient color contrast</li>
    <li>Support screen readers with proper roles and labels</li>
    <li>Test with accessibility tools and assistive technologies</li>
  </ul>
  <p class="contentText">Remember that accessibility is not just about compliance - it's about creating inclusive experiences for all users.</p>
</div>
`;