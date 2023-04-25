const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {

    const favoriteMartin = {
        id: 34,
        name: "Martín",
      };
  
      const favoriteJairo = {
        id: 18,
        name: "Jairo",
      };
  
      const favorites = [
        {
          id: 34,
          name: "Martín",
        },
        {
          id: 18,
          name: "Jairo",
        },
      ];


  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {
      const response = await agent.get("/rickandmorty/character/1");

      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
    });

    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/900").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it(`Información correcta`, async () => {
      const response = await agent.get(
        "/rickandmorty/login/?email=jairodavidholgado@gmail.com&password=jairo18"
      );

      expect(response.body).toEqual({
        access: true,
      });
    });

    it(`Información incorrecta`, async () => {
      const response = await agent.get(
        "/rickandmorty/login/?email=jairodaviholgado@gmail.com&password=jairo18"
      );

      expect(response.body).toEqual({
        access: false,
      });
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const favoriteMartin = {
      id: 34,
      name: "Martín",
    };

    const favoriteJairo = {
      id: 18,
      name: "Jairo",
    };

    const favorites = [
      {
        id: 34,
        name: "Martín",
      },
      {
        id: 18,
        name: "Jairo",
      },
    ];

    it(`Añade el personaje correcto`, async () => {
      const response = await agent
        .post("/rickandmorty/fav")
        .send(favoriteMartin);

      expect(response.body).toContainEqual(favoriteMartin);
    });

    it(`Agrega y guarda el personaje correcto`, async () => {
      const response = await agent
        .post("/rickandmorty/fav")
        .send(favoriteJairo);

      expect(response.body).toEqual(favorites);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si el personaje no existe retorna el array anterior", async () => {
     const response = await agent.delete("/rickandmorty/fav/455")
     expect(response.body).toEqual(favorites)
    });

    it("Si el personaje existe retorna el array sin su correpsondiente objeto", async () => {
        const response = await agent.delete("/rickandmorty/fav/18")
        expect(response.body).not.toContainEqual(favoriteJairo)
       });

  });
});
