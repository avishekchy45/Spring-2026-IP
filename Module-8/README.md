# Module 8 Notes: Web Services and APIs

## Code Link: [Github](https://github.com/avishekchy45/Spring-2026-IP/tree/main/Module-8)

## What is a Web Service?

A **web service** is a software service that allows applications to communicate over a network using standardized protocols.

For example:

```text
Frontend / Mobile App
        |
        | HTTP Request
        ↓
      API
        |
        ↓
   Server / Data
        |
        | JSON Response
        ↓
Frontend / Mobile App
```

- Client
- Server
- API
- Endpoint
- Request
- Response
- HTTP
- JSON
- Resource

A useful distinction:

> **API** = the interface through which software communicates.
> **Web service** = a service accessible through web/network protocols.

---

## REST Architecture

**REST (Representational State Transfer)** is an architectural style for designing networked applications.

The key idea is to represent application data as **resources**.

For example, for a football application:

```text
/api/players
/api/players/10
/api/teams
/api/teams/5
```

Here:

- `players` → resource collection
- `10` → particular player
- `/api/players/10` → endpoint for player 10

### Important REST concepts

1. **Resources**
2. **URIs/URLs**
3. **HTTP methods**
4. **Stateless communication**
5. **Representations**, commonly JSON
6. **Client-server separation**
7. **Uniform interface**

### REST example

| Operation       | HTTP Method | Endpoint         |
| --------------- | ----------- | ---------------- |
| Get all players | GET         | `/api/players`   |
| Get one player  | GET         | `/api/players/1` |
| Create player   | POST        | `/api/players`   |
| Replace player  | PUT         | `/api/players/1` |
| Delete player   | DELETE      | `/api/players/1` |

HTTP defines these methods with different semantics: GET retrieves a resource, POST submits data and can cause a state change, PUT replaces a resource representation, and DELETE removes a resource. ([HTTP request methods][httprequest])

```text
PUT    → replace/update the complete resource
PATCH  → partially modify a resource
```

---

## HTTP Request and Response

### Request

```text
POST /api/players HTTP/1.1
Content-Type: application/json

{
    "name": "Takeshi Goda Gian",
    "position": "Forward"
}
```

### Response

```text
HTTP/1.1 201 Created
Content-Type: application/json

{
    "message": "Player created",
    "player": {
        "id": 1,
        "name": "Takeshi Goda Gian",
        "position": "Forward"
    }
}
```

### Request contains

- HTTP method
- URL/endpoint
- Headers
- Query parameters/path parameters
- Request body

### Response contains

- Status code
- Headers
- Response body

---

## Essential HTTP Status Codes

| Code  | Meaning               | Example                 |
| ----- | --------------------- | ----------------------- |
| `200` | OK                    | Successful GET/PUT      |
| `201` | Created               | Successful POST         |
| `204` | No Content            | Successful DELETE       |
| `400` | Bad Request           | Invalid input           |
| `401` | Unauthorized          | Authentication required |
| `403` | Forbidden             | Access denied           |
| `404` | Not Found             | Resource doesn't exist  |
| `500` | Internal Server Error | Server-side error       |

---

## JSON Responses

```json
{
  "id": 101,
  "name": "Nobisuke Nobi",
  "team": "Real Madrid",
  "position": "Forward"
}
```

An API can return an array:

```json
[
  {
    "id": 1,
    "name": "Takeshi Goda Gian"
  },
  {
    "id": 2,
    "name": "Nobisuke Nobi"
  }
]
```

---

## Basic API Development with Node.js + Express

## Setup

- Node.js
- Postman

Create a project:

```bash
mkdir module8-api
cd module8-api

npm init -y
npm install express
```

Create:

```text
module8-api/
│
├── server.js
└── package.json
```

Run:

```bash
node --watch server.js
```

Then visit:

```text
http://localhost:3000
```

Expected response:

```json
{
  "message": "Welcome to the Module 8 API"
}
```

Express routing follows the general structure `app.METHOD(PATH, HANDLER)`, where the method corresponds to the HTTP method and the handler processes the matching request. ([Express.js][express-js-routing])

For POST/PUT requests,

```text
Request Body
     ↓
req.body
     ↓
Server processing
     ↓
JSON response
```

Postman supports sending body data in formats including raw JSON, form-data, and URL-encoded data. ([Postman Docs][postman-requests])

**For POST:**

```text
POST http://localhost:3000/api/players
```

