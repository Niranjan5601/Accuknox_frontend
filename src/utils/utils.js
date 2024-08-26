export const centerTextPlugin = {
    id: "centerText",
    
    beforeDraw(chart) {
      const { width, height, ctx } = chart;
  
      if (!ctx || !chart.data.datasets || chart.data.datasets.length === 0) {
        return;
      }
  
      ctx.restore();
  
      const dataset = chart.data.datasets[0];
      if (!dataset || !Array.isArray(dataset.data)) {
        return;
      }
  
      const count =
        dataset.data
          .filter((item) => typeof item === "number")
          .reduce(
            (a, b) =>
              typeof a === "number" && typeof b === "number" ? a + b : a,
            0
          ) ?? 0;
  
      const text1 = `${count}`;
      const text2 = `Total`;
  
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
  
      const fontSizeBold = (height / 150).toFixed(2);
      ctx.font = `bold ${fontSizeBold}em sans-serif`;
      const textX = Math.round(width / 2);
      const textY = Math.round(height / 2) - 10;
      ctx.fillText(text1, textX, textY);
  
      const fontSizeRegular = (height / 180).toFixed(2);
      ctx.font = `${fontSizeRegular}em sans-serif`;
      ctx.fillText(text2, textX, textY + 20);
  
      ctx.save();
    },
  };