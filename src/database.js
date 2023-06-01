const{createPool}=require('mysql');
const pool=createPool({
host:'localhost',
user:'root',
password:'aliiqbal786',
database:'record',
connectionLimit:10
});
pool.query('select * from courses',(err,result,field)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})