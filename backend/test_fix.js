// No import needed for Node 18+
async function test() {
  const BASE_URL = 'http://localhost:5000/api/participants';
  // Using a name that likely exists based on screenshot
  const name = 'Srivarshni'; 
  
  // 1. Join
  console.log(`Joining as ${name}...`);
  const joinRes = await fetch(`${BASE_URL}/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  const joinData = await joinRes.json();
  
  if (!joinData.success) {
    console.error('Join failed (User might not exist):', joinData);
    return;
  }
  
  const p = joinData.participant;
  console.log('Joined:', p);

  if (!p._id) {
    console.error('No _id returned!');
    return;
  }

  // 2. Update Score using _id
  console.log(`Updating score for _id: ${p._id}...`);
  const updateRes = await fetch(`${BASE_URL}/update-score`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      _id: p._id,
      score: 10
    })
  });
  
  if (!updateRes.ok) {
     const text = await updateRes.text();
     console.error('Update Request Failed:', updateRes.status, text);
     return;
  }

  const updateData = await updateRes.json();
  console.log('Update Result:', updateData);

  // 3. Verify
  console.log('Verifying score...');
  const verifyRes = await fetch(`${BASE_URL}/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }) 
  });
  const verifyData = await verifyRes.json();
  console.log('Final Participant State:', verifyData.participant);

  if (verifyData.participant.score > (p.score || 0)) {
    console.log('SUCCESS: Score updated correctly!');
  } else {
    console.log('FAILURE: Score did not increase.');
  }
}

test();
