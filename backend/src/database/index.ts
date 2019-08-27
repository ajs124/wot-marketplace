import mongoose from 'mongoose';

export const initializeDatabase = () => {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useCreateIndex: true
    });

    mongoose.connection.on('error', (err) => {
        console.log(err);
    });

    mongoose.connection.on('connected', () => {
        console.log('Succesfully connected to database wotify_development');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Succesfully disconnected');
    });
}

// Export Types
export { UserType, User } from './models/user';
export { ProjectType, Project } from './models/project'; 