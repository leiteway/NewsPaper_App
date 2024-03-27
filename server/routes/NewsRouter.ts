import express from "express";

const router = express.Router() //estamos invocado el enrutador

router.get('/');

router.delete('/:id');

router.post('/');

router.put('/:id');

router.get('/:id');

export default router;