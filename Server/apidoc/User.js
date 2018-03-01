/**
 * @api {post} /users/login
 * Login to user
 * @apiName Login
 * @apiGroup User
 * 
 * @apiDescription Login.
 * 
 * @apiParam {String} email Users email (required 1).
 * @apiParam {String} password Users password (required 1).
 * @apiParam {String} fb_id Users unique FB ID (required 2).
 * @apiParam {String} google_id Users unique Google ID (required 3). 
 *
 * @apiSuccess {String} email email that was sent.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "58ea1c394546c83fe9deca04"
 *     }
 */
 
 /**
 * @api {post} /users/ 
 * Registers a new user
 * @apiName Register
 * @apiGroup User
 *
 * @apiDescription Registers new user. If registers an existing user with email and password then error will return.
 * If registers an existing user with fb_id/google_id then the same flow of login will happen.
 * If video_url is inserted then a GIF will be uploaded as soon as possible (call get user information).
 * 
 * @apiParam {String} name User full name (optional).
 * @apiParam {String} email Users email (required 1).
 * @apiParam {String} password Users password (required 1).
 * @apiParam {String} fb_id Users unique FB ID (required 2).
 * @apiParam {String} google_id Users unique Google ID (required 3).
 * @apiParam {String} video_url Video url (optional).
 * 
 * @apiSuccess {String} _id ID of the user.
 * @apiSuccess {String} gif_url Only when video_url was sent.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "_id": "58ea1c394546c83fe9deca04"
 *        "gif_url": "https://townsquare-gifs.s3.amazonaws.com/profGif_58ea1c394546c83fe9deca04.gif"
 *     }
 * 
 */

 /**
 * @api {post} /users/forgot 
 * Forgot password
 * @apiName Forgot password
 * @apiGroup User
 *
 * @apiDescription Sends an email with the password to the email inserted.
 * If the user doesn't exists, or used social media register then an error will return.
 * 
 * @apiParam {String} email Users email (required).
 * 
 * @apiSuccess {String} _id ID of the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "email": "avi@moveo.co.il"
 *     }
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "משתמש לא נמצא במערכת"
 *     }
 */


/**
 * @api {get} /users/:userId 
 * Get User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {String} userId user's unique ID (required).
 *
 * @apiSuccess {String} _id user's unique ID.
 * @apiSuccess {String} email User's email.
 * @apiSuccess {String} video_url Video url.
 * @apiSuccess {String} created_date Created date.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "_id": "58ea58bd039dbb2abc65abef",
 *      "name": "avi",
 *      "email": "avi@moveo.co.il",
 *      "video_url": "http://www.abc.com/",
 *      "created_date": "2017-04-09T15:52:29.220Z"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "משתמש לא נמצא במערכת"
 *     }
 */

/**
 * @api {put} /users/profileVideo 
 * Send profile video
 * @apiName profileVideo
 * @apiGroup User
 *
 * @apiParam {String} _id User's unique ID (required).
 * @apiParam {String} video_url Video url (required).
 *
 * @apiSuccess {String} gif_url The url of the gif created.
 * @apiSuccess {String} _id user's unique ID.
 * @apiSuccess {String} email User's email.
 * @apiSuccess {String} video_url Video url.
 * @apiSuccess {String} name
 * @apiSuccess {String} created_date Created date.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "gif_url": "https://townsquare-gifs.s3.amazonaws.com/profGif_58eddab8aa01071370346b75.gif",
 *      "_id": "58eddab8aa01071370346b75",
 *      "name": "avi",
 *      "email": "avi@moveo1.co.il",
 *      "video_url": "http://techslides.com/demos/sample-videos/small.mp4",
 *      "created_date": "2017-04-12T07:43:52.409Z"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 */

/**
 * @api {get} /categories/ 
 * Get Categories 
 * @apiName GetCategories
 * @apiGroup Categories 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *           "_id": "5923e04aea5c44427acf6442",
 *           "name": "DAILY NEWS",
 *           "icon_url": "https://s3.amazonaws.com/townsquarimages/sun_ic.png",
 *           "__v": 0,
 *           "questions": [],
 *           "status": "active"
 *       }
 *      ]
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Categories doesnt exists"
 *     }
 */

/**
 * @api {post} /categories/ 
 * Add new Category
 * @apiName Add new Category
 * @apiGroup Categories
 *
 * 
 * @apiParam {String} name Category Name (required).
 * @apiParam {String} icon_url Category Icon.
 * 
 * @apiSuccess {String} _id ID of the Category.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "a8s7d6a8s7d6as87dasd"
 *     }
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Failed on create category"
 *     }
 */

/**
 * @api {post} /categories/questions/ 
 * Add new Question
 * @apiName Add new Question
 * @apiGroup Questions
 *
 * 
 * @apiParam {String} _id Category id (required).
 * @apiParam {String} question_text Question Body (required).
 * 
 * @apiSuccess {String} _id ID of the Question.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "a8s7d6a8s7d6as87dasd"
 *     }
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Failed on create question"
 *     }
 */
