/**
 * @class Mobile.view.photos.PhotoContainer
 * @extends Ext.Container
 * The Photo container
 */
Ext.define('Mobile.view.photos.PhotoContainer', {
    extend: 'Ext.Container',
    alias: 'widget.photocontainer',
    config:{
    	tpl:Ext.create('Mobile.view.photos.PhotoTpl'),
    	data:{
    		photo:'https://cdn0.iconfinder.com/data/icons/faticons-2/27/picture3-256.png',
    		description:'The arts are a vast subdivision of culture, composed of many creative endeavors and disciplines. It is a broader term than "art", which as a description of a field usually means only the visual arts. The arts encompass the visual arts, the literary arts and the performing arts – music, theatre, dance and film, among others. This list is by no means comprehensive, but only meant to introduce the concept of the arts.'
    	}
    }
});