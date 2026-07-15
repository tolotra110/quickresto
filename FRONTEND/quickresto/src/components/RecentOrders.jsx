function RecentOrders() {
  const orders = [
    { id: 1, client: "Jean", status: "chef" },
    { id: 2, client: "Marie",  status: "serveur" },
    { id: 3, client: "Paul",  status: "traiteur" },
    { id: 4, client: "Sofia",  status: "cuisiner" },
  ];

  return (
    <div className="bg-blue-1000 shadow-2xl text-white w-145  p-6 rounded-2xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">liste des personnelles actif aujourdh'hui</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Numero_personelle</th>
              <th className="px-4 py-2 border-b">Nom_personelle</th>
              <th className="px-4 py-2 border-b">Fonction</th>
      
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="">
                <td className="px-4 py-2 border-b">{order.id}</td>
                <td className="px-4 py-2 border-b">{order.client}</td>
                <td className="px-4 py-2 border-b ">
              
                    {order.status}
              
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
