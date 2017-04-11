var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({

	name: {
		type: Schema.Types.String
	},
	description: {
		type: Schema.Types.Mixed
	},
	completed: { 
		type: Schema.Types.Boolean,
		default: false
	},
	githubLink: {
		type: Schema.Types.String
	},
	demoLink: {
		type: Schema.Types.String
	},
	imageLink: {
		type: Schema.Types.String
	},
	techStack: [{
		type: Schema.Types.String
	}]

}, {
	timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"},
	toJSON: {getters: true}, //both path and virtual getters
	id: false
});

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
