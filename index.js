const application = require('./dist');
// process.env.GOOGLE_APPLICATION_CREDENTIALS = "C:\\Users\\bharat.khandelwal\\GoogleTranslate\\MyFirstProject-3df6d5543cc3.json";
process.env.GOOGLE_APPLICATION_CREDENTIALS = "E:\\GoogleTranslate\\MyFirstProject-3df6d5543cc3.json";
process.env.identitytoken = "";
process.env.autoguruServiceToken = ''

module.exports = application;
String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +(process.env.PORT || 5495),
      host: process.env.HOST,
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
      cors: {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        maxAge: 86400,
        credentials: true,
      }
    },
  };
  application.main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
  String.prototype.addAt = function (index, character) {
    return this.substr(0, index - 1) + character + this.substr(index - 1 + character.length - 1);
  }
}
