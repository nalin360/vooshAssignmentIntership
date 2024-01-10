import mongoose from 'mongoose';

  const dbconnection = () => {
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
  }



export default dbconnection;
