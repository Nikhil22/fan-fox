function getLikersCount(likerIDsArray) {
	var hash = {};

	likerIDsArray.map(function(item) {
	    var key = JSON.stringify(item);
	    if (hash[key]) {
	        hash[key]++;
	    } else {
	        hash[key] = 1;
	    }
	});
	return hash;
}

function sortObjByValue(likeCountObj) {
	var sortable = [];
	for (var obj in likeCountObj)
      sortable.push([obj, likeCountObj[obj]]);
    return sortable.sort(function(a, b) {return b[1] - a[1]});
}

function getLikerIDs(responseObj, likerIDsArray) {
	likerIDsArray = typeof likerIDsArray !== 'undefined' ? likerIDsArray : [];
	var array = responseObj['data'];

	array.forEach(function (post) {
		if (post.hasOwnProperty('likes')) {
			post['likes']['data'].map(function(liker) {
          likerIDsArray.push([liker['id'], liker['name']]);
      });
		}
	});

	if (responseObj.hasOwnProperty('paging') && responseObj['paging'].hasOwnProperty('next')) {
		var r = JSON.parse(httpGet(responseObj['paging']['next']));
		getLikerIDs(r, likerIDsArray);
	}
	return likerIDsArray;
}

function transformBiggestFans(biggestFans) {
		return biggestFans.map(function(item) {
				liker = JSON.parse(item[0])
				return {
						'id':liker[0],
						'name':liker[1],
						'numLikes':item[1]
				}
		});
}

module.exports = {
	'getLikersCount' : getLikersCount,
	'sortObjByValue' : sortObjByValue,
	'getLikerIDs' : getLikerIDs,
	'transformBiggestFans' : transformBiggestFans
}
