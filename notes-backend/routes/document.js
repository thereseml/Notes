var express = require('express');
var router = express.Router();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3307",
  user: "notes",
  password: "notes",
  database: "notes"
})


// hämtar dokumenten
router.get('/showDocument', function(req, res, next) {

  req.app.locals.con.connect(function(err) {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT * FROM documents`

    req.app.locals.con.query(sql, function(err, result) {
      if (err) {
        console.log(err);
      }

      console.log("result", result);
      res.send(result);
    });
  })

});


// postar nya dokument 
router.post('/newDocument', function(req, res, next) {

 req.app.locals.con.connect(function(err) {
    if (err) {
      console.log(err);
    }

    let sql = `INSERT INTO documents (documentTitle, documentText) VALUES ("${req.body.title}", "${req.body.text}")`

    req.app.locals.con.query(sql, function(err, result) {
      if (err) {
        console.log(err);
      }
      res.json(result)
    });
  }) 

  console.log(req.body.title);
});


// ändrar dokumenten 
router.put('/changeDocument', function(req, res, next) {

  req.app.locals.con.connect(function(err) {
    if (err) {
      console.log(err);
    }
  
    let sql = `UPDATE documents SET documentTitle="${req.body.title}", documentText= "${req.body.text}" WHERE id= "${req.body.id}"`

    req.app.locals.con.query(sql, function(err, result) {
      if (err) {
        console.log(err);
      }

        res.json(result)
    });
  })
});

// raderar dokument
router.delete('/deleteDocument', function(req, res, next) {

  req.app.locals.con.connect(function(err) {
    if (err) {
      console.log(err);
    }

    let title = "Test document från post"
    let text = "Här kommer lite rolig text till dig"
  
    let sql = `DELETE FROM documents WHERE id="4"`

    req.app.locals.con.query(sql, function(err, result) {
      if (err) {
        console.log(err);
      }

      console.log("result", result);
    });
  })

  res.send('respond with a resource');
});



module.exports = router;
