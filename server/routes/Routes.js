import express from 'express';
import middleware from '../validate/middleware.js';
import { validate } from '../validate/validate.js';
const router = express.Router();

///////////////////////////////// owner router

import { getOwnerProducts, addOwnerProducts, deleteProduct, updateProduct, toDeliver, pullApproveItem } from '../controllers/OwnerControllers.js';
import { ownersignup,ownersignin, EditOwnerPassword, EditOwnerUsername } from '../controllers/OwnerAuthentication.js';

import { clientsignup,clientsignin } from '../controllers/ClientAuthentication.js';
import { tobeDeliver,DeliveredItems,getClientProducts,AddProdToCard, Addtowishlist, deleteAllitems, deleteItem, wishtocart, deliverOTW, Delivered, PullOrderedItem, PullReceiveItem } from '../controllers/ClientController.js';

router.get('/', getOwnerProducts); // done
router.patch('/admin/collections/all/:id', addOwnerProducts); // done
router.patch('/admin/collections/view/:id', updateProduct); // working but gives status 404
router.put('/admin/collections/all/:id', deleteProduct); // fix delete query
router.patch('/admin/settings/:id', EditOwnerUsername);
router.put('/admin/settings/:id', EditOwnerPassword);
router.patch('/checkout/:id', toDeliver); // try this mofo
router.patch('/admin/deliveries/:id', deliverOTW) // try 
router.patch('/approve/redirect/:id', pullApproveItem) // try

router.post('/admin', ownersignin); // done
router.post('/admin/signup/', ownersignup); // done

///////////////////////// client router

router.post('/', clientsignin); // done
router.patch('/:id', deleteAllitems); // 
router.put('/:id', deleteItem); //
router.post('/signup', clientsignup); // done
router.get('/user', getClientProducts); // getcustomerDetails
router.patch('/collections/view/:id', AddProdToCard); //finished
router.put('/collections/view/:id', Addtowishlist); // finished
router.patch('/wishlist/addtocart/:id', wishtocart);
router.patch('/user/receive/:id', Delivered); // try
router.patch('/item/receive/:id', PullOrderedItem); // try
router.put('/user/profile/receive/:id', PullReceiveItem); // try


//from cart to checkouts

router.patch('/cart/checkout/:id', tobeDeliver); // go to checkout from cart to deliver
// router.patch('/checkout/:id', ); // go to checkout from cart to walkin

/// if the costumer click the receive ... the item will sent to delivered.

router.patch('/delivered/:id', DeliveredItems); // where item delivered items go here.

export default router;

// to be continue on other routes...


//TAKE NOTES HERE
///// client side route for product menu  = collection/all