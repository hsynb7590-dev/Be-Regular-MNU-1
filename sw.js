// ملف sw.js - المحرك الذي يعمل في الخلفية
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || "تنبيه المحاضرة";
    const options = {
        body: data.body || "لديك محاضرة تبدأ الآن!",
        icon: 'icon.png', // تأكدي من وجود أيقونة بهذا الاسم أو غيريها
        badge: 'icon.png',
        vibrate: [200, 100, 200]
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// التعامل مع الضغط على الإشعار
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/') // يفتح الموقع عند الضغط على الإشعار
    );
});
