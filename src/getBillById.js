import { useNavigate, useParams } from "react-router-dom"
import bills from "./data";
import { useEffect, useState } from "react";
import api_url from "./api";
import { ArrowLeft } from "lucide-react";

function GetBillById() {
    const params = useParams();
    const [data, setdata] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(api_url + "/" + params.id)
            .then(response => response.json())
            .then(data => setdata(data))
            .catch(error => console.log(error))
    }, [params.id])

    const getBillById =
        <>
            <tr className="text-2xl font-bold">
                <td className="p-2">Bill No</td>
                <td className="p-2"> : </td>
                <td className="p-2">{data.billNo}</td>
            </tr>
            <tr className="text-2xl font-bold">
                <td className="p-2">Date</td>
                <td className="p-2"> : </td>
                <td className="p-2">{data.date}</td>
            </tr>
            <tr className="text-2xl font-bold">
                <td className="p-2">Company Name</td>
                <td className="p-2"> : </td>
                <td className="p-2">{data.companyName}</td>
            </tr>
            <tr className="text-2xl font-bold">
                <td className="p-2">Product Details</td>
                <td className="p-2"> : </td>
                <td className="p-2">{data.productDetails}</td>
            </tr>
            <tr className="text-2xl font-bold">
                <td className="p-2">Amount</td>
                <td className="p-2"> : </td>
                <td className="p-2">{data.amount}</td>
            </tr>
            <tr className="text-2xl font-bold">
                <td className="p-2">GST</td>
                <td className="p-2"> : </td>
                <td className="p-2">{data.gst}</td>
            </tr>
            <tr className="text-2xl font-bold">
                <td className="p-2">Paid Amount</td>
                <td className="p-2"> : </td>
                <td className="p-2">{data.paidAmount}</td>
            </tr>
            <tr className="text-2xl font-bold">
                <td className="p-2">Due Amount</td>
                <td className="p-2"> : </td>
                <td className="p-2">{data.dueAmount}</td>
            </tr>
            <tr className="text-2xl font-bold">
                <td className="p-2">Total Amount</td>
                <td className="p-2"> : </td>
                <td className="p-2">{data.totalBillAmount}</td>
            </tr>
        </>

    return (
        <>
            <div className="w-full h-auto bg-theme-light-shade p-5">
                <div className="container mx-auto">
                    <div className="">
                        <ArrowLeft className=" float-start" size={30} onClick={() => {
                            navigate("/home")
                        }}/>
                        <div className=" ps-2 font-bold text-xl">back</div>
                    </div>
                    <div className="">
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-bold text-theme-dark p-5 text-center">Bill Details</h1>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-col rounded-2xl bg-theme-mediam-dark p-3 shadow-2xl">
                            <table className=" table-auto rounded-3xl " >
                                <tbody className=" text-theme-light">
                                    {getBillById}
                                    <tr className="flex font-bold">
                                        <td className="p-2"><button className="bg-theme-dark  p-3 text-theme-light rounded-xl" onClick={() => {
                                            navigate("/home/editBill/" + data.id)
                                            console.log(data.id)
                                         }}>Edit Bill</button></td>
                                        <td className="p-2"> <button className="bg-theme-dark  p-3 text-theme-light rounded-xl" onClick={() => { 
                                            
                                        }}>Pay Amount</button> </td>
                                        <td className="p-2"><button className="bg-theme-dark  p-3 text-theme-light rounded-xl" onClick={() => {
                                            fetch(api_url + "/" + data.id, {method: "DELETE"})
                                                .then(data => {
                                                    console.log(data);
                                                    navigate("/home")
                                                })
                                                .catch(error => console.log(error))
                                         }}>Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}





export default GetBillById;
