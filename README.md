# dsp-directory
Verra Data Service Provider (DSP) directory and information repository.

## Provider directory and detail pages

The directory and provider records are currently maintained in `index.html`. Each
record's stable `id` is used to create a shareable detail page at
`index.html?dsp=<id>` (for example, `index.html?dsp=belian`). GitHub Pages serves
the same `index.html` for these query URLs, so detail pages can be opened
directly, refreshed, and navigated with the browser history.

The detail page is rendered from the selected record rather than provider-specific
markup. This keeps the current static data easy to replace with a data source
later, while still allowing additional optional fields to be added to individual
records as provider needs evolve.

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
