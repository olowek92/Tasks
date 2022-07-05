// Display in console information about the operating system and user
// ┌───────────────────────────┬──────────────────┐
// │          (index)          │      Values      │
// ├───────────────────────────┼──────────────────┤
// │     Operating System      │   'Windows_NT'   │
// │ Operation System Version: │   '10.0.22000'   │
// │     CPU Architecture      │      'ia32'      │
// │         CPU Cores         │        16        │
// │      System Username      │ 'damian.iwanski' │
// │        Free Memory        │    '17.28 GB'    │
// │       Total Memory        │    '31.73 GB'    │
// └───────────────────────────┴──────────────────┘

const {
  totalmem,
  freemem,
  userInfo,
  cpus,
  version,
  platform,
  arch,
} = require("os");

const OperatingSystem = platform();
const OperationSystemVersion = version().slice(22, 28);
const CPUArchitecture = arch();
const CPUCores = cpus().length;
const systemUsername = userInfo().username;
const freeMemory = freemem();
const totalMemory = totalmem();

console.log("------------------------------------------------------------");
console.log("|      (index)              |            Values            |");
console.log("------------------------------------------------------------");
console.log(
  `|     Operating System      |         ${OperatingSystem}               |`
);
console.log(
  `| Operation System Version: |         ${OperationSystemVersion}               |`
);
console.log(
  `|      CPU Architecture     |         ${CPUArchitecture}                  |`
);
console.log(
  `|         CPU Cores         |         ${CPUCores}                    |`
);
console.log(`|      System Username      |         ${systemUsername}      |`);
console.log(
  `|        Free Memory        |         ${freeMemory}             |`
);
console.log(`|        Total Memory       |         ${totalMemory}           |`);
console.log("------------------------------------------------------------");
