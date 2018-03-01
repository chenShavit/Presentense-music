  /*
  region = The region where set the bucket
  bucketName = The bucket name
  IdentityID = The IdentityId
  apiVersion = The api version, if it is undefined it will be set to 2006-03-01
  */

  var S3Rapper= function(region,IdentityID,BucketName,apiVersion = '2006-03-01'){
    
    var _S3SdkWrapper = {};


    AWS.config.region = region; 
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: region+':'+IdentityID,
    });

    var s3 = new AWS.S3({
        apiVersion: apiVersion,
        params: {Bucket: BucketName}
    });

   
    //Method regions

    /*
    Params - img file , message for Info,Success,Error toast, and call back method
    Return -  Promise -object{
      success - type bool
      url - type string - if success then set the url
      error - type string - if not success then set the error
    }
    */
    _S3SdkWrapper.uploadFile = function(file,cb) {
      
        var fileName = file.name;
        var fileType = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length)
        fileName = fileName.replace(fileType, '')
        var fileKey = fileName + Date.now() + '.' + fileType;
        s3.upload({
                Key: fileKey,
                Body: file,
                ACL: 'public-read'
            },
            function (err, data) {
                var resp;
                if (err) {
                     resp = {success:false,error:err}
                   
                }else {
                     resp= {success:true,url:data.Location}
                }
                cb(resp);
            }
        );
    }

     return _S3SdkWrapper;
  }