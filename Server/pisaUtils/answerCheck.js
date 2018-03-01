var _ = require('underscore');
/**
 * 
 * {
 *     "asffsafsdgds":[]
 * }
 * 
 * 
 * @param {Array} question 
 * @param {Array} answers 
 */
function text(question, answers) {


    var correctAnswers = JSON.parse(JSON.stringify(question.correct_answers));
    var failed = {};

    var id = question._id.toString();

    answers.forEach(function (answer, i) {
        failed[id] = failed[id] || [];
        if(typeof answer == 'string'){
            answer = [answer];
        }
        if (answer) {
            failed[id] = failed[id].concat(answer.filter(function (ans) {
                return ans && correctAnswers.indexOf(ans) == -1;
            }).map(function (ans) {
                return answer.indexOf(ans) + i;
            }));
        }


    });



    return failed;
}

/**
 * 
 * @param {Array} question 
 * @param {Array} answers 
 */
function multi(question, answers) {
    var correctAnswers = JSON.parse(JSON.stringify(question.correct_answers));
    var failed = {};

    var id = question._id.toString();

    failed[id] = answers.filter(function (ans) {
        return correctAnswers.indexOf(ans) == -1;
    }).map(function (ans) {
        return answers.indexOf(ans);
    });

    return failed;
}

/**
 * 
 * @param {Array} question
 * @param {Array} answers
 */
function single(question, answers) {
    return multi(question, answers);
}


function compareArrays() {
    var arrays = [].slice.call(arguments);
    return _.all(arrays, function (array) {
        return array.length == arrays[0].length && _.difference(array, arrays[0]).length == 0;
    });
}


var checkFunctions = [
    text,
    multi,
    single
]


/**
 * 
 * @param {Object} answer 
 * @param {Number} typeNumber 
 */
function check(question, answers) {

    return checkFunctions[question.type - 1](question, answers);
}


module.exports = {
    check
}