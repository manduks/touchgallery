/**
 * @class Mobile.controller.Main
 * @extends Ext.app.Controller
 * The main controller of our application
 */

Ext.define('Mobile.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			photosNavigationView: {
				selector: 'main photosnavigationview'
			},
			videosNavigationView: {
				selector: 'main videosnavigationview'
			}
		},
		control: {
			'photoslist': {
				itemtap: 'onPhotoListTap'
			},
			'videoslist': {
				itemtap: 'onVideoListTap'
			}
		}
	},
	onPhotoListTap: function() {
		this.getPhotosNavigationView().push({
			xtype: 'photocontainer'
		});
	},
	onVideoListTap: function() {
		this.getVideosNavigationView().push({
			xtype: 'video',
			url: 'porsche911.mov',
			posterUrl: 'https://cdn1.iconfinder.com/data/icons/20-flat-icons/128/video-play.png'
		});
	}
});