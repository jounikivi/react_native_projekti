import AsyncStorage from '@react-native-async-storage/async-storage';

// Tallennus: Tallentaa tietyn avain-arvo-parin paikallisesti.
export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`Data tallennettu: ${key}`);
  } catch (error) {
    console.error(`Virhe tallennuksessa: ${error}`);
  }
};

// Haku: Hakee tietyn avaimen perusteella tallennetun arvon.
export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(`Virhe haussa: ${error}`);
  }
};

// Poisto: Poistaa tietyn avaimen perusteella tallennetun datan.
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Data poistettu: ${key}`);
  } catch (error) {
    console.error(`Virhe poistossa: ${error}`);
  }
};
