# Heartery
An innovative application that aims to help individuals that are at risk of developing heart disease develop better lifestyle habits.


# Basic Bot template

This samples shows how to:
- Use [LUIS](https://luis.ai) to implement core AI capabilities
- Implement a multi-turn conversation using Dialogs
- Handle user interruptions for such things as Help or Cancel
- Prompt for and validate requests for information from the user

# Prerequisite to run this bot locally
- Download the bot code from the Build blade in the Azure Portal
- Create a file called .env in the root of the project and add the botFilePath and botFileSecret to it
  - You can find the botFilePath and botFileSecret in the Azure App Service application settings
  - Your .env file should look like this
    ```bash
    botFilePath=<copy value from App settings>
    botFileSecret=<copy value from App settings>
    ```

- Run `npm install` in the root of the bot project
- Finally run `npm start` 


## Testing the bot using Bot Framework Emulator
[Microsoft Bot Framework Emulator](https://github.com/microsoft/botframework-emulator) is a desktop application that allows bot developers to test and debug their bots on localhost or running remotely through a tunnel.

- Install the Bot Framework Emulator from [here](https://aka.ms/botframework-emulator)

### Connect to bot using Bot Framework Emulator v4
- Launch the Bot Framework Emulator
- File -> Open bot and navigate to the bot project folder
- Select `<your-bot-name>.bot` file

## Deploy this bot to Azure
See [here](./deploymentScripts/DEPLOY.md) to learn more about deploying this bot to Azure and using the CLI tools to build the LUIS models this bot depends on.

### Dependencies

- **[Restify](http://restify.com)** Used to host the web service for the bot, and for making REST calls
- **[dotenv](https://github.com/motdotla/dotenv)** Used to manage environmental variables

### Project Structure

`index.js` references the bot and starts a Restify server. `bot.js` loads the dialog type you selected when running the generator and adds it as the default dialog. 

### Configuring the bot

Update `.env` with the appropriate keys botFilePath and botFileSecret. 
  - For Azure Bot Service bots, you can find the botFileSecret under application settings. 
  - If you use [MSBot CLI](https://github.com/microsoft/botbuilder-tools) to encrypt your bot file, the botFileSecret will be written out to the console window. 
  - If you used [Bot Framework Emulator **V4**](https://github.com/microsoft/botframework-emulator) to encrypt your bot file, the secret key will be available in bot settings. 

### Running the bot

```
node ./index.js
```
### Developing the bot

```
nodemon ./index.js
```



