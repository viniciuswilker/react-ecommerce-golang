import logoLight from "../assets/store/icons/icon-bela-loja-claro.png";
import heroOne from "../assets/store/carrossel-hero/1.png";
import heroTwo from "../assets/store/carrossel-hero/2.png";
import heroThree from "../assets/store/carrossel-hero/3.png";
import promoOne from "../assets/store/carrossel-promocoes/4.png";
import promoTwo from "../assets/store/carrossel-promocoes/5.png";
import promoThree from "../assets/store/carrossel-promocoes/6.png";
import miniBest from "../assets/store/mini-images/mais-vendidos-image.png";
import miniFitness from "../assets/store/mini-images/fitness-image.png";
import miniTrends from "../assets/store/mini-images/trends-image.png";
import vestido1 from "../assets/store/produtos/vestido-1.png";
import vestido2 from "../assets/store/produtos/vestido-2.png";
import vestido3 from "../assets/store/produtos/vestido-3.png";
import camisaFeminina1 from "../assets/store/produtos/camisa-feminina-1.png";
import camisaFeminina2 from "../assets/store/produtos/camisa-feminina-2.png";
import camisaFeminina3 from "../assets/store/produtos/camisa-feminina-3.png";
import camisaMasculina1 from "../assets/store/produtos/camisa-masculina-1.png";
import camisaMasculina2 from "../assets/store/produtos/camisa-masculina-2.png";
import camisaMasculina4 from "../assets/store/produtos/camisa-masculina-4.png";
import inferiorFeminina1 from "../assets/store/produtos/inferior-feminina-1.png";
import inferiorFeminina2 from "../assets/store/produtos/inferior-feminina-2.png";
import inferiorFeminina3 from "../assets/store/produtos/inferior-feminina-3.png";
import shortsMasculino1 from "../assets/store/produtos/shorts-masculino-1.png";
import shortsMasculino2 from "../assets/store/produtos/shorts-masculino-2.png";
import shortsFeminino1 from "../assets/store/produtos/shorts-feminino-1.png";
import shortsFeminino2 from "../assets/store/produtos/shorts-feminino-2.png";
import calcaFitnessFeminina1 from "../assets/store/produtos/calca-fitness-feminina-1.png";
import camisaFitnessMasculina1 from "../assets/store/produtos/camisa-fitness-masculina-1.png";
import calcaFitnessFeminina2 from "../assets/store/produtos/calca-fitness-feminina-2.png";
import calcadoFeminino1 from "../assets/store/produtos/calcado-feminino-1.png";
import calcadoFeminino2 from "../assets/store/produtos/calcado-feminino-2.png";
import calcadoFitnessFeminino3 from "../assets/store/produtos/calcado-fitness-feminino-3.png";
import calcadoFitnessMasculino3 from "../assets/store/produtos/calcado-fitness-masculino-3.png";
import calcadoMasculino1 from "../assets/store/produtos/calcado-masculino-1.png";
import calcadoMasculino2 from "../assets/store/produtos/calcado-masculino-2.png";
import perfumeFeminino1 from "../assets/store/produtos/perfume-feminino-1.png";
import perfumeFeminino2 from "../assets/store/produtos/perfume-feminino-2.png";
import maquiagem1 from "../assets/store/produtos/maquiagem-1.png";
import maquiagem2 from "../assets/store/produtos/maquiagem-2.png";
import maquiagem3 from "../assets/store/produtos/maquiagem-3.png";
import colarFeminino1 from "../assets/store/produtos/colar-feminino-1.png";
import colarFeminino2 from "../assets/store/produtos/colar-feminino-2.png";
import colarMasculino1 from "../assets/store/produtos/colar-masculino-1.png";
import colarMasculino2 from "../assets/store/produtos/colar-masculino-2.png";
import bolsa1 from "../assets/store/produtos/bolsa-1.png";

export const brandLogo = logoLight;
export const miniBanners = { miniBest, miniFitness, miniTrends };

export const heroSlides = [
  { image: heroOne, title: "Produtos de pronta entrega", cta: "Compre Agora" },
  { image: heroTwo, title: "Achados para renovar o look", cta: "Ver Novidades" },
  { image: heroThree, title: "Beleza e moda em um so lugar", cta: "Explorar" },
];

export const promotionSlides = [
  { image: promoOne, title: "Promocao Dia das Maes", subtitle: "Presentes cheios de carinho para surpreender." },
  { image: promoTwo, title: "Looks com ate 35% OFF", subtitle: "Selecao especial para renovar o guarda-roupa." },
  { image: promoThree, title: "Achadinhos da semana", subtitle: "Pecas leves, modernas e prontas para envio." },
];

export const productImages: Record<string, string> = {
  "vestido-1": vestido1,
  "vestido-2": vestido2,
  "vestido-3": vestido3,
  "camisa-feminina-1": camisaFeminina1,
  "camisa-feminina-2": camisaFeminina2,
  "camisa-feminina-3": camisaFeminina3,
  "camisa-masculina-1": camisaMasculina1,
  "camisa-masculina-2": camisaMasculina2,
  "camisa-masculina-4": camisaMasculina4,
  "inferior-feminina-1": inferiorFeminina1,
  "inferior-feminina-2": inferiorFeminina2,
  "inferior-feminina-3": inferiorFeminina3,
  "shorts-masculino-1": shortsMasculino1,
  "shorts-masculino-2": shortsMasculino2,
  "shorts-feminino-1": shortsFeminino1,
  "shorts-feminino-2": shortsFeminino2,
  "calca-fitness-feminina-1": calcaFitnessFeminina1,
  "camisa-fitness-masculina-1": camisaFitnessMasculina1,
  "calca-fitness-feminina-2": calcaFitnessFeminina2,
  "calcado-feminino-1": calcadoFeminino1,
  "calcado-feminino-2": calcadoFeminino2,
  "calcado-fitness-feminino-3": calcadoFitnessFeminino3,
  "calcado-fitness-masculino-3": calcadoFitnessMasculino3,
  "calcado-masculino-1": calcadoMasculino1,
  "calcado-masculino-2": calcadoMasculino2,
  "perfume-feminino-1": perfumeFeminino1,
  "perfume-feminino-2": perfumeFeminino2,
  "maquiagem-1": maquiagem1,
  "maquiagem-2": maquiagem2,
  "maquiagem-3": maquiagem3,
  "colar-feminino-1": colarFeminino1,
  "colar-feminino-2": colarFeminino2,
  "colar-masculino-1": colarMasculino1,
  "colar-masculino-2": colarMasculino2,
  "bolsa-1": bolsa1,
};

