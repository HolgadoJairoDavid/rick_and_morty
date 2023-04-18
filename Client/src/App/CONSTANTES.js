const CONSTANTES = {
  // KEY: "7194934f1270.fac66ff2b08baf717919",
  // URL: "https://be-a-rym.up.railway.app/api/character/",
  URL: 'http://localhost:3001/rickandmorty/character/',
  EMAIL: "jairodavidholgado@gmail.com",
  PASSWORD: "jairo18",
  searchPath: (pathOfDetail) => {
    let arrPathname = pathOfDetail.split("/");
    return arrPathname.includes("detail");
  },
};

export default CONSTANTES;
