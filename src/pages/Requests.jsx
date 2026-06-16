function Requests({ requests, setRequests, logs, setLogs }) {
  const updateStatus = (id, newStatus) => {
    // Update requests and save to localStorage
    setRequests((prev) => {
      const updated = prev.map((req) =>
        req.id === id
          ? { ...req, status: newStatus }
          : req
      );

      localStorage.setItem(
        "requests",
        JSON.stringify(updated)
      );

      return updated;
    });

    // Update logs and save to localStorage
    setLogs((prev) => {
      const updatedLogs = [
        ...prev,
        {
          id: Date.now(),
          action:
            newStatus === "Approved"
              ? "Request Approved"
              : "Request Rejected",
          detail: `Request ID ${id}`,
        },
      ];

      localStorage.setItem(
        "logs",
        JSON.stringify(updatedLogs)
      );

      return updatedLogs;
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Access Requests
      </h1>

      <div className="space-y-4">
        {requests.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow">
            No requests available
          </div>
        ) : (
          requests.map((request) => (
            <div
              key={request.id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-xl font-semibold">
                {request.requester}
              </h2>

              <p>
                <strong>Document:</strong>{" "}
                {request.document}
              </p>

              <p>
                <strong>Purpose:</strong>{" "}
                {request.purpose}
              </p>

              <p className="mt-2">
                <strong>Status:</strong>
                <span
                  className={`ml-2 font-bold ${
                    request.status === "Approved"
                      ? "text-green-600"
                      : request.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {request.status}
                </span>
              </p>

              <div className="mt-4 space-x-4">
                <button
                  onClick={() =>
                    updateStatus(
                      request.id,
                      "Approved"
                    )
                  }
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Approve
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      request.id,
                      "Rejected"
                    )
                  }
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Requests;