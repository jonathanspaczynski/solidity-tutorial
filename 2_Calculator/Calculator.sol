// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

contract Calculator {
    uint256 PRECISION = 10;

    function addition(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }

    function subtraction(int256 a, int256 b) public pure returns (int256) {
        return a - b;
    }

    function multiplication(uint256 a, uint256 b)
        public
        pure
        returns (uint256)
    {
        return a * b;
    }

    function division(uint256 a, uint256 b) public view returns (uint256) {
        require(b > 0, "Can't divide by 0!");
        return (a * PRECISION) / b;
    }
}
