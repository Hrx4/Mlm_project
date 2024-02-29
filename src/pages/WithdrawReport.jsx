import React from "react";
import { FaFileAlt } from "react-icons/fa";

const WithdrawReport = () => {
    return (
        <>
            <div style={{ marginTop: "45px", marginLeft: "65px" }} className="directmember">
                <div className="flex items-center mb-4">
                    <FaFileAlt className="text-2xl mr-2" />
                    <h1 className="text-xl font-bold">Withdraw Report</h1>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg flex justify-center ">
                    <table className="table-auto w-75% justify-">
                        <thead>
                            <tr>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>SL.</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Amount</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Bank Details</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Request on</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Paid</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">1.</td>
                                <td className="border px-4 py-2"> 6.87</td>
                                <td className="border px-4 py-2">Bank : ICICI BANK<br/>
                                    Branch : TARAKESHWAR <br/>
                                    A/c Name : Sagar Molla<br/>
                                    A/c No. : 260901502082<br/>
                                    Type : savings<br/>
                                    IFSC : ICIC0002609<br/>
                                    PAN No. : APIPM6464M</td>
                                <td className="border px-4 py-2">03-07-2023</td>
                                <td className="border px-4 py-2">Paid<br/>
                                    on 04-07-2023</td>
                                <td className="border px-4 py-2">Null</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default WithdrawReport;