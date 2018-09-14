# Game Of Drones Api Service
The api service was been created with NodeJS and Koa framework, this api use an configuration file called **.rpsenv** where loads the configuration environment for the MongoDB and Redis databases.

## Services
The api expose the next services:
- User services
- Room Services
- HealthyChecks

This list of services correspond to each domain of the application, in this case, we have two domains the **user** and **room**.

## Desing
The API was been creted with the module pattern, so the api has the next module dependencies.
- [User Module](https://github.com/gh0stl1m/rps-user-module): This module have been created with the architecture called **Clean Architecture** and expose the user interfaces that are used by the API. For the propuse of this game, this module expose the next methods.
-- Create: Method used to create an user.
-- ReadById: Method used to read an user by id.
-- ReadStatistics: Method used to read the user statistics.
-- ReportStatistics: Method used to notify the victories or defeats of the user.
- [Room Module](https://github.com/gh0stl1m/rps-room-module): This module have been created with the architecture called **Clean Architecture** and expose the user interfaces that are used by the API. For the propuse of this game, this module expose the next methods.
-- Create: Method used to create a room.
-- ReadById: Method used to read a room by id.
-- AddPlayer: Method used to add a player to room.
-- AddGameRound: Method used to add game round to the room
- [RealTime Module](https://github.com/gh0stl1m/rps-realtime-module): This module have been created with the called **Clean Architecture** and expose the websocket server and all the events of the application, based on an [Event Driven Architecture](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d), this events will be used to notify all the user interactions with the game.

The schema design of the database uses the no relational design practices so for this game, you can see the [diagram ER](https://drive.google.com/file/d/1VGlcs2IUCYxpXpJPq6KwbzhGItse_tj9/view?usp=sharing) the backend application.

## Exectution
To initialize the API server you can use the command npm start.
> **note:** Is very important to verify, that the environment file .rpsenv is in the $HOME directory with the mongoDB and redis variables environments, also is important initialize the mongoDB and Redis database servers before to start the API server.

Before to run the server you need to install all the API dependencies with the command:
```
npm install
```

You can run the server with this command:
```
npm start
```

This command will expose two ports
- 41000:  This port is the API server.
- 42050: This port is the websocket server.