import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("Create Car Specification", () => {
  carsRepositoryInMemory = new CarsRepositoryInMemory();
  specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
  createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
    carsRepositoryInMemory,
    specificationsRepositoryInMemory
  );

  it("should not be able to add a new specification to a non-existing car", async () => {
    const car_id = "any_id";
    const specifications_id = ["specification_one", "specification_two"];
    await expect(
      createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      })
    ).rejects.toEqual(new AppError("Car does not exists!"));
  });
  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "any_name",
      description: "any_description",
      daily_rate: 100,
      license_plate: "any_license_plate",
      fine_amount: 10,
      brand: "any_brand",
      category_id: "any_category_id",
    });

    const specification = await specificationsRepositoryInMemory.create({
      description: "any_description",
      name: "any_name",
    });

    const specifications_id = [specification.id];

    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id,
    });

    expect(specificationsCars).toHaveProperty("specifications");
    expect(specificationsCars.specifications.length).toBe(1);
  });
});
