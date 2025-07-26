import React, { useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
} from "chart.js";
import {
  AlertCircle,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bell,
  Briefcase,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  Download,
  Edit,
  Eye,
  FileCheck,
  FilePlus,
  FileSearch,
  FileText,
  Filter,
  GitMerge,
  HelpCircle,
  LogOut,
  MessageCircle,
  Plus,
  Search,
  Settings,
  Shield,
  TrendingUp,
  Upload,
  User,
  XCircle,
  Zap
} from "lucide-react";

import "./AuthorizedLayout.scss";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const AuthorizedLayout = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  // const [selectedContracts, setSelectedContracts] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: BarChart3, active: true },
    { name: "Contracts", icon: FileText, count: 24 },
    { name: "Compliance", icon: Shield, alert: true },
    { name: "Reports", icon: TrendingUp },
    { name: "Notifications", icon: Bell, count: 5 },
    { name: "Calendar", icon: Calendar }
  ];

  const contracts = [
    {
      id: "CT-2024-001",
      name: "Microsoft Enterprise License",
      status: "Approved",
      date: "2024-07-01",
      value: "$120,000",
      compliance: "98%"
    },
    {
      id: "CT-2024-002",
      name: "AWS Cloud Services Agreement",
      status: "Processing",
      date: "2024-07-03",
      value: "$85,000",
      compliance: "92%"
    },
    {
      id: "CT-2024-003",
      name: "Salesforce CRM Contract",
      status: "Pending",
      date: "2024-07-05",
      value: "$45,000",
      compliance: "95%"
    },
    {
      id: "CT-2024-004",
      name: "Office Space Lease",
      status: "Expired",
      date: "2024-06-30",
      value: "$200,000",
      compliance: "85%"
    },
    {
      id: "CT-2024-005",
      name: "Marketing Agency Retainer",
      status: "Approved",
      date: "2024-07-02",
      value: "$30,000",
      compliance: "97%"
    },
    {
      id: "CT-2024-006",
      name: "IT Support Services",
      status: "Processing",
      date: "2024-07-04",
      value: "$25,000",
      compliance: "91%"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "contract",
      title: "New contract requires review",
      time: "2 min ago",
      priority: "high"
    },
    {
      id: 2,
      type: "compliance",
      title: "Compliance audit scheduled",
      time: "15 min ago",
      priority: "critical"
    },
    {
      id: 3,
      type: "approval",
      title: "Contract approved successfully",
      time: "1 hour ago",
      priority: "normal"
    },
    {
      id: 4,
      type: "reminder",
      title: "Renewal deadline approaching",
      time: "2 hours ago",
      priority: "medium"
    }
  ];

  const upcomingEvents = [
    {
      date: "8",
      day: "Mon",
      event: "Contract Review Meeting",
      time: "10:00 AM"
    },
    { date: "10", day: "Wed", event: "Compliance Audit", time: "2:00 PM" },
    { date: "12", day: "Fri", event: "Quarterly Report Due", time: "5:00 PM" }
  ];

  const getStatusColor = (status: unknown) => {
    switch (status) {
      case "Approved":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100";
      case "Processing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100";
      case "Pending":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100";
      case "Expired":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100";
    }
  };

  const getStatusIcon = (status: unknown) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="w-3 h-3" />;
      case "Processing":
        return <Clock className="w-3 h-3" />;
      case "Pending":
        return <AlertCircle className="w-3 h-3" />;
      case "Expired":
        return <XCircle className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const getComplianceColor = (compliance: unknown) => {
    const score = parseInt(compliance);
    if (score >= 95) return "text-emerald-600 dark:text-emerald-400";
    if (score >= 85) return "text-amber-600 dark:text-amber-400";
    return "text-red-600 dark:text-red-400";
  };

  // Chart data
  const complianceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Compliance Score",
        data: [92, 94, 95, 96, 97, 96, 98],
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        borderColor: "rgba(16, 185, 129, 1)",
        borderWidth: 2,
        tension: 0.4,
        fill: true
      }
    ]
  };

  const contractStatusData = {
    labels: ["Approved", "Processing", "Pending", "Expired"],
    datasets: [
      {
        data: [45, 15, 8, 2],
        backgroundColor: [
          "rgba(16, 185, 129, 0.7)",
          "rgba(59, 130, 246, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(239, 68, 68, 0.7)"
        ],
        borderColor: [
          "rgba(16, 185, 129, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(239, 68, 68, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-800"}`}
    >
      {/* Header */}
      <header
        className={`backdrop-blur-xl sticky top-0 z-50 ${darkMode ? "bg-gray-800/90 border-gray-700" : "bg-white/80 border-slate-200/60"} border-b`}
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  ContractPro
                </h1>
                <p
                  className={`text-xs ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                >
                  Enterprise Contract Management
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`relative flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 group ${
                    activeTab === item.name
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                      : `${darkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`
                  }`}
                  aria-label={item.name}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                  {item.count && (
                    <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                      {item.count}
                    </span>
                  )}
                  {item.alert && (
                    <span className="ml-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  )}
                  {activeTab !== item.name && (
                    <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  )}
                </button>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-xl ${darkMode ? "bg-gray-700 text-amber-400" : "bg-slate-100 text-amber-600"}`}
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? "☀️" : "🌙"}
              </button>

              <button
                className={`p-2 rounded-xl ${darkMode ? "hover:bg-gray-700" : "hover:bg-slate-100"}`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className={`p-2 rounded-xl relative ${darkMode ? "hover:bg-gray-700" : "hover:bg-slate-100"}`}
                  aria-label="Show notifications"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>

                {showNotifications && (
                  <div
                    className={`absolute right-0 mt-2 w-80 rounded-xl shadow-xl border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"} py-2 z-50`}
                  >
                    <div
                      className={`px-4 py-2 border-b ${darkMode ? "border-gray-700" : "border-slate-200"}`}
                    >
                      <h3
                        className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                      >
                        Notifications
                      </h3>
                    </div>
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`px-4 py-3 cursor-pointer ${darkMode ? "hover:bg-gray-700" : "hover:bg-slate-50"}`}
                      >
                        <p
                          className={`text-sm ${darkMode ? "text-white" : "text-slate-900"}`}
                        >
                          {notif.title}
                        </p>
                        <p
                          className={`text-xs ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                        >
                          {notif.time}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => setShowChatWidget(!showChatWidget)}
                className={`p-2 rounded-xl ${darkMode ? "hover:bg-gray-700" : "hover:bg-slate-100"}`}
                aria-label="Open chat"
              >
                <MessageCircle className="w-5 h-5" />
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className={`flex items-center space-x-2 p-2 rounded-xl ${darkMode ? "hover:bg-gray-700" : "hover:bg-slate-100"}`}
                  aria-label="Open profile menu"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center shadow">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showProfileDropdown && (
                  <div
                    className={`absolute right-0 mt-2 w-56 rounded-xl shadow-xl border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"} py-2 z-50`}
                  >
                    <div
                      className={`px-4 py-3 border-b ${darkMode ? "border-gray-700" : "border-slate-200"}`}
                    >
                      <p
                        className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                      >
                        Sarah Johnson
                      </p>
                      <p
                        className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                      >
                        sarah@company.com
                      </p>
                    </div>
                    <button
                      className={`w-full px-4 py-2 text-left flex items-center ${darkMode ? "hover:bg-gray-700 text-gray-300" : "hover:bg-slate-50 text-slate-700"}`}
                      aria-label="Settings"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </button>
                    <button
                      className={`w-full px-4 py-2 text-left flex items-center ${darkMode ? "hover:bg-gray-700 text-gray-300" : "hover:bg-slate-50 text-slate-700"}`}
                      aria-label="Help and support"
                    >
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Help & Support
                    </button>
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className={`w-full px-4 py-2 text-left flex items-center ${darkMode ? "hover:bg-gray-700 text-gray-300" : "hover:bg-slate-50 text-slate-700"}`}
                      aria-label={
                        darkMode
                          ? "Switch to light mode"
                          : "Switch to dark mode"
                      }
                    >
                      {darkMode ? (
                        <>
                          <span className="w-4 h-4 mr-2">☀️</span> Light Mode
                        </>
                      ) : (
                        <>
                          <span className="w-4 h-4 mr-2">🌙</span> Dark Mode
                        </>
                      )}
                    </button>
                    <button
                      className={`w-full px-4 py-2 text-left flex items-center ${darkMode ? "hover:bg-gray-700 text-gray-300" : "hover:bg-slate-50 text-slate-700"}`}
                      aria-label="Sign out"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`hidden xl:block w-64 min-h-screen border-r ${darkMode ? "bg-gray-800/90 border-gray-700" : "bg-white/60 border-slate-200/60"} backdrop-blur-xl`}
        >
          <div className="p-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                    activeTab === item.name
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                      : `${darkMode ? "text-gray-300 hover:text-white hover:bg-gray-700" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`
                  }`}
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                  {item.count && (
                    <span className="ml-auto px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                      {item.count}
                    </span>
                  )}
                  {activeTab !== item.name && (
                    <span
                      className={`absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? "text-gray-400" : "text-slate-400"}`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div
              className={`mt-8 p-4 rounded-xl ${darkMode ? "bg-gradient-to-r from-indigo-900/50 to-purple-900/50" : "bg-gradient-to-r from-indigo-50 to-purple-50"}`}
            >
              <div className="relative z-10">
                <div className="absolute -top-8 right-0 w-16 h-16 bg-indigo-500 rounded-full opacity-10"></div>
                <h3 className="font-semibold text-lg mb-2">Upgrade to Pro</h3>
                <p className="text-sm mb-3">
                  Unlock advanced analytics and AI-powered contract review
                </p>
                <button
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center justify-center"
                  aria-label="Upgrade now"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Upgrade Now
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-purple-500 rounded-full opacity-10"></div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    Welcome back, Sarah! 👋
                  </h2>
                  <p className="text-indigo-100 mb-6 max-w-lg">
                    You have 5 contracts awaiting review and 2 approaching
                    renewal deadlines. Stay on top of your compliance metrics.
                  </p>
                  <div className="flex items-center space-x-4">
                    <button
                      className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-medium hover:bg-indigo-50 transition-all flex items-center shadow-lg hover:shadow-xl"
                      aria-label="Upload contract"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Upload Contract
                    </button>
                    <button
                      className="bg-white/20 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition-all shadow-lg hover:shadow-xl"
                      aria-label="View compliance report"
                    >
                      View Compliance Report
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                  <div className="w-48 h-48 bg-white/10 rounded-full absolute -right-10 -top-10"></div>
                  <div className="w-32 h-32 bg-white/10 rounded-full absolute -right-5 top-20"></div>
                  <div className="relative z-10">
                    <FileCheck className="w-32 h-32 text-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: "Total Contracts",
                value: "156",
                change: "+12%",
                icon: FileText,
                color: "indigo"
              },
              {
                title: "Active Value",
                value: "$2.4M",
                change: "+8%",
                icon: DollarSign,
                color: "emerald"
              },
              {
                title: "Avg. Compliance",
                value: "94%",
                change: "+2%",
                icon: Shield,
                color: "amber"
              },
              {
                title: "Pending Actions",
                value: "17",
                change: "-3%",
                icon: AlertTriangle,
                color: "purple"
              }
            ].map((stat, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border ${darkMode ? "bg-gray-800/80 border-gray-700 hover:border-indigo-500" : "bg-white/80 border-slate-200/60 hover:border-indigo-300"} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                <div
                  className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10"
                  style={{
                    backgroundColor:
                      stat.color === "indigo"
                        ? "#6366f1"
                        : stat.color === "emerald"
                          ? "#10b981"
                          : stat.color === "amber"
                            ? "#f59e0b"
                            : "#8b5cf6"
                  }}
                ></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl ${darkMode ? "bg-gray-700" : "bg-white"} shadow`}
                    >
                      <stat.icon
                        className={`w-6 h-6 ${stat.color === "indigo" ? "text-indigo-600" : stat.color === "emerald" ? "text-emerald-600" : stat.color === "amber" ? "text-amber-600" : "text-purple-600"}`}
                      />
                    </div>
                    <div
                      className={`flex items-center text-sm ${stat.change.startsWith("+") ? "text-emerald-500" : "text-red-500"}`}
                    >
                      {stat.change.startsWith("+") ? (
                        <ArrowUp className="w-4 h-4 mr-1" />
                      ) : (
                        <ArrowDown className="w-4 h-4 mr-1" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-1 ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    {stat.value}
                  </h3>
                  <p
                    className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                  >
                    {stat.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contract Table */}
            <div className="lg:col-span-2">
              <div
                className={`rounded-xl border ${darkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-slate-200/60"} overflow-hidden`}
              >
                <div
                  className={`p-6 border-b ${darkMode ? "border-gray-700" : "border-slate-200/60"}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                    >
                      Recent Contracts
                    </h3>
                    <button
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all flex items-center"
                      aria-label="Add new contract"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      New Contract
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 relative">
                      <Search
                        className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${darkMode ? "text-gray-400" : "text-slate-400"}`}
                      />
                      <input
                        type="text"
                        placeholder="Search contracts..."
                        className={`w-full pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${darkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "border-slate-300"}`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        aria-label="Search contracts"
                      />
                    </div>
                    <button
                      className={`p-2 rounded-lg ${darkMode ? "bg-gray-700 border-gray-600 hover:bg-gray-600" : "border-slate-300 hover:bg-slate-50"} border`}
                      aria-label="Filter contracts"
                    >
                      <Filter className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead
                      className={`${darkMode ? "bg-gray-700" : "bg-slate-50"}`}
                    >
                      <tr>
                        <th
                          className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? "text-gray-300" : "text-slate-500"}`}
                        >
                          Contract
                        </th>
                        <th
                          className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? "text-gray-300" : "text-slate-500"}`}
                        >
                          Status
                        </th>
                        <th
                          className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? "text-gray-300" : "text-slate-500"}`}
                        >
                          Value
                        </th>
                        <th
                          className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? "text-gray-300" : "text-slate-500"}`}
                        >
                          Compliance
                        </th>
                        <th
                          className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? "text-gray-300" : "text-slate-500"}`}
                        >
                          Date
                        </th>
                        <th
                          className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${darkMode ? "text-gray-300" : "text-slate-500"}`}
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className={`divide-y ${darkMode ? "divide-gray-700" : "divide-slate-200"}`}
                    >
                      {contracts.map((contract) => (
                        <tr
                          key={contract.id}
                          className={`${darkMode ? "hover:bg-gray-700" : "hover:bg-slate-50"} transition-colors`}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div
                                className={`text-sm font-medium ${darkMode ? "text-white" : "text-slate-900"}`}
                              >
                                {contract.name}
                              </div>
                              <div
                                className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                              >
                                {contract.id}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(contract.status)}`}
                            >
                              {getStatusIcon(contract.status)}
                              <span className="ml-1">{contract.status}</span>
                            </span>
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${darkMode ? "text-white" : "text-slate-900"}`}
                          >
                            {contract.value}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`text-sm font-medium ${getComplianceColor(contract.compliance)}`}
                            >
                              {contract.compliance}
                            </span>
                          </td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                          >
                            {contract.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex items-center space-x-2">
                              <button
                                className={`p-1 rounded ${darkMode ? "text-gray-400 hover:text-white hover:bg-gray-600" : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"}`}
                                aria-label="View contract"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                className={`p-1 rounded ${darkMode ? "text-gray-400 hover:text-white hover:bg-gray-600" : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"}`}
                                aria-label="Edit contract"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                className={`p-1 rounded ${darkMode ? "text-gray-400 hover:text-white hover:bg-gray-600" : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"}`}
                                aria-label="Download contract"
                              >
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div
                  className={`px-6 py-4 border-t ${darkMode ? "border-gray-700" : "border-slate-200"} flex items-center justify-between`}
                >
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                    >
                      Showing 1-6 of 156 contracts
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      className={`p-2 rounded ${darkMode ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"}`}
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      className={`px-3 py-1 rounded ${darkMode ? "bg-indigo-600 text-white" : "bg-indigo-500 text-white"}`}
                      aria-label="Page 1"
                    >
                      1
                    </button>
                    <button
                      className={`px-3 py-1 rounded ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-slate-600 hover:bg-slate-100"}`}
                      aria-label="Page 2"
                    >
                      2
                    </button>
                    <button
                      className={`px-3 py-1 rounded ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-slate-600 hover:bg-slate-100"}`}
                      aria-label="Page 3"
                    >
                      3
                    </button>
                    <button
                      className={`p-2 rounded ${darkMode ? "text-gray-400 hover:text-white hover:bg-gray-700" : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"}`}
                      aria-label="Next page"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Compliance Trend */}
              <div
                className={`rounded-xl p-6 border ${darkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-slate-200/60"}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Compliance Trend
                  </h3>
                  <button
                    className={`text-sm ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
                    aria-label="View all compliance trends"
                  >
                    View All
                  </button>
                </div>
                <div className="h-48">
                  <Line
                    data={complianceData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false
                        }
                      },
                      scales: {
                        y: {
                          grid: {
                            color: darkMode
                              ? "rgba(255, 255, 255, 0.1)"
                              : "rgba(0, 0, 0, 0.05)"
                          },
                          ticks: {
                            color: darkMode
                              ? "rgba(255, 255, 255, 0.6)"
                              : "rgba(0, 0, 0, 0.5)"
                          }
                        },
                        x: {
                          grid: {
                            color: darkMode
                              ? "rgba(255, 255, 255, 0.1)"
                              : "rgba(0, 0, 0, 0.05)"
                          },
                          ticks: {
                            color: darkMode
                              ? "rgba(255, 255, 255, 0.6)"
                              : "rgba(0, 0, 0, 0.5)"
                          }
                        }
                      }
                    }}
                  />
                </div>
              </div>

              {/* Contract Status */}
              <div
                className={`rounded-xl p-6 border ${darkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-slate-200/60"}`}
              >
                <h3
                  className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  Contract Status
                </h3>
                <div className="h-48">
                  <Pie
                    data={contractStatusData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: "right",
                          labels: {
                            color: darkMode
                              ? "rgba(255, 255, 255, 0.8)"
                              : "rgba(0, 0, 0, 0.8)"
                          }
                        }
                      }
                    }}
                  />
                </div>
              </div>

              {/* Quick Actions */}
              <div
                className={`rounded-xl p-6 border ${darkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-slate-200/60"}`}
              >
                <h3
                  className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    className={`p-3 rounded-lg hover:shadow transition-colors flex flex-col items-center ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-indigo-50 hover:bg-indigo-100"}`}
                    aria-label="New contract"
                  >
                    <FilePlus
                      className={`w-5 h-5 mb-1 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
                    />
                    <span
                      className={`text-xs font-medium ${darkMode ? "text-gray-300" : "text-indigo-700"}`}
                    >
                      New Contract
                    </span>
                  </button>
                  <button
                    className={`p-3 rounded-lg hover:shadow transition-colors flex flex-col items-center ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-purple-50 hover:bg-purple-100"}`}
                    aria-label="Review"
                  >
                    <FileSearch
                      className={`w-5 h-5 mb-1 ${darkMode ? "text-purple-400" : "text-purple-600"}`}
                    />
                    <span
                      className={`text-xs font-medium ${darkMode ? "text-gray-300" : "text-purple-700"}`}
                    >
                      Review
                    </span>
                  </button>
                  <button
                    className={`p-3 rounded-lg hover:shadow transition-colors flex flex-col items-center ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-emerald-50 hover:bg-emerald-100"}`}
                    aria-label="Import"
                  >
                    <Upload
                      className={`w-5 h-5 mb-1 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}
                    />
                    <span
                      className={`text-xs font-medium ${darkMode ? "text-gray-300" : "text-emerald-700"}`}
                    >
                      Import
                    </span>
                  </button>
                  <button
                    className={`p-3 rounded-lg hover:shadow transition-colors flex flex-col items-center ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-amber-50 hover:bg-amber-100"}`}
                    aria-label="Merge"
                  >
                    <GitMerge
                      className={`w-5 h-5 mb-1 ${darkMode ? "text-amber-400" : "text-amber-600"}`}
                    />
                    <span
                      className={`text-xs font-medium ${darkMode ? "text-gray-300" : "text-amber-700"}`}
                    >
                      Merge
                    </span>
                  </button>
                </div>
              </div>

              {/* Upcoming Events */}
              <div
                className={`rounded-xl p-6 border ${darkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-slate-200/60"}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Upcoming Events
                  </h3>
                  <button
                    className={`text-sm ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
                    aria-label="View all upcoming events"
                  >
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`text-center mr-4 p-2 rounded-lg ${darkMode ? "bg-indigo-900/50 text-indigo-200" : "bg-indigo-100 text-indigo-700"}`}
                      >
                        <div className="font-bold">{event.date}</div>
                        <div className="text-xs">{event.day}</div>
                      </div>
                      <div>
                        <h4
                          className={`font-medium ${darkMode ? "text-white" : "text-slate-900"}`}
                        >
                          {event.event}
                        </h4>
                        <p
                          className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                        >
                          {event.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Chat Widget */}
      {showChatWidget && (
        <div
          className={`fixed bottom-6 right-6 w-80 rounded-xl shadow-2xl border overflow-hidden ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
        >
          <div
            className={`px-4 py-3 border-b flex items-center justify-between ${darkMode ? "border-gray-700 bg-gray-900" : "border-slate-200 bg-slate-50"}`}
          >
            <h3 className="font-semibold">Support Chat</h3>
            <button
              onClick={() => setShowChatWidget(false)}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Close chat"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div
              className={`mb-4 p-3 rounded-lg max-w-xs ${darkMode ? "bg-gray-700" : "bg-slate-100"}`}
            >
              <p className="text-sm">Hi there! How can I help you today?</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                2:45 PM
              </p>
            </div>
            <div className="mb-4 p-3 rounded-lg max-w-xs ml-auto bg-indigo-500 text-white">
              <p className="text-sm">I need help with contract compliance</p>
              <p className="text-xs text-indigo-200 mt-1">2:46 PM</p>
            </div>
          </div>
          <div
            className={`p-3 border-t ${darkMode ? "border-gray-700" : "border-slate-200"}`}
          >
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className={`flex-1 px-3 py-2 rounded-l-lg focus:outline-none ${darkMode ? "bg-gray-700 text-white" : "border border-slate-300"}`}
                aria-label="Type your message"
              />
              <button
                className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-600"
                aria-label="Send message"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorizedLayout;
