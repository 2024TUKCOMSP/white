const serverKey = 'YOUR_ACTUAL_SERVER_KEY';  // 실제 서버 키
const fcmUrl = 'https://fcm.googleapis.com/fcm/send';

function sendNotification(token) {
  const message = {
    notification: {
      title: 'Hello',
      body: 'This is a Firebase notification!'
    },
    to: token
  };

  fetch(fcmUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `key=${serverKey}`
    },
    body: JSON.stringify(message)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Successfully sent message:', data);
  })
  .catch(error => {
    console.log('Error sending message:', error);
  });
}

// 예제 사용
const exampleToken = 'YOUR_DEVICE_TOKEN';
sendNotification(exampleToken);

