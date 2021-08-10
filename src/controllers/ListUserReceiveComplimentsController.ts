import { Request, Response } from "express"
import { ListUserReceiveComplimentsServicer } from "../service/ListUserReceiveComplimentsService";




class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceiveComplimentsService = new ListUserReceiveComplimentsServicer();

    const compliments = await listUserReceiveComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserReceiveComplimentsController }