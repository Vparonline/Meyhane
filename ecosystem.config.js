module.exports = {
  apps: [
    {
      name: "central",
      script: 'elchavopy.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./src/Internal"
    },
    {
      name: "gr1",
      script: 'elchavopy.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./src/guardii1"
    },
    {
      name: "gr2",
      script: 'elchavopy.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./src/guardii2"
    },
    {
      name: "gr3",
      script: 'elchavopy.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./src/guardii3"
    },
    {
      name: "registry",
      script: 'winnie.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./src/kayıtullah"
    },
    {
      name: "moderator",
      script: 'winnie.js',
      watch: false,
      exec_mode: "cluster",
      max_memory_restart: "2G",
      cwd: "./src/Modullah"
    }
  ]
};
