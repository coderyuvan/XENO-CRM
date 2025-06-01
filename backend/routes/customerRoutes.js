import {Router}from "express"
import { addCustomer,getAllCustomer } from "../controllers/customer.controller.js"

const router=Router()

router.route("/").post(addCustomer)
router.route("/").get(getAllCustomer)


export default router