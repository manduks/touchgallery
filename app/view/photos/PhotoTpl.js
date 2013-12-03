/**
 * @class  Mobile.view.photos.PhotoTpl
 * @extends Ext.XTemplate
 * Photo TPL
 */

Ext.define('Mobile.view.photos.PhotoTpl', {
	extend: 'Ext.XTemplate',

	constructor: function() {
		var html = [
			'<div class="mobile-photo-list-item">',
				'<div class="mobile-photo-list-img"><img src="{photo}" width="200"/></div>',
				'<div class="">{description}</div>',
			'</div>'
		];
		this.callParent(html);
	}
});