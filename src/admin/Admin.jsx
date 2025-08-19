import { useState } from "react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <div>📊 Dashboard Overview</div>;
      case "products":
        return <div>📦 Manage Products</div>;
      case "orders":
        return <div>🧾 View Orders</div>;
      case "users":
        return <div>👥 Manage Users</div>;
      case "settings":
        return <div>⚙️ Admin Settings</div>;
      default:
        return <div>Welcome to Admin Panel</div>;
    }
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "products", label: "Products" },
    { id: "orders", label: "Orders" },
    { id: "users", label: "Users" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg px-6 py-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-10">🛍️ Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`text-left px-4 py-2 rounded-lg font-medium transition ${
                activeTab === item.id
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold capitalize">{activeTab}</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Admin</span>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm">
              Logout
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white p-6 rounded-lg shadow">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Admin;
