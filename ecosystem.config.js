module.exports = {
  apps: [
    {
      name: "Internal",
      script: 'elchavopy.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./src/Internal"
    },
    {
      name: "guard1",
      script: 'elchavopy.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./src/guardii1"
    },
    {
      name: "guard2",
      script: 'elchavopy.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./src/guardii2"
    },
    {
      name: "guard3",
      script: 'elchavopy.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./src/guardii3"
    },
    {
      name: "kayıtyapıobu",
      script: 'winnie.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./src/kayıtullah"
    },
    {
      name: "modullah",
      script: 'winnie.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./src/Modullah"
    }
  ]
};
