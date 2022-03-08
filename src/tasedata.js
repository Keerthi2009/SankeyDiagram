const Data = () => {
  return {
    nodes: [
      { name: "tase" },
      /* vastattavaa */
      { name: "Oma pääoma" },
      { name: "Osakepääoma" },
      { name: "Edellisten tilikausien voitto" },
      { name: "Tilikauden voitto" },

      { name: "Vieras pääoma" },
      { name: "Ostovelat" },
      { name: "Muut velat" },

      /* vastaavaa */

      { name: "Pysyvät vastaavat" },
      { name: "Sijoitukset" },

      { name: "Vaihtuvat vastaavat" },
      { name: "Myyntisaamiset" },
      { name: "Rahat ja pankkisaamiset" },

      /* tuloslaskelma */

      { name: "myynti 24%" }
    ],
    links: [
      { source: 1, target: 0, value: 48037 },

      { source: 2, target: 1, value: 2500 },
      { source: 3, target: 1, value: 40723 },
      { source: 4, target: 1, value: 4813 },

      { source: 5, target: 0, value: 6026 },
      { source: 6, target: 5, value: 1648 },
      { source: 7, target: 5, value: 4377 },

      { source: 0, target: 8, value: 1437 },
      { source: 8, target: 9, value: 1437 },

      { source: 0, target: 10, value: 52626 },
      { source: 10, target: 11, value: 9210 },
      { source: 10, target: 12, value: 43415 }

      /* tuloslaskelma */

      /* { source: 11, target: 13, value: 9210 }, */
      /* { source: 13, target: 7, value: 1782 }, */
    ]
  };
};

export default Data;
