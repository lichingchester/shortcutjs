import * as d3 from "https://cdn.skypack.dev/d3@7";

class LineChart {
  constructor(options) {
    options.container =
      typeof options.container === "string"
        ? document.querySelector(options.container)
        : options.container;

    console.log(d3);

    const line = d3.line();

    const svg = d3
      .create(options.container)
      .attr("width", 640)
      .attr("height", 400);
  }
}

export { LineChart };
