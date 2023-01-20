import usedata from "../Model/model";
import { Response, Request } from "express";

const postcar = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { manufacturer, model, color, selfDriving, transmission } = req.body;

    const newcar = await usedata.create({
      manufacturer,
      model,
      color,
      chasisNO: Math.floor(Math.random() * 1000000),
      selfDriving,
      transmission,
    });

    return res.status(201).json({
      message: "Successfully created",
      data: newcar,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error.message,
    });
  }
};

const get = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getdata = await usedata.find();
    return res.status(200).json({
      message: "Successfully",
      data: getdata,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

const singleget = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getone = await usedata.findById(req.params.id);
    return res.status(201).json({
      message: "Successfully gotten id " + req.params.id,
      data: getone,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

const updatedata = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { manufacturer, model, color, selfDriving, transmission } = req.body;
    const update = await usedata.findByIdAndUpdate(
      req.params.id,
      {
        manufacturer,
        model,
        color,
        chasisNO: Math.floor(Math.random() * 1000000),
        selfDriving,
        transmission,
      },
      { new: true }
    );

    return res.status(201).json({
      message: "Successfully updated",
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

const deletedata = async (req: Request, res: Response): Promise<Response> => {
  try {
    const deleteone = await usedata.findByIdAndRemove(req.params.id);
    return res.status(201).json({
      message: "Successfully deleted id" + req.params.id,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

export { singleget, get, postcar, updatedata, deletedata };
