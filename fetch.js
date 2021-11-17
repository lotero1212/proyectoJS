const URL = "http://localhost:3000/compras";

fetch(URL)
  .then((response) => response.json())
  .then((compras) => {
    for (const compra of compras) {
      $("#lista-compras").prepend(`
         <p>${compra.nombre} compró USD ${compra.usdGastado} en criptomonedas en las últimas 24hs.</p>  
      `);
    }
  });
