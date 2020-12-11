import * as BlinkIDReactNative from 'blinkid-react-native';
export const overlaySettingsV1 = new BlinkIDReactNative.DocumentVerificationOverlaySettings();
export const overlaySettingsV2 = new BlinkIDReactNative.BlinkIdOverlaySettings();

// DocumentVerificationOverlaySettings (old overlay)
overlaySettingsV1.firstSideSplashMessage =
  'Place the front side of your document in the frame';
overlaySettingsV1.secondSideSplashMessage =
  'Place the back side of your document in the frame';
overlaySettingsV1.scanningDoneSplashMessage = 'Scanning Done!';
overlaySettingsV1.firstSideInstructions =
  'These are the first side instructions';
overlaySettingsV1.secondSideInstructions =
  'These are the second side instructions';
overlaySettingsV1.glareMessage = 'Make sure there is no glare on the image.';

// BlinkIDOverlaySettings (new overlay)
overlaySettingsV2.glareMessage = 'Make sure there is no glare on the image.';
overlaySettingsV2.firstSideInstructionsText = 'Scan the front of the document.';
overlaySettingsV2.flipInstructions = 'Flip the document.';
overlaySettingsV2.errorMoveCloser = 'Move closer to the document';
overlaySettingsV2.errorMoveFarther = 'The document is too close.';
overlaySettingsV2.sidesNotMatchingTitle = 'Oops..';
overlaySettingsV2.sidesNotMatchingMessage =
  "The front and the back of your document don't match.";
overlaySettingsV2.unsupportedDocumentTitle = 'Oops..';
overlaySettingsV2.unsupportedDocumentMessage =
  "Sorry, we can't use this document.";
overlaySettingsV2.recognitionTimeoutTitle = 'Tick tock...';
overlaySettingsV2.recognitionTimeoutMessage =
  "Seems like you're having a hard time scanning the back. Do you want to try again?";
overlaySettingsV2.retryButtonText = 'Retry';
overlaySettingsV2.errorDocumentTooCloseToEdge =
  'The document is too close to the edges.';
overlaySettingsV2.requireDocumentSidesDataMatch = false;
overlaySettingsV2.backSideScanningTimeoutMilliseconds = 120000;
