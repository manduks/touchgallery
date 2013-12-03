/**
 * @class Mobile.form.login.LoginForm
 * @extends Ext.form.Panel
 *
 * This is the login form
 */
Ext.define('Mobile.form.login.LoginForm', {
	extend: 'Ext.form.Panel',
	xtype: 'loginform',
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Email',
		'Ext.field.Password'
	],
	config: {
		padding: '15 15 15 15',
		items: [{
			xtype: 'fieldset',
			defaults: {
				required: true,
				clearIcon: true
			},
			items: [{
				xtype: 'emailfield',
				name: 'email',
				placeHolder: 'Email'
			}, {
				xtype: 'passwordfield',
				name: 'password',
				placeHolder: 'Password'
			}]
		}, {
			xtype: 'fieldset',
			items: [{
					xtype: 'button',
					text: 'Login',
					ui:'btn-login-ui'
				}

			]

		}]
	}

});