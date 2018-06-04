//
// Fahrenheit Temperature Gauge with Backlight.
// David Fekke 6/4/2018
// From original example by Gordon Williams

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