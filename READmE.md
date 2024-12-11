# monorepo (+nyan)

## Pre-requisites

- nvm
- vsc
- git

## Setup

1. Clone the repository `git clone https://github.com/lmhinnel/monorepo.git`
2. Run `nvm use` to use the correct node version
3. Run `yarn set version berry` for fun (pnp)
4. Run `yarn run dev` to start the development server/ui (+ plugins)

```bash
server: http://localhost:8080/
ui:     http://localhost:5173/
```

## Structure
```bash
.
├── packages
├────── server      (backend)
├────── ui          (frontend)
├── plugins
├────── ui-nyan     (ui plugin)
└── yarn.lock
```

## References

[https://fluorescent-tractor-48c.notion.site/Detail-abt-workspace](https://fluorescent-tractor-48c.notion.site/Detail-abt-workspace-1586c6e188a3803cb9d7ee48c4e1328e)