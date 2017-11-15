# xor
:robot: A simple neural network to learn how to solve XOR

## Getting Started

### Usage

The follow example shows the results of 0 XOR 1 using [httpie](https://httpie.org/).

  ```sh
  http POST http://127.0.0.1/xor first=0 second=1
  HTTP/1.1 200 OK
  content-type: application/json; charset=utf-8
  [
      0.9999503201265961
  ]
  ```

### First Install

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
If you never developed in this repo before:

**Clone the repository:**
  ```sh
  $ git clone git@github.com:jeanaugustoos/xor
  ```

**Installing Dependencies**

Before run the project you must install all the dependencies.

  ```sh
  $ yarn install
  ```

### Running project

**development**
  ```sh
  $ yarn start:dev
  ```

**production**
  ```sh
  $ yarn start
  ```

## Authors

* **Jean Augusto Silva**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

