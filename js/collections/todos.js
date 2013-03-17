var app = app || {};

(function() {
	'use strict';

	// Todo Collection
	// ---------------

	// The collection of todos is backed by engin.io
	var TodoList = Backbone.Collection.extend({

		// Reference to this collection's model.
		model: app.Todo,

		parse: function(response) {
			return response.results;
		},

		// Filter down the list of all todo items that are finished.
		completed: function() {
			return this.filter(function( todo ) {
				return todo.get('completed');
			});
		},

		// Filter down the list to only todo items that are still not finished.
		remaining: function() {
			return this.without.apply( this, this.completed() );
		}
	});

	// Create our global collection of **Todos**.
	app.Todos = new TodoList();

}());
