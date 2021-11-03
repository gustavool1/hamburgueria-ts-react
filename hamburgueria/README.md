<h1>Endpoints</h1>
<p>Essa api possuí 6 endpoints</p>

<h2>POST/login</h2>

Para efetuar o login você precisa fazer uma requisição com o seguinte corpo

```json
    {
        email:"teste@email.com",
        password:"123456"
    }
```

<h2>POST/register</h2>
Para efetuar o você precisa fazer uma requisição com o seguinte corpo

```json
    {   
        name:"Gustavo",
        email:"teste@email.com"
        password:"1234567",
        confirmPassword:"1234567"
    }
```

<h2>GET/cart</h2>
Através desse endpoint nós conseguimos pegar o carrinho de todos os usuários, porém é necessário passar o bearer, como no exemplo abaixo.

```json{
    headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
}
```

<h2>GET/cart?userId=id</h2>
Através desse endpoint nós podemos pegar o carrinho específico do usuário, também é necessário passar o bearer, como no exemplo abaixo.
```json{

    headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
}

<h2>POST/cart</h2>
Através desse enpoint podemos adicionar um novo item ao carrinho. Passando o seguinte corpo para requisição.
```json{

      "title": "Lanche ",
      "price": 22.30,
      "type": "Lanche",
      "image": "https://i.ibb.co/bKfR0rf/combococa.png",
      "userId":3
    
}```

<h2>DELETE/cart/id</h2>
Através desse endpoint nós podemos deletar um item do carrinho. É necessário passar o bearer, como no exemplo abaixo.

```json{
     headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
}
```