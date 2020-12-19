import pnpapi from "pnpapi";
import { PosixFS, ZipOpenFS } from "@yarnpkg/fslib";
import libzip from "@yarnpkg/libzip";

export default function (options) {
	return (url, prev, done) => {
		const zipOpenFs = new ZipOpenFS({ libzip: libzip.getLibzipSync() });
		const crossFs = new PosixFS(zipOpenFs);
		const res = pnpapi.resolveRequest(url, options.dirname + "/");
		const file = crossFs.readFileSync(res);
		done({ contents: file.toString() });
	}
}
