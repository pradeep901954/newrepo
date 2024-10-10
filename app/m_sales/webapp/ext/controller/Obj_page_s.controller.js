sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('msales.ext.controller.Obj_page_s', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf msales.ext.controller.Obj_page_s
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			onAfterRendering:  async function (oParameter) {
				debugger
			},
			routing: {
				onAfterBinding: async function (oParameter) {
					debugger
					this.base.getView().mAggregations.content[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[2].mProperties.text = 'Raise Quotation';
					
					let funcname = 'postattach';
					let oFunction = oParameter.getModel().bindContext(`/${funcname}(...)`);
					var a;
					var uuid = window.location.href;
					const regex1 = /purchaseEnquiryUuid=([a-fA-F0-9-]+)/;;
					const match1 = uuid.match(regex1);
					if (match1) {
						a = match1[1];
						console.log(a); // Output: 1
					}
					oFunction.setParameter('p', a);
					await oFunction.execute();
					const oContext = oFunction.getBoundContext();
					var result = oContext.getValue();
					debugger
					// if (result.value == 'false') {
					// 	this.base.getView().getContent()[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[2].setEnabled(false);
					// } else {
					// 	this.base.getView().getContent()[0].mAggregations.headerTitle.mAggregations._actionsToolbar.mAggregations.content[2].setEnabled(true);
					// }

					// this.base.getView().mAggregations.content[0].mAggregations.sections[2].mForwardedAggregations.subSections[0].mAggregations._grid.mAggregations.content[1].mAggregations.content.mAggregations.content.mAggregations.columns[6].setVisible().mProperties.visible = false;
					var discount = this.base.getView().mAggregations.content[0].mAggregations.sections[2].mForwardedAggregations.subSections[0].mAggregations._grid.mAggregations.content[1].mAggregations.content.mAggregations.content.mAggregations.columns[6].sId;
					discount;
					this.base.getView().mAggregations.content[0].mAggregations.sections[2].mForwardedAggregations.subSections[0].mAggregations._grid.mAggregations.content[1].mAggregations.content.mAggregations.content.mAggregations.columns[6].mAggregations.template.mAggregations.content.mAggregations.contentEdit[0].mProperties.enabled = false;


					// var sId;
					// await this.base.getView().getContent()[0].getFooter().mAggregations.content.getContent().forEach(element => {
					// 	// if(element.getText())
					// 	debugger
					// 	var text;
					// 	try {
					// 		text = element.getText()
					// 	} catch (error) {
					// 		text = null;
					// 	}
					// 	// var text =element.getText();
					// 	if (text == 'Save')
					// 		sId = element.sId;
					// 	// element.setText("Send for Approval");
					// });
					// setTimeout(() => {
					// 	sap.ui.getCore().byId(sId).setText("Send Quotation");
					// }, 1000);
				},
				onBeforeBinding: async function (oParameter) {
					debugger
				}

			}
		}
	});
});
