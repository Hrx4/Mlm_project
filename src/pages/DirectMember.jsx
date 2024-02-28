import React from "react";
import { FiUser } from 'react-icons/fi';

const DirectMember = () => {
    return (
        <>

            <div style={{ marginTop: "45px", marginLeft:"65px" }} className="directmember">
                <div className="flex items-center mb-4">
                    <FiUser className="text-2xl mr-2" />
                    <h1 className="text-xl font-bold">List Of Direct Members</h1>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg flex justify-center ">
                    <table className="table-auto w-75% justify-">
                        <thead>
                            <tr>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>SL.</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Member Code</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Name</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Mobile</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Email</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Joining Date</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Status</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Package</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Business</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">1.</td>
                                <td className="border px-4 py-2">NEWINS</td>
                                <td className="border px-4 py-2">Pamela</td>
                                <td className="border px-4 py-2">12345456</td>
                                <td className="border px-4 py-2">t123@gmail.com</td>
                                <td className="border px-4 py-2">15-11-2022</td>
                                <td className="border px-4 py-2">Employee</td>
                                <td className="border px-4 py-2">3456</td>
                                <td className="border px-4 py-2">0.00</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DirectMember;