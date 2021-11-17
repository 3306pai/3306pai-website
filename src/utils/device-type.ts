import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
interface DeviceType {
  type: 'mobile' | 'pc';
  isPhone: boolean;
}
function isMoible(UA: string) {
  return !!/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA);
}

export function deviceType(): DeviceType {
  let type: DeviceType["type"] = 'pc';
  let detaultDeviceType: DeviceType = { type, isPhone: false }
  if (ExecutionEnvironment.canUseDOM) {
    const UA = navigator.userAgent??'';
    if (isMoible(UA)) {
      type = 'mobile';
      return {
        type, isPhone: true
      };
    } else {
      return detaultDeviceType;
    }
  } else {
    return detaultDeviceType;
  }
}
