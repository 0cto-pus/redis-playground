import redisClient from './redisClient';

redisClient.subscribe('userLogin', (message, channel) => {
  try {
    if (channel === 'userLogin') {
      console.error('User: ', message);
      console.log(
        `Subscribed successfully! This client is currently subscribed to ${channel} channels.`
      );
    } else {
      console.log('Failed to subscribe!');
    }
  } catch (err) {
    console.log(`Failed to subscribe: ${err}`);
  }
});

redisClient.on('message', (message, channel) => {
  if (channel === 'userLogin') {
    const { userId } = JSON.parse(message);
    console.log(`User ${userId} logged in`);
  }
});
