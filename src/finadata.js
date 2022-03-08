const Data = () => {
  return {
    nodes: [
      { index: 0, name: "pysyvät vastaavat 2018" },
      { name: "vaihtuvat vastaavat 2018" },
      { name: "oma pääoma 2018" },
      { name: "vieras pääoma 2018" },

      { name: "pysyvät vastaavat 2019" },
      { name: "vaihtuvat vastaavat 2019" },
      { name: "oma pääoma 2019" },
      { name: "vieras pääoma 2019" },

      { name: "saamisten muutos" },
      { name: "pankkisaamisten muutos" },

      { name: "oman pääoman muutos" },

      { name: "vieraan pääoman muutos" },

      /* 12 */

      { name: "Liikevaihto" },

      { name: "Materiaalit ja palvelut" },

      { name: "Henkilöstökulut" },

      { name: "Liiketoiminnan muut kulut" },

      { name: "Tuloverot" }
    ],
    links: [
      { source: 0, target: 4, value: 1437 },

      { source: 1, target: 8, value: 13817 },
      { source: 1, target: 9, value: 36205 },
      { source: 8, target: 5, value: 9210 },
      { source: 9, target: 5, value: 43415 },

      { source: 3, target: 11, value: 2210 },
      { source: 3, target: 7, value: 6026 },
      { source: 11, target: 7, value: 0 },

      { source: 2, target: 6, value: 43223 },
      { source: 2, target: 10, value: 0 },
      { source: 10, target: 6, value: 4813 },

      { source: 2, target: 12, value: 0 },

      { source: 12, target: 13, value: 9500 },
      { source: 12, target: 14, value: 38708 },
      { source: 12, target: 15, value: 5982 },
      { source: 12, target: 16, value: 143 },
      { source: 12, target: 10, value: 4813 }
    ]
  };
};

export default Data;
