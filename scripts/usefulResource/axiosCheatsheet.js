docs.axiosCheatsheet = `
<h1 class="heading">ReactJS − Axios Cheatsheet</h1>

<h1 class="contentHeading">Introduction to Axios</h1>
<p>Axios is a promise-based HTTP client for the browser and Node.js. It provides an easy-to-use API for making HTTP requests and handling responses.</p>

<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Promise-based HTTP client</li>
  <li>Works in both browser and Node.js</li>
  <li>Intercept request and response</li>
  <li>Transform request and response data</li>
  <li>Cancel requests</li>
  <li>Automatic JSON data transformation</li>
</ul>
</div>

<h1 class="contentHeading">Installation and Setup</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// Install Axios</span>
npm install axios

<span class="comment">// Import Axios</span>
<span class="keyword">import</span> axios <span class="keyword">from</span> <span class="string">'axios'</span>;

<span class="comment">// Create an instance with default config</span>
<span class="keyword">const</span> api = axios.create({
   baseURL: <span class="string">'https://api.example.com'</span>,
   timeout: 1000,
   headers: { <span class="string">'Content-Type'</span>: <span class="string">'application/json'</span> }
});
  </code></pre>
</div>

<h1 class="contentHeading">Basic CRUD Operations</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// GET Request</span>
<span class="keyword">const</span> fetchData = <span class="keyword">async</span> () => {
   <span class="keyword">try</span> {
      <span class="keyword">const</span> response = <span class="keyword">await</span> axios.get(<span class="string">'/posts'</span>);
      console.log(response.data);
   } <span class="keyword">catch</span> (error) {
      console.error(error);
   }
};

<span class="comment">// POST Request</span>
<span class="keyword">const</span> createData = <span class="keyword">async</span> (data) => {
   <span class="keyword">try</span> {
      <span class="keyword">const</span> response = <span class="keyword">await</span> axios.post(<span class="string">'/posts'</span>, data);
      console.log(response.data);
   } <span class="keyword">catch</span> (error) {
      console.error(error);
   }
};

<span class="comment">// PUT Request</span>
<span class="keyword">const</span> updateData = <span class="keyword">async</span> (id, data) => {
   <span class="keyword">try</span> {
      <span class="keyword">const</span> response = <span class="keyword">await</span> axios.put(<span class="string">'/posts/id'</span>, data);
      console.log(response.data);
   } <span class="keyword">catch</span> (error) {
      console.error(error);
   }
};

<span class="comment">// DELETE Request</span>
<span class="keyword">const</span> deleteData = <span class="keyword">async</span> (id) => {
   <span class="keyword">try</span> {
      <span class="keyword">await</span> axios.delete(<span class="string">'/posts/id'</span>);
      console.log(<span class="string">'Post deleted'</span>);
   } <span class="keyword">catch</span> (error) {
      console.error(error);
   }
};
  </code></pre>
</div>

<h1 class="contentHeading">Requests with Authorization Headers</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// Setting Authorization Header</span>
<span class="keyword">const</span> api = axios.create({
   baseURL: <span class="string">'https://api.example.com'</span>,
   headers: {
      <span class="string">'Authorization'</span>: <span class="string">'Bearer token'</span>
   }
});

<span class="comment">// Dynamic Authorization Header</span>
api.interceptors.request.use(
   (config) => {
      <span class="keyword">const</span> token = localStorage.getItem(<span class="string">'token'</span>);
      <span class="keyword">if</span> (token) {
         config.headers.Authorization = <span class="string">'Bearer token'</span>;
      }
      <span class="keyword">return</span> config;
   },
   (error) => {
      <span class="keyword">return</span> Promise.reject(error);
   }
);
  </code></pre>
</div>

<h1 class="contentHeading">Advanced Axios Features</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// Request Interceptors</span>
axios.interceptors.request.use(
   (config) => {
      <span class="comment">// Modify config before request is sent</span>
      <span class="keyword">return</span> config;
   },
   (error) => {
      <span class="keyword">return</span> Promise.reject(error);
   }
);

<span class="comment">// Response Interceptors</span>
axios.interceptors.response.use(
   (response) => {
      <span class="comment">// Modify response data</span>
      <span class="keyword">return</span> response;
   },
   (error) => {
      <span class="comment">// Handle response errors</span>
      <span class="keyword">return</span> Promise.reject(error);
   }
);

<span class="comment">// Request Cancellation</span>
<span class="keyword">const</span> CancelToken = axios.CancelToken;
<span class="keyword">const</span> source = CancelToken.source();

axios.get(<span class="string">'/posts'</span>, {
   cancelToken: source.token
}).catch(<span class="keyword">function</span> (thrown) {
   <span class="keyword">if</span> (axios.isCancel(thrown)) {
      console.log(<span class="string">'Request canceled'</span>, thrown.message);
   }
});

<span class="comment">// Cancel the request</span>
source.cancel(<span class="string">'Operation canceled by the user.'</span>);
  </code></pre>
</div>

<h1 class="contentHeading">Transforming Requests and Responses</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// Request Transform</span>
axios.defaults.transformRequest = [(data, headers) => {
   <span class="comment">// Transform request data</span>
   <span class="keyword">return</span> JSON.stringify(data);
}];

<span class="comment">// Response Transform</span>
axios.defaults.transformResponse = [(data) => {
   <span class="comment">// Transform response data</span>
   <span class="keyword">const</span> parsed = JSON.parse(data);
   <span class="keyword">return</span> parsed.data;
}];

<span class="comment">// Custom Instance with Transforms</span>
<span class="keyword">const</span> api = axios.create({
   transformRequest: [(data) => {
      <span class="keyword">return</span> JSON.stringify(data);
   }],
   transformResponse: [(data) => {
      <span class="keyword">return</span> JSON.parse(data);
   }]
});
  </code></pre>
</div>

<h1 class="contentHeading">Handling Multiple Requests</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// Using Promise.all</span>
<span class="keyword">const</span> fetchMultipleData = <span class="keyword">async</span> () => {
   <span class="keyword">try</span> {
      <span class="keyword">const</span> [users, posts] = <span class="keyword">await</span> Promise.all([
         axios.get(<span class="string">'/users'</span>),
         axios.get(<span class="string">'/posts'</span>)
      ]);
      console.log(users.data, posts.data);
   } <span class="keyword">catch</span> (error) {
      console.error(error);
   }
};

<span class="comment">// Using axios.all (deprecated, use Promise.all)</span>
axios.all([
   axios.get(<span class="string">'/users'</span>),
   axios.get(<span class="string">'/posts'</span>)
]).then(axios.spread((users, posts) => {
   console.log(users.data, posts.data);
}));
  </code></pre>
</div>

<h1 class="contentHeading">Global Error Handling</h1>
<div class="code-container">
  <pre><code>
<span class="comment">// Global Error Handler</span>
axios.interceptors.response.use(
   (response) => response,
   (error) => {
      <span class="keyword">if</span> (error.response) {
         <span class="comment">// Server responded with error status</span>
         <span class="keyword">switch</span> (error.response.status) {
            <span class="keyword">case</span> 401:
               <span class="comment">// Handle unauthorized</span>
               break;
            <span class="keyword">case</span> 403:
               <span class="comment">// Handle forbidden</span>
               break;
            <span class="keyword">case</span> 404:
               <span class="comment">// Handle not found</span>
               break;
            <span class="keyword">case</span> 500:
               <span class="comment">// Handle server error</span>
               break;
         }
      } <span class="keyword">else</span> <span class="keyword">if</span> (error.request) {
         <span class="comment">// Request made but no response</span>
         console.error(<span class="string">'No response received'</span>);
      } <span class="keyword">else</span> {
         <span class="comment">// Error in request setup</span>
         console.error(<span class="string">'Error setting up request'</span>);
      }
      <span class="keyword">return</span> Promise.reject(error);
   }
);
  </code></pre>
</div>

<h1 class="contentHeading">Summary</h1>
<p>Axios is a powerful HTTP client that provides a clean and intuitive API for making HTTP requests. Key features include:</p>
<div style="background-color: #EDEDED; padding: 10px; border-radius: 5px; margin-bottom: 20px;">
<ul style="margin: 0;">
  <li>Promise-based API for handling asynchronous requests</li>
  <li>Interceptors for request and response transformation</li>
  <li>Built-in support for request cancellation</li>
  <li>Automatic JSON data transformation</li>
  <li>Client-side protection against XSRF</li>
  <li>Support for multiple concurrent requests</li>
  <li>Global error handling capabilities</li>
  <li>Custom instance creation for different API endpoints</li>
</ul>
</div>
`;  