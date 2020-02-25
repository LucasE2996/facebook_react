import React, { Component } from "react";

import Post from "../Post/Post";

import "./styles.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Jake the Dog",
          avatar:
            "https://www.merchandisingplaza.com.br/70891/3/Camisetas-Hora-de-aventuras-Camiseta-Adventure-Time-Jake-l.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Finn the Human",
              avatar:
                "https://i.pinimg.com/236x/9d/aa/31/9daa31b56b07091b8bbdfeea6b1d7b27--adventure-time-photo-quotes.jpg"
            },
            content:
              "Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá. Paisis, filhis, espiritis santis."
          },
          {
            id: 2,
            author: {
              name: "Finn the Human",
              avatar:
                "https://i.pinimg.com/236x/9d/aa/31/9daa31b56b07091b8bbdfeea6b1d7b27--adventure-time-photo-quotes.jpg"
            },
            content:
              "Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá. Paisis, filhis, espiritis santis."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Finn the Human",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Jake the Dog",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá. Paisis, filhis, espiritis santis."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Finn the Human",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Jake the Dog",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá. Paisis, filhis, espiritis santis."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Finn the Human",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Jake the Dog",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se pirulitá. Paisis, filhis, espiritis santis."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="postList">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
