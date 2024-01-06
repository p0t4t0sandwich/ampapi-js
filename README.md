# ampapi-js

[![License](https://img.shields.io/github/license/p0t4t0sandwich/ampapi-js?color=blue)](https://img.shields.io/github/downloads/p0t4t0sandwich/ampapi-js/LICENSE)
[![Github](https://img.shields.io/github/stars/p0t4t0sandwich/ampapi-js)](https://github.com/p0t4t0sandwich/ampapi-js)
[![Github Issues](https://img.shields.io/github/issues/p0t4t0sandwich/ampapi-js?label=Issues)](https://github.com/p0t4t0sandwich/ampapi-js/issues)
[![Discord](https://img.shields.io/discord/1067482396246683708?color=7289da&logo=discord&logoColor=white)](https://discord.neuralnexus.dev)
[![wakatime](https://wakatime.com/badge/github/p0t4t0sandwich/ampapi-js.svg)](https://wakatime.com/badge/github/p0t4t0sandwich/ampapi-js)

[![Github Releases](https://img.shields.io/github/downloads/p0t4t0sandwich/ampapi-js/total?label=Github&logo=github&color=181717)](https://github.com/p0t4t0sandwich/ampapi-js/releases)
[![NPM v](https://img.shields.io/npm/v/@neuralnexus/ampapi?label=NPM&logo=npm&color=CB3837)](https://www.npmjs.com/package/@neuralnexus/ampapi)
[![NPM](https://img.shields.io/npm/dt/@neuralnexus/ampapi?label=NPM&logo=npm&color=CB3837)](https://www.npmjs.com/package/@neuralnexus/ampapi)

An API that allows you to communicate with AMP installations from within JavaScript/TypeScript.

Documentation for available API calls can be found by appending /API to the URL of any existing AMP installation.

Support:

- Ping `@thepotatoking3452` in the `#development` channel of the [AMP Discord](https://discord.gg/cubecoders)
- My own [development Discord](https://discord.neuralnexus.dev/)

## Installation

### NPM

```bash
npm install @neuralnexus/ampapi
```

### Yarn

```bash
yarn add @neuralnexus/ampapi
```

### Bun

```bash
bun install @neuralnexus/ampapi
```

### In The Browser via CDN (WIP)

<!-- ```html
<script src="https://cdn.neuralnexus.dev/ampapi-js/ampapi.js"></script>

<!-- Or for a minified version -->

<!-- <script src="https://cdn.neuralnexus.dev/ampapi-js/ampapi.min.js"></script>
``` -->

## Notes

- If you find that some return types aren't matching up, please make an issue or a pull request.

## Examples

### CommonAPI Example

```javascript
import { CommonAPI } from "@neuralnexus/ampapi";


// If you know the module that the instance is using, specify it instead of CommonAPI
const API = new CommonAPI("http://localhost:8080/", "admin", "myfancypassword123");
await API.APILogin();

// API call parameters are simply in the same order as shown in the documentation.
API.Core.SendConsoleMessage("say Hello Everyone, this message was sent from the TypeScript API!");

const currentStatus = await API.Core.GetStatus();
const CPUUsagePercent = currentStatus.Metrics["CPU Usage"].Percent;

console.log(`Current CPU usage is: " + ${CPUUsagePercent} "%`);
```

### Example using the ADS to manage an instance

```javascript
import { ADS } from "@neuralnexus/ampapi";


const API = new ADS("http://localhost:8080/", "admin", "myfancypassword123");
await API.APILogin();

// Get the available instances
const targets = await API.ADSModule.GetInstances();

// In this example, my Hub server is on the second target
// If you're running a standalone setup, you can just use targets[0]
const target = targets[1]

let hub_instance_id = "";

// Get the available instances
const instances = target.AvailableInstances;

for (const instance of instances) {
    // Find the instance named "Hub"
    if (instance.InstanceName == "Hub") {
        hub_instance_id = instance.InstanceID;
        break;
    }
}

// Use the instance ID to get the API for the instance
const Hub = await API.InstanceLogin(hub_instance_id, "Minecraft");

// Get the current CPU usage
const currentStatus = await Hub.Core.GetStatus();
const CPUUsagePercent = currentStatus.Metrics["CPU Usage"].Percent;

// Send a message to the console
await Hub.Core.SendConsoleMessage(`say Current CPU usage is: ${CPUUsagePercent}%`)
```

### CommonAPI Example, handling the sessionId and rememberMeToken manually (not recommended)

```javascript
import { CommonAPI } from "@neuralnexus/ampapi";


try {
    const API = new CommonAPI("http://localhost:8080/");

    // The third parameter is either used for 2FA logins, or if no password is specified to use a remembered token from a previous login, or a service login token.
    const loginResult = await API.Core.Login("admin", "myfancypassword123", "", false);

    if (loginResult.hasOwnProperty("success") && loginResult.success === true) {
        console.log("Login successful");
        API.sessionId = loginResult["sessionID"];

        // API call parameters are simply in the same order as shown in the documentation.
        await API.Core.SendConsoleMessage("say Hello Everyone, this message was sent from the Python API!");
        const currentStatus = await API.Core.GetStatus();
        const CPUUsagePercent = currentStatus.Metrics["CPU Usage"].Percent;
        console.log(`Current CPU usage is: ${CPUUsagePercent}%`);
    } else {
        console.log("Login failed");
        console.log(loginResult);
    }
} catch(err) {
    // In reality, you'd handle this exception better
    throw new Error(err)
}
```

### TypeScript - CommonAPI Example

```typescript
import { CommonAPI, Status } from "@neuralnexus/ampapi";


// If you know the module that the instance is using, specify it instead of CommonAPI
const API: CommonAPI = new CommonAPI("http://localhost:8080/", "admin", "myfancypassword123");
await API.APILogin();

// API call parameters are simply in the same order as shown in the documentation.
API.Core.SendConsoleMessage("say Hello Everyone, this message was sent from the TypeScript API!");

const currentStatus: Status = await API.Core.GetStatus();
const CPUUsagePercent: number = currentStatus.Metrics["CPU Usage"].Percent;

console.log(`Current CPU usage is: " + ${CPUUsagePercent} "%`);
```

### TypeScript - Example using the ADS to manage an instance

```typescript
import { ADS, IADSInstance, Instance, Minecraft, Result, Status, UUID } from "@neuralnexus/ampapi";


const API: ADS = new ADS("http://localhost:8080/", "admin", "myfancypassword123");
await API.APILogin();

// Get the available instances
const instancesResult: Result<IADSInstance[]> = await API.ADSModule.GetInstances();

const targets: IADSInstance[] = instancesResult.result;

// In this example, my Hub server is on the second target
// If you're running a standalone setup, you can just use targets[0]
const target: IADSInstance = targets[1]

let hub_instance_id: UUID;

// Get the available instances
const instances: Instance[] = target.AvailableInstances;

for (const instance of instances) {
    // Find the instance named "Hub"
    if (instance.InstanceName == "Hub") {
        hub_instance_id = instance.InstanceID;
        break;
    }
}

// Use the instance ID to get the API for the instance
const Hub: Minecraft = await API.InstanceLogin(hub_instance_id, "Minecraft");

// Get the current CPU usage
const currentStatus: Status = await Hub.Core.GetStatus();
const CPUUsagePercent: number = currentStatus.Metrics["CPU Usage"].Percent;

// Send a message to the console
await Hub.Core.SendConsoleMessage(`say Current CPU usage is: ${CPUUsagePercent}%`)
```

### TypeScript - CommonAPI Example, handling the sessionId and rememberMeToken manually (not recommended)

```typescript
import { CommonAPI, LoginResult, Status } from "@neuralnexus/ampapi";


try {
    const API: CommonAPI = new CommonAPI("http://localhost:8080/");

    // The third parameter is either used for 2FA logins, or if no password is specified to use a remembered token from a previous login, or a service login token.
    const loginResult: LoginResult = await API.Core.Login("admin", "myfancypassword123", "", false);

    if (loginResult.hasOwnProperty("success") && loginResult.success === true) {
        console.log("Login successful");
        API.sessionId = loginResult["sessionID"];

        // API call parameters are simply in the same order as shown in the documentation.
        await API.Core.SendConsoleMessage("say Hello Everyone, this message was sent from the Python API!");
        const currentStatus: Status = await API.Core.GetStatus();
        const CPUUsagePercent: number = currentStatus.Metrics["CPU Usage"].Percent;
        console.log(`Current CPU usage is: ${CPUUsagePercent}%`);
    } else {
        console.log("Login failed");
        console.log(loginResult);
    }
} catch(err) {
    // In reality, you'd handle this exception better
    throw new Error(err)
}
```
