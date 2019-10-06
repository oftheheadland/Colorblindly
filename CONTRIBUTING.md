This is a [Chrome Extension](https://developer.chrome.com/extensions/devguide).

Please feel free to submit Pull Requests!


File Structure
---

```
+-- filters/ -> the filter Javascript files
|
+-- images/ -> the logo and and icons
|
+-- popup/
|   +-- popup.html -> the extension's popup html structure
|
+-- screenshots/
|
+-- script/
|   +-- background.js -> mandatory file, currently empty
|   +-- colorblindListener.js -> popup event and click handlers <-- this is where the magic happens
|   +-- hover.js -> adds hover effects to the popup window so users can see a preview of the filter
|
+-- style/ -> CSS stylesheets
...
```

Debbuging:
https://developer.chrome.com/extensions/tut_debugging
