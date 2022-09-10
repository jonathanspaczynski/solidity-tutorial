// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.17;

contract HelloWorld {
    string public greeter;

    constructor(string memory _message) {
        greeter = _message;
    }

    function setGreeter(string memory _message) public {
        greeter = _message;
    }
}
