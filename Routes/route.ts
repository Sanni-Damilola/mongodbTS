import { Router } from "express";
import {
  get,
  singleget,
  postcar,
  updatedata,
  deletedata,
 
} from "../Controller/control";

const route = Router();

route.route("/post").post(postcar);
route.route("/getone/:id").get(singleget);
route.route("/getall").get(get);
route.route("/update/:id").patch(updatedata);
route.route("/delete/:id").delete(deletedata);

export default route;
