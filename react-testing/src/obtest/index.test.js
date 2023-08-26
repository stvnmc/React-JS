import {
  devuelveEmail,
  devuelveObjeto,
  dividir,
  multiplicar,
  restar,
  sumar,
  Rectangulo,
  devuelveArrayNum,
  devuelveArrayStr,
  devuelveArrayObj,
  devuelveTrue,
  devuelveFalse,
  devuelveNull,
  devuelveUndefined,
} from "./index";
// Aqui vamos a crear nuestros casos de pruebas
// describe, test(it)
// Assertions "expect"

describe("Assertions basicos", () => {
  test("La suma funciona", () => {
    const resultado = sumar(2, 3);
    expect(resultado).toBe(5);
    expect(resultado).toEqual(5);
  });
  test("La suma no resta", () => {
    const resultado = sumar(2, 3);
    expect(resultado).not.toBe(-1);
    expect(resultado).not.toEqual(-1);
  });
  test("La resta funcional", () => {
    const resultado = restar(2, 3);
    expect(resultado).toBe(-1);
    expect(resultado).toEqual(-1);
  });
  test("La multiplicacion funciona", () => {
    const resultado = multiplicar(2, 3);
    expect(resultado).toBe(6);
    expect(resultado).toEqual(6);
  });
  test("La division funciona", () => {
    const resultado = dividir(100, 5);
    expect(resultado).toBe(20);
    expect(resultado).toEqual(20);
  });
  test("Probamos el >", () => {
    const resultado = dividir(100, 5);
    expect(resultado).toBeGreaterThanOrEqual(20);
  });
  test("Probamos el <", () => {
    const resultado = multiplicar(5, 8);
    expect(resultado).toBeLessThan(100);
    expect(resultado).toBeLessThanOrEqual(40);
  });
});

describe("Assertions basicos con booleanos", () => {
  test("Probar que algo es true", () => {
    const r = devuelveTrue();
    expect(r).toBeTruthy();
  });
  test("Probar que algo es null", () => {
    const r = devuelveFalse();
    expect(r).toBeFalsy();
  });
  test("Probar que algo es defined", () => {
    const r = devuelveNull();
    expect(r).toBeDefined();
  });
  test("Probar que algo es undefined", () => {
    const r = devuelveUndefined();
    expect(r).toBeUndefined();
  });
});

describe("Assertions basicos en los strings", () => {
  test("El campo debe tener un email", () => {
    const email = devuelveEmail();
    expect(email).toMatch(/[a-zA-Z].[a-zA-Z]\.com/);
  });
});

describe("Assertions basicos en objetos", () => {
  test("Dos objetos son iguales", () => {
    const objA = devuelveObjeto();
    const objB = devuelveObjeto();
    expect(objA).toEqual(objB);
  });
  test('El objeto debe tener una propiedad llamada "ancho', () => {
    const rectangulo = devuelveObjeto();
    expect(rectangulo).toHaveProperty("ancho");
  });
  test('El propiedada "ancho" del rectagunalo siempre debe ser 10', () => {
    const rectangulo = devuelveObjeto();
    expect(rectangulo).toHaveProperty("ancho", 10);
  });
  test("El objeto rectA debe ser un Clase Rectangulo", () => {
    // const rectA = { ancho: 10, alto: 11 };
    const rectA = new Rectangulo(10, 11);
    expect(rectA).toBeInstanceOf(Rectangulo);
  });
});

describe("Assertions basicos en arrays", () => {
  test("Array contiene leche", () => {
    const ar = devuelveArrayStr();
    expect(ar).toContain("leche");
  });
  test("Array contiene 5", () => {
    const ar = devuelveArrayNum();
    expect(ar).toContain(5);
  });
  test("Array contiene id: 5", () => {
    const ar = devuelveArrayObj();
    expect(ar).toContainEqual({ id: 5 });
  });
});

describe("Assertions con funciones mock", () => {
  test("Que la funcion haya sido llamada", () => {
    const mockFn = jest.fn(() => 5);
    const res = mockFn();
    const res2 = mockFn();
    const res3 = mockFn();
    expect(mockFn).toHaveBeenCalledTimes(3);
  });
  test("Que la funcion haya sido llamada con un parametro", () => {
    const mockFn = jest.fn(() => 5);
    const res = mockFn("prueba");
    expect(mockFn).toHaveBeenCalledWith("prueba");
  });
});
