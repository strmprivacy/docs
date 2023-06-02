---
title: "login"
hide_title: true
---
## strm auth login

Login

### Synopsis

Log a user in using its Console credentials and save the login token to disk, to allow the CLI access to the STRM Privacy APIs.

Authentication is handled through the browser with the `strm auth login` command. If you
can't login through browser (e.g. when using the CLI in scripts or on remote machines), a headless auth flow is supported
through the `--remote` and `--non-interactive` flags. Note: this requires both a browser-accessible machine to
run `--remote` to initiate authentication and the non-browser machine to run `strm auth login --non-interactive`.
The help command `strm auth login --help` also provides directions.

### Usage

```
strm auth login [flags]
```

### Options

```
  -h, --help              help for login
  -n, --non-interactive   is the current host a headless system, without access to a browser? If true, use strm auth login --remote
  -r, --remote            should the current host act as a remote login for a headless system? If true, an authorization code flow result will be printed, that can be used for the non-interactive target host.
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -o, --output string         output format [json, json-raw, table, plain] (default "table")
  -p, --project string        project to use (defaults to context-configured project)
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm auth](docs/04-reference/01-cli-reference/strm/auth/index.md)	 - Authentication command

