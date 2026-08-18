const request = require("supertest");
const app = require("../src/server");

describe("DevOps Demo API", () => {
  test("GET / should return API message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("DevOps Demo API is running");
  });

  test("GET /health should return healthy", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
  });
});