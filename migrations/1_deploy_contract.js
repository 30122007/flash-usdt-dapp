const FlashUSDTReceiver = artifacts.require("FlashUSDTReceiver");

module.exports = function(deployer) {
  deployer.deploy(FlashUSDTReceiver);
};
