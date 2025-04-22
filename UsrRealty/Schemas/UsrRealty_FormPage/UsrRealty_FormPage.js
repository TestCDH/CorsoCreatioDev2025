define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "6ad73280-2b4b-41a2-8048-9484513fb95a",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "copilot-rewrite-friendly-icon"
				},
				"parentName": "CardToolsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_6e4n26a",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_6e4n26a",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_1mvei3r",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_1mvei3r"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_9w4chjb",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_9w4chjb",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_njxb903",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_njxb903",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_b1qmko0",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_b1qmko0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_0twgd1d",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_0twgd1d",
					"multiline": false,
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_epwhb9e",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_epwhb9e",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_zcadc13",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_zcadc13",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_scj0d3d",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_scj0d3d_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Country",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_qa4ayzv",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_qa4ayzv",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_f0e4v55",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_f0e4v55",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_8og0zfc",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8og0zfc_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "City",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent_fgtoxen",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent_fgtoxen",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_255gc1p",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_255gc1p_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_w4aq4gr",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_255gc1p",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ra1x3ke",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_w4aq4gr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_mnpkif6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_mnpkif6_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_ra1x3ke",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_wh6ozlh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_wh6ozlh_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_8npntwzDS"
						}
					}
				},
				"parentName": "FlexContainer_ra1x3ke",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_r7u1hlr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_r7u1hlr_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_ra1x3ke",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_kawplj9",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_kawplj9_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_r7u1hlr",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_7sqnf0g",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_7sqnf0g_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_r7u1hlr",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_2h28k10",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_2h28k10_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_2h28k10_GridDetail_8npntwz",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_8npntwz"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_2h28k10_SearchValue",
							"GridDetailSearchFilter_2h28k10_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_ra1x3ke",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_5k8xss6",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_255gc1p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_8npntwz",
					"activeRow": "$GridDetail_8npntwz_ActiveRow",
					"selectionState": "$GridDetail_8npntwz_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_8npntwz_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_8npntwzDS_Id",
					"columns": [
						{
							"id": "42bad4ab-4fe2-8a70-dd36-2bc0161b8ebb",
							"code": "GridDetail_8npntwzDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_8npntwzDS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 180
						},
						{
							"id": "def21d16-46e7-aa59-d022-cbddc83ca4f2",
							"code": "GridDetail_8npntwzDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_8npntwzDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 173
						},
						{
							"id": "5e17bc0f-85fc-dcff-c2a6-d9311b57113f",
							"code": "GridDetail_8npntwzDS_UsrComment",
							"caption": "#ResourceString(GridDetail_8npntwzDS_UsrComment)#",
							"dataValueType": 28,
							"width": 131
						},
						{
							"id": "9289e94c-dfe4-f013-f57e-0d59cceefcdc",
							"code": "GridDetail_8npntwzDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_8npntwzDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "485c6d17-b7ab-6494-bf13-97b03a6cafe7",
							"code": "GridDetail_8npntwzDS_UsrManager",
							"caption": "#ResourceString(GridDetail_8npntwzDS_UsrManager)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_5k8xss6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8npntwz_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_8npntwzDS",
							"filters": "$GridDetail_8npntwz | crt.ToCollectionFilters : 'GridDetail_8npntwz' : $GridDetail_8npntwz_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8npntwz_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8npntwz_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_8npntwzDS",
							"filters": "$GridDetail_8npntwz | crt.ToCollectionFilters : 'GridDetail_8npntwz' : $GridDetail_8npntwz_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8npntwz_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_8npntwz_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8npntwz_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitGridDetail",
							"filters": "$GridDetail_8npntwz | crt.ToCollectionFilters : 'GridDetail_8npntwz' : $GridDetail_8npntwz_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8npntwz_SelectionState"
						}
					}
				},
				"parentName": "VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_8npntwz_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_8npntwzDS",
							"filters": "$GridDetail_8npntwz | crt.ToCollectionFilters : 'GridDetail_8npntwz' : $GridDetail_8npntwz_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8npntwz_SelectionState"
						}
					}
				},
				"parentName": "VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_6e4n26a": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_1mvei3r": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_njxb903": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_b1qmko0": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_0twgd1d": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_epwhb9e": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_qa4ayzv": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_zcadc13": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_f0e4v55": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCommission_9w4chjb": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent_fgtoxen": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent_fgtoxen"
						}
					},
					"GridDetail_8npntwz": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_8npntwzDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_2h28k10_GridDetail_8npntwz",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_8npntwzDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_8npntwzDS.UsrVisitDateTime"
									}
								},
								"GridDetail_8npntwzDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_8npntwzDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_8npntwzDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_8npntwzDS.UsrComment"
									}
								},
								"GridDetail_8npntwzDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_8npntwzDS.CreatedOn"
									}
								},
								"GridDetail_8npntwzDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_8npntwzDS.UsrManager"
									}
								},
								"GridDetail_8npntwzDS_Id": {
									"modelConfig": {
										"path": "GridDetail_8npntwzDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_8npntwzDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent_fgtoxen": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_8npntwzDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrManager": {
									"path": "UsrManager"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				
				/* Implementation of the custom query handler. */
				
				handler: async (request, next) => {
					
					console.log("Button works...");
					
					Terrasoft.showInformation("My button was pressed.");
					
					var price = await request.$context.PDS_UsrPrice_6e4n26a;
					
					console.log("Price = " + price);
					
					request.$context.PDS_UsrArea_1mvei3r = 2400;
					
					/* Call the next handler if it exists and return its result. */
					
					return next?.handle(request);
				
				}
			
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				
				/* The custom implementation of the system query handler. */
				
				handler: async (request, next) => {
      					
					if (request.attributeName === 'PDS_UsrPrice_6e4n26a' || 				             
				// if price changed
					   
				request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent_fgtoxen' ) 
					{ 		
						// or percent changed
						
						var price = await request.$context.PDS_UsrPrice_6e4n26a;
						
						var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent_fgtoxen;
						
						var commission = price * percent / 100;
						
						request.$context.PDS_UsrCommission_9w4chjb = commission;
					
					}
					
				/* Call the next handler if it exists and return its result. */
					
				return next?.handle(request);
				
				}
			
	   }
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			
			Format the validator type in PascalCase. */
			
			"usr.DGValidator": {
				
				validator: function (config) {
					
					return function (control) {
						
						let value = control.value;
						
						let minValue = config.minValue;
						
						let valueIsCorrect = value >= minValue;
						
						var result;
						
						if (valueIsCorrect) {
							
							result = null;
						
						} else {
							
							result = {
								
								"usr.DGValidator": { 
									
									message: config.message
								
								}
							
							};
						
						}
						
						return result;
					
					};
				
				},
				
				params: [
					
					{
						
						name: "minValue"
					
					},
					
					{
						
						name: "message"
					
					}
				
				],
				
				async: false
			
			}
		}/**SCHEMA_VALIDATORS*/
	};
});