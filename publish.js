var zipFolder = require('zip-folder');
var path = require('path');
var fs = require('fs');
var request = require('request');

var rootFolder = path.resolve('.');
var zipPath = path.resolve(rootFolder, '../luis-nodejs-bot-aryan.zip');
var kuduApi = 'https://luis-nodejs-bot-aryan.scm.azurewebsites.net/api/zip/site/wwwroot';
var userName = '$luis-nodejs-bot-aryan';
var password = 'vN5y1QziA2rwdNNzRwiLvxox1YcLn3Nyc7nLgYxg7xjwcGMTaqc4BWlR0rdz';

function uploadZip(callback) {
  fs.createReadStream(zipPath).pipe(request.put(kuduApi, {
    auth: {
      username: userName,
      password: password,
      sendImmediately: true
    },
    headers: {
      "Content-Type": "applicaton/zip"
    }
  }))
  .on('response', function(resp){
    if (resp.statusCode >= 200 && resp.statusCode < 300) {
      fs.unlink(zipPath);
      callback(null);
    } else if (resp.statusCode >= 400) {
      callback(resp);
    }
  })
  .on('error', function(err) {
    callback(err)
  });
}

function publish(callback) {
  zipFolder(rootFolder, zipPath, function(err) {
    if (!err) {
      uploadZip(callback);
    } else {
      callback(err);
    }
  })
}

publish(function(err) {
  if (!err) {
    console.log('luis-nodejs-bot-aryan publish');
  } else {
    console.error('failed to publish luis-nodejs-bot-aryan', err);
  }
});