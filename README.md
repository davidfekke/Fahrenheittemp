# Fahrenheit Temperature Gauge for the Expruino Pixl.js

This example was taken from Gordon Williams temperature example for the Espruino Pixl.js. A backlight was added to button 1 for good measure.

```javascript
var on = false;

function toggle() {
  on = !on;
  digitalWrite(LED,on);
}

setWatch(function() {
  toggle();
}, BTN, {edge:"rising", debounce:50, repeat:true});

function onTimer() {
  // Get the temperature as a string
  var t = E.getTemperature().toFixed(1);
  var f = ((t * 1.8) + 32).toFixed(1);
  // Clear display
  g.clear();
  // Use the small font for a title
  g.setFontBitmap();
  g.drawString("Temperature:");
  // Use a large font for the value itself
  g.setFontVector(40);
  g.drawString(f, (g.getWidth()-g.stringWidth(f))/2,10);
  // Update the screen
  g.flip();
}

// Update temperature every 10 seconds
setInterval(onTimer,10000);
// Update temperature immediately
onTimer();
```