import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { TransactionContext } from "../context/TransactionContext";

Chart.register(ArcElement, Tooltip, Legend);

const FinancialTransaction = () => {
  const { transactions } = useContext(TransactionContext);

  const calculateCategoryData = (type) => {
    const filteredTransactions = transactions.filter(
      (transaction) => transaction.type === type
    );

    const categories = [
      ...new Set(filteredTransactions.map((t) => t.category)),
    ];
    const categoryAmounts = categories.map((category) => {
      const totalAmount = filteredTransactions
        .filter((transaction) => transaction.category === category)
        .reduce((sum, transaction) => sum + Number(transaction.amount), 0);
      return totalAmount;
    });

    const totalAmount = categoryAmounts.reduce(
      (sum, amount) => sum + amount,
      0
    );

    const categoryPercentages = categoryAmounts.map(
      (amount) => (amount / totalAmount) * 100
    );

    return {
      labels: categories,
      data: categoryPercentages,
    };
  };

  const incomeData = calculateCategoryData("Income");
  const expenseData = calculateCategoryData("Expense");

  const incomeChartData = {
    labels: incomeData.labels,
    datasets: [
      {
        data: incomeData.data,
        backgroundColor: ["#04BFDA", "#9B88ED", "#FB67CA", "#FFA84A"],
      },
    ],
  };

  const expenseChartData = {
    labels: expenseData.labels,
    datasets: [
      {
        data: expenseData.data,
        backgroundColor: ["#04BFDA", "#9B88ED", "#FB67CA", "#FFA84A"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const hasIncomeData = incomeChartData.datasets[0].data.length > 0;
  const hasExpenseData = expenseChartData.datasets[0].data.length > 0;

  if (!hasIncomeData && !hasExpenseData) {
    return (
      <div className="p-4 bg-[#F9F9F9] rounded-lg shadow">
        <p className="text-[27px] font-bold">Financial Summary</p>
        <p className="text-gray-500 pt-3">
          No transactions available to provide a summary.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-[#F9F9F9] rounded-lg shadow">
      <p className="text-[27px] font-bold mb-4">Financial Summary</p>

      {hasIncomeData && (
        <div className="flex flex-col mb-8">
          <h3 className="text-[16px] text-left font-bold mb-4">Income</h3>
          <div className="flex p-2 flex-wrap">
            <div className="w-40 h-40 mr-4">
              <Doughnut data={incomeChartData} options={options} />
            </div>
            <div>
              <ul className="mt-4">
                {incomeChartData.labels.map((label, index) => (
                  <li
                    key={index}
                    className="flex items-center mb-2 text-[12px] text-[#848A9C]"
                  >
                    <span
                      className="block w-[12px] h-[12px] mr-2 rounded-full"
                      style={{
                        backgroundColor: "white",
                        border: `2px solid ${incomeChartData.datasets[0].backgroundColor[index]}`,
                      }}
                    ></span>

                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {hasExpenseData && (
        <div className="flex flex-col">
          <h3 className="text-[16px] font-bold mb-4">Expense</h3>
          <div className="flex p-2 flex-wrap">
            <div className="w-40 h-40 mr-4">
              <Doughnut data={expenseChartData} options={options} />
            </div>
            <ul className="mt-4">
              {expenseChartData.labels.map((label, index) => (
                <li
                  key={index}
                  className="flex items-center mb-2 text-[12px] text-[#848A9C]"
                >
                  <span
                    className="block w-[12px] h-[12px] mr-2 rounded-full"
                    style={{
                      backgroundColor: "white",
                      border: `2px solid ${expenseChartData.datasets[0].backgroundColor[index]}`,
                    }}
                  ></span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialTransaction;
