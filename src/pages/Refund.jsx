import axios from "axios";
import React, { useState } from "react";
import backend from "../backend";

const Refund = ({ role }) => {
  const [tradingId, setTradingId] = useState("");
  const [mainAmount, setMainAmount] = useState(0);
  const [tradPer, setTradPer] = useState(7);
  const [refundAmount, setRefundAmount] = useState(0);
  const [refundMonth, setRefundMonth] = useState("January");

  const handleMainRefund = (e) => {
    setMainAmount(e.target.value);
    const amount = e.target.value * ((tradPer - 7) / 100);
    setRefundAmount(amount);
  };
  const handleRefundPer = (e) => {
    setTradPer(e.target.value);
    const amount = mainAmount * ((e.target.value - 7) / 100);
    setRefundAmount(amount);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle sign-in logic here

    try {
      const response = await axios.post(`${backend}/refund/`, {
        tradingId,
        tradingAmount: mainAmount,
        tradingPer: tradPer,
        refundAmount: refundAmount,
        refundMonth: refundMonth,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setTradingId("");
    setMainAmount(0);
    setRefundMonth("January");
    setTradPer(7);
    setRefundAmount(0);
  };

  return (
    <>
      <div className=" min-h-screen p-8" style={{ width: "100%" }}>
        <div className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">
                Trading Id*
              </label>
              <input
                type="text"
                id="name"
                value={tradingId}
                onChange={(e) => setTradingId(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">
                Main Amount*
              </label>
              <input
                type="number"
                id="name"
                value={mainAmount}
                onChange={(e) => handleMainRefund(e)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">
                Total Trad Percentage*
              </label>
              <input
                type="number"
                id="name"
                value={tradPer}
                onChange={(e) => handleRefundPer(e)}
                max={100}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">
                Refund Amount
              </label>
              <input
                type="number"
                id="name"
                value={refundAmount}
                //   onChange={(e)=>setMembershipFee(e.target.value)}
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">
                Refund Month
              </label>
              <select
                name="refundMonth"
                id="refundMonth"
                className="w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500"
                onChange={(e) => setRefundMonth(e.target.value)}
                value={refundMonth}
              >
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refund;
