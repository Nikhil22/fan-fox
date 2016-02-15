// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);

  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    var accessToken = response.authResponse.accessToken
    getPosts();
    //redirect()
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
FB.init({
  appId      : '486958151512874',
  cookie     : true,  // enable cookies to allow the server to access
                      // the session
  xfbml      : true,  // parse social plugins on this page
  version    : 'v2.2' // use version 2.2
});

FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});

};

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "http://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function getPosts() {
  FB.api('me/posts/?limit=5000&fields=comments.summary(true),likes.summary(true).fields(name), message, story, link, created_time', function(response) {
    passPosts(JSON.stringify(response))
  });
}

function passPosts(json) {
    document.getElementById("jsonInput").value = json;
    document.getElementById("apiForm").submit();
}

/*function passPosts(userPosts){
  $.ajax({
    method: "POST",
    url: "/fb-magic",
    data: {
      "userPosts": userPosts,
    }
  })
  .success(function(data) {

  });
}*/
