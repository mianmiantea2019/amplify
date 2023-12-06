const express = require('express')

const router = express.Router()

router.post('/logout', (req, res) => {
  const sessionId = req.cookies.sessionID;
  //To Do: waiting for the session setup
    const sessions = {}

    if (sessions[sessionId]) {
      delete sessions[sessionId];

      res.clearCookie('sessionID');
      res.status(302);
    } else {
      res.status(401).json({ error: 'Invalid session' });
    }
  });
  
