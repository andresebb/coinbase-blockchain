import styled from "styled-components";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
const data = {
  labels: [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Sept",
    "Dec",
    "Jan",
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#3773F5",
      borderColor: "#3773f5",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashoffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#3773f5",
      pointBackgroundColor: "#3773f5",
      pointBorderwidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#3773f5",
      pointHoverBorderColor: "#3773f5",
      pointHoverBorderwidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const BalanceChart = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Portfolio Balance</Title>
        <Balance>$46,000</Balance>
      </TitleWrapper>
      <Line data={data} options={options} width={400} height={100} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #ffffff42;
  border-radius: 6px;
  padding: 12px;
  width: 100%;
  margin-bottom: 24px;
`;

const TitleWrapper = styled.div`
  margin-bottom: 12px;
`;

const Title = styled.p`
  margin: 0;
  color: #8c8b8f;
`;

const Balance = styled.span`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2.1px;
`;
