---
author: Eric
title: "Configuring Wacom Tablets on Manjaro i3 Linux"
---
For anyone who loves digital painting and Linux, it can be quite disheartening to know neither Wacom or Adobe have official Linux support. Fear not however, with just a little bit of configuration you can have the perfect setup going.

In this guide I will be using a Bamboo Pen CTL-460 on Manjaro i3 and Krita as the drawing software.
#### Configuring the Wacom tablet
Wacom tablets are configured using `xsetwacom`, which you get can get by installing [xf86-input-wacom](https://www.archlinux.org/packages/extra/x86_64/xf86-input-wacom/). You may need to restart your computer for it to work. To make sure your tablet is plugged in and recognized open the terminal and run
```bash
xsetwacom --list devices
```
Your output should look something like this:
```
Wacom Bamboo Pen Pen stylus     	id: 8	  type: STYLUS    
Wacom Bamboo Pen Pen eraser     	id: 14	type: ERASER  
```
Here we see the name of the devices, the id, and the types `STYLUS` and `ERASER`. Both will need to be configured to get the pen working properly.

For those with dual monitor setups you'll want to confine your tablet area to a single monitor. You can do this by entering
```
xsetwacom set "[name]" MapToOutput [monitor]
```
For example, my commands were
```bash
xsetwacom set "Wacom Bamboo Pen Pen stylus" MapToOutput DVI-0
xsetwacom set "Wacom Bamboo Pen Pen eraser" MapToOutput DVI-0
```
If you don't know your monitors' names, use `xrandr` to find out.

Whatever settings you make won't persist upon restart, so I recommend creating a shell script with all your configurations, then adding it to `~/.xprofile` or whatever your autostart script is. In my case I just put the above 2 configuration lines in a file called `setwacom.sh`, then set execute permissions on the script with `chmod u+x ~/setwacom.sh` and then added "`~/setwacom.sh &`" to the file `~/.xprofile` (I had to create this file since it's not there by default).

Use `xsetwacom get [id] all` to list all configurable settings for that device.

For more information on configuring your tablet see the [Arch Wiki article](https://wiki.archlinux.org/index.php/Wacom_tablet) on it.

The next article will be about how I set up Krita for digital painting.

[![Krita Drawing](/assets/images/drawing.png "Krita Drawing")](/assets/images/drawing.png)