// Simple login handler for SecureBank demo
function login(username, password) {
  // NOTE: this is intentionally insecure for demo purposes
  const storedPassword = "admin123"; // hard-coded password (bad practice - SAST should catch this)

  if (username === "admin" && password === storedPassword) {
    console.log("Login successful");
    return true;
  } else {
    console.log("Login failed");
    return false;
    l
