import supertest from "supertest";
import app from "../index";
import _ from "../utilities/fun";
const request = supertest(app);
describe("Test endpoint for api", () => {
  it("gets the api endpoint for Image resize", async () => {
    const response = await request.get(
      "/resize?filename=santamonica&width=600&height=100"
    );
    expect(response.status).toBe(200);
  });
});
describe("Test image Proccess", () => {
  it("Image is valid", () => {
    expect(_.sharpFun("Mohammed", 200, 100, "salah")).toEqual([200, 100]);
  });
});
