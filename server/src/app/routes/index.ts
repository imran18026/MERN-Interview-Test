import { Router } from 'express';
import { DrawingRoutes } from '../modules/Drawing/Drawing.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/drawings',
    route: DrawingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
