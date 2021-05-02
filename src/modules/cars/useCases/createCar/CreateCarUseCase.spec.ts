import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "any_name",
      description: "any_description",
      daily_rate: 100,
      license_plate: "any_license_plate",
      fine_amount: 10,
      brand: "any_brand",
      category_id: "any_category_id",
    });
    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", async () => {
    await createCarUseCase.execute({
      name: "any_name",
      description: "any_description",
      daily_rate: 100,
      license_plate: "the_license_plate",
      fine_amount: 10,
      brand: "any_brand",
      category_id: "any_category_id",
    });
    await expect(
      createCarUseCase.execute({
        name: "any_name_two",
        description: "any_description",
        daily_rate: 100,
        license_plate: "the_license_plate",
        fine_amount: 10,
        brand: "any_brand",
        category_id: "any_category_id",
      })
    ).rejects.toEqual(new AppError("Car already exists!"));
  });

  it("should be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "any_name",
      description: "any_description",
      daily_rate: 100,
      license_plate: "any_license_plate",
      fine_amount: 10,
      brand: "any_brand",
      category_id: "any_category_id",
    });

    expect(car.available).toBe(true);
  });
});
