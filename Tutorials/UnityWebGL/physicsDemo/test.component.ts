// variable declarations
OverlayClicked: boolean = false;
isIOS: boolean = false;

ngOnInit () {
 this.isIOS = ((/iPad|iPhone|iPod/.test(navigator.userAgent)) && (typeof (DeviceMotionEvent as any).requestPermission === 'function'));
}

// for requesting permission on iOs 13 devices
requestPermissionsIOS() {
 this.requestDeviceMotionIOS();
 this.requestDeviceOrientationIOS();
 this.overlayClicked = true;
}

// requesting device motion permission
requestDeviceMotionIOS() {
 if (typeof (DeviceMotionEvent as any).requestPermission === 'function') {
  (DeviceMotionEvent as any).requestPermission()
   .then(permissionState => {
   if (permissionState === 'granted') {
    window.addEventListener('devicemotion', () => {});
   }
  })
   .catch(console.error);
 } else {
  // handle regular non iOS 13+ devices
 }
}

// requesting device orientation permission
requestDeviceOrientationIOS() {
 if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
  (DeviceOrientationEvent as any).requestPermission()
   .then(permissionState => {
   if (permissionState === 'granted') {
    window.addEventListener('deviceorientation', () => {});
   }
  })
   .catch(console.error);
 } else {
  // handle regular non iOS 13+ devices
 }
}
