import mongoose from 'mongoose';



const mongooseConnection = () => {
  const dbconnectionString = process.env.DB_CONNECT 
  mongoose.connect(dbconnectionString)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
}


export default mongooseConnection;
