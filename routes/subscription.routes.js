import { Router } from 'express';
import {createSubscription} from '../controllers/subscription.controller.js';
import {getUserSubscriptions} from '../controllers/subscription.controller.js';
import {authorize} from '../middlewares/auth.middleware.js';

const SubscriptionRouter = Router();

SubscriptionRouter.get('/', (req, res) => res.send({title: 'GET all subscriptions'}));

SubscriptionRouter.get('/:id', authorize, getUserSubscriptions);

SubscriptionRouter.post('/', authorize, createSubscription);

SubscriptionRouter.put('/:id', (req, res) => res.send({title: 'UPDATE subscription'}));

SubscriptionRouter.delete('/:id', (req, res) => res.send({title: 'DELETE subscriptions'}));

SubscriptionRouter.get('/user/:id', (req, res) => res.send({title: 'GET all user subscriptions'}));

SubscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: 'CANCEL subscriptions'}));

SubscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({title: 'GET upcoming subscriptions'}));

export default SubscriptionRouter;

