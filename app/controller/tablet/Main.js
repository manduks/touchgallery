/**
 * @class Mobile.controller.tablet.Main
 * @extends Mobile.controller.Main
 * The tablet controller
 */
Ext.define('Mobile.controller.tablet.Main', {
	extend: 'Mobile.controller.Main',
	config: {
		refs: {
			main:{
				selector:'main'
			},
			menuList: {
				selector: 'menulist'
			},
			mainPanelView: {
				selector: 'main #tabletMainPanel'
			}
		},
		control: {
			'menulist': {
				itemtap: 'onMenuListTap'
			},
			'loginform button':{
				tap:'onLogin'
			}
		}
	},
	onMenuListTap: function(list, index, target, record) {
		switch (record.get('action')) {
			case 'home':
				this.activateHome();
				break;
			case 'forum':
				this.activateForum();
				break;
			case 'videos':
				this.activateVideos();
				break;
			case 'photos':
				this.activatePhotos();
				break;
			case 'profile':
				this.activateProfile();
				break;
			case 'logout':
				this.onLogoutUser();
				break;
		}
	},
	onLogin:function () {
		this.getMain().setActiveItem(1);
	},
	activateHome: function() {
		this.getMainPanelView().setActiveItem(0);
	},
	activateForum: function() {
		this.getMainPanelView().setActiveItem(1);
	},
	activateVideos: function() {
		this.getMainPanelView().setActiveItem(2);
	},
	activatePhotos: function() {
		this.getMainPanelView().setActiveItem(3);
	},
	activateProfile: function() {
		this.getMainPanelView().setActiveItem(4);
	},
	onLogoutUser: function() {
		alert('Logout!')
	}
});