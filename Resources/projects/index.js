const express = require('express');

const { GetAllProjects, CreateProject, UpdateProject, DeleteProject } = require('./project.controller');

const router = express.Router();

router.get('/', GetAllProjects);

router.post('/', CreateProject);

router.put('/', UpdateProject);

router.delete('/', DeleteProject)

module.exports = router