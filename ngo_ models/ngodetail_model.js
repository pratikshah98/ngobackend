var db=require('../dbconnection');
var Ngo={
        
     getLogin:function(email_id,item,callback){

        return db.query("Select * from ngo_details_tbl where ngo_email=? And ngo_password=? ",[email_id,item.ngo_password],callback)
     },
     getNgoDetailById:function(email_id,callback){

        return db.query("Select * from ngo_details_tbl where ngo_email=? ",[email_id],callback)
     },


    
}
module.exports=Ngo;
