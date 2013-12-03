/**
 * @class Mobile.view.tablet.Main
 * @extends Mobile.view.Main
 *
 * This is the main view for the tablet view
 */
Ext.define('Mobile.view.tablet.Main', {
	extend: 'Mobile.view.Main',

	requires:[
		'Mobile.view.tablet.MenuList'
	],

	config: {
		layout: 'card',
		activeItem: 0,
		items: [{
			xtype: 'container',
			baseCls: 'login-background',
			layout: {
				type: 'vbox',
				align: 'stretch'
			},
			defaults: {
				flex: 1
			},
			items: [{
				xtype: 'container'
			}, {
				xtype: 'loginform',
				baseCls: '',
				flex: 2
			}, {
				xtype: 'container'
			}]
		}, {
			xtype: 'container',
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			padding: '1 1 1 1',
			items: [{
				style: {
					'background-color': '#5F96BF'
				},
				flex: 1,
				layout: 'fit',
				items: [{
					xtype: 'menulist'
				}, {
					docked: 'top',
					xtype: 'titlebar',
					title: 'Menu'
				}]
			}, {
				xtype: 'panel',
				title: 'Mobile',
				flex: 4,
				layout: 'card',
				itemId:'tabletMainPanel',
				defaults:{
					xtype:'container'
				},
				items: [{
					html:'home'
				},{
					html:'forum'
				},{
					xtype:'videosnavigationview'
				},{
					xtype: 'photosnavigationview'
				},{
					html:'profile'
				}]
			}]
		}]
	}
});