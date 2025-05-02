# socket-io

npm i socket.io
npm i @types/socket.io @types/socket.io-client


# client initial polling connection

```
GET https://server.com/socket.io/?EIO=3&transport=polling&t=ML4jUwU&b64=1
```

# server

```
{
  "type": "open",
  "data": {
    "sid": "36Yib8-rSutGQYLfAAAD",  // L’ID de la session
    "upgrades": ["websocket"],      // La liste des upgrades de protocoles disponibles
    "pingInterval": 25000,          // L’intervalle pour le ping du heartbeat
    "pingTimeout": 20000             // Le timeout pour le ping du heartbeat
  }
}
```
response is encoded

```
'96:0{"sid":"hLOEJXN07AE0GQCNAAAB","upgrades":["websocket"],"pingInterval":25000,"pingTimeout":20000}2:40'
```

# client websocket connection

default pollig connection is kept if client cannot establish the websocket connection

```
GET wss://server.com/socket.io/?EIO=3&transport=websocket&sid=36Yib8-rSutGQYLfAAAD
```


