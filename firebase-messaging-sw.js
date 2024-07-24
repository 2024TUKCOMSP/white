importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Firebase 구성 정보
const firebaseConfig = {
  apiKey: "AIzaSyBttJLSByuroKULCvEX4CtOnUxbPz-1n-o",
  authDomain: "practice-779f3.firebaseapp.com",
  projectId: "practice-779f3",
  storageBucket: "practice-779f3.appspot.com",
  messagingSenderId: "884132998490",
  appId: "1:884132998490:web:b6fff627cd65bbf5841763",
  measurementId: "G-PLVXM07N5M"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] 백그라운드 메시지 수신: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // 알림에 사용할 아이콘 URL
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
