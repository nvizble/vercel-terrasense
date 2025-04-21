import "./news.css";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const API_KEY = "888edfb7-7c86-4bb8-97e0-8680a5c627ac";
      const API_URL = "https://eventregistry.org/api/v1/article/getArticles";
      const requestBody = {
        action: "getArticles",
        keyword: "Agronegócio",
        sourceLocationUri: ["http://en.wikipedia.org/wiki/Brazil"],
        ignoreSourceGroupUri: "paywall/paywalled_sources",
        articlesPage: 1,
        articlesCount: 9,
        articlesSortBy: "date",
        articlesSortByAsc: false,
        dataType: ["news", "pr"],
        forceMaxDataTimeWindow: 31,
        resultType: "articles",
        apiKey: API_KEY,
      };

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error("Erro ao carregar as notícias");
        }
        const data = await response.json();
        setNews(data.articles.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <Container
      fluid
      className="noticias"
      id="noticias"
      style={{
        backgroundImage: "url(./src/background-images/background_pattern.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <Container className="conteriner-card-noticioas">
        <Container className="header-cards-container">
          <h2>Notícias em tempo real</h2>
          <h3>
            Temos notícias sobre o Agro no Brasil e no Mundo atualizadas em
            tempo real
          </h3>
          <p>
            Fique por dentro de tudo que acontece no mundo do Agronegócio no
            Brasil e no Mundo com nossas notícias em tempo real e notificações.
          </p>
        </Container>
        <div className="cards-container">
          {news.map((article, index) => (
            <div key={index} className="card-noticia">
              <div className="img-noticia">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <img
                    className="img-fluid"
                    src={article.image || "https://via.placeholder.com/300"}
                    alt={article.title}
                  />
                </a>
              </div>
              <div className="header-card-noticia">
                <div className="titulo-noticia">
                  <h4>{article.title}</h4>
                </div>
              </div>
              <p>
                {article.body
                  ? article.body.length > 200
                    ? article.body.substring(0, 200) + "..."
                    : article.body
                  : "Descrição não disponível."}
              </p>
              <div>
                <a
                  href={article.url}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ler mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export { News };
