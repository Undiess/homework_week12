var mysql = require('mysql');
var inquirer = require("inquirer");




var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1908',
  database : 'employees_db'
});


function viewdepartment(){
    connection.connect(function(err){
        if (err) throw err; 
        console.log("connected as id " + connection.threadId + "\n")

        connection.query('SELECT * FROM department', function(err,res){
            if (err) throw err;
            console.log(res);
            connection.end();
        })
    })
}

function viewemployees(){
    connection.connect(function(err){
        if (err) throw err; 
        console.log("connected as id " + connection.threadId + "\n")

        connection.query('SELECT * FROM employee', function(err,res){
            if (err) throw err;
            console.log(res);
            connection.end();
        })
    })
}

function viewroles(){
    connection.connect(function(err){
        if (err) throw err; 
        console.log("connected as id " + connection.threadId + "\n")

        connection.query('SELECT * FROM role', function(err,res){
            if (err) throw err;
            console.log(res);
            connection.end();
        })
    })
}

function addDepartment(){
    inquirer.prompt([
        {
            name: 'name',
            message:'what is the department name: ',
           
        }
    ])
    .then(answers=>{
        
        connection.connect(function(err){
            if (err) throw err; 
            console.log("connected as id " + connection.threadId + "\n")

            connection.query('INSERT INTO department(name) VALUES("'+answers.name+'")', function(err,res){
                if (err) throw err;
                console.log(res);
                connection.end();
            })
        })
    })
}
 
inquirer.prompt([
    {
    type: 'list',
    name: 'command',
    message: 'What would you like to do',
    choices: ['View departments', 'View employee','View roles','Add departments', 'Add employee','Add roles'],
    },
])
.then(answers=>{

    switch (answers.command){
        case 'View departments':
            viewdepartment();
        break 
        
        case 'View employess':
            viewemployees();
        break

        case 'View roles':
            viewroles();
        break 

        case 'Add departments':
            addDepartment()
        break 

        case 'Add employee':
            
        break 

        case 'Add roles':
            
        break 

    }
})


    
