# The Begin starter app

The `app/` directory contains the default app provisioned with new Begin apps. 🌈

(Everything in root is meta only!)


## Working with the app

To work with the app, cd into `app/` and run `npm i && npx hydrate`.

To reduce app provisioning time for initial onboarding, for the time being all logic within the starter app should be confined to the `src/http/get-index` function.

Begin itself relies on the starter app's `version` field being set to `0.0.0`, so any version updates should take place in the root `package.json` file. **`app/package.json` should always be set to version `0.0.0`.**

Minimize mutatation of the starter app during provisioning by Begin: do not add anything anywhere within `app/**` that isn't absolutely necessary!
