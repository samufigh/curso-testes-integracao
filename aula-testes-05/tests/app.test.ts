import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })

})

describe("Testes de Integração para /fibonacci", () => {
  it("Deve retornar um código de status 400 para entrada inválida", async () => {
    const response = await api.get("/fibonacci?elements=abc"); 
    expect(response.status).toBe(400);
  });

  it("Deve retornar um código de status 400 para elementos menores que 1", async () => {
    const response = await api.get("/fibonacci?elements=0"); 
    expect(response.status).toBe(400);
  });

  it("Deve retornar um código de status 400 para elementos muito grandes", async () => {
    const response = await api.get("/fibonacci?elements=100000000"); 
    expect(response.status).toBe(400);
  }, 10000); // Defina um limite de tempo maior, por exemplo, 10 segundos (10000 ms)
  

  it("Deve retornar um código de status 200 e uma sequência de Fibonacci válida para entrada válida", async () => {
    const response = await api.get("/fibonacci?elements=5"); 
    expect(response.status).toBe(200);
    
    expect(response.body).toEqual([0, 1, 1, 2, 3]);
  });
});