module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  compilers: {
    solc: {
      version: "0.4.17" // A version or constraint - Ex. "^0.5.0"
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "5777" // Match any network id
    }
  }
};
