// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Calc {
    function add(int256 a, int256 b) public pure returns (int256) {
        return a + b;
    }

    function sub(int256 a, int256 b) public pure returns (int256) {
        return a - b;
    }

    function mul(int256 a, int256 b) public pure returns (int256) {
        return a * b;
    }

    function div(int256 a, int256 b) public pure returns (int256) {
        require(b != 0, "Calc: can not devide by 0 ");

        return a / b;
    }
}

//deploy on Rinkeby at :
// 0xea0E22F1AFD7b01365679128eCa4E6032E55D9fC contract address to owner : 0x9AB7466b1a6eA0C7D27b3de65Ed84ee1e28D92730x9AB7466b1a6eA0C7D27b3de65Ed84ee1e28D9273