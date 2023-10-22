export const options = (axisData, dataValues , isToday=false) => ({
    grid: {
        left: "0", 
        right: "0", 
        top: "20%",
        bottom: "0", 
        containLabel: true,
    },
  xAxis: {
    type: "category",
    data: axisData,
    splitLine: {
      show: true,
      alignWithLabel: true,
    },
    axisTick: {
      alignWithLabel: true,
    },
    axisLabel: {
        showMaxLabel:true,
        showMinLabel:true,
        interval: 0,
        margin:10,
      formatter: function (value, index) {
        const time24 = value.slice(-5);
        const [hours, minutes] = time24.split(":");
        let period = "am";

        let hours12 = parseInt(hours, 10);
        if (hours12 >= 12) {
          period = "pm";
          if (hours12 > 12) {
            hours12 -= 12;
          }
        }

        if (index === 0 && isToday) return "Now";
        if(hours12 === 0) return `00 ${period}`;
        return `${hours12} ${period}`;
      },
    },
    axisLine: { show: false },
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
  },
  series: [
    {
      data: dataValues.map((value, index) => ({
        value,
        label: {
          show: true,

          formatter: function (params) {
            // Use a custom function to format the label
            return `${parseInt(params.value)}°`;
          }, // Customize the label text
        },
      })),

      type: "line",
      smooth: true,
      lineStyle: {
        type: "dashed",
        width: 1,
      },
    },
  ],
});
