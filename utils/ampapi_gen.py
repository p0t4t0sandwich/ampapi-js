#!/bin/python3
from __future__ import annotations

import requests
import json

import sys

type_dict = {
    # Generic types
    "ActionResult": "ActionResult<any>",
    "ActionResult<Guid>": "ActionResult<UUID>",
    "ActionResult<LicenceInfo>": "ActionResult<LicenceInfo>",
    "ActionResult<String>": "ActionResult<string>",
    "ActionResult<TwoFactorSetupInfo>": "ActionResult<any>",
    "RunningTask": "RunningTask",
    "IEnumerable<RunningTask>": "RunningTask[]",

    # Primitive types
    "Boolean": "boolean",
    "Guid": "UUID",
    "Int32": "number",
    "Int32[]": "number[]",
    "Int64": "number",
    "JObject": "{ [key: string]: any }",
    "Object": "any",
    "String": "string",
    "String[]": "string[]",
    "Uri": "URL",
    "Void": "void",

    # Nested types
    "Dictionary<String, Dictionary<String, MethodInfoSummary>>": "{ [key: string]: { [key: string]: any } }",
    "Dictionary<String, Int32>": "{ [key: string]: number }",
    "Dictionary<String, SettingSpec>": "{ [key: string]: SettingSpec }",
    "Dictionary<String, String>": "{ [key: string]: string }",
    "IDictionary<Guid, String>": "Map<UUID, string>",
    "IDictionary<String, String>": "{ [key: string]: string }",
    "IEnumerable<ApplicationSpec>": "any[]",
    "IEnumerable<AuthRoleSummary>": "any[]",
    "IEnumerable<BackupManifest>": "any[]",
    "IEnumerable<DeploymentTemplate>": "any[]",
    "IEnumerable<EndpointInfo>": "EndpointInfo[]",
    "IEnumerable<IADSInstance>": "IADSInstance[]",
    "IEnumerable<IAuditLogEntry>": "any[]",
    "IEnumerable<InstanceDatastore>": "InstanceDatastore[]",
    "IEnumerable<JObject>": "{ [key: string]: any }[]",
    "IEnumerable<ListeningPortSummary>": "any[]",
    "IEnumerable<PortUsage>": "any[]",
    "IEnumerable<ProvisionSettingInfo>": "any[]",
    "IEnumerable<String>": "string[]",
    "IEnumerable<UserInfo>": "UserInfo[]",
    "IEnumerable<UserInfoSummary>": "any[]",
    "IEnumerable<WebauthnCredentialSummary>": "any[]",
    "IEnumerable<WebSessionSummary>": "any[]",
    "IList<IPermissionsTreeNode>": "any[]",
    "List<JObject>": "{ [key: string]: any }[]",
    "List<String>": "string[]",
    "Nullable<Boolean>": "boolean", # Optional?
    "Nullable<DateTime>": "any", # Optional?

    # Object types
    "AuthRoleSummary": "any",
    "ContainerMemoryPolicy": "any",
    "DeploymentTemplate": "any",
    "FileChunkData": "any",
    "IADSInstance": "IADSInstance",
    "Instance": "Instance",
    "InstanceDatastore": "InstanceDatastore",
    "LocalAMPInstance": "any",
    "LoginResult": "LoginResult",
    "ModuleInfo": "ModuleInfo",
    "PortProtocol": "any",
    "PostCreateActions": "any",
    "RemoteTargetInfo": "RemoteTargetInfo",
    "ScheduleInfo": "any",
    "SimpleUser": "any",
    "Single": "any",
    "Status": "Status",
    "TimeIntervalTrigger": "any",
    "UpdateInfo": "UpdateInfo",
    "Updates": "Updates",
    "UserInfo": "UserInfo",
    "WebauthnLoginInfo": "any",
}

custom_types = {
    # API.ADSModule.GetInstance
    # "ADSModule.GetInstance": "Result<Instance>",
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
    branch = "main"
    if len(sys.argv) > 1:
        branch = sys.argv[1]

    # Load remote file
    res = requests.get(f"https://raw.githubusercontent.com/p0t4t0sandwich/ampapi-spec/{branch}/OldAPISpec.json")
    spec = json.loads(res.content)

    # Load custom types
    load_custom_types(spec)

    generate_spec(spec)
