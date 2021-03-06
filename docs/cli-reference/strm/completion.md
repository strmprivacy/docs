---
title: "completion"
hide_title: true
---
## strm completion

Generate completion script

### Synopsis

To load completions:

Bash:
```
$ source <(strm completion bash)

# To load completions for each session, execute once:
# Linux:
$ strm completion bash > /etc/bash_completion.d/strm
# macOS:
$ strm completion bash > /usr/local/etc/bash_completion.d/strm
```
Zsh:

```
# If shell completion is not already enabled in your environment,
# you will need to enable it.  You can execute the following once:

$ echo "autoload -U compinit; compinit" >> ~/.zshrc

# To load completions for each session, execute once:
$ strm completion zsh > "${fpath[1]}/_strm"

# You will need to start a new shell for this setup to take effect.
```
fish:

```
  $ strm completion fish > ~/.config/fish/completions/strm.fish # or $XDG_CONFIG_HOME instead of ~/.config
```

PowerShell:

```
  PS> strm completion powershell | Out-String | Invoke-Expression

  # To load completions for every new session, run:
  PS> strm completion powershell > strm.ps1
  # and source this file from your PowerShell profile.
```

### Usage


```
strm completion [bash|zsh|fish|powershell]
```

### Options

```
  -h, --help   help for completion
```

### Options inherited from parent commands

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")
      --project string                 Project to use (defaults to context-configured project)
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm](/cli-reference/strm/index.md)	 - STRM Privacy CLI 2.5.0

