#!/bin/python3
from __future__ import annotations

import requests
import json

import os

class AMPAPI():
    def __init__(self, baseUri: str) -> None:
        self.baseUri = baseUri
        self.sessionId = ""
        self.dataSource = ""

        if not self.baseUri[-1] == "/":
            self.dataSource = self.baseUri + "/API"
        else:
            self.dataSource = self.baseUri + "API"

    def APICall(self, endpoint: str, data: dict = {}) -> dict:
        headers = {'Accept': 'text/javascript',}
        session = {"SESSIONID": self.sessionId}
        data_added = dict(session, **data)

        data_json = json.dumps(data_added)

        res = requests.post(
            url=f"{self.dataSource}/{endpoint}",
            headers=headers,
            data=data_json
        )
        res_json = json.loads(res.content)

        return res_json

type_dict = {
    "InstanceDatastore": "any",
    "ActionResult": "any",
    "Int32": "number",
    "IEnumerable<InstanceDatastore>": "any[]",
    "RunningTask": "any",
    "IEnumerable<JObject>": "any[]",
    "Guid": "string",
    "Task<RunningTask>": "any",
    "IEnumerable<DeploymentTemplate>": "any[]",
    "String": "string",
    "DeploymentTemplate": "any",
    "Boolean": "boolean",
    "List<String>": "string[]",
    "PostCreateActions": "any",
    "Dictionary<String, String>": "{ [key: string]: string }",
    "RemoteTargetInfo": "any",
    "IEnumerable<ApplicationSpec>": "any[]",
    "Void": "void",
    "IEnumerable<EndpointInfo>": "any[]",
    "IEnumerable<IADSInstance>": "any[]",
    "JObject": "any",
    "PortProtocol": "string",
    "Task<ActionResult>": "any",
    "ActionResult<String>": "any",
    "IADSInstance": "boolean",
    "Uri": "string",
    "IEnumerable<PortUsage>": "any[]",
    "Dictionary<String, Int32>": "{ [key: string]: number }",
    "LocalAMPInstance": "any",
    "ContainerMemoryPolicy": "any",
    "Single": "any",
    "Task<JObject>": "any",
    "Int64": "number",
    "FileChunkData": "any",
    "IEnumerable<BackupManifest>": "any[]",
    "Nullable<DateTime>": "any",
    "IEnumerable<IAuditLogEntry>": "any[]",
    "Dictionary<String, IEnumerable<JObject>>": "{ [key: string]: any[] }",
    "IDictionary<String, String>": "{ [key: string]: string }",
    "List<JObject>": "any[]",
    "String[]": "string[]",
    "Task<IEnumerable<AuthRoleSummary>>": "any",
    "Task<IDictionary<Guid, String>>": "any",
    "Task<AuthRoleSummary>": "any",
    "Task<ActionResult<Guid>>": "any",
    "Nullable<Boolean>": "boolean | null",
    "Task<IEnumerable<String>>": "any",
    "ScheduleInfo": "any",
    "Int32[]": "number[]",
    "TimeIntervalTrigger": "any",
    "IEnumerable<WebSessionSummary>": "any[]",
    "Task<IEnumerable<UserInfoSummary>>": "any",
    "Task<UserInfo>": "any",
    "Task<IEnumerable<UserInfo>>": "any",
    "IList<IPermissionsTreeNode>": "any[]",
    "WebauthnLoginInfo": "any",
    "IEnumerable<WebauthnCredentialSummary>": "any[]",
    "Task<ActionResult<TwoFactorSetupInfo>>": "any",
    "IEnumerable<RunningTask>": "any",
    "ModuleInfo": "any",
    "Dictionary<String, Dictionary<String, MethodInfoSummary>>": "{ [key: string]: any[] }",
    "Object": "any",
    "Task<String>": "any",
    "UpdateInfo": "any"
}

def generate_typescript(spec):
    f = open("../lib/AMPAPI.ts","w+")

    with open("./ampapi_core.ts", "r") as ac:
        ampapi_core = ac.read()
        f.write(ampapi_core)

    for module in spec.keys():
        methods = spec[module]
        for method in methods.keys():
            methodParams = spec[module][method]["Parameters"]
            data = {methodParams[i]["Name"]:methodParams[i]["Name"] for i in range(len(methodParams))}

            ##################### Add docs
            description = ""
            if "Description" in spec[module][method].keys():
                description = "\n     * " + spec[module][method]["Description"]

            javadoc = f"    /**{description}\n     * Name TypeName Description Optional"

            ########## Parameters
            for i in range(len(methodParams)):
                name = methodParams[i]["Name"]
                type_name = methodParams[i]["TypeName"]

                # Print out the type if it hasn't been added to the type_dict
                if not type_name in type_dict.keys(): print(type_name)
                description = methodParams[i]["Description"]
                optional = methodParams[i]["Optional"]
                if optional == "true": type_name + ", optional"
                javadoc += f"\n     * @param " + "{" + f"{type_dict[type_name]}" + "}" + f" {name} AMPType: {type_name} {description}"

            ##########

            ########## Return type
            return_type = spec[module][method]["ReturnTypeName"]

            # Print out the type if it hasn't been added to the type_dict
            if not return_type in type_dict.keys(): print(return_type)
            javadoc += f"\n     * @return " + "{" + f"{type_dict[return_type]}" + "}" + f" AMPType: {return_type}"

            return_type = type_dict[return_type]
            ##########

            javadoc += "\n     */"
            #####################

            data_string = ""
            if len(data.keys()) == 1:
                data_string += " " + methodParams[i]["Name"] + " , "
            elif len(data.keys()) > 1:
                for i in range(len(methodParams)):
                    data_string += '\n            ' + methodParams[i]["Name"] + ", "
                data_string += '\n          '

            if len(data.keys()) != 0:
                if data_string[-1]==" ": data_string = data_string[:-2]
                data_string = ", {" + data_string + "}"

            params = ""
            if len(data.keys()) != 0:
                for i in range(len(methodParams)):
                    param_type = ": any"
                    if not type_dict[methodParams[i]["TypeName"]] == "":
                        param_type = f": {type_dict[methodParams[i]['TypeName']]}"
                    params += methodParams[i]["Name"] + param_type + ", "
                params = params[:-2]

            template = f"""{javadoc}
    async {module}_{method}({params}): Promise<{return_type}> {"{"}
        return this.apiCall("{module}/{method}"{data_string});
    {"}"}\n\n"""
            f.write(template)

    f.write("}\n\n")

    with open("./ampapi_handler.ts", "r") as ah:
        ampapi_handler = ah.read()
        f.write(ampapi_handler)

    f.write("\nexport { AMPAPI, AMPAPIHandler };\n")
    f.close()


def start() -> None:
    URL = os.getenv("AMP_URL")
    USERNAME = os.getenv("AMP_USERNAME")
    PASSWORD = os.getenv("AMP_PASSWORD")

    API = AMPAPI(URL)

    loginResult = API.APICall("Core/Login", {"username": USERNAME, "password": PASSWORD, "token": "", "rememberMe": False})

    if "success" in loginResult.keys() and loginResult["success"]:
        print("Login successful")
        API.sessionId = loginResult["sessionID"]

        # Grab the APISpec
        spec = API.APICall("Core/GetAPISpec")["result"]

        generate_typescript(spec)

    else:
        print("Login failed")
        print(loginResult)

start()
