"use client";
    import { useState } from 'react';
    import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend,
    } from 'chart.js';
    import { Bar } from 'react-chartjs-2';
    import {
      BellIcon,
      UserCircleIcon,
      ChevronDownIcon,
      Bars3Icon,
      XMarkIcon
    } from '@heroicons/react/24/outline';

    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    );

    const salesData = {
      labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
      datasets: [
        {
          label: 'Sales',
          data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000)),
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
        },
      ],
    };

    const orderData = [
      { id: 1083, customerName: 'Maren Dokidis', qtyItems: 2, amount: '$34,5', paymentMethod: 'E-Wallet', status: 'New Order' },
      { id: 1082, customerName: 'Carter Lipshutz', qtyItems: 5, amount: '$65,5', paymentMethod: 'Bank Transfer', status: 'New Order' },
      { id: 1081, customerName: 'Adison Philips', qtyItems: 3, amount: '$47,5', paymentMethod: 'E-Wallet', status: 'New Order' },
      { id: 1079, customerName: 'Craig Siphron', qtyItems: 15, amount: '$89,8', paymentMethod: 'Bank Transfer', status: 'Packing' },
    ];

    const productData = [
      { name: 'Water Dispenser Pump', itemsSold: '2018 Items Sold' },
      { name: 'Vacuum Cleaner A1290', itemsSold: '1087 Items Sold' },
      { name: 'Emergency lamp L1', itemsSold: '801 Items Sold' },
      { name: 'Air Purifier N430', itemsSold: '340 Items Sold' },
      { name: 'Macaron Home Speaker H89', itemsSold: '110 Items Sold' },
    ];

    const statusData = [
      { label: 'New Order', value: 43, percentage: '0.1%', color: 'blue' },
      { label: 'On Progress', value: 12, percentage: '0.1%', color: 'orange' },
      { label: 'Completed', value: 40, percentage: '0.1%', color: 'green' },
      { label: 'Return', value: 2, percentage: '0.1%', color: 'red' },
    ];

    export default function Home() {
      const [selectedTime, setSelectedTime] = useState('This Month');
      const [selectedDay, setSelectedDay] = useState('This Day');
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

      const handleTimeChange = (time) => {
        setSelectedTime(time);
      };

      const handleDayChange = (day) => {
        setSelectedDay(day);
      };

      const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
      };

      return (
        <div className="bg-gray-100 min-h-screen font-sans">
          <nav className="bg-white shadow">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-800 mr-6">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#007bff"/>
                    <path d="M2 17L12 22L22 17" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="hidden md:flex space-x-4">
                  <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Overview</a>
                  <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium bg-gray-100">Sales</a>
                  <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Inventory</a>
                  <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Analysis</a>
                  <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Affiliates</a>
                  <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">AI Strategy</a>
                </div>
                <div className="md:hidden">
                  <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                    {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <button className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                  <BellIcon className="h-5 w-5" />
                </button>
                <button className="ml-4 focus:outline-none">
                  <UserCircleIcon className="h-8 w-8 text-gray-400" />
                </button>
              </div>
            </div>
            {mobileMenuOpen && (
              <div className="md:hidden bg-gray-100 py-2">
                <a href="#" className="block text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium">Overview</a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium bg-gray-200">Sales</a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium">Inventory</a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium">Analysis</a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium">Affiliates</a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium">AI Strategy</a>
              </div>
            )}
          </nav>

          <div className="container mx-auto px-4 py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Sales</h2>
            <p className="text-gray-600 mb-6">Overview of Your Sales Performance</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="bg-white shadow rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-700">Total Balance</h3>
                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => handleTimeChange(selectedTime === 'This Month' ? 'Last Month' : 'This Month')}
                    >
                      {selectedTime}
                      <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-800">$103,045,00</p>
                <p className="text-sm text-green-500 mt-1">↑ 3.8% <span className="text-gray-500">Compare from last month</span></p>
                <div className="mt-4">
                  <Bar data={salesData} />
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Income</h3>
                <p className="text-3xl font-bold text-gray-800">$78,000,00</p>
                <p className="text-sm text-green-500 mt-1">↑ 2.8% <span className="text-gray-500">Compare from last month</span></p>
              </div>

              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Expense</h3>
                <p className="text-3xl font-bold text-gray-800">$15,010,00</p>
                <p className="text-sm text-red-500 mt-1">↓ 0.8% <span className="text-gray-500">Compare from last month</span></p>
              </div>

              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Store Tax</h3>
                <p className="text-3xl font-bold text-gray-800">$9,090,00</p>
                <p className="text-sm text-green-500 mt-1">↑ 0.2% <span className="text-gray-500">Compare from last month</span></p>
              </div>

              <div className="bg-white shadow rounded-lg p-4 md:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Affiliates Revenue</h3>
                <p className="text-3xl font-bold text-gray-800">$10,078,00</p>
                <p className="text-sm text-green-500 mt-1">↑ 0.4% <span className="text-gray-500">Compare from last month</span></p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-700">Best Selling Product</h3>
                  <p className="text-sm text-gray-500">Top-Selling Products at a Glance</p>
                </div>
                <ul>
                  {productData.map((product, index) => (
                    <li key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
                      <div className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#007bff"/>
                            <path d="M2 17L12 22L22 17" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className="text-gray-700">{product.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{product.itemsSold}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white shadow rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-700">Track Order Status</h3>
                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => handleDayChange(selectedDay === 'This Day' ? 'Last Day' : 'This Day')}
                    >
                      {selectedDay}
                      <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">Analyze growth and changes in visitor patterns</p>
                <div className="flex justify-between mb-4">
                  {statusData.map((status, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-bold text-gray-800">{status.value}</p>
                      <p className="text-sm text-gray-500">
                        {status.label} <span className={`text-${status.color}-500`}>↑ {status.percentage}</span>
                      </p>
                      <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                        <div className={`h-2 bg-${status.color}-500 rounded-full`} style={{ width: `${(status.value / Math.max(...statusData.map(s => s.value))) * 100}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty Items</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orderData.map((order, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customerName}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.qtyItems}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.amount}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.paymentMethod}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${order.status === 'Packing' ? 'orange' : 'blue'}-100 text-${order.status === 'Packing' ? 'orange' : 'blue'}-800`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
