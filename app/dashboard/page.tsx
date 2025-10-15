import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import Link from "next/link"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#FFB800]">
              logo
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Welcome, {session.user.name || session.user.email}</span>
              <form action="/api/auth/signout" method="POST">
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Sign Out
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Stats Cards */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Projects</h3>
            <p className="text-4xl font-bold text-[#FFB800]">12</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Page Views</h3>
            <p className="text-4xl font-bold text-[#FFB800]">2,543</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Messages</h3>
            <p className="text-4xl font-bold text-[#FFB800]">18</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 border-2 border-[#FFB800] text-[#FFB800] rounded-lg hover:bg-[#FFB800] hover:text-white transition-all font-semibold">
              + Add Project
            </button>
            <button className="p-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all font-semibold">
              Edit Profile
            </button>
            <button className="p-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all font-semibold">
              View Analytics
            </button>
            <button className="p-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-all font-semibold">
              Settings
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

const recentActivity = [
  { title: "Updated AI-Powered Recipe Generator project", time: "2 hours ago" },
  { title: "New message from contact form", time: "5 hours ago" },
  { title: "Profile viewed 23 times today", time: "1 day ago" },
  { title: "Added new blog post about Machine Learning", time: "2 days ago" },
]
