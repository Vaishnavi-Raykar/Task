
export function handler(req, res) {
  // Check if user is authenticated
  if (!req.user) {
    return res.status(401).json({ error: 'User not authenticated' });
  }

  // Assuming req.user contains the user data
  const userData = req.user;

  // Send the user data to the frontend
  res.status(200).json(userData);
}


