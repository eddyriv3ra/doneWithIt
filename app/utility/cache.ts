import AsyncStorage from "@react-native-async-storage/async-storage";
import differenceInMinutes from "date-fns/differenceInMinutes";

const store = async (key: string, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item: any) => {
  const now = Date.now();
  const storedtime = item.timestamp;
  return differenceInMinutes(now, storedtime) > 5;
};

const get = async (key: string) => {
  try {
    const value = (await AsyncStorage.getItem(key)) || "";
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
