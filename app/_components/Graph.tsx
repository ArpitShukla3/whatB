"use client";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Line, LineChart, Tooltip, XAxis, ResponsiveContainer } from "recharts";
import { RootState } from "../GlobalRedux/store";

interface DataPoint {
  freq: number;
  percentile: number;
}

interface TooltipPayload {
  payload: DataPoint;
}

interface CustomTooltipProps {
  payload: TooltipPayload[];
  label: number;
}

function CustomTooltip({ payload, label }: CustomTooltipProps) {
  if (payload && payload.length && payload[0].payload && payload[0].payload.freq !== undefined) {
    return (
      <div className="border-slate-200 border-2 rounded-md p-2">
        <h1>Percentile: {label}%</h1>
        <h2>Number of Students: {payload[0].payload.freq}</h2>
      </div>
    );
  } else {
    return <div className="border-slate-200 border-2 rounded-md p-2">No data</div>;
  }
}

function Graph() {
  const data: DataPoint[] = [
    { freq: 4, percentile: 5 },
    { freq: 8, percentile: 10 },
    { freq: 5, percentile: 20 },
    { freq: 7, percentile: 35 },
    { freq: 2, percentile: 50 },
    { freq: 7, percentile: 55 },
    { freq: 7, percentile: 60 },
    { freq: 5, percentile: 75 },
    { freq: 23, percentile: 80 },
    { freq: 8, percentile: 85 },
    { freq: 1, percentile: 100 },
  ];

  const percentile = useSelector((state: RootState) => state.ScoreReducer.percentile);

  return (
    <div className="flex flex-col gap-4 border-slate-200 border-2 rounded-md p-4">
      <div className="flex gap-2 justify-between">
        <div className="flex flex-col w-2/3">
          <h1 className="text-black font-bold text-2xl py-4">Comparison Graph</h1>
          <p className="text-[#616161]">
            <span className="font-semibold">You scored {percentile}% percentile </span>
            which is lower than the average percentile 72% of all the engineers
            who took this assignment.
          </p>
        </div>
        <FontAwesomeIcon icon={faChartLine} style={{ color: "#616161" }} className="h-8" />
      </div>
      <div className="w-full h-96">
        <ResponsiveContainer>
          <LineChart data={data}>
            <Line type="monotone" dataKey="freq" stroke="#8884d8" />
            <XAxis dataKey="percentile" />
            <Tooltip content={<CustomTooltip payload={[]} label={0} />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Graph;
