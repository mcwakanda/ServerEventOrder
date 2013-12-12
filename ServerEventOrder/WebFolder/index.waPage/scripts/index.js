
WAF.onAfterInit = function onAfterInit() {// @lock
	console.log("WAF.onAfterInit");
// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var documentEvent = {};	// @document
	var personEvent = {};	// @dataSource
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.person.save();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		console.log("documentEvent.onLoad");
	};// @lock

	personEvent.onageAttributeChange = function personEvent_onageAttributeChange (event)// @startlock
	{// @endlock
		console.log("personEvent.onageAttributeChange");
	};// @lock

	personEvent.onlastNameAttributeChange = function personEvent_onlastNameAttributeChange (event)// @startlock
	{// @endlock
		console.log("personEvent.onlastNameAttributeChange");
	};// @lock

	personEvent.onfullNameAttributeChange = function personEvent_onfullNameAttributeChange (event)// @startlock
	{// @endlock
		console.log("personEvent.onfullNameAttributeChange");
	};// @lock

	personEvent.onfirstNameAttributeChange = function personEvent_onfirstNameAttributeChange (event)// @startlock
	{// @endlock
		console.log("personEvent.onfirstNameAttributeChange");
	};// @lock

	personEvent.onCollectionChange = function personEvent_onCollectionChange (event)// @startlock
	{// @endlock
		console.log("personEvent.onCollectionChange");
	};// @lock

	personEvent.onElementSaved = function personEvent_onElementSaved (event)// @startlock
	{// @endlock
		console.log("personEvent.onElementSaved");
	};// @lock

	personEvent.onCurrentElementChange = function personEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		console.log("personEvent.onCurrentElementChange");
	};// @lock

	personEvent.onBeforeCurrentElementChange = function personEvent_onBeforeCurrentElementChange (event)// @startlock
	{// @endlock
		console.log("personEvent.onBeforeCurrentElementChange");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("person", "onageAttributeChange", personEvent.onageAttributeChange, "WAF", "age");
	WAF.addListener("person", "onlastNameAttributeChange", personEvent.onlastNameAttributeChange, "WAF", "lastName");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("person", "onfullNameAttributeChange", personEvent.onfullNameAttributeChange, "WAF", "fullName");
	WAF.addListener("person", "onfirstNameAttributeChange", personEvent.onfirstNameAttributeChange, "WAF", "firstName");
	WAF.addListener("person", "onCollectionChange", personEvent.onCollectionChange, "WAF");
	WAF.addListener("person", "onElementSaved", personEvent.onElementSaved, "WAF");
	WAF.addListener("person", "onCurrentElementChange", personEvent.onCurrentElementChange, "WAF");
	WAF.addListener("person", "onBeforeCurrentElementChange", personEvent.onBeforeCurrentElementChange, "WAF");
// @endregion
};// @endlock
