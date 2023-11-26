// Simple web Server
const express= require('express')
const app = express();

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

},
{
    id:2,
    content:'backend restful using nodejs',
    important: false

}


];



const PORT =3001;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);

});

