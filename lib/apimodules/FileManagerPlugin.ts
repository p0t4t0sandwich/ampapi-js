/**
 * @author p0t4t0sandich
 * @description A TypeScript library for the AMP API
 */

import { AMPAPI } from "../AMPAPI.js";
import { Result } from "../types/Result.js";
import { ActionResult } from "../types/ActionResult.js";


/**
 * @class FileManagerPlugin
 */
export class FileManagerPlugin extends AMPAPI {
    /**
     * @constructor
     * @description Constructor for the FileManagerPlugin class
     * @param {AMPAPI} ampapi The AMP API handler
     */
    constructor(ampapi: AMPAPI) {
        super(ampapi.baseUri, ampapi.username, ampapi.password, ampapi.rememberMeToken, ampapi.sessionId);
    }

    /**
     * Name Description Optional
     * @param {string} Filename  False
     * @param {string} Data  False
     * @param {boolean} Delete  False
     * @return {Promise<void>}
     */
    async AppendFileChunk(Filename: string, Data: string, Delete: boolean): Promise<void> {
        return this.apiCall("FileManagerPlugin/AppendFileChunk", { 
            Filename,
            Data,
            Delete
        });
    }

    /**
     * Name Description Optional
     * @param {string} FilePath  False
     * @return {Promise<ActionResult<string>>}
     */
    async CalculateFileMD5Sum(FilePath: string): Promise<ActionResult<string>> {
        return this.apiCall("FileManagerPlugin/CalculateFileMD5Sum", { 
            FilePath
        });
    }

    /**
     * Name Description Optional
     * @param {string} ModifyPath  False
     * @param {boolean} AsDirectory  False
     * @param {boolean} Exclude  False
     * @return {Promise<ActionResult<any>>}
     */
    async ChangeExclusion(ModifyPath: string, AsDirectory: boolean, Exclude: boolean): Promise<ActionResult<any>> {
        return this.apiCall("FileManagerPlugin/ChangeExclusion", { 
            ModifyPath,
            AsDirectory,
            Exclude
        });
    }

    /**
     * Name Description Optional
     * @param {string} Origin  False
     * @param {string} TargetDirectory  False
     * @return {Promise<ActionResult<any>>}
     */
    async CopyFile(Origin: string, TargetDirectory: string): Promise<ActionResult<any>> {
        return this.apiCall("FileManagerPlugin/CopyFile", { 
            Origin,
            TargetDirectory
        });
    }

    /**
     * Name Description Optional
     * @param {string} PathToArchive  False
     * @return {Promise<ActionResult<any>>}
     */
    async CreateArchive(PathToArchive: string): Promise<ActionResult<any>> {
        return this.apiCall("FileManagerPlugin/CreateArchive", { 
            PathToArchive
        });
    }

    /**
     * Name Description Optional
     * @param {string} NewPath  False
     * @return {Promise<ActionResult<any>>}
     */
    async CreateDirectory(NewPath: string): Promise<ActionResult<any>> {
        return this.apiCall("FileManagerPlugin/CreateDirectory", { 
            NewPath
        });
    }

    /**
     * Name Description Optional
     * @param {URL} Source  False
     * @param {string} TargetDirectory  False
     * @return {Promise<ActionResult<any>>}
     */
    async DownloadFileFromURL(Source: URL, TargetDirectory: string): Promise<ActionResult<any>> {
        return this.apiCall("FileManagerPlugin/DownloadFileFromURL", { 
            Source,
            TargetDirectory
        });
    }

    /**
     * Name Description Optional
     * @return {Promise<void>}
     */
    async Dummy(): Promise<void> {
        return this.apiCall("FileManagerPlugin/Dummy", { 
        });
    }

    /**
     * Name Description Optional
     * @param {string} TrashDirectoryName  False
     * @return {Promise<ActionResult<any>>}
     */
    async EmptyTrash(TrashDirectoryName: string): Promise<ActionResult<any>> {
        return this.apiCall("FileManagerPlugin/EmptyTrash", { 
            TrashDirectoryName
        });
    }

    /**
     * Name Description Optional
     * @param {string} ArchivePath  False
     * @param {string} DestinationPath  True
     * @return {Promise<ActionResult<any>>}
     */
    async ExtractArchive(ArchivePath: string, DestinationPath: string): Promise<ActionResult<any>> {
        return this.apiCall("FileManagerPlugin/ExtractArchive", { 
            ArchivePath,
            DestinationPath
        });
    }

    /**
     * Name Description Optional
     * @param {string} Dir  False
     * @return {Promise<Result<{ [key: string]: any }[]>>}
     */
    async GetDirectoryListing(Dir: string): Promise<Result<{ [key: string]: any }[]>> {
        return this.apiCall("FileManagerPlugin/GetDirectoryListing", { 
            Dir
        });
    }

    /**
     * Name Description Optional
     * @param {string} Filename  False
     * @param {number} Position  False
     * @param {number} Length  False
     * @return {Promise<any>}
     */
    async GetFileChunk(Filename: string, Position: number, Length: number): Promise<any> {
        return this.apiCall("FileManagerPlugin/GetFileChunk", { 
            Filename,
            Position,
            Length
        });
    }

    /**
     * Name Description Optional
     * @param {string} Filename  False
     * @param {number} Offset  False
     * @param {number} ChunkSize  True
     * @return {Promise<ActionResult<string>>}
     */
    async ReadFileChunk(Filename: string, Offset: number, ChunkSize: number): Promise<ActionResult<string>> {
        return this.apiCall("FileManagerPlugin/ReadFileChunk", { 
            Filename,
            Offset,
            ChunkSize
        });
    }

    /**The name component of the new directory (not the full path)
     * Name Description Optional
     * @param {string} oldDirectory The full path to the old directory False
     * @param {string} NewDirectoryName The name component of the new directory (not the full path) False
     * @return {Promise<ActionResult<any>>}
     */
    async RenameDirectory(oldDirectory: string, NewDirectoryName: string): Promise<ActionResult<any>> {
        return this.apiCall("FileManagerPlugin/RenameDirectory", { 
            oldDirectory,
            NewDirectoryName
        });
    }

    /**
     * Name Description Optional
     * @param {string} Filename  False
     * @param {string} NewFilename  False
     * @return {Promise<ActionResult<any>>}
     */
    async RenameFile(Filename: string, NewFilename: string): Promise<ActionResult<any>> {
        return this.apiCall("FileManagerPlugin/RenameFile", { 
            Filename,
            NewFilename
        });
    }

    /**
     * Name Description Optional
     * @param {string} DirectoryName  False
     * @return {Promise<ActionResult<any>>}
     */
    async TrashDirectory(DirectoryName: string): Promise<ActionResult<any>> {
        return this.apiCall("FileManagerPlugin/TrashDirectory", { 
            DirectoryName
        });
    }

    /**
     * Name Description Optional
     * @param {string} Filename  False
     * @return {Promise<ActionResult<any>>}
     */
    async TrashFile(Filename: string): Promise<ActionResult<any>> {
        return this.apiCall("FileManagerPlugin/TrashFile", { 
            Filename
        });
    }

    /**
     * Name Description Optional
     * @param {string} Filename  False
     * @param {string} Data  False
     * @param {number} Offset  False
     * @param {boolean} FinalChunk  False
     * @return {Promise<ActionResult<any>>}
     */
    async WriteFileChunk(Filename: string, Data: string, Offset: number, FinalChunk: boolean): Promise<ActionResult<any>> {
        return this.apiCall("FileManagerPlugin/WriteFileChunk", { 
            Filename,
            Data,
            Offset,
            FinalChunk
        });
    }

}
