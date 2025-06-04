const isAuthenticated = (req, res, next) => {
  if (req.session.userId) return next();
  res.status(401).send('Not authenticated');
};

const isAdmin = (req, res, next) => {
  if (req.session.role === 'admin') return next();
  res.status(403).send('Admins only');
};

module.exports = { isAuthenticated, isAdmin };
