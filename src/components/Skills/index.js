import GaugeChart from "react-gauge-chart";

export default function Skills(props) {
  return (
    <div className='App-skills px-1' id='skills'>
      <h2>Skills</h2>
      <p className='sub-text'>
        Find below the skills, tools and technologies I use to bring products to
        life :
      </p>
      <h3 className='info-text'>Check Out Skills &#8594;</h3>
      <div className='chart-parent'>
        <div className='chart-container'>
          <GaugeChart
            id='gauge-chart3'
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            arcWidth={0.3}
            percent={0.8}
          />
        </div>
        <div className='chart-container'>
          <GaugeChart
            id='gauge-chart5'
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            arcWidth={0.3}
            percent={0.37}
          />
        </div>
        <div className='chart-container'>
          <GaugeChart
            id='gauge-chart6'
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            arcWidth={0.3}
            percent={0.37}
          />
        </div>
      </div>
    </div>
  );
}
