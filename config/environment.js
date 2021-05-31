const port = process.env.PORT || 4000;
const dbURI =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/sql_editor_app';

module.exports = { port, dbURI };
