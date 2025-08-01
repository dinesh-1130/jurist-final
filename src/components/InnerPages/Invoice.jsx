import React, { useState } from "react";

const FeesReceipt = () => {
  const [receiptData, setReceiptData] = useState({
    receiptDate: "14-07-2025",
    receiptNo: "JQ-REC-0001",
    receivedFrom: "Ms. Hiba Basheer",
    receivedBy: "Crosby Law Associates",
    paidBy: "Online Transaction",
    amount: 2500.0,
    amountInWords: "Two Thousand Five Hundred Rupees only/-",
    purpose:
      "Paid towards registration fees for JuristQuest Moot Court Competition.",
  });

  const formatAmount = (amount) => {
    return `INR ${amount.toFixed(2)}`;
  };

  const numberToWords = (amount) => {
    const ones = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    const teens = [
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    const convertHundreds = (num) => {
      let result = "";
      if (num >= 100) {
        result += ones[Math.floor(num / 100)] + " Hundred ";
        num %= 100;
      }
      if (num >= 20) {
        result += tens[Math.floor(num / 10)] + " ";
        num %= 10;
      } else if (num >= 10) {
        result += teens[num - 10] + " ";
        return result;
      }
      if (num > 0) {
        result += ones[num] + " ";
      }
      return result;
    };

    if (amount === 0) return "Zero Rupees only/-";

    let integerPart = Math.floor(amount);
    let result = "";

    if (integerPart >= 10000000) {
      result += convertHundreds(Math.floor(integerPart / 10000000)) + "Crore ";
      integerPart %= 10000000;
    }
    if (integerPart >= 100000) {
      result += convertHundreds(Math.floor(integerPart / 100000)) + "Lakh ";
      integerPart %= 100000;
    }
    if (integerPart >= 1000) {
      result += convertHundreds(Math.floor(integerPart / 1000)) + "Thousand ";
      integerPart %= 1000;
    }
    if (integerPart > 0) {
      result += convertHundreds(integerPart);
    }

    return result.trim() + " Rupees only/-";
  };

  const updateAmount = (newAmount) => {
    setReceiptData((prev) => ({
      ...prev,
      amount: newAmount,
      amountInWords: numberToWords(newAmount),
    }));
  };

  return (
    <div
      className="max-w-2xl mx-auto p-8 bg-white"
      style={{ fontFamily: "monospace", fontSize: "14px" }}
    >
      {/* Header with Logo Only */}
      <div className="text-center mb-8">
        {/* <img
          src="/assets/Logo.png"
          alt="JuristQuest Logo"
          className="w-18 h-18"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "inline-block";
          }}
        /> */}
        <div
          className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto text-white text-sm font-bold"
          style={{ display: "none" }}
        >
          JQ
        </div>
      </div>

      {/* FEES RECEIPT Title - Left aligned above Receipt Date */}
      <h2 className="text-lg font-bold text-green-700 mb-6 text-left tracking-wider">
        FEES RECEIPT
      </h2>

      {/* Receipt Date and Number */}
      <div className="flex justify-between mb-8">
        <table
          className="border-2 border-black"
          style={{ borderCollapse: "collapse" }}
        >
          <tr>
            <td className="border-r-2 border-black px-3 py-2 font-semibold bg-white">
              Receipt Date
            </td>
            <td className="px-3 py-2 bg-white">{receiptData.receiptDate}</td>
          </tr>
        </table>

        <table
          className="border-2 border-black"
          style={{ borderCollapse: "collapse" }}
        >
          <tr>
            <td className="border-r-2 border-black px-3 py-2 font-semibold bg-white">
              Receipt No.
            </td>
            <td className="px-3 py-2 bg-white">{receiptData.receiptNo}</td>
          </tr>
        </table>
      </div>

      {/* Payment Details Table */}
      <table
        className="w-full border-2 border-black mb-8"
        style={{ borderCollapse: "collapse" }}
      >
        <tr>
          <td className="border-r-2 border-b-2 border-black text-center py-3 px-2 font-semibold">
            Received From
          </td>
          <td className="border-r-2 border-b-2 border-black text-center py-3 px-2 font-semibold">
            Received By
          </td>
          <td className="border-b-2 border-black text-center py-3 px-2 font-semibold">
            Paid by
          </td>
        </tr>
        <tr>
          <td className="border-r-2 border-black text-center py-4 px-2">
            <span className="text-green-600">{receiptData.receivedFrom}</span>
          </td>
          <td className="border-r-2 border-black text-center py-4 px-2">
            <span className="text-green-600">{receiptData.receivedBy}</span>
          </td>
          <td className="text-center py-4 px-2">
            <span className="text-green-600">{receiptData.paidBy}</span>
          </td>
        </tr>
      </table>

      {/* Amount Section */}
      <table
        className="w-full border-2 border-black mb-8"
        style={{ borderCollapse: "collapse" }}
      >
        <tr>
          <td className="border-r-2 border-b-2 border-black text-center py-3 px-2 font-semibold">
            Amount Received
          </td>
          <td className="border-b-2 border-black text-center py-3 px-2 font-semibold">
            Amount in words
          </td>
        </tr>
        <tr>
          <td className="border-r-2 border-black text-center py-4 px-2">
            <span className="text-2xl font-bold text-black">
              {formatAmount(receiptData.amount)}
            </span>
          </td>
          <td className="text-center py-4 px-2">
            <span className="text-green-600">{receiptData.amountInWords}</span>
          </td>
        </tr>
      </table>

      {/* Purpose Section */}
      <table
        className="w-full border-2 border-black mb-8"
        style={{ borderCollapse: "collapse" }}
      >
        <tr>
          <td className="border-b-2 border-black text-center py-3 px-2 font-semibold">
            Purpose of Payment
          </td>
        </tr>
        <tr>
          <td className="py-4 px-4">
            <span className="text-green-600">{receiptData.purpose}</span>
          </td>
        </tr>
      </table>

      {/* Note */}
      <div className="mb-8">
        <p className="text-sm">
          <span className="font-bold">NOTE:</span>{" "}
          <span className="italic">
            This is a computer-generated receipt; therefore, a seal and
            signature are not required.
          </span>
        </p>
      </div>

      {/* Dotted Line */}
      <div className="text-center text-sm">{"*".repeat(100)}</div>
    </div>
  );
};

export default FeesReceipt;
