<p align="center">
  <a href="https://github.com/themakingcollective/hydra">
    <img src="https://github.com/themakingcollective/hydra/raw/master/header.png" alt="Hydra" />
  </a>
  <br/>
  <a href="https://github.com/themakingcollective/hydra">
    <img src="https://github.com/themakingcollective/hydra/raw/master/hydra.jpg" alt="Hydra" />
  </a>
  <br/>
  An ancient mythical serpent that possesses many heads.
  <br/>
  This is the successor to our
  <a href="https://itunes.apple.com/us/app/flags!-build-guess/id923752952">'Flags! - Build & Guess' iOS app</a>.
</p>
<br/>

---

## Motivation

- We'd like to expand into different subject areas, not just flags. Therefore,
this app will be entirely data-driven from a content management system.

- We'd like to increase our audience to Android and web users. Therefore, this
app will be written using a hexagonal architecture that can be adapted to
different platforms.

- We'd like to make small changes, without needing to release new versions.
Therefore, this app will decouple application code from the data that drives it.

- We'd like to introduce a mature testing approach to promote change. Therefore,
this app will be test-driven from business requirements.

## Domain model

Here is a work-in-progress domain model that captures some of the concepts
within the app.

<p align="center">
  <a href="https://github.com/themakingcollective/hydra">
    <img src="https://github.com/themakingcollective/hydra/raw/master/domain_model.png" alt="Domain model" />
  </a>
</p>

## Tests

The project includes Jasmine tests written in JavaScript and Cucumber tests
written in Ruby.

Jasmine is used to test services and components. These tests use mock adapters
and run independently of Titanium.

Cucumber is used to test the integration with Titanium on both the iOS simulator
and a Genymotion Android simulator.

Tests are run through a JavaScript task runner called Grunt.

## Work in progress

This app is in the early stages of development.

If you have any questions, please open an issue.
