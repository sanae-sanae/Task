const moongose=require("moongose")
try{
    mongoose.connect('mongodb://localhost:27017/Taskes',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
}catch(error){
    console.log("dakchi li 4alet ")
}
module.exports=moongose