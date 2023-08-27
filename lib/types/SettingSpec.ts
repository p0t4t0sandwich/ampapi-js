/**
 * @interface SettingSpec
 * @author p0t4t0sandwich
 * @description A setting specification object
 * @link lib/apimodules/Core#GetSettingsSpec()
 * @property {boolean} ReadOnly - Whether the setting is read-only
 * @property {string} Name - The name
 * @property {string} Description - The description
 * @property {string} Category - The category
 * @property {any} CurrentValue - The current value
 * @property {string} ValType - The value type
 * @property {any} EnumValues - The enum values
 * @property {boolean} EnumValuesAreDeferred - Whether the enum values are deferred
 * @property {string} Node - The node
 * @property {string} InputType - The input type
 * @property {any} SelectionSource - The selection source
 * @property {boolean} IsProvisionSpec - Whether the setting is a provision spec
 * @property {boolean} ReadOnlyProvision - Whether the provision is read-only
 * @property {any[]} Actions - The actions
 * @property {any} Keywords - The keywords
 * @property {boolean} AlwaysAllowRead - Whether the setting is always allowed to be read
 * @property {string} Tag - The tag
 * @property {number} MaxLength - The max length
 * @property {string} Placeholder - The placeholder
 * @property {string} Suffix - The suffix
 * @property {string} Meta - The meta
 * @property {boolean} RequiresRestart - Whether the setting requires a restart
 */
interface SettingSpec {
    ReadOnly: boolean;
    Name: string;
    Description: string;
    Category: string;
    CurrentValue: any;
    ValType: string;
    EnumValues: any;
    EnumValuesAreDeferred: boolean;
    Node: string;
    InputType: string;
    SelectionSource: any;
    IsProvisionSpec: boolean;
    ReadOnlyProvision: boolean;
    Actions: any[];
    Keywords: any;
    AlwaysAllowRead: boolean;
    Tag: string;
    MaxLength: number;
    Placeholder: string;
    Suffix: string;
    Meta: string;
    RequiresRestart: boolean;
}

export { SettingSpec };
