import calculator from "calculator";

describe("Funções Fantásticas", () => {
    it("returns 3 for 2 and 1 params", () => {
      
				const resultado = calculator.sum(2, 1);
       
        expect(resultado).toBe(3);
    });
    it("returns 1 for 2 and 1 params", () => {
    
      const resultado = calculator.sub(2, 1);
     
      expect(resultado).toBe(1);
  });
  it("returns 2 for 2 and 1 params", () => {
  
    const resultado = calculator.mul(2, 1);
   
    expect(resultado).toBe(2);
});
it("returns 2 for 2 and 1 params", () => {

  const resultado = calculator.div(2, 1);   
  expect(resultado).toBe(2);
});
  
});