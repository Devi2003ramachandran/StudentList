import express from "express"
import { deletedata, studengetdata, studentpostdata, updatedata } from "../controller/studentControler.js"

const sturoute = express.Router()

sturoute.route("/alldata").get(studengetdata);
sturoute.route("/studentpost").post(studentpostdata)
sturoute.route("/:id").put(updatedata)
sturoute.route("/:id").delete(deletedata)

export default sturoute;