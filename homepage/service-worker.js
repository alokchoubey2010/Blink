self.addEventListener('push', function(event) {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/fonts and icons/google.png', // Optional: Add the path to your icon
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});