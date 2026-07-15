import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PrintIcon from "@mui/icons-material/Print";

import TotalTableModal from "./TotalTableModal";
import { getTotalParTable } from "../services/orderservice";

const OrderCard = ({ data, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [totalApi, setTotalApi] = useState(null);

  // 🔥 SAFE ID (important)
  const printId = `print-${data?.title?.replace(/\s/g, "-")}`;

  const handleOpenTotal = () => {
    getTotalParTable()
      .then((res) => {
        const tableNumber = data?.title?.replace("Table ", "");
        const found = res.data.find((t) => t[0] == tableNumber);

        setTotalApi(found ? found[1] : 0);
        setShowModal(true);
      })
      .catch((err) => console.error(err));
  };

  // 🖨️ PRINT STYLE RESTAURANT
  const handlePrint = () => {
    const printContent = document.getElementById(printId);

    const now = new Date().toLocaleString();

    const newWindow = window.open("", "_blank");

    newWindow.document.write(`
      <html>
        <head>
          <title>QUICKRESTO - Ticket</title>
          <style>
            body {
              font-family: monospace;
              padding: 20px;
              background: #fff;
            }

            .ticket {
              width: 280px;
              margin: auto;
              border: 1px dashed #000;
              padding: 15px;
              border-radius: 10px;
            }

            .title {
              text-align: center;
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 5px;
            }

            .subtitle {
              text-align: center;
              font-size: 12px;
              margin-bottom: 10px;
            }

            .line {
              border-top: 1px dashed #000;
              margin: 10px 0;
            }

            .item {
              display: flex;
              justify-content: space-between;
              font-size: 14px;
              margin-bottom: 5px;
            }

            .footer {
              margin-top: 10px;
              font-weight: bold;
              text-align: center;
            }

            .date {
              text-align: center;
              font-size: 12px;
              margin-bottom: 10px;
            }
          </style>
        </head>

        <body>
          <div class="ticket">

            <div class="title">🍽️ QUICKRESTO</div>
            <div class="subtitle">Restaurant & Fast Food</div>

            <div class="date">${now}</div>

            <div class="line"></div>

            <div style="text-align:center; font-weight:bold;">
              ${data?.title}
            </div>

            <div class="line"></div>

            ${data?.items
              ?.map(
                (item) => `
              <div class="item">
                <span>${item.name}</span>
                <span>x${item.qty}</span>
              </div>
            `
              )
              .join("")}

            <div class="line"></div>

            <div class="footer">
              TOTAL : ${data?.total} Ar
            </div>

            <div class="footer" style="font-size:12px; margin-top:15px;">
              Merci pour votre visite 
            </div>

          </div>
        </body>
      </html>
    `);

    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div className="bg-blue-1000 rounded-2xl mt-3 shadow-2xl mx-2 p-4 w-64 h-56 relative">

      {/* PRINT HIDDEN CONTENT */}
      <div id={printId} className="hidden">
        QUICKRESTO
      </div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-white">{data?.title}</h2>

        <div className="relative">
          <button onClick={() => setOpen(!open)}>
            <MoreVertIcon className="text-gray-400 cursor-pointer" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-44 rounded-xl shadow-2xl bg-blue-100 z-10 overflow-hidden">

              {/* TOTAL */}
              <button
                onClick={() => {
                  handleOpenTotal();
                  setOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-green-600 hover:bg-green-50"
              >
                <CheckCircleOutlineIcon style={{ fontSize: 18 }} />
                Voir le total
              </button>

              {/* PRINT */}
              <button
                onClick={() => {
                  handlePrint();
                  setOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-50"
              >
                <PrintIcon style={{ fontSize: 18 }} />
                Imprimer
              </button>

              <div className="h-px bg-gray-200 mx-2"></div>

              {/* DELETE */}
              <button
                onClick={() => {
                  onDelete && onDelete();
                  setOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                <DeleteOutlineIcon style={{ fontSize: 18 }} />
                Supprimer
              </button>

            </div>
          )}
        </div>
      </div>

      {/* STATUS */}
     {/* STATUS */}
<div className="mb-2">
  <span
    className={`text-xs px-3 py-1 rounded-full text-white
      ${data?.status === "Occupé" ? "bg-red-500" : "bg-green-500"}
    `}
  >
    {data?.status || "Libre"}
  </span>
</div>

      {/* ITEMS */}
      <div className="space-y-1 text-sm text-white">
        {data?.items?.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span>x{item.qty}</span>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="mt-3 border-t border-gray-400 pt-2 flex justify-between text-white font-bold">
        <span>Total :</span>
        <span>{data?.total} Ar</span>
      </div>

      {/* MODAL */}
      <TotalTableModal
        open={showModal}
        onClose={() => setShowModal(false)}
        table={data?.title}
        total={totalApi}
      />

    </div>
  );
};

export default OrderCard;