import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header, Cards, Footer } from "./components";

function App() {
  return (
    <>
      <Header title="Adopta un perrito" />
      <main>
        <Cards
          name="Bartolo"
          url="https://images.dog.ceo/breeds/husky/n02110185_699.jpg"
          description="Lleno de energía y listo para jugar. Dale el hogar amoroso que se merece!"
          tagName="Husky"
          color="primary"
        />
        <Cards
          name="Messi"
          url="https://images.dog.ceo/breeds/husky/n02110185_698.jpg"
          description="Juegueton, amigable y se lleva bien con niños y otros animales. Haz de Messi parte de tu familia hoy mismo!"
          tagName="Bobtail"
          color="success"
        />
        <Cards
          name="Gohan"
          url="https://images.dog.ceo/breeds/papillon/n02086910_1729.jpg"
          description="Un perro de tamaño mediano con un corazon gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
          tagName="Shar Peo"
          color="danger"
        />
        <Cards
          name="Princesa"
          url="https://images.dog.ceo/breeds/retriever-curly/n02099429_618.jpg"
          description="Es una compañera leal y cariñosa que adora los mimos y los abrazos. Ayuda a Princesa a encontrar su final feliz!"
          tagName="Beagle"
          color="warning"
        />
      </main>
      <Footer description="Explora nuestra galeria de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captuar su esencia única. Adopta un perro y brindale una segunda oportunidad. Encuentra a tu compañero peludo para siempre." />
    </>
  );
}

export default App;
