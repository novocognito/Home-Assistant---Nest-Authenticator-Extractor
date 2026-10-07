# Home-Assistant---Nest-Authenticator-Extractor
Chrome Extension that etracts the Issue Token Request URL and the Cookie Header Value from Google for Home Assistant Nest integration.

This browser extension was designed for Google Chrome to extract the Issue Token Request and the Cookie Header Value from Google after you have logged in. These two values are needed for Home Assistant Nest integration.

The Home Assistant Nest integration is available here. It is a common, but difficult integration to implement. If you follow the instructions below, you will be rewarded with good control of Nest and its devices.
https://www.home-assistant.io/integrations/nest/

WIth some regularity, you may need to provide Home Assistant's Nest Integration two values from your browser. After a new login, you will need to extract the Issue Token Request URL and the Cookie Header Value from the browser. This Chrome Extension allows for easily copying this information for direct pasting to the Home Assistant Nest Integration.

Installing:
1. Download the 4 files in the 'files' folder to your local drive in a single folder.
2. Open Chrome browser, and hit the three dots in the upper right. Click on Extensions and Manage Extensions.
3. Near the top left, click on "Load Unpacked". Point to the folder you downloaded the files to and press "Select Folder".
4. Click the "HA Nest Auth Extractor" and toggle the button to turn it on.

Using:
1. Navigate to home.nest.com and log on. Or if you're logged on you will see your added Nest products.
2. Use the extension by pressing on the button near the top right for the "Nest Tokens" extension.
3. If it worked, you will see your values for the "Issue Token Request URL" and the "oauth2/iframe Cookie Header Value".
4. You can copy these to the clipboard by using the button for each. Paste them individually into Home Assistant.

Enjoy! 
