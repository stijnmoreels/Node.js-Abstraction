# Node.js-Abstraction
This repository describes a clear and abstract way of handling Repositories, Models &amp; Middleware.
MongoDb is used as database for this example (mongoose as schema).

**Abstraction** is always a challenge for developers & software designers. The abstraction way of looking at software is often forgotten, and that's whay it's always a good practice to keep abstraction in mind.

With this example in mind, you can create a scalable application with just _ONE_ Generic Model Module and _ONE_ Generic Repository Module. It will not only give your team a greater understanding of what is going on in the Backend, it certainly will increase the readability of your code.

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

##### Usage
Feel free to work upon and adapt for more functionalities.

```javascript
// Without extra arguments (gets all items)
employeeRepository.getAll(function(error, employees) { });

// With extra arguments (where & sort)
employeeRepository.getAll({ where: { name: 'Bob' }, sort: 'name' }, function(error, employees) { });
```


### Generic Middleware
As finishing touch, a Generic Middleware library (Only one implementation). I always wanted a middleware library that I could use in different situations, and not only ONE middleware library for ONE usage. 
This solutions provides a middleware library for loading a single entity, during the initialisation of the library, a function must be passed by in the constructor (```javascript employeeRepository.getOne ```). 
This function wil be executed in the middleware.

```javascript
var employee = require('./model.js')('Employee');
var employeeRepository = require('./genericRepository.js')(employee);
var loadEmployee = require("./loadModel.js")(employeeRepository.getOne);
```

Thank you for supporting Abstraction!
