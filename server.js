const express = require('express');
const ps = require('powershell');

const app = express();

const servers = [
  { name: 'Server1', status: 'up' },
  { name: 'Server2', status: 'down' },
  { name: 'Server3', status: 'up' },
];

app.get('/api/servers', (req, res) => {
  res.json(servers);
});

app.get('/api/diskspace', async (req, res) => {
  const psCmd = `Get-WmiObject Win32_LogicalDisk -Filter "DeviceID = 'C:'" | Select-Object Size,FreeSpace`;  
  const output = await ps.execute(psCmd);
  res.json(output);
});

app.get('/api/services', async (req, res) => {
  const psCmd = `Get-Service | Select-Object Name,Status | ConvertTo-Json`;
  const output = await ps.execute(psCmd);
  res.json(output);  
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
