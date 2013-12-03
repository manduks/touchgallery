/**
 * @class Mobile.view.Main
 * @extends Mobile.view.Main
 *
 * This is the main view off the app
 */
Ext.define('Mobile.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Mobile.form.login.LoginForm',
        'Mobile.view.photos.PhotosNavigationView',
        'Mobile.view.videos.VideosNavigationView',
        'Ext.TitleBar',
        'Ext.Video',

        // All tpls here
        'Mobile.view.photos.PhotoTpl',
        'Mobile.view.videos.VideoTpl'
    ]
});