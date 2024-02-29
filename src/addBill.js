import { useState } from "react";
import api_url from "./api";
import { useNavigate } from "react-router-dom";

function AddBill() {
    const [data, setdata] = new useState({ billNo: "" });
    const navigate = useNavigate();
    return (
        <>
            <h1 class="text-3xl font-bold leading-tight text-theme-dark text-center ">Add Bill</h1>
            <form class="w-full pt-8">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-theme-dark text-xs font-bold mb-2" for="grid-first-name">
                            Bill No
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-theme-dark border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="GT01" onChange={(e) => {
                            setdata({ ...data, billNo: e.target.value });
                        }}/>
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-theme-dark text-xs font-bold mb-2" for="grid-last-name">
                            Company Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-theme-dark border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" onChange={(e) => {
                            setdata({ ...data, companyName: e.target.value });
                        }}/>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-theme-dark text-xs font-bold mb-2" for="grid-password">
                            Product Details
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="" onChange={(e) => {
                            setdata({ ...data, productDetails: e.target.value });
                        }} />
                        <p class="text-gray-600 text-xs italic">Write it in one line </p>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-theme-dark text-xs font-bold mb-2" for="grid-city">
                            Amount
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-theme-dark border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="" onChange={(e) => {
                            var gst = parseFloat(e.target.value * 0.18);
                            setdata({ ...data, totalBillAmount: Number(e.target.value) + Number(gst), gst: gst,amount:e.target.value });
                        }}/>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-theme-dark text-xs font-bold mb-2" for="grid-zip">
                            Paid Amount
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="" onChange={(e) => {
                             const paidAmount = e.target.value;
                             setdata(prevData => ({ 
                                 ...prevData, 
                                 paidAmount: paidAmount,
                                 dueAmount: prevData.totalBillAmount - paidAmount 
                             }));
                        }}/>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-theme-dark text-xs font-bold mb-2" for="grid-zip">
                            Date
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="date" placeholder="" onChange={(e) => {
                            setdata({ ...data, date: e.target.value });
                        }}/>
                    </div>
                </div>
                <div className="pt-4">
                    <button class="bg-theme-dark-shade hover:bg-theme-mediam-dark text-theme-light font-bold py-2 px-4 rounded" type="submit" onClick={(e) => {
                        console.log(data);
                        e.preventDefault();
                       fetch(api_url, {
                            method: "POST",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            },   
                        }).then(() => {
                            console.log("new bill added");
                            navigate("/home")
                        })
                    }}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddBill;