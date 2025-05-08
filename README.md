# protocols


## client initial polling connection

```
GET https://server.com/socket.io/?EIO=3&transport=polling&t=ML4jUwU&b64=1
```

## server response

```json
{
  "type": "open",
  "data": {
    "sid": "36Yib8-rSutGQYLfAAAD",  // session id
    "upgrades": ["websocket"],      // protocol available
    "pingInterval": 25000,          // heartbeat interval
    "pingTimeout": 20000            // heartbeat timeout
  }
}
```
response is encoded

```
'96:0{"sid":"hLOEJXN07AE0GQCNAAAB","upgrades":["websocket"],"pingInterval":25000,"pingTimeout":20000}2:40'
```

## client websocket connection

default polling connection is kept if client cannot establish the websocket connection

```
GET wss://server.com/socket.io/?EIO=3&transport=websocket&sid=36Yib8-rSutGQYLfAAAD
```

