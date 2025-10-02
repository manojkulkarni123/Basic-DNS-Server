const dgram = require('node:dgram');
const dnsPacket = require('dns-packet');

const server = dgram.createSocket('udp4');
const db ={
    'manojk.og':{
        type:"A",
        data:'67.1.1.1'}
        ,
    'blog.manojk.og':{
       type:"CNAME",
       data: '67.1.1.2'
    }
};

server.on('message',(msg,info)=>{
    const incomingreq = dnsPacket.decode(msg);
    const ipFromDb = db[incomingreq.questions[0].name];

    const ans =dnsPacket.encode({
        type:'response',
        id:incomingreq.id,
        flags:dnsPacket.AUTHORITATIVE_ANSWER,
        questions:incomingreq.questions,
        answers:[{
            type:ipFromDb.type,
            name:incomingreq.questions[0].name,
            class:'IN',
            data:ipFromDb.data
        }]
    }) 

    server.send(ans,info.port,info.address);

});



server.bind(5354, "127.0.0.1", ()=> console.log('UDP Server is running on port 5354'));
server.on('error',(err)=>{
    console.log(`server error:\n${err.stack}`);
    server.close();
})


