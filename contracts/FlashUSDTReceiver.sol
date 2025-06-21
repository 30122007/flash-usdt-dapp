// SPDX-License-Identifier: MIT
pragma solidity ^0.5.10;

interface ITRC20 {
    function transferFrom(address sender, address recipient, uint amount) external returns (bool);
    function balanceOf(address owner) external view returns (uint);
    function transfer(address recipient, uint amount) external returns (bool);
}

contract FlashUSDTReceiver {
    address public owner;
    address constant USDT = 0xa614f803B6FD780986A42c78Ec9c7f77e6DeD13C;

    constructor() public {
        owner = msg.sender;
    }

    function flashReceive(uint amount) public {
        require(ITRC20(USDT).transferFrom(msg.sender, address(this), amount), "Transfer failed");
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner");
        uint bal = ITRC20(USDT).balanceOf(address(this));
        ITRC20(USDT).transfer(owner, bal);
    }

    function contractBalance() public view returns (uint) {
        return ITRC20(USDT).balanceOf(address(this));
    }
}
