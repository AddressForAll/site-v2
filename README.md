# AddressForAll website version 2

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
See more details at documentation, `/_docs`.

## How to install

First clone **this** repo and install the node modules

```bash
git clone https://github.com/AddressForAll/site-v2.git
cd site-v2/
```

Install using Linux makefile, that show your options first:

```bash
make
```

* `make dev`:   run the `npm dev`, to a temporary deply at localhost.
* `make build`: makes *build-only* and *rm_rehydration*.
* `make serve`: run the `npm serve` after *build*, to also deploy localhost.
* `make build-only`:     run the `npm build` and save `/out` folder.
* `make rm_rehydration`: remove the rehydration data from `/out` after the build.

---

## Install wihout make
Install direct:

```bash
npm install
```

~~Notice the use of `--force`, this is for resolve the `ERESOLVE could not resolve` npm Error. Get the documentation [here](<https://howtojs.io/how-to-resolve-eresolve-unable-to-resolve-dependency-tree-error/>)~~ Fixed!`"react-dom": "18.0.0"`

Then you can either:

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

or

### Generate the static version

```bash
npm run build-only
```
https://github.com/AddressForAll/site-v2/issues/54#issuecomment-1698030542

### Verify yourself

To prove that this works, run:

```bash
npm run serve
```

and open your browser at <http://localhost:8080>

You can now deploy the `out/` folder to any static webserver.

To remove the **rehydration** data `regex: <script id="__NEXT_DATA__((.|n)*)script>` from all pages of the static website run the following command after the build has finished:

```bash
find out -name '*.html' | xargs perl -0777 -pi -e 's/<script id="__NEXT_DATA__.*?script>//sg;'
```

## LICENSE

For **this source-code**, see [**LICENSE**](LICENSE) file (Apache v2).  For libraries and [`/public`](public) assets **dependencies**:
*  [ReactJS LICENSE](https://github.com/facebook/react/commits/main/LICENSE) (MIT).
*  [NextJS LICENSE](https://github.com/vercel/next.js/blob/canary/license.md) (MIT).
*  Fonts: [oNline Web Fonts](http://www.onlinewebfonts.com) are licensed by [CC BY v3](https://creativecommons.org/licenses/by/3.0/).
