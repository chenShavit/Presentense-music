'use strict';

var mongoose = require('mongoose'),
  Category = mongoose.model('Category');

exports.get_all_categories = function (req, res, cb) {
Category.find({}, function (err, categories) {
    if (err)
      return cb(err);
    if (!categories)
      return cb(Error('No Categories found'));

    res.categories = categories;
    return cb();
  });
}

exports.create_category = function (req, res, cb) {
    var category = req.body;
    Category.create(category, function (err, newCategory) {
        return cb();
    });
}
