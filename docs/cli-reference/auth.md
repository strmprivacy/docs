
The global `auth` command is used for authenticating the CLI with STRM
Privacy so it can use the API.

The STRM Privacy API requires a JSON Web Token (JWT), which is created
by the `login` subcommand.

The CLI requires an existing STRM Privacy account, which can be created
through the website.

## login

Log a user in using its Console credentials and save the login token to
disk, to allow the CLI access to the STRM Privacy APIs.

### Usage

`strm auth login [flags]`.

See [Global flags](/cli-index.md#global-flags) for all global flags.

## access-token

Print the current (JWT) access token to the terminal. Note that the
token is printed on `stdout`, and the Expiry and billing-id are on
`stderr` so it’s easy to capture the token for scripting use with

```bash
export token=$(strm auth access-token)
```

### Usage

`strm auth print-access-token [flags]`.

### Arguments

None

### Flags

No specific flags. See [Global flags](/cli-index.md#global-flags).

### Example

```bash
strm auth print-access-token
eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlM.....
```
