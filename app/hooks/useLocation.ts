import { useState, useEffect } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState({});

  const requestPermission = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        return;
      } else {
        const result = await Location.getCurrentPositionAsync();
        setLocation({
          latitude: result?.coords.latitude,
          longitude: result?.coords.longitude,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return location;
};

export default useLocation;
