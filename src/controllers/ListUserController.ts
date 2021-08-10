import { Response, Request } from "express";
import { ListUserService } from "../service/ListUserService";



class ListUsersController {
  async handle(request: Request, response: Response) {

    const listUserService = new ListUserService;

    const users = await listUserService.execute();

    return response.json(users);
  }
}

export { ListUsersController }