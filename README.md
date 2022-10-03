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
npm run build
```

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

## Notes

```text
<div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>
OR
<a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>
```
