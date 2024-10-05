if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      console.log('Service worker registered:', registration);
    })
    .catch(function(error) {
      console.error('Service worker registration failed:', error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {
        console.log('Service worker registered:', registration);
      })
      .catch(function(error) {
        console.error('Service worker registration failed:', error);
      });
  }

  const beamsClient = new PusherPushNotifications.Client({
    instanceId: '73f22c83-635b-4217-afec-9612d56171f5', // Your instance ID
  });

  beamsClient.start()
    .then(() => beamsClient.addDeviceInterest('hello'))
    .then(() => {
      console.log('Successfully registered and subscribed to interest "hello"');
    })
    .catch(console.error);
});