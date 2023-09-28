import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {

  it("validação de /event", async() => {
    const result = await api.get("/event");
  expect(result.status).toBe(200)
  expect(result.body).toEqual({
    id: expect.any(Number),
    title: "Super Event!",
    image: "https://img.freepik.com/fotos-gratis/publico-animado-assistindo-fogos-de-artificio-de-confete-e-se-divertindo-no-festival-de-musica-a-noite-copiar-espaco_637285-559.jpg",
    date: "2023-07-21T00:00:00.000Z"
  })
  })
});