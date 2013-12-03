/**
 * @class  Mobile.view.videos.VideosList
 * @extends Ext.DataView
 * The list to show the video
 */
Ext.define('Mobile.view.videos.VideosList',{
	extend:'Ext.DataView',
	alias:'widget.videoslist',
	requires:[
		'Ext.plugin.PullRefresh'
	],
	config:{
		scrollable:{
			direction:'vertical'
		},
		itemTpl:Ext.create('Mobile.view.videos.VideoTpl'),
		// store:'Videos',
		plugins:[{
			type:'pullrefresh'
		}],

		inline:true,
		cls: 'dataview-inline',

		data:[{
			video:'https://cdn2.iconfinder.com/data/icons/snipicons/500/video-256.png',
			description:'description video'
		},{
			video:'https://cdn2.iconfinder.com/data/icons/snipicons/500/video-256.png',
			description:'description video'
		},{
			video:'https://cdn2.iconfinder.com/data/icons/snipicons/500/video-256.png',
			description:'description video'
		},{
			video:'https://cdn2.iconfinder.com/data/icons/snipicons/500/video-256.png',
			description:'description video'
		},{
			video:'https://cdn2.iconfinder.com/data/icons/snipicons/500/video-256.png',
			description:'description video'
		}]
	}
});