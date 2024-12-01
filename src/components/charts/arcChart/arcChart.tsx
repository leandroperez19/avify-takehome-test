import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { ArcChartProps } from "./arcChart.types";

const ArcChart: React.FC<ArcChartProps> = ({
    size,
    value,
    color = "orange",
}) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const outerRadius = size / 2 - 10;
        const innerRadius = outerRadius * 0.75;
        const tau = 2 * Math.PI;

        const percentage = Math.max(0, Math.min(value, 100)) / 100;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        svg.attr("width", size).attr("height", size);
        const g = svg
            .append("g")
            .attr("transform", `translate(${size / 2}, ${size / 2})`);

        const arc = d3
            .arc<any>()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(0);

        g.append("path")
            .datum({ endAngle: tau })
            .style("fill", "#ddd")
            .attr("d", arc);

        const foreground = g
            .append("path")
            .datum({ endAngle: percentage * tau })
            .style("fill", color)
            .attr("d", arc);

        foreground
            .transition()
            .duration(750)
            .attrTween("d", function (d) {
                const interpolate = (t: number) =>
                    arc({
                        ...d,
                        endAngle: 0 + (d.endAngle - 0) * t,
                    });
                return (t) => interpolate(t) as string;
            });

        return () => {
            svg.selectAll("*").remove();
        };
    }, [size, value, color]);

    return <svg ref={svgRef}></svg>;
};

export default ArcChart;
