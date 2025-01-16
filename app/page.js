
    "use client";
    import { useState, useRef, useEffect } from 'react';
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
      XMarkIcon,
      CheckCircleIcon,
      ExclamationCircleIcon,
      CalendarIcon,
      EllipsisVerticalIcon
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

    const notificationData = [
      {
        id: 1,
        user: 'John Doe',
        message: 'has submitted a leave request for July 25-27, 20...',
        date: 'July 16, 2024',
        time: '09:00 PM',
        type: 'leave',
      },
      {
        id: 2,
        user: 'Michael Brown',
        message: 'contract is up for renewal on July 21, 2024',
        date: 'July 16, 2024',
        time: '05:10 PM',
        type: 'contract',
      },
      {
        id: 3,
        user: 'Emily Davis',
        message: 'has set up a meeting for July 20, 2024, at 3:00...',
        date: 'July 16, 2024',
        time: '03:47 PM',
        type: 'meeting',
      },
      {
        id: 4,
        user: 'Matthew Martinez',
        message: 'has scheduled a meeting for July 23, 20...',
        date: 'July 16, 2024',
        time: '11:30 AM',
        type: 'meeting',
      },
      {
        id: 5,
        user: 'Nnifer Harris',
        message: 'contract renewal is up for review on Novem...',
        date: 'July 16, 2024',
        time: '10:00 AM',
        type: 'contract',
      },
      {
        id: 6,
        user: 'Anthony White',
        message: 'has been added to the team as of today',
        date: 'July 15, 2024',
        time: '04:30 PM',
        type: 'team',
      },
      {
        id: 7,
        user: 'Sarah Johnson',
        message: 'contract renewal has been submitted for r...',
        date: 'July 15, 2024',
        time: '01:52 PM',
        type: 'contract',
      },
    ];

    const projectData = [
      {
        id: 1,
        name: 'Project A / Abstergo Ltd.',
        dueDate: 'Dec 19, 2024',
        tasks: '06/16',
        time: '06:58:24',
        description: 'This involves revamping the design, optimizing the backend infrastructure, and enhancing th...',
        taskProgress: ['Moodboard', 'Wireframes', 'Desktop view design', 'Tablet view design', '+14 more task'],
        assignees: ['user1.jpg', 'user2.jpg', 'user3.jpg']
      },
      {
        id: 2,
        name: 'Project B / Acme Co.',
        dueDate: 'Nov 9, 2024',
        tasks: '10/18',
        time: '09:24:00',
        description: 'This involves revamping the design, optimizing the backend infrastructure, and enhancing th...',
        taskProgress: ['Moodboard', 'Wireframes', 'Desktop view design', 'Tablet view design', '+14 more task'],
        assignees: ['user1.jpg', 'user2.jpg', 'user3.jpg']
      },
      {
        id: 3,
        name: 'Project C / Soybean',
        dueDate: 'Oct 19, 2024',
        tasks: '02/08',
        time: '08:45:00',
        description: 'This involves revamping the design, optimizing the backend infrastructure, and enhancing th...',
        taskProgress: ['Moodboard', 'Wireframes', 'Desktop view design', 'Tablet view design', '+14 more task'],
        assignees: ['user1.jpg', 'user2.jpg', 'user3.jpg']
      },
      {
        id: 4,
        name: 'Project D / Binford Ltd.',
        dueDate: 'Sep 23, 2024',
        tasks: '11/18',
        time: '05:23:12',
        description: 'This involves revamping the design, optimizing the backend infrastructure, and enhancing th...',
        taskProgress: ['Moodboard', 'Wireframes', 'Desktop view design', 'Tablet view design', '+14 more task'],
        assignees: ['user1.jpg', 'user2.jpg', 'user3.jpg']
      },
      {
        id: 5,
        name: 'Project F / Big Kahuna Burger Ltd.',
        dueDate: 'Aug 23, 2024',
        tasks: '22/32',
        time: '07:58:00',
        description: 'This involves revamping the design, optimizing the backend infrastructure, and enhancing th...',
        taskProgress: ['Moodboard', 'Wireframes', 'Desktop view design', 'Tablet view design', '+14 more task'],
        assignees: ['user1.jpg', 'user2.jpg', 'user3.jpg']
      },
    ];

    const teamMembers = [
      { id: 1, name: 'Ajay Lumari', role: 'UI Designer' },
      { id: 2, name: 'Cù Hội', role: 'UI Designer' },
      { id: 3, name: 'Robert Young', role: 'UI Designer' },
      { id: 4, name: 'Hassan Jawahir', role: 'UI Designer' },
      { id: 5, name: 'João Nowak', role: 'Quality Control' },
      { id: 6, name: 'Elia Romero', role: 'Developer' },
      { id: 7, name: 'Lukas Kazlauskas', role: 'UI Designer' },
      { id: 8, name: 'Ginez González', role: 'UI Designer' },
      { id: 9, name: 'Trang Quốc Kiệt', role: 'UI Designer' },
      { id: 10, name: 'Ikram Khan', role: 'Quality Control' },
    ];

    export default function Home() {
      const [selectedTime, setSelectedTime] = useState('This Month');
      const [selectedDay, setSelectedDay] = useState('This Day');
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const [notificationOpen, setNotificationOpen] = useState(false);
      const [activeTab, setActiveTab] = useState('sales');
      const notificationRef = useRef(null);

      const handleTimeChange = (time) => {
        setSelectedTime(time);
      };

      const handleDayChange = (day) => {
        setSelectedDay(day);
      };

      const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
      };

      const toggleNotification = () => {
        setNotificationOpen(!notificationOpen);
      };

      const closeNotification = () => {
        setNotificationOpen(false);
      };

      const handleTabChange = (tab) => {
        setActiveTab(tab);
      };

      useEffect(() => {
        function handleClickOutside(event) {
          if (notificationRef.current && !notificationRef.current.contains(event.target)) {
            closeNotification();
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [notificationRef]);

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
                  <a href="#" onClick={() => handleTabChange('overview')} className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'overview' ? 'bg-gray-100' : ''}`}>Overview</a>
                  <a href="#" onClick={() => handleTabChange('sales')} className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'sales' ? 'bg-gray-100' : ''}`}>Sales</a>
                  <a href="#" onClick={() => handleTabChange('inventory')} className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'inventory' ? 'bg-gray-100' : ''}`}>Inventory</a>
                  <a href="#" onClick={() => handleTabChange('analysis')} className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'analysis' ? 'bg-gray-100' : ''}`}>Analysis</a>
                  <a href="#" onClick={() => handleTabChange('affiliates')} className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'affiliates' ? 'bg-gray-100' : ''}`}>Affiliates</a>
                  <a href="#" onClick={() => handleTabChange('ai-strategy')} className={`text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'ai-strategy' ? 'bg-gray-100' : ''}`}>AI Strategy</a>
                </div>
                <div className="md:hidden">
                  <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                    {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <button onClick={toggleNotification} className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                    <BellIcon className="h-5 w-5" />
                  </button>
                  {notificationOpen && (
                    <div ref={notificationRef} className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-10">
                      <div className="p-4 border-b">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-gray-700">Notifications</h3>
                          <button onClick={closeNotification} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <XMarkIcon className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500">Stay Updated with Your Latest Notifications</p>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">All <span className="text-gray-500">Unread (12)</span></span>
                          <button className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none flex items-center">
                            <CheckCircleIcon className="h-4 w-4 mr-1" />
                            Mark all as read
                          </button>
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                          {notificationData.map((notification, index) => (
                            <div key={index} className="flex items-start py-2 border-b border-gray-200">
                              <div className="mr-3">
                                {notification.type === 'leave' && <UserCircleIcon className="h-8 w-8 text-gray-400" />}
                                {notification.type === 'contract' && <ExclamationCircleIcon className="h-8 w-8 text-red-500" />}
                                {notification.type === 'meeting' && <CalendarIcon className="h-8 w-8 text-blue-500" />}
                                {notification.type === 'team' && <UserCircleIcon className="h-8 w-8 text-green-500" />}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-700">{notification.user} <span className="text-gray-500">{notification.message}</span></p>
                                <p className="text-xs text-gray-500">{notification.date} | {notification.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button className="ml-4 focus:outline-none">
                  <UserCircleIcon className="h-8 w-8 text-gray-400" />
                </button>
              </div>
            </div>
            {mobileMenuOpen && (
              <div className="md:hidden bg-gray-100 py-2">
                <a href="#" onClick={() => handleTabChange('overview')} className="block text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium">Overview</a>
                <a href="#" onClick={() => handleTabChange('sales')} className="block text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium bg-gray-200">Sales</a>
                <a href="#" onClick={() => handleTabChange('inventory')} className="block text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium">Inventory</a>
                <a href="#" onClick={() => handleTabChange('analysis')} className="block text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium">Analysis</a>
                <a href="#" onClick={() => handleTabChange('affiliates')} className="block text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium">Affiliates</a>
                <a href="#" onClick={() => handleTabChange('ai-strategy')} className="block text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium">AI Strategy</a>
              </div>
            )}
          </nav>

          <div className="container mx-auto px-4 py-6">
            {activeTab === 'sales' && (
              <>
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
              </>
            )}
            {activeTab === 'inventory' && (
              <div className="bg-white shadow rounded-lg p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Inventory</h2>
                <div className="flex">
                  <div className="w-1/4 pr-4">
                    <ul className="border-r border-gray-200">
                      {teamMembers.map((member) => (
                        <li key={member.id} className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                          <UserCircleIcon className="h-6 w-6 text-gray-400 mr-2" />
                          <div>
                            <p className="text-sm font-medium text-gray-700">{member.name}</p>
                            <p className="text-xs text-gray-500">{member.role}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-3/4 pl-4 relative">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <div className="h-10 w-1 bg-blue-500 mr-2"></div>
                        <p className="text-sm text-gray-500">08:00 AM</p>
                      </div>
                      <div className="flex items-center">
                        <div className="h-10 w-1 bg-blue-500 mr-2"></div>
                        <p className="text-sm text-gray-500">09:00 AM</p>
                      </div>
                      <div className="flex items-center">
                        <div className="h-10 w-1 bg-blue-500 mr-2"></div>
                        <p className="text-sm text-gray-500">10:00 AM</p>
                      </div>
                      <div className="flex items-center">
                        <div className="h-10 w-1 bg-blue-500 mr-2"></div>
                        <p className="text-sm text-gray-500">11:00 AM</p>
                      </div>
                      <div className="flex items-center">
                        <div className="h-10 w-1 bg-blue-500 mr-2"></div>
                        <p className="text-sm text-gray-500">12:00 PM</p>
                      </div>
                      <div className="flex items-center">
                        <div className="h-10 w-1 bg-blue-500 mr-2"></div>
                        <p className="text-sm text-gray-500">01:00 PM</p>
                      </div>
                      <div className="flex items-center">
                        <div className="h-10 w-1 bg-blue-500 mr-2"></div>
                        <p className="text-sm text-gray-500">02:00 PM</p>
                      </div>
                      <div className="flex items-center">
                        <div className="h-10 w-1 bg-blue-500 mr-2"></div>
                        <p className="text-sm text-gray-500">03:00 PM</p>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 h-full border-l border-blue-500" style={{left: 'calc(50% - 0.5px)'}}></div>
                    <div className="relative">
                      {projectData.map((project) => (
                        <div key={project.id} className="relative mb-4">
                          <div className="bg-gray-100 rounded-md p-3 hover:bg-gray-200 cursor-pointer relative">
                            <div className="flex items-center mb-2">
                              <div className="h-4 w-1 bg-blue-500 mr-2"></div>
                              <p className="text-sm font-medium text-gray-700">{project.name}</p>
                            </div>
                            <div className="flex items-center text-xs text-gray-500">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              <p>Due Date: {project.dueDate}</p>
                              <span className="ml-2">
                                <CheckCircleIcon className="h-4 w-4 mr-1" />
                                Task: {project.tasks}
                              </span>
                            </div>
                            <div className="absolute top-0 right-0 p-2">
                              <EllipsisVerticalIcon className="h-5 w-5 text-gray-500" />
                            </div>
                          </div>
                          <div className="absolute top-0 left-0 mt-1 ml-2 bg-white rounded-md shadow-lg p-4 hidden hover:block" style={{width: '250px'}}>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">{project.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{project.description}</p>
                            <a href="#" className="text-sm text-blue-500 hover:text-blue-700 mb-2 block">See Details</a>
                            <div className="text-sm text-gray-700 mb-2">
                              <p className="font-medium">Task Progress</p>
                              <ul className="ml-2">
                                {project.taskProgress.map((task, index) => (
                                  <li key={index} className="flex items-center">
                                    <CheckCircleIcon className="h-4 w-4 mr-1 text-green-500" />
                                    {task}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              Assign:
                              {project.assignees.map((assignee, index) => (
                                <UserCircleIcon key={index} className="h-5 w-5 ml-1" />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
