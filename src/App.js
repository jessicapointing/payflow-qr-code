import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
  const [amount, setAmount] = useState('');
  const [iban, setIban] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [memo, setMemo] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');

  const generateQRCode = () => {
    if (amount && iban && companyName) {
      // Generate the QR code data based on the amount input
      const qrCodeData = "https://payflow-self.vercel.app/pay?" + "amount=" + `${amount}` + "&iban=" + `${iban}` + "&companyName=" + `${companyName}` + "&memo=" + `${memo}`
      //const qrCodeData = `Amount: ${amount}`;
      setQRCodeData(qrCodeData);
    }
  };

  return (
    <div className="App">
      <h1>Payflow</h1>
      <div>
      <div>
        <label htmlFor="amount">Amount: </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="amount">Memo: </label>
        <input
          type="text"
          placeholder="payflow"
          id="memo"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="amount">IBAN: </label>
        <input
          type="text"
          id="iban"
          value={iban}
          onChange={(e) => setIban(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="amount">Company Name: </label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <button onClick={generateQRCode}>Generate QR Code</button>
      </div>
      </div>
      {qrCodeData && (
        <div>
          <h2>QR Code:</h2>
          <QRCode value={qrCodeData} size={200} />
        </div>
      )}
    </div>
  );
}

export default App;