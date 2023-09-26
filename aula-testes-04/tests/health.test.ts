import supertest from "supertest"
import app from "../src/index"

describe("GET /health", () => {
    it("The application is working", async () => {
        const result = await supertest(app).get("/health");
        const status = result.status;
        expect(status).toBe(200)
    });
})