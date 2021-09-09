import { DiscussionEmbed } from 'disqus-react';

function Opinion() {
    return (
      <section className="comments" id="opiniones">
          <DiscussionEmbed 
            shortname="comentarios-react"
            config={
              {
                  url: "http://localhost:3000/",
                  identifier: 0,
                  title: "Comentarios con REACT",
                  language: 'es_MX' 
              }
          }
          />
      </section>
    );
  }
  
  export default Opinion;