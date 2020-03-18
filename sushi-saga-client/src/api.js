const sushiURL = "http://localhost:3000/sushis";
const jsonify = response => response.json();

export const getSushis = () => {
  return fetch(sushiURL).then(jsonify);
};
