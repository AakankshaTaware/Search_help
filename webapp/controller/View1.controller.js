sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.Fragments.controller.View1", {
		onValueHelp: function (oEvent) {
         var oDialog = new sap.ui.xmlfragment("demo.Fragments.fragments.SelectDialog",this);
		this.getView().addDependent(oDialog);
		oDialog.bindAggregation("items",{
			path:"Language>/Language",
			template:new sap.m.StandardListItem({
			title : "{Language>Language}"	
			})
		});
		oDialog.open();	
		},

		onValueHelpOkPress: function (oEvent) {

var Otitle = oEvent.getParameter("selectedItem").getTitle();

		this._oInput = this.getView().byId("Language");
	     this._oInput.setValue(Otitle);

		}
	});
});