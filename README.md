# Orcheslide Client
Orcheslide is a JavaScript tool for synchronized display of multiple slideshows. The tool was developed for my expo 'The Origin Of Suffering' on February 16th in Bruges, Belgium.

Orcheslide consists of two parts:
- A client (this repo) which gets its slides from a data source (e.g. local or GitHub repo)
-  A server which synchronizes the clients to play slides in sync

## Use case
During the expo, I had to sync two Raspberry Pis running an HTML slide viewer. I decided to construct a lightweight WebSocket-based architecture which could be run on a local network but could also work decentralized, once all slides had been defined, in case of a network failure during the expo.

## Disclaimer
This project was made for personal use and is not production-ready. If interested, I can develop it further to assist your individual needs. All code is free to reuse and no accreditation is needed.
