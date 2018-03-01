module.exports = {
    uploadToS3: function(bucketName, folder, gifName, callback)
    {
        var AWS = require('aws-sdk');
        var fs = require('fs');
        var stream = fs.createReadStream(folder + gifName);

          // This will wait until we know the readable stream is actually valid before piping
        stream.on('open', function () {
            var s3 = new AWS.S3({apiVersion: '2006-03-01'});
            var params = {
                Bucket: bucketName,
                ACL: "public-read",
                Body: stream,
                Key: gifName
            };

            s3.upload(params, function(err, data) {
                if (err && callback)
                    callback(err);
                callback(null, data.Location)
            });
        });

        // This catches any errors that happen while creating the readable stream (usually invalid names)
        stream.on('error', function(err) {
            if (err && callback)
                callback(err);
        });
    }
}