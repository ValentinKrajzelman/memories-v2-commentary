//aca se resuelven las routes llamando las funciones(controllers) que reciben los parametros
import express from 'express';

//se importan los controllers es decir las funciones a las que se les pasa el request como parametro, de esto se encarga
//el router de express
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

//esto viene de localhost:5000/posts...
router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;