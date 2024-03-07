import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from './mainLayout';
import Login from './Login';
import HomeLayout from './homeLayout';
import GetAllBills from './getAllBills';
import GetBillById from './getBillById';
import AddBill from './addBill';
import EditBill from './editBill';
import LineChart from './Linechart.js';
import { registerCharts } from './registerCharts.ts'


registerCharts();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout />}>
      <Route index element={<Login />} />
        <Route path='/home' element={<HomeLayout />}>
          <Route index element={<GetAllBills />} />
          <Route path='/home/:id' element={<GetBillById />} />
          <Route path='/home/addBill' element={<AddBill />} />
          <Route path='/home/editBill/:id' element={<EditBill />} />
          <Route path='/home/chart' element={<LineChart />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

