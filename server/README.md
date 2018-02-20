# Node Server

<br>

## Useful Tools

1. <a href="https://nodejs.org/en/  " target="_blank">Node.js</a>

2. <a href="https://yarnpkg.com/en/docs/install" target="_blank">Yarn</a>

3. <a href="https://www.getpostman.com/" target="_blank">Postman</a>

<br>

---

## What are these 3 tools?

### Node.js: Install node on your computer. It's necessary for adding external packages of javascript, html, css & to your projects. These are known as dependences.

### Yarn: Dependence management tool. This tool allows for the downloading and management of all dependences with node. Node has a built in tool (npm), but it's not as performat or reliable as yarn.

### Postman: Api testing tool. Once a server is up and running, you can target it's api's with postman.

<br>

---

## Running node server

```bash
# From the project root, cd into the server folder

cd server


# Install dependences from node with yarn. This will only needed to be performed once

yarn


# Two options to run the server via cmd

node server.js
# or
yarn run server

# Yarn run server: was already included into the package.json file. See 'scripts' inside package.json
```