Body → **raw → JSON**

```json
{
  "name": "Suneo Honekawa",
  "position": "Forward",
  "number": 7
}
```

**For PUT:**

```text
PUT http://localhost:3000/api/players/2
```

Body → **raw → JSON**

```json
{
  "name": "Sensei",
  "position": "Goalkeeper",
  "number": 9
}
```

Express provides route handlers corresponding to these HTTP methods, including `app.get()`, `app.post()`, `app.put()`, and `app.delete()`.

---

## REST API Structure

```text
                 REST API
                    │
          ┌─────────┴─────────┐
          │                   │
       Resource            Endpoint
       "players"        /api/players
                              │
                 ┌────────────┼────────────┐
                 │            │            │
                GET          POST         ...
                 │            │
              Read          Create
```

And then:

```text
GET     /api/players       → Get all
GET     /api/players/1     → Get one
POST    /api/players       → Create
PUT     /api/players/1     → Update
DELETE  /api/players/1     → Delete
```

This is essentially the **CRUD** pattern:

```text
Create → POST
Read   → GET
Update → PUT
Delete → DELETE
```

Postman can create and send API requests, specify URLs, methods, headers, parameters and body data, and inspect the returned response.

Postman also allows requests to be saved into collections and basic tests to be written against API responses.

### Optional basic test

In Postman's **Tests** area:

```javascript
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});
```

Another:

```javascript
pm.test("Response is JSON", function () {
  pm.response.to.be.json;
});
```

---

## API Error Handling

```text
Success
   ↓
2xx

Client error
   ↓
4xx

Server error
   ↓
5xx
```

---

## WebSocket / Socket Programming

REST normally follows a request-response model:

```text
Client ───── Request ─────→ Server
Client ←──── Response ───── Server
```

For example:

```text
GET /api/players
        ↓
Server processes request
        ↓
JSON response
```

With WebSocket:

```text
Client ═════════════════ Server
       ←→ persistent
          connection
       ←→ messages
```

A WebSocket provides a two-way interactive communication session between browser and server, allowing the server and client to exchange messages without repeatedly polling for responses. ([WebSocket API][websocket])

### Typical applications

- Chat applications
- Online games
- Live sports scores
- Stock-price updates
- Notifications
- Collaborative applications
- Real-time dashboards

---

## Basic WebSocket Client ([Code](websocket.html))

You can see the browser-side API without immediately introducing a complicated server.

Basic events:

```text
onopen
onmessage
onclose
onerror
```

and:

```javascript
socket.send(...)
```

- Install the `ws` package:

  ```bash
  npm install ws
  ```

- Create `websocket-server.js`

- Run:

  ```bash
  node websocket-server.js
  ```

Then open the HTML page.

The communication becomes:

```text
Browser
   │
   │ "Hello"
   ↓
WebSocket Server
   │
   │ "Server received: Hello"
   ↓
Browser
```

---

## REST vs WebSocket

| Feature            | REST API                         | WebSocket              |
| ------------------ | -------------------------------- | ---------------------- |
| Communication      | Request/response                 | Two-way                |
| Connection         | Usually individual HTTP requests | Persistent connection  |
| Server pushes data | Not naturally                    | Yes                    |
| Best for           | CRUD/data APIs                   | Real-time applications |
| Example            | Student management API           | Chat application       |
| Data               | Often JSON                       | Text/binary/JSON       |
| Typical protocol   | HTTP/HTTPS                       | WebSocket (`ws`/`wss`) |

---

## Recommended Hands-on Lab Exercises

By the end of Module 8, complete the following practical task:

1. Build a **Football Team REST API**:

```text
/api/players
/api/players/:id
```

Implement the complete CRUD operations and then use **Module 7 Fetch API knowledge** to create a small frontend that consumes the API:

```text
                 Module 8
              REST API
                  ↑
                  |
             Node + Express
                  ↑
                  |
              JSON data
                  ↑
                  |
            Module 7 Frontend
          HTML + CSS + JS
```

[express-js-routing]: https://expressjs.com/en/starter/basic-routing/ "Basic routing · Express.js"
[httprequest]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods "HTTP request methods - HTTP | MDN"
[postman-requests]: https://learning.postman.com/docs/use/send-requests/create-requests/parameters "Send parameters and body data with API requests in Postman | Postman Docs"
[websocket]: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/index.html "WebSocket API (WebSockets) - Web APIs | MDN"
