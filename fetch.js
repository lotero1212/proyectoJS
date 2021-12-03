// para que funcione ejecutar npm run server en terminal
const URL = "http://localhost:3000/compras";

fetch(URL)
  .then((response) => response.json())
  .then((compras) => {
    for (const compra of compras) {
      $("#lista-compras").prepend(`
         <li style="text-align: center">${compra.nombre} compró USD ${compra.usdGastado} en criptomonedas en las últimas 24hs.</li> 
         <hr/> 
      `);
    }
  });
