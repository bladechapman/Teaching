
# Instructions for Experimenting

To start up the server in debug mode:

```
node debug lesson.js
```

Debug mode commands:
- `cont`: continues the program if it's been paused
- `next`: moves to the next line of the program and pauses if the program has been paused
- `repl`: opens a command line interface at the place where you are paused

To pause a program, add a `debugger` statement in the code and run it in
debug mode. The program will pause when the debugger statement is reached. For example:
```
// when run in debug mode, this script will pause when `i` is 3
for (var i = 0; i < 5; i++) {
  if (i === 3) {
    debugger
  }
}
```

To send a GET request from your browser:
- Navigate to localhost:3000

To use `curl` to send requests to your browser:
- `curl localhost:3000/` (simple GET request)
- `curl -X POST -H "Content-Type: application/json" -d '{"key": "value"}' localhost:3000/somePath` (POST request with JSON body data)
