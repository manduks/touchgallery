/**
 * @class Mobile.view.photos.PhotosNavigationView
 * @extends Ext.NavigationView
 * 
 * The navigation video for the photos module
 */
Ext.define('Mobile.view.photos.PhotosNavigationView', {
    extend: 'Ext.NavigationView',
    alias: 'widget.photosnavigationview',
    requires: [
        'Mobile.view.photos.PhotosList',
        'Mobile.view.photos.PhotoContainer'
    ],

    config:{
    	items:{
    		xtype:'photoslist'
    	}
    }
});