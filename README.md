# clickerman
The scripts can be installed via a script manager (e.g. violentmonkey) from the following links 

* [click](https://raw.githubusercontent.com/Kafva/clickerman/main/click.user.js)
* [olc](https://raw.githubusercontent.com/Kafva/clickerman/main/olc.user.js)

The `click.user.js` script can also be imported as a standalone extension. To install the extension in a Chromium based browser, go to `chrome://extensions`, enable *Developer mode*, click *Load unpacked* and choose the `./clickerman` folder.

For development in violentmonkey, open `file:///.../clickerman/<name>.user.js` in your browser (this automatically opens violentmonkey), check *Track local file before this window is closed* and click install. Provided that the installation window is left open, changes made to the file on disk will now be synced and applied in real time, i.e. we can use an external editor.
