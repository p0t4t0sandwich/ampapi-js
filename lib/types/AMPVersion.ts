/**
 * @interface AMPVersion
 * @author p0t4t0sandwich
 * @description AMP version information
 * @property {number} Major - The major version number
 * @property {number} Minor - The minor version number
 * @property {number} Build - The build number
 * @property {number} Revision - The revision number
 * @property {number} MajorRevision - The major revision number
 * @property {number} MinorRevision - The minor revision number
 */
interface AMPVersion {
    Major: number;
    Minor: number;
    Build: number;
    Revision: number;
    MajorRevision: number;
    MinorRevision: number;
}

export { AMPVersion };
