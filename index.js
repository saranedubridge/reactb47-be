// Simple web Server

const http= require('http');

let note =[
{
    id:1,
    content:'backend server using nodejs',
    important:true
},
{
    id:2,
    content:'backend restful using nodejs',
    important: false

}

];


const app = http.createServer((request,response)=>{

    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(note));

});

const PORT =3001;

app.listen(PORT);
console.log(`server running on port ${PORT}`);