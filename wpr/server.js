const express = require('express');
const app = express();
const db = require('./dbsetup.js');


const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', './views');


//set up database
db.connect((error) => {
    if (error) {
        console.error("Database connection failed: ", error.sqlMessage);
    } else {
        console.log("Welcome to my database.");
    }
});
// controller
// register


app.post('/server', async (req, res) => {
    const action = req.body.action;
   
    
    

    if (action === 'register') {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const passwordCf = req.body.password_cf;

        if (password !== passwordCf) {
            
            return res.render('register', { message:"Passowrd is not match" }); // Pass message
        }

        db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
            if (error) {
                
                return res.render('register', { message:"Internal server error" }); 
            }

            if (results.length > 0) {
                
                return res.render('register', { message: " Email has been used" }); 
            }

            if (password.length < 6) {
                
                return res.render('register', { message:" Password must have at least 6 characters" }); 
            }

            

            db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], (error, results) => {
                if (error) {
                    
                    return res.status(500).render('register', { message :"Server error" }); 
                }
                
                res.render('register', { message:"Register successs" }); 
            });
        });
    } else if (action === 'login') {
        const email = req.body.email;
        const password = req.body.password;
        

        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (err || results.length === 0) {
                
                return res.render('index', { message:"Invalid email or password" }); 
            }

            const user = results[0];
            
            if (password!==user.password) {
            
                return res.render('index', { message:"Password is not match" }); 
            }

            
            res.cookie('userId', user.ID, { httpOnly: true, maxAge: 3600000 }); 
            res.redirect('/inbox');
        });
    } 
    //logout
    
    
       else if(action=='logout'){
        res.clearCookie('userId'); 
        res.redirect('/'); 
    }
    
   //send email
else if (action == 'send') {
    const senderId = req.cookies.userId;
    console.log(senderId);
    const recipientEmail = req.body.email; // Access the recipient email correctly
    const subject = req.body.subject;
    const body = req.body.body;
    
    // Check if the recipient exists
    db.query('SELECT id FROM users WHERE email = ?', [recipientEmail], (err, results) => {
        if (err) {
            return res.status(500).render('Compose', { message: "Server error" });
        }
        
        // Check if no matching user was found
        if (results.length === 0) {
            return res.render('Compose', { message: "Recipient email not found" });
        }

        const recipientId = results[0].id;
        console.log(recipientId);

        // Insert the message
        db.query(
            'INSERT INTO messages (sender_id, recipient_id, subject, body) VALUES (?, ?, ?, ?)',
            [senderId, recipientId, subject, body],
            (err) => {
                if (err) {
                    return res.status(500).render('Compose', { message: "Failed to send message." });
                }
                res.send('Message has been sent, <a href="Compose">click here</a> to return back');
            } 
        );
    });
}

    
   
    }) 
    //inbox
    app.get('/inbox', authenticate,(req, res)=>{
        const userId = req.cookies.userId;
        db.query('select users.name as sender_name, messages.subject,created_at from messages join users on users.id=sender_id where recipient_id= ? order by created_at desc;',
            [userId], (err, messages)=>{
                if(err){return res.status(500).render('inbox', { messages: [], message: "Error loading inbox." });}
                res.render('inbox',{ messages});
            }
        )
    }) ;      
    //outbox
    app.get('/outbox', authenticate,(req, res)=>{
        const userId=req.cookies.userId;
        db.query('select users.name as receiver_name, messages.subject, created_at from messages join users on users.id=recipient_id where sender_id= ? order by created_at desc;',
            [userId], (err,messages)=>{
                if(err){ return res.render('inbox', { messages: [], message: "Error loading outbox." });}
                res.render('outbox',{ messages});
            }
        )
    })
    //display all emails
    app.get('/compose', authenticate ,(req, res)=>{
        db.query('select email from users',(err,messages)=>{
            if(err){return res.send('server error');}
            res.render('Compose', {messages});
        })
    })

    

//middle ware
function authenticate(req, res, next) {
    
    if (!req.cookies.userId) {
        
        return res.status(403).render('Accessdenined');
    }
    
    next();
}




//routes
app.get('/', (req, res) => {
  
    res.render('index.ejs');
});



app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.get('/inbox', authenticate, (req, res) => {
    
    res.render('inbox.ejs'); 
});


app.listen(8000, () => console.log("Server running on port 8000"));
