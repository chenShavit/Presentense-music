

module.exports = {
    // Takes 3 screenshots
    createScreenShot: function (id, videoUrl, width, height , callback)
    {
        console.log('create screenshot started');

        var ffmpeg = require('fluent-ffmpeg');
        var mkpath = require('mkpath');
        var http = require('http');
        var fs = require('fs');
        var videoFolder = './videos/' + id +'/';
        var videoName = 'profVid_' + id + '.mp4';
        try {
            mkpath.sync(videoFolder, 0700);
        }
        catch(err)
        {
            console.log('an error happened1: ' + err.message);
        }
        var video = fs.createWriteStream(videoFolder + videoName);
        video.on('error', function(err) {
            console.log('an error happened: ' + err.message);
        });

        var takeScreenShots = function() 
        {
            var mkpath = require('mkpath');
            try
            {
                mkpath.sync('./screenshots/'+ id, 0700);
            } 
            catch (err)
            {
                console.log('an error happened4: ' + err.message);
            }

            var proc = ffmpeg(videoFolder + videoName)

            // setup event handlers
            .on('filenames', function(filenames) {
                console.log('screenshots are ' + filenames.join(', '));
            })
            .on('end', function() {
                console.log('screenshots were saved');
                if (callback)
                { 
                    callback();
                }
            })
            .on('error', function(err) {
                console.log('an error happened: ' + err.message);
            })
            // take 2 screenshots at predefined timemarks and size
            .screenshots({ 
                count: 3, 
                folder: './screenshots/'+ id, 
                size: width+'x'+height
            });
            
        }

        var request = http.get(videoUrl, function(response) 
        {
            if (response.statusCode != 200)
            {
                fs.unlink(videoFolder + videoName);
                if (callback) 
                    callback('Error');
            }
            response.pipe(video);
            video.on('finish', function() 
            {
                video.close(takeScreenShots);  // close() is async, call takeScreenShots after close completes.
            });
        })
        .on('error', function(err) { // Handle errors
            fs.unlink(videoFolder + videoName); // Delete the file async. (But we don't check the result)
            if (callback) 
                callback(err.message);
        });  
    },

    videoToGif: function(id, delay, width, height, callback)
    {
        console.log('videoToGif started');

        var GIFEncoder = require('gifencoder');
        var encoder = new GIFEncoder(width, height);
        var pngFileStream = require('png-file-stream');
        var fs = require('fs');
        var mkpath = require('mkpath');

    
        var gifName = 'profGif_' + id + '.gif';
        var gifFolder = './gifs/' + id + '/';
        var screenshotFolder = './screenshots/' + id + '/';
        
        try {
            mkpath.sync(gifFolder, 0700);
        }
        catch(err)
        {
            console.log('an error happened10: ' + err.message);
        }

        var stream = pngFileStream(screenshotFolder + 'tn_?.png')
        .pipe(encoder.createWriteStream({ repeat: -1, delay: delay, quality: 1 }))
        .pipe(fs.createWriteStream(gifFolder+gifName));
        stream.on('finish', function () {
            if (callback) 
                callback();
        })
        .on('error', function (err) {
            if (callback) 
                callback(err.message);
         });
    }
};