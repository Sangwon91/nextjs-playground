# Next.js Playground

Play with Next.js ...

## Frontend Initialization
Run on devcontainer ... (in frontend folder)
```bash
npx create-next-app@latest . --disable-git --use-pnpm --empty
```

## In order to use Dev Conatainers ...
See https://docs.docker.com/engine/install/linux-postinstall/ .

```
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```

Validate with ...
```
docker run hello-world
```