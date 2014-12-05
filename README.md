# plug.dj.aux

**plug.dj.aux** is a minimal browser bookmarklet to improve the plug.dj user experience.

Simply add it to your bookmarks bar and click it when you enter a room. It'll add some neat features to make your life easier! 

## What functionality does it add?

* Press `spacebar` to mute/unmute the audio as long as you are not typing into an input (e.g. while chatting).
* Press `g` to grab the current song to the currently active playlist. 
* All songs played will automatically be auto-wooted.
* The page title will be changed to the current song artist and title on song change.

## How do I use it? 

1. Add a new bookmark to browser named whatever you like and copy, paste this as the url: 

* Chrome
```js
javascript:(function(){$.getScript('http://andwecoded.com/apps/scripts/plug.dj.aux.js');}());
```
* Firefox
```js
javascript:(function()%7B%24.getScript(%27http%3A%2F%2Fandwecoded.com%2Fapps%2Fscripts%2Fplug.dj.aux.js%27)%3B%7D())
```

2. Click the bookmark when you enter a plug.dj chatroom.
3. That's it!

### Suggestions? 

Add an issue ;)

**Developer:** Homero Pawlowski
