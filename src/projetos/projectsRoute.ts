/*
    * Configuração base do CRUD tabela de Projetos
    *           Autor: Thiago Pereira
*/

// Importando o express e configurando o router 

import express from 'express';
const projectRouter = express.Router();

// Importando a rota de controller da tabela de Projetos

import projectsController from './projectsController';

/*
    * Rotas da tabela de Projetos importando do Controller referente a ela
*/

projectRouter.post('/projects/add/:guid_user/:guid_dept', projectsController.createProject);

projectRouter.get('/projects/request', projectsController.findAllProjects);

projectRouter.get('/projects/request/:guid_projects', projectsController.findProject);

projectRouter.patch('/projects/update/:guid_projects/:guid_user/:guid_dept', projectsController.updateProject);

projectRouter.delete('/project/delete/:guid_projects', projectsController.deleteProject);

// Exportando a rota no código

export { projectRouter };