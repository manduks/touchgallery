/**
 * @class  Mobile.view.photos.PhotosList
 * @extends Ext.DataView
 * The list to show the photos
 */
Ext.define('Mobile.view.photos.PhotosList',{
	extend:'Ext.DataView',
	alias:'widget.photoslist',
	requires:[
		'Ext.plugin.PullRefresh'
	],
	config:{
		scrollable:{
			direction:'vertical'
		},
		itemTpl:Ext.create('Mobile.view.photos.PhotoTpl'),
		// store:'Photos',
		plugins:[{
			type:'pullrefresh'
		}],

		inline:true,
		cls: 'dataview-inline',

		data:[{
			photo:'https://cdn0.iconfinder.com/data/icons/faticons-2/27/picture3-256.png',
			description:'description'
		},{
			photo:'https://cdn0.iconfinder.com/data/icons/faticons-2/27/picture3-256.png',
			description:'description'
		},{
			photo:'https://cdn0.iconfinder.com/data/icons/faticons-2/27/picture3-256.png',
			description:'description'
		},{
			photo:'https://cdn0.iconfinder.com/data/icons/faticons-2/27/picture3-256.png',
			description:'description'
		},{
			photo:'https://cdn0.iconfinder.com/data/icons/faticons-2/27/picture3-256.png',
			description:'description'
		}]
	}
});