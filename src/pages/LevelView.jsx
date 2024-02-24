import React from "react";
import { FiUser } from 'react-icons/fi';

const LevelView = () =>{
    return (
        <>
        <div style={{ marginTop: "45px", marginLeft:"65px" }} className="directmember">
                <div className="flex items-center mb-4">
                    <FiUser className="text-2xl mr-2" />
                    <h1 className="text-xl font-bold">Level View</h1>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg flex justify-center ">
                    <table className="table-auto w-75% justify-">
                        <thead>
                            <tr>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Level</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Total Member</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Active Member</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Inactive Member</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>Business</th>
                                <th className="px-4 py-2" style={{ color: "white", backgroundColor: "black" }}>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">Level 1</td>
                                <td className="border px-4 py-2">1</td>
                                <td className="border px-4 py-2">0</td>
                                <td className="border px-4 py-2">1</td>
                                <td className="border px-4 py-2">0.00</td>
                                <td className="border px-4 py-2"><button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">View</button></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default LevelView;