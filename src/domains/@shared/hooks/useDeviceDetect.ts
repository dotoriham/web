import { useContext } from "react";
import { DeviceDetectContext } from "../contexts";

export const useDeviceDetect = () => useContext(DeviceDetectContext);
