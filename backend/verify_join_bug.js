
async function verifyBug() {
  const BASE_URL = 'http://localhost:5000/api/participants';
  
  // Use a name that definitely does NOT exist
  const name = 'NonExistentUser_' + Date.now();
  
  console.log(`Attempting to join as: ${name}`);
  
  const res = await fetch(`${BASE_URL}/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }) // id is undefined
  });
  
  const data = await res.json();
  
  console.log('Response:', data);
  
  if (data.success && data.participant) {
    if (data.participant.name !== name) {
      console.error('CRITICAL BUG DETECTED: Joined as wrong user!', data.participant);
    } else {
      console.log('Joined as correct user (if logic creates one, wait, logic does NOT create user).');
      console.log('Wait, if logic does not create user, it should return success: false.');
    }
  } else {
    console.log('Correct behavior: User not found and not returned.');
  }
}

verifyBug();
