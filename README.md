threejs-sockets
===============

To see the code in action you need to boot up using node:

- cd to directorty
- run `node server.js`
- navigate to http://localhost:4000/client.html
- Using another browser (or incognito mode), navigate to http://localhost:4000/watcher.html

What you should see, is the client code animating a 3d box. The rotation values are sent to the server, 
the server then broadcasts the new rotation values to the other clients, who update accordingly
