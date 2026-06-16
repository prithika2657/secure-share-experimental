
 function Dashboard({documents=[],requests=[]}) {
  console.log("Dashboard documents:", documents);
  const totalDocuments = documents.length;

  const pendingRequests =
    requests.filter(
      (r) => r.status === "Pending"
    ).length;

  const approvedRequests =
    requests.filter(
      (r) => r.status === "Approved"
    ).length;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-blue-600">
          SecureShare Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          User-controlled secure document access system
        </p>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            Total Documents: {totalDocuments}
          </div>
          <div className="bg-yellow-50 p-4 rounded">
            Pending Requests: {pendingRequests}
          </div>
          <div className="bg-green-50 p-4 rounded">
            Approved Access: {approvedRequests}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard;