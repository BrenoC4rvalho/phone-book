import { Router } from "express"
import * as PageController from '../controllers/pageController';

const router = Router();

router.get('/', PageController.listContact);
router.get('/add', PageController.newContact);
router.get('/edit/:slug', PageController.editContact);
router.get('/delete/:slug', PageController.deleteContact);

router.post('/add', PageController.addContact);
router.post('/edit/:slug', PageController.editContactPost);

export default router;