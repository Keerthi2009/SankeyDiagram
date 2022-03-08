import React, { Component } from "react";
/* import d3 from "d3"; */
import * as d3base from "d3";
import { scaleLinear } from "d3-scale";
import { interpolateCool, interpolateWarm } from "d3-scale-chromatic";
import { rgb } from "d3-color";
import { sankeyLinkHorizontal, sankey, sankeyJustify } from "d3-sankey";
import { Button } from "react-bootstrap";

const size = {
  width: 900,
  height: 700
};

const d3 = Object.assign(d3base, { sankey, sankeyJustify });

const colors = interpolateWarm;

const Rect = ({ index, x0, x1, y0, y1, name, value, length, colors }) => {
  return (
    <>
      <rect
        x={x0}
        y={y0}
        width={x1 - x0}
        height={y1 - y0}
        fill={colors(index / length)}
        data-index={index}
      />
      <text
        x={x0 < size.width / 2 ? x1 + 6 : x0 - 6}
        y={(y1 + y0) / 2}
        style={{
          fill: rgb(colors(index / length)).darker(),
          alignmentBaseline: "middle",
          fontSize: 9,
          textAnchor: x0 < size.width / 2 ? "start" : "end",
          pointerEvents: "none",
          userSelect: "none"
        }}
      >
        {name}
      </text>
    </>
  );
};

const Link = ({ data, width, length, colors }) => {
  const link = sankeyLinkHorizontal();

  return (
    <>
      <defs>
        <linearGradient
          id={`gradient-${data.index}`}
          gradientUnits="userSpaceOnUse"
          x1={data.source.x1}
          x2={data.target.x0}
        >
          <stop offset="0" stopColor={colors(data.source.index / length)} />
          <stop offset="100%" stopColor={colors(data.target.index / length)} />
        </linearGradient>
      </defs>
      <path
        d={link(data)}
        fill={"none"}
        stroke={`url(#gradient-${data.index})`}
        strokeOpacity={0.5}
        strokeWidth={width}
      />
    </>
  );
};

class Sunburst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      old: true
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log(this.state);
    const change = !this.state.old;
    this.setState({ old: change });
  }

  sankeyimpl = d3
    .sankey()
    .nodeAlign(d3.sankeyJustify)
    .nodeWidth(10)
    .nodePadding(10)
    .extent([[0, 0], [size.width, size.height]]);

  render() {
    console.log(this.props);

    if (this.props && this.props.data1 && this.props.data2) {
      const data = this.state.old ? this.props.data1 : this.props.data2;

      const { links, nodes } = this.sankeyimpl(data);
      console.log({ nodes: nodes, links: links });

      return (
        <div onClick={this.onClick}>
          <svg width={size.width} height={size.height}>
            <g>
              {links.map((d, i) => (
                <Link
                  key={d.index}
                  data={d}
                  width={d.width}
                  length={nodes.length}
                  colors={colors}
                />
              ))}
            </g>
            <g>
              {nodes.map((d, i) => (
                <Rect
                  key={d.index}
                  index={d.index}
                  x0={d.x0}
                  x1={d.x1}
                  y0={d.y0}
                  y1={d.y1}
                  name={d.name}
                  value={d.value}
                  length={nodes.length}
                  colors={colors}
                />
              ))}
            </g>
          </svg>
        </div>
      );
    } else {
      return <div>loading</div>;
    }
  }
}

export default Sunburst;
