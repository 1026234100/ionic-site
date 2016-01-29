import {App, IonicApp, Platform, ActionSheet} from 'ionic-framework/ionic';
import {Page, Config, Events} from 'ionic-framework/ionic';
import {PageOne, PageTwo, PageThree} from './menus/menus';
import * as actionSheets from './action-sheets/action-sheets';
import * as helpers from './helpers';


@App({
  templateUrl: './build/app.html',
  config: {
    production: true,
    platforms: {
      android: {
        activator: 'ripple',
        backButtonIcon: 'md-arrow-back'
      }
    }
  }
})
class DemoApp {

  rootPage: any;
  androidAttribute: any;
  nextPage;
  isProductionMode;
  currentPageIndex;
  pages = [
    { title: 'Home', component: PageOne },
    { title: 'Friends', component: PageTwo },
    { title: 'Events', component: PageThree }
  ];
  constructor(
    public app: IonicApp,
    public platform: Platform,
    public config: Config) {
    this.androidAttribute = helpers.AndroidAttribute;


    this.platform.ready().then(() => {

      window.addEventListener('message', (e) => {
        zone.run(() => {
          if (e.data) {
            var data;
            try {
              data = JSON.parse(e.data);
            } catch (e) {
              console.error(e);
            }
            if (data.hash) {
              this.nextPage = helpers.getPageFor(data.hash.replace('#', ''));
              if (data.hash !== 'menus') {
                this.app.getComponent('leftMenu').enable(false);
              }
            } else {
              this.nextPage = actionSheets.BasicPage;
            }
            setTimeout(() => {
              let nav = this.app.getComponent('nav');
              helpers.debounce(nav.setRoot(this.nextPage), 60, false);
            });
          }
        });
      });

      if (this.config.get('production') === true) {
        this.isProductionMode = true;
        window.parent.postMessage(this.platform.is('ios') ? "ios" : "android", "*");
        if (helpers.hasScrollbar() === true) {
          setTimeout(function() {
            var body = document.getElementsByTagName('body')[0];
            body.className = body.className + ' has-scrollbar';
          }, 500);
        }
      } else {
        this.isProductionMode = false;
        this.currentPageIndex = 1;
        let nav = this.app.getComponent('nav');
        nav.setRoot(actionSheets.BasicPage);
      }

    });

  }

  previousSection() {
    let pageName = Object.keys(helpers.getPages())[this.currentPageIndex - 1];
    let nav = this.app.getComponent('nav');
    nav.setRoot(helpers.getPageFor(pageName), {}, { animate: false });
    this.currentPageIndex = this.currentPageIndex - 1;
  }

  nextSection() {
    let pageName = Object.keys(helpers.getPages())[this.currentPageIndex + 1];
    let nav = this.app.getComponent('nav');
    nav.setRoot(helpers.getPageFor(pageName), {}, { animate: false });
    this.currentPageIndex = this.currentPageIndex + 1;
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    // debugger;
    this.app.getComponent('leftMenu').close();

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }

}
