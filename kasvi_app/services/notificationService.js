import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const requestNotificationPermissions = async () => {
  try {
    const { status } = await Notifications.getPermissionsAsync();
    console.log('Ilmoituslupien tila:', status);
    if (status !== 'granted') {
      const { status: newStatus } = await Notifications.requestPermissionsAsync();
      console.log('Uusi ilmoituslupien tila:', newStatus);
      return newStatus === 'granted';
    }
    return true;
  } catch (error) {
    console.error('Virhe ilmoituslupia pyydettäessä:', error);
    return false;
  }
};

export const scheduleNotification = async (title, body, date) => {
  if (new Date(date) <= new Date()) {
    console.error('Päivämäärä on menneisyydessä. Muistutusta ei voi ajastaa.');
    return;
  }

  const hasPermission = await requestNotificationPermissions();
  if (!hasPermission) {
    console.error('Ilmoituslupia ei myönnetty.');
    return;
  }

  try {
    console.log('Ajastetaan muistutus päivämäärällä:', new Date(date));
    const id = await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        sound: true,
      },
      trigger: Platform.OS === 'ios' ? { date: new Date(date) } : { seconds: Math.floor((new Date(date) - Date.now()) / 1000) },
    });
    console.log(`Muistutus ajastettu ID:llä ${id}`);
    return id;
  } catch (error) {
    console.error('Virhe muistutuksen ajastamisessa:', error);
  }
};

export const cancelAllNotifications = async () => {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    console.log('Kaikki muistutukset peruttu.');
  } catch (error) {
    console.error('Virhe kaikkien muistutusten peruuttamisessa:', error);
  }
};
