/**
 * @class  Mobile.view.videos.VideoTpl
 * @extends Ext.XTemplate
 * Video TPL
 */

Ext.define('Mobile.view.videos.VideoTpl', {
	extend: 'Ext.XTemplate',

	constructor: function() {
		var html = [
			'<div class="mobile-photo-list-item">',
				'<div class="mobile-photo-list-img"><img src="{video}" width="200"/></div>',
				'<div class="">{description}</div>',
			'</div>'
		];
		this.callParent(html);
	}
});