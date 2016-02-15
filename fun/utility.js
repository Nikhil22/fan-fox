var syncRequest = require('sync-request');

function httpGet(theUrl) {
  var res = syncRequest('GET', theUrl);
  return res.getBody()
}

function getAllPosts(responseObj, masterPosts) {
	masterPosts = typeof masterPosts !== 'undefined' ? masterPosts : {'data':[]};
	var posts = responseObj['data'];
	masterPosts['data'] = masterPosts['data'].concat(posts);
	if (responseObj.hasOwnProperty('paging') && responseObj['paging'].hasOwnProperty('next')) {
    var r = JSON.parse(httpGet(responseObj['paging']['next']));
    getAllPosts(r, masterPosts);
	}
	return masterPosts;
}

function stringToObj(jsonString) {
	return JSON.parse(jsonString);
}

function keepObjsInArrayBasedOnKey(responseObj, key) {
	var array = responseObj['data'];
	return array.map(function(x) { return x }).filter(function(x) { return x.hasOwnProperty(key) });
}

module.exports = {
	'httpGet' : httpGet,
	'getAllPosts' : getAllPosts,
	'stringToObj' : stringToObj,
	'keepObjsInArrayBasedOnKey' : keepObjsInArrayBasedOnKey
}
