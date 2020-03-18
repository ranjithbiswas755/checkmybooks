username//----------------------------------render to add book page----------------------------------------
exports.addbook = function(req, res){

    var userId = req.session.userId;
    if(userId != null){
       res.render('addbook.ejs');
       return;
    }
 };

 //--------------------------------add a book-------------------------------------------------------
 exports.addbookdetails = function(req, res){
   var user = req.session.user;
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var bookName= post.bookName;
      var bookDescription= post.bookDescription;
      var author= post.author;
      var price= post.price;

      var sql = "INSERT INTO `books`(`bookName`,`bookDescription`,`author`, `price`) VALUES ('" + bookName + "','" + bookDescription + "','" + author + "','" + price + "')";

      var query = db.query(sql, function(err, result) {
         console.log(query);
         message = "Book has been added successfully!";
         res.send({
               "status": 201,
               "user": user,
               "body": result
         });
      });

   } else {
      res.render('profile');
   }
};
//----------------------------------dashboard page functionality----------------------------------
           
exports.dashboard = function(req, res, next){
           
   var userId = req.session.userId;
   console.log('ddd='+userId);
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `books`";


   db.query(sql, function(err, results){
      if(err) throw err;
      res.render('dashboard.ejs', {books:results});    
   });       
};
//------------------------------------book description page------------------------------------------

exports.bookdescription = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   db.query('SELECT * FROM `books` WHERE `bookId`=?',[req.params.bookId], function(err, results){
if(err) throw err;
res.render('bookdescription.ejs',{books: results});
   
   });
};