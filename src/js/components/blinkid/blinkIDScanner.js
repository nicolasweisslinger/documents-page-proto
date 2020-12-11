import * as BlinkIDReactNative from 'blinkid-react-native';
import {overlaySettingsV2} from './overlay/overlaySettings';
import blinkIDCombinedRecognizer from './recognizers/blinkIDCombinedRecognizer';
import passportRecognizer from './recognizers/passportRecognizer';

const licenseKey = Platform.select({
  ios:
    'sRwAAAEUY29tLmF3ZXNvbWV0c3Byb2plY3TR8oNOS0ithw94GgWufdSFC3LpMGIH2zTXKSW2d4oylElz8EDPyEQ0P7xkyayADjRZL8C19Yv791psx1TN7goIHXgay9/hCA3jxeStLWMBaMugPsikoxZ9RQ6juSHhUXk2ehN2B+f42ImHMtupSxVCw3Fy5bklzhqgqy8v2BBFbKrSDcjOGWqguJf31hGpNIMw+w+Haa3ugQ==',
  android:
    'sRwAAAAUY29tLmF3ZXNvbWV0c3Byb2plY3Qz362Il56ZysSpMhkodzRSXQYIz6un7zwzpMnG4q0zPETfUlftBEVOY9vBXIxpXc/tw00xYbFbiI/u5h4PPu8eAypD+ISHWTyqPRxndTVzCdX2kqvFkzqIie0quXo4vIxUnDKqTH42gMp3SDwZp0jLIh3iBe20sxEq8n8SD7DeC2x6X6g9QwTvwmC1hNb97Tv4D6RDh4IxOA==',
});

const recognizers = {
  passportRecognizer: passportRecognizer,
  blinkIDCombinedRecognizer: blinkIDCombinedRecognizer,
};

const blinkIDScanner = (recognizer) => {
  const recognizerCollection = new BlinkIDReactNative.RecognizerCollection([
    recognizers[recognizer],
  ]);

  return BlinkIDReactNative.BlinkID.scanWithCamera(
    overlaySettingsV2,
    recognizerCollection,
    licenseKey,
  );
};

export default blinkIDScanner;
