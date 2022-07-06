import styles from "./Chart.module.css";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";

export function Chart(props) {
  const { data } = props;
  return (
    <>
      {data ? (
        <VictoryChart
          // adding the material theme provided with Victory
          theme={VictoryTheme.material}
          domainPadding={70}
          height={600}
          width={1000}
        >
          <VictoryAxis
            tickValues={data}
            tickFormat={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
            ]}
            style={{
              axis: { stroke: "#756f6a" },
              axisLabel: { fontSize: 40, padding: 20 },
              ticks: { stroke: "#0ea5e9" },
              tickLabels: { fontSize: 25, padding: 5 },
            }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => `${x}`}
            style={{
              axis: { stroke: "#756f6a" },
              axisLabel: { fontSize: 40, padding: 20 },
              ticks: { stroke: "#0ea5e9" },
              tickLabels: { fontSize: 25, padding: 5 },
            }}
          />
          <VictoryBar
            data={data}
            x={"month"}
            y={"quantity"}
            style={{
              data: {
                fill: ({ datum }) => "#0ea5e9",
              },
              labels: {
                fontSize: 15,
                fill: "#1e3a8a",
                padding: 15,
              },
            }}
            labels={({ datum }) => `${datum.quantity}`}
          />
        </VictoryChart>
      ) : (
        <div className={styles.loading}>
          <h1>Select a Product</h1>
        </div>
      )}
    </>
  );
}
