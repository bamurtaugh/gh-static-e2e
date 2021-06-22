# Static Web App

Update readme!

## Setup

1. Install the Azure Functions extension.

1. Run the following to install Azure Functions Core Tools.

    ```
    npm i -g azure-functions-core-tools@3 --unsafe-perm true
    ```

## Run the application

1. The frontend is a React app which is run with...

    ```
    npm start
    ```

1.  The backend is a Functions project that should be started from the run and debug panel.

> If you receive an error about "unable to decrypt settings" when trying to run the backend/Functions project, make sure the "IsEncryped" option is set to false in your "api/local.settings.json" file. It is a top level setting outside of "Values"...

    ```
    {
        "IsEncrypted": false,
        "Values": {
            "FUNCTIONS_WORKER_RUNTIME": "node",
        }
    }
    ```


## Forward ports

1. Forward ports 3000 and 7071
