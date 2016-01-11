# Node.js-Abstraction
This repository describes a clear and abstract way of handling Repositories, Models &amp; Middleware.
MongoDb is used as database for this example (mongoose as schema).

Abstraction is always a challenge for developers & software designers. The abstraction way of looking at software is often forgotten, and that's whay it's always a good practice to keep abstraction in mind.

With this example in mind, you can create a scalable application with just ONE Generic Model Module and ONE Generic Repository Module. It will not only give your team a greater understanding of what is going on in the Backend, it certainly will increase the readability of your code.

### Generic Model
Generic Abstract Model with flexible schema injection (name of the model as argument).

```javascript
// Default Schema Path: './schema/{name}Schema.js'
var employee = require('./model.js')('Employee');

// Custom Schema Path: './schemas/schemaEmployee.js'
var employee = require('./model.js')('Employee', './schemas/schemaEmployee.js');
```

### Generic Repository
Generic Repository with a flexible model injection, that's why it called a Generic Repository.

```javascript
var employee = require('./model.js')('Employee');
var employeeRepository = require('./genericRepository.js')(employee);
```

### Generic Middleware
As finishing touch, a Generic Middleware library (Only one implementation). I always wanted a middleware library that I could use in different situations, and not only ONE middleware library for ONE usage.

```javascript
var employee = require('./model.js')('Employee');
var employeeRepository = require('./genericRepository.js')(employee);
var loadEmployee = require("./loadModel.js")(employeeRepository);
```

Thank you for supporting Abstraction!
