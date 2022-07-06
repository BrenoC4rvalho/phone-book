import dotenv from 'dotenv';
import express from 'express';
import mustacheExpress from 'mustache-express';
import path from 'path';
import  mainRoutes  from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustacheExpress());

server.use(express.static(path.join(__dirname, '../public')));

//enable metod post
server.use(express.urlencoded({extended: true}));

//Rotas
server.use(mainRoutes);

server.listen(process.env.PORT);