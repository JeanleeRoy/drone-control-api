# drone-control-api

## Run the project

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build the production server to `./dist/`           |
| `npm run start`        | Starts production server                           |

* Do not forget to load all the enviroment variables to run the project. You can create an `.env` file putting all the variables listed on `.env.example`

## Run the project with Docker

Build the docker image

```
docker build -t drone-control-api .
```

Run a docker container with the created image, the project will be running on port `80` from the host machine

```
docker run -it -p 80:3000 --name drone-control-api drone-control-api 
```
