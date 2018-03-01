

const KEY = 'key-5ec3b92f291420550b4c5aa87b124557'; // sandbox TODO change
const DOMAIN = 'sandbox6296f5e674cf4b06b0b3eed858d01314.mailgun.org'; // sandbox TODO change

module.exports = {
    sendEmail: function (to, subject, htmlName, callback, params) {
        var nodemailer = require('nodemailer');
        var mg = require('nodemailer-mailgun-transport');

        // This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails) 
        var auth = {
            auth: {
                api_key: KEY,
                domain: DOMAIN
            }
        }

        var fs = require('fs'),
            path = require('path'),
            filePath = __dirname + '/../emailHtmls/' + htmlName

        fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
            if (!err) {

                // {temp_password:"aosufyiow"}
                if (params) {
                    for (var key in params) {
                        if (params.hasOwnProperty(key)) {
                            var element = params[key];
                            var reg = new RegExp('\{\{' + key + '\}\}', 'g')
                            data = data.replace(reg, element);
                        }
                    }
                }

                var nodemailerMailgun = nodemailer.createTransport(mg(auth));
                nodemailerMailgun.sendMail({
                    from: 'contact@challengim.co.il',
                    to: to,
                    subject: subject,
                    //'h:Reply-To': ' <dev@moveo.co.il>',
                    html: data,
                }, function (err, info) {
                    if (err) {
                        console.log('Error: ' + err);
                        callback(err)
                    }
                    else {
                        console.log('Response: ' + info);
                        callback(err, info)
                    }
                });
                callback(undefined,'')
            } else {
                console.log(err);
            }
        });
    }
}