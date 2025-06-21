module.exports = {
  networks: {
    shasta: {
      privateKey: process.env.PRIVATE_KEY,
      consume_user_resource_percent: 30,
      fee_limit: 1e8,
      fullHost: "https://api.shasta.trongrid.io",
      network_id: "*"
    }
  }
};
