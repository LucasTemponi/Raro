import * as net from 'net'

var client = new net.Socket();
client.connect(4040, '8.tcp.ngrok.io', function () {
    console.log('Connected');
    client.write('Hello, server! Love, Client.');
});

client.on('data', function (data) {
    console.log('Received: ' + data);
    client.destroy(); // kill client after server's response
});

client.on('close', function () {
    console.log('Connection closed');
});