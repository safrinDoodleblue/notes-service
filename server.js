const express=require('express');
const mongoose=require('mongoose');
const passport = require('passport');

require('dotenv').config();
require('./config/passport');
const routes=require('./Routes')

const app=express();

app.use(express.json());
app.use(passport.initialize());
const PORT=process.env.PORT ||4000;
app.use('/api',routes);

const startServer=async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
         console.log('MongoDB connected');
        app.listen(PORT,()=>{
            console.log(`Server running at http://localhost:${process.env.PORT}`);
        })
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};
startServer();
























































// const express = require('express');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');
// const passport = require('passport');
// require('dotenv').config();
// require('./config/passport');
// const notesRoutes = require('./Routes/index');

// const app = express();
// app.use(express.json());


// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({ mongoUrl: process.env.MONGO_URI, collectionName: 'sessions'
//     }),
//     cookie: {
//       httpOnly: true,
//       secure: false,
//       sameSite: 'lax',
//       maxAge: 1000 * 60 * 60
//     }
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// app.use('/api', notesRoutes);

// const startServer = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('Notes service connected to MongoDB');

//     const PORT = process.env.PORT || 4000;
//     app.listen(PORT, () => {
//       console.log(`Notes service running at http://localhost:${PORT}`);
//     });
//   } catch (err) {
//     console.error('MongoDB connection failed:', err);
//   }
// };

// startServer();
