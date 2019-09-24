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
            "description": "<p>An object with the user id and username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n \"id\": 8,\n \"username\": \"doctest\"\n}",
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
  }
] });
