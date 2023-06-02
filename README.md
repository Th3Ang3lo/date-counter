# How to run the application.
### Make sure you have Docker or NodeJS 18 installed on your computer.

### Running with NodeJS
1 - Installing dependencies
```zsh
npm install
```

2 - Building the application
```zsh
npm run build
```

3 - Ruinning the application
```zsh
npm run start
```

4 - Running the unit tests
```zsh
npm run test
```

4 - Running as developer (hot reload)
```zsh
npm run dev
```

### Running with docker
1 - Build the docker image:
```zsh
docker build -t date .
```

2 - Run the containerized application:
```zsh
docker run date:latest
```