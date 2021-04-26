import { Request, Response } from "express";
import { container } from "tsyringe";

import { IListAvailableCarsDTO } from "@modules/cars/dtos/IListAvailableCarsDTO";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

export class ListAvailableCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { brand, name, category_id }: IListAvailableCarsDTO = request.query;

    const listAvailableCarsUseCase = container.resolve(
      ListAvailableCarsUseCase
    );

    const cars = await listAvailableCarsUseCase.execute({
      brand,
      name,
      category_id,
    });

    return response.json(cars);
  }
}
