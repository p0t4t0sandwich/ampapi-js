#!/bin/python3
from __future__ import annotations

import sys

import requests
import json


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
    "UpdateInfo": "any",
    "IEnumerable<ListeningPortSummary>": "any[]",

    # Custom types
    "GetStatusResult": "GetStatusResult",
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
        generate_apimodule(module, spec[module])

if __name__ == "__main__":
    spec = ""
    if len(sys.argv) >= 2 and sys.argv[1] == "-l":
        print("Using local spec...")
        # Load local file

        with open("LocalSpec.json", "r") as f:
            spec = json.load(f)
            f.close()
    else:
        print("Using remote spec...")

        # Load remote file
        res = requests.get("https://raw.githubusercontent.com/p0t4t0sandwich/ampapi-spec/main/APISpec.json")
        spec = json.loads(res.content)

    generate_spec(spec)
