# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous route handlers.  When an asynchronous operation within a route throws an error and isn't properly caught, the server can crash. This example shows the problem and its solution.

## Bug

The `bug.js` file contains an Express.js server with a route that performs an asynchronous operation.  This operation might throw an error, but the code lacks proper error handling, leading to a server crash.

## Solution

The `bugSolution.js` file demonstrates how to correctly handle this type of error using a `try...catch` block or `.catch()` method to prevent the server from crashing.  Proper error handling logs the error and sends an appropriate response to the client.
