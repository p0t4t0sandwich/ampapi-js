/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { AMPAPI } from "../AMPAPI.js";
import { Core } from "../apimodules/Core.js";
import { EmailSenderPlugin } from "../apimodules/EmailSenderPlugin.js";
import { FileManagerPlugin } from "../apimodules/FileManagerPlugin.js";
import { LocalFileBackupPlugin } from "../apimodules/LocalFileBackupPlugin.js";
import { RCONPlugin } from "../apimodules/RCONPlugin.js";
import { steamcmdplugin } from "../apimodules/steamcmdplugin.js";

/**
 * @class GenericModule
 */
export class GenericModule extends AMPAPI {
    public Core: Core = new Core(this);
    public EmailSenderPlugin: EmailSenderPlugin = new EmailSenderPlugin(this);
    public FileManagerPlugin: FileManagerPlugin = new FileManagerPlugin(this);
    public LocalFileBackupPlugin: LocalFileBackupPlugin = new LocalFileBackupPlugin(this);
    public RCONPlugin: RCONPlugin = new RCONPlugin(this);
    public steamcmdplugin: steamcmdplugin = new steamcmdplugin(this);

    /**
     * @constructor
     * @description Constructor for the GenericModule class
     * @param {string} baseUri Base URI for the AMP API
     * @param {string} username AMP API username
     * @param {string} password AMP API password
     * @param {string} rememberMeToken Remember me token for the AMP API
     * @param {string} sessionId Session ID for the AMP API
     */
    constructor(baseUri: string, username: string, password: string, rememberMeToken: string = "", sessionId: string = "") {
        super(baseUri, username, password, rememberMeToken, sessionId);
    }

    /**
     * Simplified login function
     * @return The result of the login
     */
    override async APILogin(): Promise<any> {
        const loginResult: any = await super.APILogin();
        let rememberMeToken: string = "";
        let sessionId: string = "";

        if (loginResult != null && loginResult.hasOwnProperty("success") && loginResult.success === true) {
            rememberMeToken = loginResult.rememberMeToken;
            sessionId = loginResult.sessionID;
        }

        // Update the session ID and remember me token of submodules
        this.Core.sessionId = sessionId;
        this.Core.rememberMeToken = rememberMeToken;
        this.EmailSenderPlugin.sessionId = sessionId;
        this.EmailSenderPlugin.rememberMeToken = rememberMeToken;
        this.FileManagerPlugin.sessionId = sessionId;
        this.FileManagerPlugin.rememberMeToken = rememberMeToken;
        this.LocalFileBackupPlugin.sessionId = sessionId;
        this.LocalFileBackupPlugin.rememberMeToken = rememberMeToken;
        this.RCONPlugin.sessionId = sessionId;
        this.RCONPlugin.rememberMeToken = rememberMeToken;
        this.steamcmdplugin.sessionId = sessionId;
        this.steamcmdplugin.rememberMeToken = rememberMeToken;

        return loginResult;
    }
}