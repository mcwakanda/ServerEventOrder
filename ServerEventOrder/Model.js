
guidedModel =// @startlock
{
	Person :
	{
		lastName :
		{
			events :
			{
				onRemove:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onSave:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onValidate:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onSet:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onLoad:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onInit:function(attributeName)
				{// @endlock
					emitter.emit("myEvent","value1","value2");
					debugger;
				}// @startlock
			}
		},
		fullName :
		{
			events :
			{
				onRemove:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onSave:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onValidate:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onSet:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onLoad:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onInit:function(attributeName)
				{// @endlock
					debugger;
				}// @startlock
			},
			onSort:function(ascending)
			{// @endlock
				debugger;
			},// @startlock
			onQuery:function(compOperator, valueToCompare)
			{// @endlock
				debugger;
			},// @startlock
			onSet:function(value)
			{// @endlock
				debugger;
			},// @startlock
			onGet:function()
			{// @endlock
				return this.firstName + " " + this.lastName;
				debugger;
			}// @startlock
		},
		firstName :
		{
			events :
			{
				onRemove:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onSave:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onValidate:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onSet:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onLoad:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onInit:function(attributeName)
				{// @endlock
					debugger;
				}// @startlock
			}
		},
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				debugger;
				return ds.Person.all();
			},// @startlock
			onRemove:function()
			{// @endlock
				debugger;
			},// @startlock
			onSave:function()
			{// @endlock
				debugger;
			},// @startlock
			onValidate:function()
			{// @endlock
				debugger;
			},// @startlock
			onLoad:function()
			{// @endlock
				debugger;
			},// @startlock
			onInit:function()
			{// @endlock
				debugger;
			}// @startlock
		}
	},
	Company :
	{
		name :
		{
			events :
			{
				onRemove:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onSave:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onValidate:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onSet:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onLoad:function(attributeName)
				{// @endlock
					debugger;
				},// @startlock
				onInit:function(attributeName)
				{// @endlock
					debugger;
				}// @startlock
			}
		},
		events :
		{
			onRestrictingQuery:function()
			{// @endlock
				debugger;
			},// @startlock
			onRemove:function()
			{// @endlock
				debugger;
			},// @startlock
			onValidate:function()
			{// @endlock
				debugger;
			},// @startlock
			onLoad:function()
			{// @endlock
				debugger;
			},// @startlock
			onInit:function()
			{// @endlock
				debugger;
			},// @startlock
			onSave:function()
			{// @endlock
				debugger;
			}// @startlock
		}
	}
};// @endlock
