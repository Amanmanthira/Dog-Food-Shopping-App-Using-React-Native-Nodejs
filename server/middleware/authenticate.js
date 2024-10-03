const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.error('Authorization header missing');
    return res.status(401).send('Access denied: No token provided');
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    console.error('Token missing');
    return res.status(401).send('Access denied: No token provided');
  }

  console.log('Token received:', token); // Log token for debugging

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Token verification failed:', err.message);
      return res.status(403).send('Access denied: Invalid token');
    }
    req.user = decoded;
    next();
  });
};
