import supertest from "supertest";
import app from "../index";
import TestFileName from "../utilities/fun";

const request = supertest(app);
describe("Test endpoint for api", () => {
  it("gets the api endpoint for Image resize", async () => {
    const response = await request.get("/resize");
    expect(response.status).toBe(200);
  });
});

describe("Test image Proccess", () => {
  it("Image is valid", () => {
    expect(TestFileName("Mohammed")).toEqual("Mohammed");
  });
});
