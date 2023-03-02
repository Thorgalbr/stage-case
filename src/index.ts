/* 
    * Configuração inicial do projeto
    * Stage - Case
*/

// Importando o express para o projeto e configurando na variavel app
import express, {Request, Response} from 'express';
const app = express();

// Importando o body-parser para o projeto
import bodyParser from 'body-parser'; 

// Configurando o body parser para recebermos os parametros via url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// Importando o Dotenv para o projeto
import 'dotenv/config';

// Configurando o servidor
const port = process.env.API_PORT;
app.listen(port, () => {
    console.log(`API Funcionando na porta ${port}`);
});

// Middleware de teste API
app.get('/teste', (req: Request, res: Response) => {
    res.json({message: 'API funcionando!!!'})
});




