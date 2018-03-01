exports.getUserNameByID = function (users, user_id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === user_id) {
            return users[i].name;
        }
    }
}

exports.getUsersArea = function (users, user_id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id === user_id) {
            return users[i].area;
        }
    }
}

exports.formatDate = function (stringDate) {
    if (!stringDate)
        return "";
    var date = new Date(Date.parse(stringDate));
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();

    return day + '/' + parseInt(monthIndex + 1) + '/' + year + '  ';// + hours + ':' + minutes;
}

exports.formatDateWithHours = function (stringDate) {
    if (!stringDate)
        return "";
    var date = new Date(Date.parse(stringDate));
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();

    return hours + ":" + minutes + '   ' + day + '/' + parseInt(monthIndex + 1) + '/' + year + '  ';// + hours + ':' + minutes;
}

exports.isNewFromLastDay = function (objects) {
    var amount = 0;
    objects.forEach(function (object) {
        if (object.createdAt) {
            var currentDate = new Date().getTime();
            var timeInMillis = object.createdAt.getTime();
            var delta = Math.round((currentDate / 1000) - (timeInMillis / 1000));
            if (delta <= 86400)// One day
                amount++;
        }
    }, this);
    return amount;
}

exports.isNewFromLastWeek = function (objects) {
    var amount = 0;
    objects.forEach(function (object) {
        if (object.createdAt) {
            var currentDate = new Date().getTime();
            var timeInMillis = object.createdAt.getTime();
            var delta = Math.round((currentDate / 1000) - (timeInMillis / 1000));
            if (delta <= 518400)// One week
                amount++;
        }
    }, this);
    return amount;
}

exports.isNewFromLastMonth = function (objects) {
    var amount = 0;
    objects.forEach(function (object) {
        if (object.createdAt) {
            var currentDate = new Date().getTime();
            var timeInMillis = object.createdAt.getTime();
            var delta = Math.round((currentDate / 1000) - (timeInMillis / 1000));
            if (delta <= 2678400)// One month
                amount++;
        }
    }, this);
    return amount;
}

exports.parseCookies = function(request) {
    var list = {},
        rc = request.headers.cookie;
  
    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
  
    return list;
  }

  exports.getAge = function (birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}