define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Post User Login",
    "name": "LoginUser",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the registered user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the registered user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>A json web token for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"token\": \"cjhqw8c73ghiob0387fghf23874gf8gf0874gfg804gf08gf\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The username or password is missing.</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "bad-credentials-error",
            "description": "<p>The username or password are not valid</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>The user couldn't be logged in</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"errorMessage\": \"Missing username or password\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n \"errorMessage\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"errorMessage\": \"Internal Error: Could not login user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/authRouter.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Post User Registration",
    "name": "PostUser",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the new user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the new user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>An object with the user id and username and token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n \"id\": 8,\n \"username\": \"doctest\",\n \"token\": \"slkvujh3872rgvyhoru8iyghr897fghrgo8y7ghv8orgh07h\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The username or password is missing.</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "type": "Object",
            "optional": false,
            "field": "duplicate-username-error",
            "description": "<p>The username is already registered</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>The user couldn't be registered</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"errorMessage\": \"Missing username or password\"\n}",
          "type": "json"
        },
        {
          "title": "409-Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n \"errorMessage\": \"That username is already registered\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"errorMessage\": \"Internal Error: Could not register user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/authRouter.js",
    "groupTitle": "Authentication"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C__Users_Kaw_Documents_LS_Back_End_docs_main_js",
    "groupTitle": "C__Users_Kaw_Documents_LS_Back_End_docs_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/api/user",
    "title": "Get User",
    "name": "GetUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "json",
            "optional": false,
            "field": "authorization",
            "description": "<p>The json web token, sent to the server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n    \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>An object depicting the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"bob\",\n  \"id\": 1,\n  \"books\": [\n    {\n      \"title\": \"Webster's Dictionary\",\n      \"authors\": \"Webster\"\n    },\n    {\n      \"title\": \"Javascript Data Structures and Algorithms\",\n      \"authors\": \"Sammie Bae\"\n    }\n  ],\n  \"descriptions\": [\n    {\n      \"description\": \"A book to tell you the meanings of words\",\n      \"id\": 2,\n      \"books\": [\n        {\n          \"title\": \"Webster's Dictionary\"\n        },\n        {\n          \"title\": \"Pathfinder 2nd Edition\"\n        }\n      ]\n    },\n    {\n      \"description\": \"A book about some kind of Javascript structures or methods for problem solving\",\n      \"id\": 3,\n      \"books\": [\n        {\n          \"title\": \"Javascript Data Structures and Algorithms\"\n        }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "unauthorized-error",
            "description": "<p>The user sent an invalid token</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Error in retrieving user info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"errorMessage\": \"No credentials provided\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n \"errorMessage\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"errorMessage\": \"Not sure until it comes up. Would be db error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/description",
    "title": "Post Book Description",
    "name": "PostDescription",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "json",
            "optional": false,
            "field": "authorization",
            "description": "<p>The json web token, sent to the server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Content-Type\": \"application/json\",\n    \"authorization\": \"sjvbhoi8uh87hfv8ogbo8iugy387gfofebcvudfbvouydyhf8377fg\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "description",
            "description": "<p>A description of the desired book</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Description-Example:",
          "content": "{\n \"description\": \"A book about mars\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "booklist",
            "description": "<p>An object with the description, and an array of 5 books</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"description\": \"a book about something\",\n  \"books\": [\n    {\n      \"id\": 4,\n      \"title\": \"Pathfinder 2nd Edition\",\n      \"authors\": \"Logan Bonner, Jason Buhlmahn, Stephen Radney-MacFarland, and Mark Seifter\"\n    },\n    {\n      \"id\": 2,\n      \"title\": \"Webster's Dictionary\",\n      \"authors\": \"Webster\"\n    },\n    {\n      \"id\": 6,\n      \"title\": \"Red Planet\",\n      \"authors\": \"Robert Heinlien\"\n    },\n    {\n      \"id\": 5,\n      \"title\": \"Harry Potter and the Half-Blood Prince\",\n      \"authors\": \"J.K. Rowling\"\n    },\n    {\n      \"id\": 7,\n      \"title\": \"Calculus\",\n      \"authors\": \"Michael Spivak\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "Object",
            "optional": false,
            "field": "bad-request-error",
            "description": "<p>The authorization header is absent</p>"
          }
        ],
        "401": [
          {
            "group": "401",
            "type": "Object",
            "optional": false,
            "field": "unauthorized-error",
            "description": "<p>The user sent an invalid token</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Error in retrieving books</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"errorMessage\": \"No credentials provided\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n \"errorMessage\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"errorMessage\": \"Internal Error: Could not search for books\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/userRouter.js",
    "groupTitle": "User"
  }
] });
