import { promises as fs } from 'fs';
import path from 'path';
const { exec } = require('child_process');


export default async (req, res) => {
  const { name } = req.query;

  if (!name) {
    res.status(400).json({ error: 'Name parameter is required' });
    return;
  }
  // let Newname = name.replace(/\s+/g, '');
  try {
    const scriptPath = path.join(process.cwd(), '/pages/api/findyou.py');
    exec(`python ${scriptPath} "${name}" `, (error, stdout, stderr) => {
      if (error) {
      res.status(500).json({ error: 'Failed to execute script at : ' + scriptPath });
      return;
      }
      if (stderr) {
      res.status(500).json({ error: stderr });
      return;
      }
      const rows = stdout.split('\n').filter(row => row).map(row => row.split(','));
      const queryString = rows.map(row => row.join(',')).join(';');
      res.writeHead(302, { Location: `/FindYou/result?data=${encodeURIComponent(queryString)}` });
      // res.writeHead(302, { Location: '../FindYou/result.js' })
      res.end();
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to read data'});
  }
};
