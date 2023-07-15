import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL =`mongodb://${username}:${password}@ac-fn26hxr-shard-00-00.fky4hfr.mongodb.net:27017,ac-fn26hxr-shard-00-01.fky4hfr.mongodb.net:27017,ac-fn26hxr-shard-00-02.fky4hfr.mongodb.net:27017/?ssl=true&replicaSet=atlas-clz9ry-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;

