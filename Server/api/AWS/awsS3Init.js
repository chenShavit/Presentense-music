module.exports = {
    startInit: function()
    {
        console.log('S3 init');

        var AWS = require('aws-sdk');

        var bucketRegion = 's3-us-east-1.amazonaws.com';
        var IdentityPoolId = '';

        var accessKeyId = 'AKIAIHO2YSA7GULISQJQ';
        var secretAccessKey = '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';

        credentials= {
        "accessKeyId" : "AKIAIHO2YSA7GULISQJQ",
        "secretAccessKey" : "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"
        };

        var credentials = new AWS.Credentials(accessKeyId, secretAccessKey);

        AWS.config.update({
            
            credentials: credentials
        });
    }
};