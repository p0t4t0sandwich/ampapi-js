#!/bin/python3
from __future__ import annotations

import sys

import requests
import json


type_dict = {
    "InstanceDatastore": "InstanceDatastore",
    "ActionResult": "ActionResult<any>",
    "Int32": "number",
    "IEnumerable<InstanceDatastore>": "Result<InstanceDatastore[]>",
    "RunningTask": "Result<RunningTask>",
    "Task<RunningTask>": "Task<RunningTask>",
    "IEnumerable<JObject>": "Result<{ [key: string]: any }[]>",
    "Guid": "UUID",
    "IEnumerable<DeploymentTemplate>": "Result<any[]>",
    "String": "string",
    "DeploymentTemplate": "any",
    "Boolean": "boolean",
    "List<String>": "string[]",
    "PostCreateActions": "any",
    "Dictionary<String, String>": "{ [key: string]: string }",
    "RemoteTargetInfo": "RemoteTargetInfo",
    "IEnumerable<ApplicationSpec>": "Result<any[]>",
    "Void": "void",
    "IEnumerable<EndpointInfo>": "Result<EndpointInfo[]>",
    "IEnumerable<IADSInstance>": "Result<IADSInstance[]>",
    "JObject": "{ [key: string]: any }",
    "PortProtocol": "any",
    "ActionResult<String>": "ActionResult<string>",
    "IADSInstance": "Result<IADSInstance>",
    "Uri": "string",
    "IEnumerable<PortUsage>": "Result<any[]>",
    "Dictionary<String, Int32>": "{ [key: string]: number }",
    "LocalAMPInstance": "any",
    "ContainerMemoryPolicy": "any",
    "Single": "any",
    "Int64": "number",
    "FileChunkData": "any",
    "IEnumerable<BackupManifest>": "Result<any[]>",
    "Nullable<DateTime>": "any", # Optional?
    "IEnumerable<IAuditLogEntry>": "Result<any[]>",
    "Dictionary<String, IEnumerable<JObject>>": "Result<{ [key: string]: { [key: string]: any }[] }>",
    "IDictionary<String, String>": "{ [key: string]: string }",
    "List<JObject>": "{ [key: string]: any }[]",
    "String[]": "string[]",
    "Nullable<Boolean>": "boolean", # Optional?
    "ScheduleInfo": "any",
    "Int32[]": "number[]",
    "TimeIntervalTrigger": "any",
    "IEnumerable<WebSessionSummary>": "Result<any[]>",
    "IList<IPermissionsTreeNode>": "any[]",
    "WebauthnLoginInfo": "any",
    "IEnumerable<WebauthnCredentialSummary>": "Result<any[]>",
    "IEnumerable<RunningTask>": "Result<RunningTask[]>",
    "ModuleInfo": "Result<ModuleInfo>",
    "Dictionary<String, Dictionary<String, MethodInfoSummary>>": "{ [key: string]: { [key: string]: any } }",
    "Object": "any",
    "UpdateInfo": "Result<UpdateInfo>",
    "IEnumerable<ListeningPortSummary>": "Result<any[]>",
    "Task<JObject>": "Task<{ [key: string]: any }>",
    "Task<ActionResult<TwoFactorSetupInfo>>": "Task<any>",
    "Task<IEnumerable<String>>": "Task<string[]>",
    "Task<UserInfo>": "Task<UserInfo>",
    "Task<IEnumerable<UserInfoSummary>>": "Task<any[]>",
    "Task<IEnumerable<UserInfo>>": "Task<UserInfo[]>",
    "Task<String>": "Task<string>",
    "Task<AuthRoleSummary>": "Task<Object>",
    "Task<IEnumerable<AuthRoleSummary>>": "Task<any[]>",
    "Task<IDictionary<Guid, String>>": "Task<Map<UUID, any>>",
    "Task<ActionResult>": "Task<ActionResult<any>>",
    "Task<ActionResult<Guid>>": "Task<ActionResult<UUID>>",
    "Task<ActionResult<LicenceInfo>>": "Task<ActionResult<LicenceInfo>>",

    ## Custom types
    "Result<Instance>": "Result<Instance>",
    "Result<RemoteTargetInfo>": "Result<RemoteTargetInfo>",
    "SettingsSpec": "SettingsSpec",
    "Status": "Status",
    "Updates": "Updates",
    "Result<{ [key: string]: string }>": "Result<{ [key: string]: string }>",
    "LoginResult": "LoginResult"
}

