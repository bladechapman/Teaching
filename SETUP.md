# Setting up Node on a Mac
1. Make sure your computer is updated to the latest operating system
2. Install XCode from the Apple Mac App Store
3. Open your terminal application and type the following command and allow it to complete:
```
xcode-select --install
```
5. Next, set up nvm, which will let you install and manage different versions of node. Execute the following command and allow it to complete:
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
```
Restart your terminal application after this completes.
6. Finally, install and use the latest version of node! In your terminal application, enter the following commands and allow them to complete:
```
nvm install node; nvm use node
```
You can verify the installation was successful by entering ```node``` at the command line. You may have to restart your terminal after this step.
