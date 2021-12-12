import {log} from "./logger";
import {dumper} from "./dumper";


setImmediate(main)

function main() {
    // dumper.start();
    log("hookStart");
    waitHookDlopen()

    function waitHookDlopen() {



        const dlopen_old = Module.findExportByName(null, "dlopen")
        const dlopen_new = Module.findExportByName(null, "android_dlopen_ext")
        if (dlopen_old != null) {
            Interceptor.attach(dlopen_old, {
                onEnter: function (args) {
                    var l_soName = args[0].readCString()
                    log("soName:" + l_soName)
                },
                onLeave: function (retval) {
                    if (this.hook) {
                        // send("onLeave")
                    }
                }
            })
        }

    }
}

