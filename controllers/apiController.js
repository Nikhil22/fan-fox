var fun = require('../fun');
var fs = require('fs');

module.exports = function(app, dir) {

  app.get('/biggestFans', function(req, res) {
      var biggestFansJSON = fs.readFileSync(dir + '/biggestFans.txt');
      res.send(biggestFansJSON);
  });

  app.post('/index', function(req, res) {
    // Utility - clean up
    var responseObj = fun.utility.stringToObj(req.body.userPosts);
    var allPostsObj = fun.utility.getAllPosts(responseObj);
    allPostsObj['data'] = fun.utility.keepObjsInArrayBasedOnKey(allPostsObj, 'likes');

    // Biggest fans
    var likerIDsArray = fun.biggestFans.getLikerIDs(allPostsObj);
    var likersCount = fun.biggestFans.getLikersCount(likerIDsArray);
    var biggestFans = fun.biggestFans.sortObjByValue(likersCount);
    biggestFans = fun.biggestFans.transformBiggestFans(biggestFans);

    fs.writeFileSync('biggestFans.txt', JSON.stringify(biggestFans.slice(0,30)));

    res.sendFile(dir + '/public/views/index.html');
  });

}
