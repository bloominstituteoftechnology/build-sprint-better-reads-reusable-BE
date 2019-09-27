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
    "type": "delete",
    "url": "/api/user/book/:id",
    "title": "Delete Book",
    "name": "DeleteBook",
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
            "type": "Integer",
            "optional": false,
            "field": "bookId",
            "description": "<p>The id of the book you want to delete as a param on the url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Book-Delete-Example:",
          "content": "https://better-reads-bw.herokuapp.com/api/user/book/7",
          "type": "URL"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>A message about deleting the book from the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Deleted book 6 from user 2\"\n}",
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
            "description": "<p>The bookId or token is absent</p>"
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
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "No-Book-Error",
            "description": "<p>A message that the book was not saved for the user</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Error in deleting book</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"errorMessage\": \"requires a bookId\"\n}",
          "type": "json"
        },
        {
          "title": "400-Error-Response-No-Token:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errorMessage\": \"No credentials provided\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n \"errorMessage\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response-No-Book:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Book is not in list\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"errorMessage\": \"Internal Error: Could not delete book\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/user/description/:id",
    "title": "Delete Description",
    "name": "DeleteDescription",
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
            "type": "Integer",
            "optional": false,
            "field": "descriptionId",
            "description": "<p>The id of the descriptioon you want to delete as a param on the url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Book-Delete-Example:",
          "content": "https://better-reads-bw.herokuapp.com/api/user/book/7",
          "type": "URL"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "Success",
            "description": "<p>A message about deleting the description from the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Deleted description 8 from user 2\"\n}",
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
            "description": "<p>The descriptionId or token is absent</p>"
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
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "No-Description-Error",
            "description": "<p>A message that the description was not saved for the user</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Error in deleting description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"errorMessage\": \"requires a descriptionId\"\n}",
          "type": "json"
        },
        {
          "title": "400-Error-Response-No-Token:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errorMessage\": \"No credentials provided\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n \"errorMessage\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response-No-Desc:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Description is not in list\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"errorMessage\": \"Internal Error: Could not delete description\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/userRouter.js",
    "groupTitle": "User"
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
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"amy\",\n  \"id\": 2,\n  \"books\": [\n    {\n      \"title\": \"Coffee Table Book About Coffee Tables\",\n      \"authors\": \"Cosmo Kramer\",\n      \"id\": 1,\n      \"rating\": 5,\n      \"ISBN\": \"658716874168\",\n      \"read\": 0\n    },\n    {\n      \"title\": \"Javascript Data Structures and Algorithms\",\n      \"authors\": \"Sammie Bae\",\n      \"id\": 3,\n      \"rating\": 1.5,\n      \"ISBN\": \"574554681541\",\n      \"read\": 0\n    },\n    {\n      \"title\": \"Pathfinder 2nd Edition\",\n      \"authors\": \"Logan Bonner, Jason Buhlmahn, Stephen Radney-MacFarland, and Mark Seifter\",\n      \"id\": 4,\n      \"rating\": null,\n      \"ISBN\": null,\n      \"read\": 0\n    }\n  ],\n  \"descriptions\": [\n    {\n      \"description\": \"A book to set on a table, and maybe it's self-referential\",\n      \"id\": 1,\n      \"books\": [\n        {\n          \"id\": 1,\n          \"title\": \"Coffee Table Book About Coffee Tables\",\n          \"authors\": \"Cosmo Kramer\",\n          \"rating\": 5,\n          \"ISBN\": \"658716874168\"\n        },\n        {\n          \"id\": 2,\n          \"title\": \"Webster's Dictionary\",\n          \"authors\": \"Webster\",\n          \"rating\": 2.5,\n          \"ISBN\": \"5758646574647\"\n        }\n      ]\n    },\n    {\n      \"description\": \"A book about some kind of Javascript structures or methods for problem solving\",\n      \"id\": 3,\n      \"books\": [\n        {\n          \"id\": 3,\n          \"title\": \"Javascript Data Structures and Algorithms\",\n          \"authors\": \"Sammie Bae\",\n          \"rating\": 1.5,\n          \"ISBN\": \"574554681541\"\n        }\n      ]\n    },\n    {\n      \"description\": \"A book about playing games with dragons and such\",\n      \"id\": 4,\n      \"books\": [\n        {\n          \"id\": 4,\n          \"title\": \"Pathfinder 2nd Edition\",\n          \"authors\": \"Logan Bonner, Jason Buhlmahn, Stephen Radney-MacFarland, and Mark Seifter\",\n          \"rating\": null,\n          \"ISBN\": null\n        }\n      ]\n    }\n  ]\n}",
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
    "url": "/api/user/book",
    "title": "Save Book",
    "name": "PostBookSave",
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
            "type": "integer",
            "optional": false,
            "field": "bookId",
            "description": "<p>The id of the book you want to save</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Book-Save-Example:",
          "content": "{\n \"bookId\": 7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Integer",
            "optional": false,
            "field": "Success",
            "description": "<p>The id of the saved book</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n7",
          "type": "json"
        },
        {
          "title": "Success-Response-Book-Already-Added:",
          "content": "HTTP/1.1 200 OK\n0",
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
            "description": "<p>The bookId or token is absent</p>"
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
            "description": "<p>Error in adding book</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"errorMessage\": \"requires a bookId\"\n}",
          "type": "json"
        },
        {
          "title": "400-Error-Response-No-Token:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errorMessage\": \"No credentials provided\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n \"errorMessage\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"errorMessage\": \"Internal Error: Could not save book\"\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"description\": \"A book about mars\",\n  \"books\": [\n    {\n      \"id\": 7,\n      \"title\": \"Calculus\",\n      \"authors\": \"Michael Spivak\",\n      \"rating\": 3.5,\n      \"ISBN\": \"565156416515648\"\n    },\n    {\n      \"id\": 3,\n      \"title\": \"Javascript Data Structures and Algorithms\",\n      \"authors\": \"Sammie Bae\",\n      \"rating\": 1.5,\n      \"ISBN\": \"574554681541\"\n    },\n    {\n      \"id\": 5,\n      \"title\": \"Harry Potter and the Half-Blood Prince\",\n      \"authors\": \"J.K. Rowling\",\n      \"rating\": 5,\n      \"ISBN\": \"4505406540650\"\n    },\n    {\n      \"id\": 1,\n      \"title\": \"Coffee Table Book About Coffee Tables\",\n      \"authors\": \"Cosmo Kramer\",\n      \"rating\": 5,\n      \"ISBN\": \"658716874168\"\n    },\n    {\n      \"id\": 4,\n      \"title\": \"Pathfinder 2nd Edition\",\n      \"authors\": \"Logan Bonner, Jason Buhlmahn, Stephen Radney-MacFarland, and Mark Seifter\",\n      \"rating\": null,\n      \"ISBN\": null\n    }\n  ]\n}",
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
            "description": "<p>The description or token is absent</p>"
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
          "content": "HTTP/1.1 400 Bad Request\n{\n \"errorMessage\": \"Missing description\"\n}",
          "type": "json"
        },
        {
          "title": "400-Error-Response-No-Token:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errorMessage\": \"No credentials provided\"\n}",
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
  },
  {
    "type": "put",
    "url": "/api/user/book",
    "title": "Put Book",
    "name": "PutBook",
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
            "type": "Integer",
            "optional": false,
            "field": "bookId",
            "description": "<p>The id of the book you want to delete</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "read",
            "description": "<p>The boolean of whether the book has been read or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Book-Put-Example:",
          "content": "{ \n\t \"bookId\": 7,\n\t \"changes\": {\"read\": true}\n}",
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
            "field": "Success",
            "description": "<p>The updated book for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Updated book 6 for user 2\"\n}",
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
            "description": "<p>The bookId or token is absent</p>"
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
        "404": [
          {
            "group": "404",
            "type": "String",
            "optional": false,
            "field": "No-Book-Error",
            "description": "<p>A message that the book was not saved for the user</p>"
          }
        ],
        "500": [
          {
            "group": "500",
            "type": "Object",
            "optional": false,
            "field": "internal-server-error",
            "description": "<p>Error in updating book</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "400-Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n \"errorMessage\": \"requires a bookId\"\n}",
          "type": "json"
        },
        {
          "title": "400-Error-Response-No-Token:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"errorMessage\": \"No credentials provided\"\n}",
          "type": "json"
        },
        {
          "title": "401-Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n \"errorMessage\": \"Invalid Credentials\"\n}",
          "type": "json"
        },
        {
          "title": "404-Error-Response-No-Book:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Book is not in list\"\n}",
          "type": "json"
        },
        {
          "title": "500-Error-Response:",
          "content": "HTTP/1.1 500 Internal-Server-Error\n{\n \"errorMessage\": \"Internal Error: Could not update book\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/userRouter.js",
    "groupTitle": "User"
  }
] });
