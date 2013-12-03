/**
 * @class Mobile.view.tablet.MenuList
 * @extends Ext.List
 *
 *	The menu list for the tablet
 */

Ext.define('Mobile.view.tablet.MenuList',{
	extend:'Ext.List',
	xtype:'menulist',
	config:{
		itemTpl:'<div><i class="{icon}"></i>{option}</div>',
		data: [
			{option:'Home', icon:'icon-download', action:'home'},
			{option:'Forum', icon:'icon-upload', action:'forum'},
			{option:'Videos', icon:'icon-upload', action:'videos'},
			{option:'Photos', icon:'icon-upload', action:'photos'},
			{option:'My profile', icon:'icon-upload', action:'profile'},
			{option:'Logout', icon:'icon-download', action:'logout'}
		]
	}
});