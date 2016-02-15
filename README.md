<h1>Fan Fox</h1>

<h2>What is it?</h2>

<ol>
  <li>Discover the people who give you the most likes on Facebook (your biggest fans) all in a responsive grid UI :)</li>
  <li>Filter your results</li>
</ol>

<h2>Desktop</h2>
<i>Actual names not displayed here for confidentiality ~ But you'll see the names when you run this app :)</i>
![alt tag](https://github.com/Nikhil22/fan-fox/blob/master/public/img/desktop.png)

<h2>Mobile</h2>
<i>Actual names not displayed here for confidentiality ~ But you'll see the names when you run this app :)</i>
![alt tag](https://github.com/Nikhil22/fan-fox/blob/master/public/img/mobile.png)

<h2>Things that can be improved</h2>
<ol>
<li>More details in the UI - image of person, # of their total comments, etc</li>
<li>Load more content as user scrolls down</li>
</ol>

<h5>These are the 2 main improvements I can think of. If you can think of more (surely, there are more improvements to be made), don't hesitate to add 'em to this list & contribute your code :) </h5>

<h2>How to use</h2>

<ol>
  <li>Clone this repo & install all dependencies</li> <br>
  <pre>cd fan-fox</pre> <br>
  <pre>npm install</pre> <br>

  <li>Important! Make sure you have a Facebook App ID. <br> If you don't, visit https://developers.facebook.com.</li> <br>

  <li>
  Once you have your App ID, head over to public/js/fb-magic.js <br>

  Modify the following piece of code: <br> <br>

  <pre>FB.init({<br>
    appId      : 'Your APP ID here',<br>
    cookie     : true,  // enable cookies to allow the server to access<br>
                        // the session<br>
    xfbml      : true,  // parse social plugins on this page<br>
    version    : 'v2.2' // use version 2.2
  });</pre> <br> <br>
  </li>

   <li>
    Have a Terminal tab open <br>
    In the Terminal, run <pre>nodemon server.js</pre>
   </li> <br>

   <li>Head over to http://localhost:8000/fb_login</li> <br>

   <h3>Note</h3> To make sure localhost is one of the allowed URLs for your Facebook app, do the following <br>

   <pre>In the Dashboard for your Facebook App: Go to Settings > Advanced <br> <br> Under <strong>Valid OAuth redirect URIs.</strong>, add http://localhost:8000/ <br> <br> Save changes
   </pre>

   <li>Click 'Login'</li> <br>
   <li>Grab a drink, sit back, and watch as you discover your biggest fans on Facebook</li>
 </ol>

<h2>Technologies used</h2>

<ol>
  <li>NodeJS</li>
  <li>AngularJS</li>
  <li>ExpressJS</li>
  <li>Facebook Graph API</li>
  <li>Twitter Bootstrap</li>
  <li>SemanticUI</li>
</ol>
