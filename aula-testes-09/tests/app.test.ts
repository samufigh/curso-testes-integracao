import supertest from "supertest";

import app from "./../src/app";
import prisma from "../src/database";

const api = supertest(app);

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("POST /users tests", () => {
  it("should create a user", async () => {
    const { status } = await api
    .post("/users")
    .send({
      email: "teste@teste.com",
      password: "teste123"
    })
    expect(status).toBe(201)
  });

  it("should receive 409 when trying to create two users with same e-mail", async () => {
    const user = await prisma.user.create({
      data: {
        email: "teste@teste.com",
        password: "teste123"
      }
    })
    const {status} = await api
    .post("/users")
    .send({
      email: "teste@teste.com",
      password: "teste222"
    })
    expect(status).toBe(409)
  });

});

describe("GET /users tests", () => {
  it("should return a single user", async () => {
    const user = await prisma.user.create({
      data: {
        email: "teste@teste.com",
        password: "teste123"
      }
    })

    const {status, body} = await api.get(`/users/${user.id}`)
    expect(status).toBe(200)
    expect(body).toEqual({
      id: user.id,
      email: "teste@teste.com",
      password: "teste123"
    })
    });

  it("should return 404 when can't find a user by id", async () => {
    const user = await prisma.user.create({
      data: {
        email: "teste@teste.com",
        password: "teste123"
      }
    })

    const {status, body} = await api.get("/users/2")
    expect(status).toBe(404)
  });

  it("should return all users", async () => {
    const user = await prisma.user.create({
      data: {
        email: "teste@teste.com",
        password: "teste123"
      }
    })

    const {status, body} = await api.get("/users")
    expect(status).toBe(200)
    expect(body).toHaveLength(1)
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          email: expect.any(String),
          password: expect.any(String)
        })
      ])
    )
  });

})