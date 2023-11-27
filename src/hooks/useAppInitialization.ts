import Constants from "expo-constants";
import { router } from "expo-router";
import { useEffect, useMemo } from "react";
import { Platform } from "react-native";

import { useGetMobileAppConfigQuery } from "../graphql";

export default function useAppInitialization() {
  const { data } = useGetMobileAppConfigQuery();
  const isOutdated = useMemo(() => {
    if (!data) {
      return true;
    }

    const { androidVersionCode, iosVersionCode } = Constants.expoConfig
      ?.extra as { androidVersionCode: string; iosVersionCode: string };

    return (
      (Platform.OS === "android" &&
        Number(data.mobileAppConfig.android.versionCode) >
          Number(androidVersionCode)) ||
      (Platform.OS === "ios" &&
        Number(data.mobileAppConfig.ios.versionCode) > Number(iosVersionCode))
    );
  }, [data]);
  const isAppInitialized = useMemo(() => true, []);

  const initializeApp = async () => {};

  useEffect(() => {
    if (isOutdated && isAppInitialized) {
      router.push("/online/upgrade");
    }
  }, [isOutdated, isAppInitialized]);

  return {
    initializeApp,
    isAppInitialized,
  };
}
