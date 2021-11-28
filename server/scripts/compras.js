const casual = require("casual");

module.exports = () => {
  const data = {
    compras: [],
  };

  for (let i = 0; i < 5; i++) {
    data.compras.push({
      nombre: casual.first_name,
      usdGastado: casual.integer((from = 100), (to = 10000)),
    });
  }

  return data;
};
