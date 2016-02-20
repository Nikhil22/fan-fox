function test (theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function getAllPosts(responseObj, masterPosts) {
	masterPosts = typeof masterPosts !== 'undefined' ? masterPosts : {'data':[]};
	var posts = responseObj['data'];
	masterPosts['data'] = masterPosts['data'].concat(posts);
	if (responseObj.hasOwnProperty('paging') && responseObj['paging'].hasOwnProperty('next')) {
    var r = JSON.parse(test(responseObj['paging']['next']))
    getAllPosts(r, masterPosts)
	}
	return masterPosts;
}

function removeObjsFromArrayBasedOnKey(responseObj, key) {
	var array = responseObj['data'];
	return array.map(function(x) { return x }).filter(function(x) { return x.hasOwnProperty(key) });
}

/*var allPostsObj = getAllPosts(response);
allPostsObj['data'] = removeObjsFromArrayBasedOnKey(allPostsObj, 'likes');
console.log(allPostsObj['data'].length);
var likeIDsArray = getLikerIDs(allPostsObj);
var likersCountObj = getLikersCount(likeIDsArray);
var biggestFans = sortObjByValue(likersCountObj);
console.log(biggestFans);*/
