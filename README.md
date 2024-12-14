# MICROFRONTEND

# HOST REACT

move inside host folder and run

```bash
  npm install
  npm run dev (for dev mode)
  npm run build && npm run preview (production mode)
```

# With react remote use this

move inside remote-a / remote-b and run

```bash
  npm install
  npm run build && npm run preview (production mode)
```

microfe exposed in 5001 & 5002 port

# With angular remote use this:

move inside folder angular-remote and run

```bash
  npm install
  npm run build
  npx http-server dist/mfe-remote --cors
```

microfe exposed in 8080 port

## Routing

When the host application and the remote microfrontends are running, the routing configuration is as follows:

```bash
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route
      path="remoteA/*"
      element={<RemoteA title="Microfrontend Accio" theme={theme} />}
    />
    <Route
      path="remoteB/*"
      element={<RemoteB title="Microfrontend B" />}
    />
    <Route path="remoteC/*" element={<Angular />} />
  </Routes>
```

## Microfrontend Details

**RemoteA**

#### Path: /remoteA/\*

Dependencies: **React**.

**RemoteB**

#### Path: /remoteB/\*

Dependencies: **React**.

**RemoteC**

#### Path: /remoteC/\*

Dependencies: **Angular**.
