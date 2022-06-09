import AsyncStorage from '@react-native-async-storage/async-storage';
const LOCALE_KEY = {
  email: 'email',
  access_token: 'access_token',
};

export default LOCALE_KEY;

export async function getLocale(key) {
  const session = await AsyncStorage.getItem(key);
  return session;
}

export function setLocale(key, locale) {
  return AsyncStorage.setItem(key, locale);
}

export function clearLocale(key) {
  return AsyncStorage.removeItem(key);
}
