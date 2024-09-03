import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export function WifiQrCodeGenerator() {
  const [wifiName, setWifiName] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [qrCodeValue, setQrCodeValue] = useState('');

  const handleGenerateQRCode = () => {
    if (wifiName && wifiPassword) {
      const qrCodeData = `WIFI:S:${wifiName};T:${wifiPassword};;`;
      setQrCodeValue(qrCodeData);
    } else {
      alert('Please enter both WiFi name and password.');
    }
  };

  return (
    <>
      <h2>WiFi QR Code Generator</h2>
      <section>
        <div>
          <label htmlFor="wifiName">WiFi Name:</label>
          <input
            type="text"
            id="wifiName"
            value={wifiName}
            onChange={(e) => setWifiName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="wifiPassword">WiFi Password:</label>
          <input
            type="password"
            id="wifiPassword"
            value={wifiPassword}
            onChange={(e) => setWifiPassword(e.target.value)}
          />
        </div>
      </section>
      <div>
        <button onClick={handleGenerateQRCode}>Generate QR Code</button>
        {qrCodeValue && (
          <QRCodeSVG value={qrCodeValue} size={256} level="H" /> // Optional: Adjust size and error correction level
        )}
      </div>
    </>
  );
}