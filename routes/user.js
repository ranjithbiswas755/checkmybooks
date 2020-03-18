
//---------------------------------------------signup page call------------------------------------------------------
exports.signup = function(req, res){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var name= post.name;
      var contact= post.contact;
      var email= post.email;
      var password= post.password;

      var sql = "INSERT INTO `users`(`name`,`contact`,`email`, `password`) VALUES ('" + name + "','" + contact + "','" + email + "','" + password + "')";

      var query = db.query(sql, function(err, result) {
         console.log(query);
         message = "Succesfully! Your account has been created.";
         res.render('login.ejs',{message: message});
      });

   } else {
      res.render('signup');
   }
};
 
//-----------------------------------------------login page call------------------------------------------------------
exports.login = function(req, res){
   var message = '';
   var sess = req.session; 

   if(req.method == "POST"){
      var post  = req.body;
      var email= post.email;
      var password= post.password;
     
      var sql="SELECT userId, name, email FROM `users` WHERE `email`='"+email+"' and password = '"+password+"'";                           
      db.query(sql, function(err, results){      
         if(results.length){
            req.session.userId = results[0].userId;
            req.session.user = results[0];
            console.log(results[0].userId);
            res.redirect('/home/dashboard');
         }
         else{
            message = 'Wrong Credentials.';
            res.render('index.ejs',{message: message});
         }
                 
      });
   } else {
      res.render('index.ejs',{message: message});
   }
           
};

//------------------------------------logout functionality----------------------------------------------

exports.logout=function(req,res){
   
   req.session.destroy(function(err) {
      res.redirect("/login");
   })
};
//--------------------------------render user details after login--------------------------------

exports.profile = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `userId`='"+userId+"'";          
   db.query(sql, function(err, result){  
      res.render('profile.ejs',{data:result});
   });
};
//--------------------------render user to update details after login-----------------------------
exports.updateprofile = function(req, res){

   var userId = req.session.userId;
   if(userId != null){
      res.render("updateprofile.ejs");
   }
};
//---------------------------render user to about us page after login-----------------------------
exports.aboutus = function(req, res){

   var userId = req.session.userId;
   if(userId != null){
      res.render("aboutus.ejs");
   }
};
//-----------------------render user to privacy policy page after login---------------------------
exports.privacypolicy = function(req, res){

   var userId = req.session.userId;
   if(userId != null){
      res.render("privacypolicy.ejs");
   }
};
//-----------------------render user to terms and conditions page after login---------------------
exports.termsconditions = function(req, res){

   var userId = req.session.userId;
   if(userId != null){
      res.render("termsconditions.ejs");
   }
};
//--------------------------------update users details after login---------------------------------
exports.updateuserprofile=function(req,res){
   var user = req.session.user;
   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/home/dashboard");
      return;
   }
   message = '';
   if(req.method == "PUT"){
      var put  = req.body;
      var name= put.name;
      var contact= put.contact;
      var email= put.email;
      var password= put.password;

      var sql = "update users set name='"+name+"',contact='"+contact+"',email='"+email+"',password='"+password+"' where `userId`='"+userId+"'"; 

      var query = db.query(sql, function(err, result) {
         console.log(query);
         message = "Succesfully! Your account has been updated.";
         res.send({
            "status": 201,
            "user": user,
            "body": result
         });
      });
   } else {
      res.render('dashboard.ejs');
   }
};

//--------------------------------------delete a user profile---------------------------------------
exports.deleteuser = function(req, res){
   var user = req.session.user;
   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }
   message = '';
   if(req.method == "DELETE"){
      var sql="DELETE FROM `users` WHERE `userId`='"+userId+"'";
      db.query(sql, function(err, result){
         res.send({
            "status": 202,
            "user": user,
            "body": result
         });
      });
   } else {
      res.render('profile.ejs');
   }
};