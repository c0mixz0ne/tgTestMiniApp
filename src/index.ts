import WebApp from '@twa-dev/sdk'
import "./styles.less"

WebApp.showAlert(WebApp.initData);

WebApp.viewportHeight = 100;

WebApp.MainButton.show();
WebApp.MainButton.setText("main");
WebApp.MainButton.onClick(() => {
    WebApp.showAlert("MainButton");
});

WebApp.BackButton.show();
WebApp.BackButton.onClick(() => {
    WebApp.showAlert("BackButton");
});

WebApp.SettingsButton.show().onClick(() => {
    WebApp.showAlert("SettingsButton");
});

WebApp.ready();

WebApp.backgroundColor = "#00ffff";

WebApp.expand();

WebApp.requestContact(()=>{ WebApp.showAlert("requestContact"); });