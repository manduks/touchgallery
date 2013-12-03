/**
 * @class Mobile.view.phone.Main
 * @extends Mobile.view.Main
 *
 * This is the main view for the phone view
 */
Ext.define('Mobile.view.phone.Main', {
	extend: 'Mobile.view.Main',

	requires: ['Ext.tab.Panel'],

	config: {
		layout: 'fit',
		items: {
			xtype: 'tabpanel',
			tabBarPosition: 'bottom',
			defaults: {
				styleHtmlContent: true
			},
			items: [{
				title: 'Home',
				iconCls: 'home',
				html: 'home'
			}, {
				title: 'Photos',
				iconCls: 'bookmarks',
				xtype: 'photosnavigationview'
			}, {
				title: 'Videos',
				iconCls: 'favorites',
				xtype: 'videosnavigationview'
			}, {
				title: 'Profile',
				iconCls: 'user',
				items: [{
					xtype:'button',
					text: 'Logout',
					align: 'right',
					ui: 'btn-add-ui'
				}, {
					xtype:'button',
					text:'search',
					align: 'left',
					cls:'btn-default'
				}]
			}]
		}
	}
});