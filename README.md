# concertmaster_player

[Concertmaster](https://getconcertmaster.com) is a classical music front-end for Spotify.

It's splitted in several projects. **This one provides only the HTML/JS interface.** It uses some PHP to deal with the server-side part of OAuth. All data comes from an API which, in its turn, uses the Spotify API. Spotify doesn't allow multiple apps using the same API key, so you can't fork only the player and use the Concertmaster API - you have to fork both.

## Usage

It's a web app, so just [open it](https://concertmaster.app) in your browser! (It doesn't work on the iPhone because the Spotify SDK isn't compatible with it.)

The player itself is full of features, so there is a [wiki](https://getconcertmaster.com/help) explaining them all.

## How to build

1. Fork this git repository and clone it to your webserver
2. Fork the [API repository](https://github.com/openopus-org/concertmaster_api) and clone it as well 
3. Create an `inc.php` file from the example:

```bash
cd /var/www/concertmaster_player/lib/
cp inc-example.php inc.php
vim inc.php
```
4. Change variable values in the `lib/inc.php` accordingly to your webserver and Spotify API params (you can create a Spotify dev account [here](https://developer.spotify.com/))
5. Edit the `html/player/js/lib.js` file and change variable values accordingly to your domains and Spotify API key params
6. It's better to change the Google Analytics tag to your own account. Please check the `html/player/index.html` file

## Domains

There are two public directories in the project and they must have their own virtual hosts on your webserver:
- `html/player` it's the main player. For example, we host it at [concertmaster.app](https://concertmaster.app)
- `html/share` it's the share page. For example, we host it at [cmas.me](https://cmas.me)

The main player *must* have SSL enabled (it's a DRM rule). You can use free [Let's Encrypt](https://letsencrypt.org/)-provided certificates, they're perfectly fine.

### Development environment

We have adopted fake `.local` domains (concertmaster.local, cmas.local) for our dev webserver, but you can change the TLD in the `html/player/js/lib.js` file. 

Please note that you still need the main player to serve with HTTPS, so you'll have to [create self-signed phony SSL certificates](https://medium.com/@tbusser/creating-a-browser-trusted-self-signed-ssl-certificate-2709ce43fd15) for your dev environment.

## Contributing with code
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Contributing with data
Concertmaster composers and works information come from [Open Opus](https://openopus.org), a free, wiki-style, open source database of classical music metadata. You can review existing info or add new entries to the database - any help will be appreciated!

## Contributing with money
Concertmaster is free to use but it runs on web servers that cost us money. You can help us by supporting us on [Patreon](https://www.patreon.com/openopus) - any amount is more than welcome!

## License
[GPL v3.0](https://choosealicense.com/licenses/gpl-3.0/)