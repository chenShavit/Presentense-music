משתמש לא נמצא במערכת
  {
    "type": "post",
    "url": "/categories/",
    "title": "Add new Category",
    "name": "Add_new_Category",
    "group": "Categories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category Name (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon_url",
            "description": "<p>Category Icon.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"a8s7d6a8s7d6as87dasd\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Failed on create category\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/User.js",
    "groupTitle": "Categories"
  },
  {
    "type": "get",
    "url": "/categories/",
    "title": "Get Categories",
    "name": "GetCategories",
    "group": "Categories",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n      \"_id\": \"5923e04aea5c44427acf6442\",\n      \"name\": \"DAILY NEWS\",\n      \"icon_url\": \"https://s3.amazonaws.com/townsquarimages/sun_ic.png\",\n      \"__v\": 0,\n      \"questions\": [],\n      \"status\": \"active\"\n  }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Categories doesnt exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/User.js",
    "groupTitle": "Categories"
  },
  {
    "type": "post",
    "url": "/categories/questions/",
    "title": "Add new Question",
    "name": "Add_new_Question",
    "group": "Questions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Category id (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "question_text",
            "description": "<p>Question Body (required).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the Question.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"a8s7d6a8s7d6as87dasd\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Failed on create question\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/User.js",
    "groupTitle": "Questions"
  },
  {
    "type": "post",
    "url": "/users/forgot",
    "title": "Forgot password",
    "name": "Forgot_password",
    "group": "User",
    "description": "<p>Sends an email with the password to the email inserted. If the user doesn't exists, or used social media register then an error will return.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email (required).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"email\": \"avi@moveo.co.il\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"User doesnt exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/User.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:userId",
    "title": "Get User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>user's unique ID (required).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>user's unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video_url",
            "description": "<p>Video url.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_date",
            "description": "<p>Created date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"_id\": \"58ea58bd039dbb2abc65abef\",\n \"name\": \"avi\",\n \"email\": \"avi@moveo.co.il\",\n \"video_url\": \"http://www.abc.com/\",\n \"created_date\": \"2017-04-09T15:52:29.220Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User doesnt exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/User.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login to user",
    "name": "Login",
    "group": "User",
    "description": "<p>Login.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email (required 1).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password (required 1).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fb_id",
            "description": "<p>Users unique FB ID (required 2).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "google_id",
            "description": "<p>Users unique Google ID (required 3).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email that was sent.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"58ea1c394546c83fe9deca04\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/User.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/",
    "title": "Registers a new user",
    "name": "Register",
    "group": "User",
    "description": "<p>Registers new user. If registers an existing user with email and password then error will return. If registers an existing user with fb_id/google_id then the same flow of login will happen. If video_url is inserted then a GIF will be uploaded as soon as possible (call get user information).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User full name (optional).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email (required 1).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password (required 1).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fb_id",
            "description": "<p>Users unique FB ID (required 2).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "google_id",
            "description": "<p>Users unique Google ID (required 3).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video_url",
            "description": "<p>Video url (optional).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gif_url",
            "description": "<p>Only when video_url was sent.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"_id\": \"58ea1c394546c83fe9deca04\"\n   \"gif_url\": \"https://townsquare-gifs.s3.amazonaws.com/profGif_58ea1c394546c83fe9deca04.gif\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/User.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/profileVideo",
    "title": "Send profile video",
    "name": "profileVideo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User's unique ID (required).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video_url",
            "description": "<p>Video url (required).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gif_url",
            "description": "<p>The url of the gif created.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>user's unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video_url",
            "description": "<p>Video url.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_date",
            "description": "<p>Created date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"gif_url\": \"https://townsquare-gifs.s3.amazonaws.com/profGif_58eddab8aa01071370346b75.gif\",\n \"_id\": \"58eddab8aa01071370346b75\",\n \"name\": \"avi\",\n \"email\": \"avi@moveo1.co.il\",\n \"video_url\": \"http://techslides.com/demos/sample-videos/small.mp4\",\n \"created_date\": \"2017-04-12T07:43:52.409Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "apidoc/User.js",
    "groupTitle": "User"
  }
] });