custom_types = {
    # API.ADSModule.GetInstance
    "ADSModule.GetInstance": "Result<Instance>",
    # API.ADSModule.GetTargetInfo
    "ADSModule.GetTargetInfo": "Result<RemoteTargetInfo>",

    # API.Core.GetSettingsSpec
    "Core.GetSettingsSpec": "SettingsSpec",
    # API.Core.GetStatus
    "Core.GetStatus": "Status",
    # API.Core.GetUpdates
    "Core.GetUpdates": "Updates",
    # API.Core.GetUserList
    "Core.GetUserList": "Result<{ [key: string]: string }>",
    # API.Core.Login
    "Core.Login": "LoginResult",
}

def generate_apimodule_method(module: str, method: str, method_spec: dict):
    # Read the template file
    api_module_method_template = ""
    with open("templates/api_module_method.txt", "r") as tf:
        api_module_method_template = tf.read()
        tf.close()

    # Get the method description
    description = ""
    if "Description" in method_spec.keys():
        description = "\n     * " + method_spec["Description"]

    # Get the method parameters
    parameters_docs = ""
    methodParams = method_spec["Parameters"]
    if len(methodParams) > 0:
        parameters_docs += "\n"
    for i in range(len(methodParams)):
        api_module_method_parameter_doc_template = ""
        with open("templates/api_module_method_parameter_doc.txt", "r") as tf:
            api_module_method_parameter_doc_template = tf.read()
            tf.close()

        name = methodParams[i]["Name"]
        type_name = methodParams[i]["TypeName"]

        # Print out the type if it hasn't been added to the type_dict
        if not type_name in type_dict.keys(): print(type_name)

        description = methodParams[i]["Description"]
        optional = methodParams[i]["Optional"]
        if optional == "true": type_name += ", " + optional

        template = api_module_method_parameter_doc_template\
            .replace("%METHOD_PARAMETER_NAME%", name)\
            .replace("%METHOD_PARAMETER_TYPE%", type_dict[type_name])\
            .replace("%METHOD_PARAMETER_DESCRIPTION%", description)\
            .replace("%METHOD_PARAMETER_OPTIONAL%", str(optional))

        parameters_docs += template
    parameters_docs = parameters_docs[:-1]

    # Get the method return type
    return_type = method_spec["ReturnTypeName"]

    # Print out the type if it hasn't been added to the type_dict
    if not return_type in type_dict.keys(): print(return_type)
    return_type = type_dict[return_type]

    # Get the method parameters
    parameters = ""
    for i in range(len(methodParams)):
        name = methodParams[i]["Name"]
        type_name = methodParams[i]["TypeName"]

        # Print out the type if it hasn't been added to the type_dict
        if not type_name in type_dict.keys(): print(type_name)
        parameters += f"{name}: {type_dict[type_name]}, "

    parameters = parameters[:-2]

    # Get the parameters for the data map
    map_string = ""
    if len(methodParams) > 0:
        map_string += "\n"
    for i in range(len(methodParams)):
        api_module_method_parameter_map_template = ""
        with open("templates/api_module_method_parameter_map.txt", "r") as tf:
            api_module_method_parameter_map_template = tf.read()
            tf.close()

        name = methodParams[i]["Name"]
        map_string += api_module_method_parameter_map_template.replace("%METHOD_PARAMETER_NAME%", name)
    map_string = map_string[:-2]

    # Replace placeholders
    template = api_module_method_template\
        .replace("%METHOD_DESCRIPTION%", description)\
        .replace("%METHOD_PARAMETER_DOC%", parameters_docs)\
        .replace("%MODULE_NAME%", module)\
        .replace("%METHOD_NAME%", method)\
        .replace("%METHOD_PARAMETERS%", parameters)\
        .replace("%METHOD_RETURN_TYPE%", return_type)\
        .replace("%METHOD_PARAMETER_MAP%", map_string)

    # End result will return a string
    return template

def generate_apimodule(module: str, methods: dict):
    # Read the template file
    api_module_template = ""
    with open("templates/api_module.txt", "r") as tf:
        api_module_template = tf.read()
        tf.close()

    # Create a new file called f{module}.java
    f = open(f"../lib/apimodules/{module}.ts","w+")
    f.write(api_module_template.replace("%MODULE_NAME%", module))

    for method in methods.keys():
        f.write(generate_apimodule_method(module, method, methods[method]))

    f.write("}\n")
    f.close()

def generate_spec(spec: dict):
    for module in spec.keys():
        if module == "CommonCorePlugin": continue
        generate_apimodule(module, spec[module])

def load_custom_types(spec: dict):
    for type_index in custom_types.keys():
        type_module = type_index.split(".")[0]
        type_method = type_index.split(".")[1]

        # Update the return type
        spec[type_module][type_method]["ReturnTypeName"] = custom_types[type_index]

if __name__ == "__main__":
    # Load remote file
    res = requests.get("https://raw.githubusercontent.com/p0t4t0sandwich/ampapi-spec/main/APISpec.json")
    spec = json.loads(res.content)

    # Load custom types
    load_custom_types(spec)

    generate_spec(spec)