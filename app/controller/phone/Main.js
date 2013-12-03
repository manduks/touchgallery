/**
 * @class Mobile.controller.phone.Main
 * @extends Mobile.controller.Main
 * The phone controller
 */
Ext.define('Mobile.controller.phone.Main',{
	extend:'Mobile.controller.Main',
	config:{
		refs:{
			menuList:{
				selector:'menulist'
			}
		},
		control:{
			'menulist':{
				itemtap:'onMenuListTap'
			}
		}
	}
});