/**
 * @class Mobile.view.videos.VideosNavigationView
 * @extends Ext.NavigationView
 * 
 * The navigation video for the videos module
 */
Ext.define('Mobile.view.videos.VideosNavigationView', {
    extend: 'Ext.NavigationView',
    alias: 'widget.videosnavigationview',
    requires: [
        'Mobile.view.videos.VideosList'
    ],

    config:{
    	items:{
    		xtype:'videoslist'
    	}
    }
});