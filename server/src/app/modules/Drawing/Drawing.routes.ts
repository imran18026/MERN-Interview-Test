import express from 'express';
import { DrawingController } from './Drawing.controller';

const router = express.Router();

router.post('/create', DrawingController.createToDB);
router.get('/', DrawingController.getAllFromDB);
router.get('/:id', DrawingController.getSingleFromDB);
router.patch('/:id', DrawingController.updateIntoDB);
router.delete('/:id', DrawingController.deleteFromDB);

export const DrawingRoutes = router;
