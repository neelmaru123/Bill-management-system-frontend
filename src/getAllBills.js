import { useNavigate } from "react-router-dom";
import bills from "./data";
import { useEffect, useState } from "react";
import api_url from "./api";

function GetAllBills() {
    const navigate = useNavigate();
    const [data, setdata] = useState([]);
    let currentDate = new Date();
    let aprilFirst = new Date(currentDate.getFullYear(), 3, 1);
    let [startingDate, setStartingDate] = useState(
        currentDate >= aprilFirst
            ? new Date(currentDate.getFullYear(), 3, 1) // April 1st of the current year
            : new Date(currentDate.getFullYear() - 1, 3, 1) // April 1st of the previous year
    );
    let [endingDate, setEndingDate] = useState(new Date()); // Today's date
    const [searchTermBillNo, setSearchTermBillNo] = useState('');
    const [searchTermPartyName, setSearchTermPartyName] = useState('');

    useEffect(() => {
        fetch(api_url)
            .then(response => response.json())
            .then(data => setdata(data))
            .catch(error => console.log(error))
    })


    let allBill = data
        .filter(bill => bill.billNo.toLowerCase().includes(searchTermBillNo.toLowerCase()))
        .filter(bill => bill.companyName.toLowerCase().includes(searchTermPartyName.toLowerCase()))
        .map((bill) => {
            console.log(bill.date, startingDate, endingDate);
            if (bill.billNo % 2 == 0) {
                let billDate = new Date(bill.date);
                if (billDate >= startingDate && billDate <= endingDate) {
                    return (
                        <tr className=" bg-theme-light-shadeh-auto p-4">
                            <td className="p-2">{bill.billNo}</td>
                            <td className="p-2">{bill.date}</td>
                            <td className="p-2">{bill.companyName}</td>
                            <td className="p-2">{bill.totalBillAmount}</td>
                            <td className="p-2">{bill.paidAmount}</td>
                            <td className="p-2">{bill.dueAmount}</td>
                            <td className="p-2">
                                <button className=" bg-theme-dark p-2 text-theme-light rounded-xl" onClick={
                                    () => {
                                        navigate("/home/" + bill.id)
                                    }
                                }>View</button>
                            </td>
                        </tr>
                    )
                }
            }
            else {
                let billDate = new Date(bill.date);
                if (billDate >= startingDate && billDate <= endingDate) {
                    return (
                        <tr className="bg-slate-200 h-auto p-4" >
                            <td className="p-2">{bill.billNo}</td>
                            <td className="p-2">{bill.date}</td>
                            <td className="p-2">{bill.companyName}</td>
                            <td className="p-2">{bill.totalBillAmount}</td>
                            <td className="p-2">{bill.paidAmount}</td>
                            <td className="p-2">{bill.dueAmount}</td>
                            <td className="p-2">
                                <button className=" bg-theme-dark p-2 text-theme-light rounded-xl" onClick={
                                    () => {
                                        navigate("/home/" + bill.id)
                                    }
                                }>View</button>
                            </td>
                        </tr>
                    )
                }
            }
        })


    return (
        <div className="w-full h-auto bg-theme-light-shade">
            <div className="container mx-auto">
                <div className="">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold text-theme-dark p-5 text-center">All Genrated Bills</h1>
                    </div>
                </div>
                <div className="flex flex-row justify-between p-7">
                    <div className=" items-center align-middle">
                        <label className="block uppercase text-xl tracking-wide text-theme-dark font-bold mb-2  pe-3" for="grid-password">Bill No : </label>
                        <input className="border rounded-lg text-theme-dark" type="text" onChange={(e) => setSearchTermBillNo(e.target.value)}></input>
                    </div>
                    <div className=" items-center align-middle">
                        <label className="block uppercase text-xl tracking-wide text-theme-dark font-bold mb-2  pe-3" for="grid-password">Party Name : </label>
                        <input className="border rounded-lg text-theme-dark" type="text" onChange={(e) => setSearchTermPartyName(e.target.value)}></input>
                    </div>
                    <div className=" items-center align-middle">
                        <label className="block uppercase text-xl tracking-wide text-theme-dark font-bold mb-2  pe-3" for="grid-password">Starting date : </label>
                        <input className="border rounded-lg text-theme-dark" type="date" onChange={(e) => setStartingDate(new Date(e.target.value))}></input>
                    </div>
                    <div className=" items-center align-middle">
                        <label className="block uppercase text-xl tracking-wide text-theme-dark font-bold mb-2  pe-3" for="grid-password">ending date : </label>
                        <input className="border rounded-lg text-theme-dark" type="date" onChange={(e) => setEndingDate(new Date(e.target.value))}></input>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        <table className=" table-auto rounded-3xl shadow-2xl" >
                            <thead className=" bg-theme-dark text-theme-light border rounded-2xl">
                                <tr className="">
                                    <th className="border border-theme-dark p-2">Bill No</th>
                                    <th className="border border-theme-dark p-2">Date</th>
                                    <th className="border border-theme-dark p-2">Party Name</th>
                                    <th className="border border-theme-dark p-2">Total Amount</th>
                                    <th className="border border-theme-dark p-2">Paid Amount</th>
                                    <th className="border border-theme-dark p-2">Due Amount</th>
                                    <th className="border border-theme-dark p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {allBill}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default GetAllBills;