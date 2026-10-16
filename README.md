# dsp-directory
Verra Data Service Provider (DSP) directory and information repository.

## Provider directory and detail pages

The directory interface is maintained in `index.html`, and provider records are
stored in `dsp-data.json`. Keep both files together when serving the directory.
Each record's stable `id` is used to create a shareable detail page at
`index.html?dsp=<id>` (for example, `index.html?dsp=belian`). GitHub Pages serves
the same `index.html` for these query URLs, so detail pages can be opened
directly, refreshed, and navigated with the browser history.

The detail page is rendered from the selected record rather than provider-specific
markup. CSV fields marked for removal are omitted from the data file, and retained
fields use the renamed headings. To add or update a provider, edit its record in
`dsp-data.json`.

For local development, serve the directory over HTTP rather than opening
`index.html` as a `file://` URL, so the browser can fetch the JSON file.

## Project Hub API integration status

The directory groups providers by the `apiStatus` value in each provider record:
`Completed` means the provider's Project Hub API integration is complete; other
statuses, including `In progress`, are grouped as not yet having a completed
Project Hub integration. This status does not indicate whether the provider has
its own API. For providers without a completed Project Hub integration, users
should contact the provider to confirm delivery options and coordinate with
their project team about providing the data to Project Hub.

The Project Hub page supplies the shared portal shell. `index.html` has a
full-width in-frame toolbar for switching between the DSP directory and API
documentation; its API Documentation link uses the embedding Project Hub
origin when available.
