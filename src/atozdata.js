const AtozData = () => {
  return {
    nodes: [
      {
        name: "incoming"
      },
      {
        name: "force_challenge"
      },
      {
        name: "try_exemptions"
      },
      {
        name: "no_preference"
      },
      {
        name: "capture"
      },
      {
        name: "flag"
      },
      {
        name: "void"
      },
      {
        name: "end"
      }
    ],
    links: [
      {
        source: 0,
        target: 1,
        value: 10000
      },

      {
        source: 0,
        target: 2,
        value: 100
      },
      {
        source: 2,
        target: 7,
        value: 100
      },
      {
        source: 0,
        target: 3,
        value: 100
      },
      {
        source: 3,
        target: 7,
        value: 14400
      },
      {
        source: 0,
        target: 4,
        value: 10000
      },
      {
        source: 4,
        target: 7,
        value: 10
      },
      {
        source: 0,
        target: 5,
        value: 100000
      },
      {
        source: 5,
        target: 7,
        value: 132500
      },
      {
        source: 0,
        target: 6,
        value: 13454363600
      },
      {
        source: 6,
        target: 7,
        value: 3
      }
    ]
  };
};

export default AtozData;
