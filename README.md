# 🧩 nomoex

Quickly bootstrap an Express.js + MongoDB server with CORS support using a single line.

`vs-nomoex` is a tiny utility for setting up a development-ready Node.js backend with:
- Express.js
- Mongoose (MongoDB)
- CORS
- JSON parsing


---




## 📦 Installation And UseCase

```bash
npm install vs-nomoex
```

```bash
npm install vs-nomoex
```

```bash
import {nomoex} from "vs-nomoex"
```

```bash
nomoex("Your Mongo URL");

#******************************OR**********************************#

nomoex("mongodb://localhost:27017/myApp", 5200, "http://localhost:5173");

#*****************************************************************#

The nomoex function takes up to three parameters. The first parameter is required, while the other two are optional and come with default values.

The first parameter is the MongoDB connection URL, which is mandatory. This is the URI used to connect your backend to a MongoDB database. For example: "mongodb://localhost:27017/myApp".

The second parameter is the port number on which the Express.js server will run. If you don’t provide it, the server will automatically run on port 5200.

The third parameter is the CORS origin, which defines which frontend URLs are allowed to access your backend. By default, it is set to true, meaning all origins are allowed. You can pass a specific origin string like "http://localhost:5173" to allow only that frontend.

```