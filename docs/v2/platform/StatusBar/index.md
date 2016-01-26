---
layout: v2_fluid/docs_base
category: platform
id: Status Bar
title: Status Bar | Ionic Native Plugins
header_title: Status Bar
header_sub_title: Modify the status bar
---

<h1 class="title">Status Bar</h1>

<a class="improve-docs" href='https://github.com/driftyco/ionic-site/edit/ionic2/docs/v2/platform/statusbar/index.md'>
  Improve this doc
</a>

```bash
$ ionic plugin add cordova-plugin-statusbar
```

```javascript
import {StatusBar, IonicPlatform} from 'ionic/ionic'

class MyPage {
  constructor(platform: IonicPlatform) {
    platform.ready().then(() => {
      StatusBar.hide();

      // Dark for light content
      StatusBar.setStyle(StatusBar.LIGHT_CONTENT);
    });
  }
}
```
