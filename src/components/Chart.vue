<script>
import { createChart, LineStyle } from "lightweight-charts";

export default {
  mounted() {
    const chart = createChart(this.$refs.chart);
    const baseLine = chart.addBaselineSeries();

    chart.applyOptions({
      width: 200,
      height: 100,
      grid: {
        vertLines: {
          visible: false
        },
        horzLines: {
          visible: false
        }
      },
      crosshair: {
        vertLine: {
          visible: false
        },
        horzLine: {
          visible: false
        }
      },
      handleScale: {
        mouseWheel: false
      },
      handleScroll: {
        mouseWheel: false,
        pressedMouseMove: false
      }
    });

    baseLine.priceScale('right').applyOptions({
      visible: false,
      drawTicks: false,
      borderVisible: false,
      alignLabels: false
    });

    chart.timeScale().applyOptions({
      visible: false
    });

    baseLine.applyOptions({
      priceLineVisible: false,
      baseLineStyle: LineStyle.Dotted,
      topLineColor: 'rgba(239, 83, 80, 1)',
      topFillColor1: 'rgba(239, 83, 80, 0.5)',
      topFillColor2: 'rgba(239, 83, 80, 0.05)',
      bottomLineColor: 'rgba(62, 136, 240, 1)',
      bottomFillColor1: 'rgba(62, 136, 240, 0.05)',
      bottomFillColor2: 'rgba(62, 136, 240, 0.5)',
      baseValue: { type: 'price', price: 25.54},
      crosshairMarkerVisible: false
    });

    baseLine.setData([
      { time: "2018-11-27", value: 34.34 },
      { time: "2018-11-28", value: 25.34 },
      { time: "2018-11-29", value: 21.34 },
      { time: "2018-12-1", value: 24.34 },
      { time: "2018-12-2", value: 28.34 },
      { time: "2018-12-3", value: 21.34 },
      { time: "2018-12-4", value: 19.34 },
      { time: "2018-12-5", value: 19.34 },
      { time: "2018-12-6", value: 21.34 },
      { time: "2018-12-7", value: 14.34 },
      { time: "2018-12-8", value: 12.34 },
      { time: "2018-12-9", value: 14.34 },
      { time: "2018-12-10", value: 15.34 },
      { time: "2018-12-11", value: 18.34 },
      { time: "2018-12-12", value: 16.34 },
      { time: "2018-12-13", value: 22.43 },
      { time: "2018-12-14", value: 32.51 },
      { time: "2018-12-15", value: 37.41 },
      { time: "2018-12-16", value: 42.51 },
      { time: "2018-12-17", value: 32.51 },
      { time: "2018-12-18", value: 30.66 },
      { time: "2018-12-19", value: 32.51 },
      { time: "2018-12-20", value: 36.44 },
      { time: "2018-12-21", value: 31.04 },
      { time: "2018-12-22", value: 32.51 },
      { time: "2018-12-23", value: 31.11 },
      { time: "2018-12-24", value: 27.02 },
      { time: "2018-12-25", value: 27.32 },
      { time: "2018-12-26", value: 25.17 },
      { time: "2018-12-27", value: 28.89 },
      { time: "2018-12-28", value: 25.46 },
      { time: "2018-12-29", value: 23.92 },
      { time: "2018-12-30", value: 22.68 },
      { time: "2018-12-31", value: 22.67 },
    ]);
  },
};
</script>

<template>
  <h2>Chart</h2>
  <div id="chart" ref="chart"></div>
</template>

<style scoped>
#chart {
  margin: 0, auto;
  width: 200px;
  border: solid;
  background-color: dodgerblue;
}
</style>
