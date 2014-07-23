# UpcaseMe


This is a simple helper to upcase a text in the browser,
this code is a example to use node.js, express and socket.io.

This application is a simple experiment.

## Installation

First need to clone the repo, next you can enter to the folder
and run the node install.

```
$ git clone git@github.com:asccigcc/upcase_me.git
$ cd upcase_me
$ node install
```

To run the application in development only execute nodemon,
this detect the app initializer.

```
$ nodemon
```

# Deploy in heroku

If you need to deploy inside heroku, only need add the websocket function like:

```
$ heroku labs:enable websockets -a <yourapp>
```

And done, is working now.

# How to contribute

Interested in adding a new feature to the application? Awesome!

* First clone the repository
* Write your new feature
* Once your code is passing and re-factored send a pull request


# LICENSE

The MIT License

Copyright (c) 2014 Pastorinni Ochoa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
