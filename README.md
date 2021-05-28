# list-files-top-down

## O Projeto
Esse projeto consome dados de um servidor ftp e lista o nome dos arquivos e sua data de atualização

## clone o projeto 
```
git clone https://github.com/robsonmvieira/list-files-top-down
```

## Instale as dependências

Depois de entrar na pasta destino aonde foi clonado o projeto, rode o comando: 
```
yarn
```

## Crie um .env
Algumas informações são necessária para o consumo dos dados. Crie um arquivo chamado .env na raiz do projeto e coloque as informações de acesso ao servidor FTP

Há um .env.example para guiar as informações necessária
```js
.env
```

## Levantando o servidor
```
yarn dev
```

## Testando

Use um cliente Http como Insominia ou o Postman e acesse a rota http://localhost:8000/files

```js
    
  [
    {
      "name": "thebestcleanservices",
      "updatedAt": "2021-05-24T11:18:04.000Z"
    },
    {
      "name": "wp-settings.php",
      "updatedAt": "2021-03-10T03:42:19.000Z"
    },
    {
      "name": "readme.html",
      "updatedAt": "2021-05-13T03:00:58.000Z"
    },
    {
      "name": "wp-cron.php",
      "updatedAt": "2021-01-30T02:51:51.000Z"
    },
    {
      "name": "manual",
      "updatedAt": "2021-02-05T15:19:37.000Z"
    },
    {
      "name": "wp-comments-post.php",
      "updatedAt": "2021-01-30T02:51:56.000Z"
    }
  ]
```

