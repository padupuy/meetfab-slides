// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Link,
  CodePane,
  Appear,
  List,
  ListItem
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./style.css");

const images = {
  logo: require("../assets/logo.svg"),
  photo: require("../assets/now-coworking-crop.jpg"),
  pessac: require("../assets/pessac-mere-patrie.jpg"),
  angular: require("../assets/angular.png"),
  backbone: require("../assets/backbone.png"),
  ember: require("../assets/ember.png"),
  technos: require("../assets/technos.png"),
  vdom: require("../assets/vdom.png"),
  vdomInception: require("../assets/vdom_inception.jpg"),
  webpack: require("../assets/webpack.gif"),
  hnpwa: require("../assets/hnpwa.png"),
  xbox: require("../assets/xbox.png"),
  tests: require("../assets/tests.jpg"),
  cordova: require("../assets/cordova.png"),
  ionic: require("../assets/ionic.png"),
  xamarin: require("../assets/xamarin.svg"),
  weex: require("../assets/weex.svg"),
  nativescript: require("../assets/nativescript.png"),
  eric: require("../assets/eric.gif")
};

preloader(images);

const theme = createTheme(
  {
    primary: "black",
    secondary: "yellow",
    tertiary: "white"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  state = {
    color: "black"
  };

  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Bienvenue <br />chez Adfab
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <img src={images.photo} className="portrait" />
          <Text textColor="secondary">Pierre-Alexandre Dupuy</Text>
          <Appear>
            <Text textColor="secondary">@padupuy</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <img src={images.logo} className="App-logo" alt="logo" />
          <List>
            <Appear>
              <ListItem>React</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Architecture React + tips
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                React Universel
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                React Native
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Démo
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">React</Text>
          <img src={images.logo} alt="logo" width="250" height="250" />
          <Appear>
            <Text textColor="secondary">Jordan Walke - Facebook - 2013</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <img className="techno" src={images.angular} />
          <img className="techno" src={images.backbone} />
          <img className="techno" src={images.ember} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <img width="610" height="458" src={images.technos} />
          <Link>
            https://medium.com/this-dot-labs/building-modern-web-applications-in-2017-791d2ef2e341
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">Virtual DOM</Text>
          <img src={images.vdomInception} />
          <Link>
            http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">Virtual DOM</Text>
          <img src={images.vdom} width="697" height="392" />
          <Link>
            https://www.infoq.com/presentations/react-reconciliation
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/jsx.example")}
          />
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="js"
          code={require("raw-loader!../assets/jsx.example")}
          ranges={[
            { loc: [3, 4], note: "importer React" },
            { loc: [5, 6], note: "les composants sont des classes" },
            { loc: [6, 15], note: "déclarer une fonction render" },
            { loc: [8, 13], note: "HTML" },
            { loc: [8, 9], note: "className remplace class" },
            {
              loc: [20, 21],
              note: "Utilisation comme une balise html classique"
            }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            props
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/props.example")}
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor={this.state.color}
          textColor="primary"
        >
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            state
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/state.example")}
          />
          <div>
            <button
              onClick={() => {
                this.setState({
                  color: this.state.color === "yellow" ? "black" : "yellow"
                });
              }}
            >
              Changer la couleur d'arrière plan
            </button>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            Composition
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/composition.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            Lifecycle
          </Heading>
          <List>
            <ListItem>constructor()</ListItem>
            <ListItem>componentWillMount()</ListItem>
            <ListItem>render()</ListItem>
            <ListItem>componentDidMount()</ListItem>
            <ListItem>componentWillReceiveProps()</ListItem>
            <ListItem>shouldComponentUpdate()</ListItem>
            <ListItem>componentWillUpdate()</ListItem>
            <ListItem>(bis) render()</ListItem>
            <ListItem>componentDidUpdate()</ListItem>
            <ListItem>componentWillUnmount()</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <img src={images.webpack} />
          <Text textColor="secondary">debugging webpack</Text>
          <Appear>
            <Text textColor="secondary">create-react-app</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">Tests</Text>
          <img src={images.tests} />
          <Text textColor="secondary">Jest</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">Airbnb</Text>
          <Text textColor="secondary">Mocha 45mn =&gt; Jest 14.5mn</Text>
          <Text textColor="secondary">
            https://medium.com/airbnb-engineering/unlocking-test-performance-migrating-from-mocha-to-jest-2796c508ec50
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            Architecture React
          </Heading>
          <Text textColor="secondary">Architecture des données</Text>
          <Text textColor="secondary">Architecture d'un projet</Text>
          <Text textColor="secondary">Tips</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            Flux
          </Heading>
          <img
            src="http://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png"
            width="800"
            height="242"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            Redux
          </Heading>
          <img
            src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"
            width="363"
            height="319"
          />
          <Text textColor="secondary">
            This architecture might seem like an overkill for a counter app, but the beauty of this pattern is how well it scales to large and complex apps
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            Architecture d'un projet
          </Heading>
          <Text textColor="secondary">
            Organisation des dossiers / modules / services / utils
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            Tips
          </Heading>
          <Text textColor="secondary">Tout est composant</Text>
          <Text textColor="secondary">
            Functionnal Component / PureComponent
          </Text>
          <Text textColor="secondary">shouldComponentUpdate</Text>
          <Text textColor="secondary">Redux saga / rx</Text>
          <Text textColor="secondary">Redux selectors</Text>
          <Text textColor="secondary">prettier / eslint</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            React Universel / Universal React
          </Heading>
          <Text textColor="secondary">SEO / Rapidité</Text>
          <Text textColor="secondary">Netflix / Paypal / M6</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">Next.js</Text>
          <img src={images.hnpwa} width="700" height="392" />
          <Text textColor="secondary">
            https://github.com/codebusking/next-hnpwa-guide-kit
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            Le turfu
          </Heading>
          <img src={images.xbox} width="400" height="300" />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            Le turfu
          </Heading>
          <Text textColor="secondary">
            React a inspiré des développeurs qui ont créé leurs propres librairie (Preact et Vue.js).
            Ces challengers ont montré que React n’était pas forcément la solution la plus rapide sur le marché. Cette concurrence a surement fait réagir facebook et ses développeurs pour qu’ils essayent de faire encore mieux.
            {" "}
            Deux ans après le début de leurs recherches (https://github.com/acdlite/react-fiber-architecture), ils ont réécrit complètement React et ont appelé cette nouvelle version React Fiber.
            React Fiber est presque prêt http://isfiberreadyyet.com/ la version 0.16 devrait sortir cet été et la migration pourra se faire en tout transparence cf https://twitter.com/reactjs/status/854989063027392512
            En effet, facebook garantit une compatibilité de sa librairie avec les versions précédentes.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="secondary">
            React Native
          </Heading>
          <Appear>
            <Text textColor="secondary">Facebook - 2015</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <img className="techno" src={images.cordova} />
          <img className="techno" src={images.ionic} />
          <Text textColor="secondary">Applications hybrides</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">Pourquoi pas du natif ?</Text>
          <List>
            <ListItem>Cout de développement</ListItem>
            <ListItem>Temps de développement</ListItem>
            <ListItem>Ressources rares et chères</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">Dans le ventre de RN</Text>
          <Text textColor="secondary">
            comment ça marche / pourquoi ça existe que maintenant
          </Text>
          <Text textColor="secondary">
            La différence majeure avec les applications hybrides est que ce nouveau concept ne s’appuie plus sur les WebView. Les composants écrits en JavaScript sont transformés en composants natifs.
            Les deux architectures des frameworks se basent sur un bridge asynchrone entre le code JavaScript et les couches UI natives pour piloter les composants.
            React Native (RN) utilise JavaScriptCore (2013) sur iOS et sur Android.
            Fini donc, le HTML, seuls quelques composants sont disponibles. Par exemple, les balises div et p sont remplacées par View et Text pour RN
          </Text>
          <Text textColor="secondary">
            React Native on Android does include a copy of JavaScriptCore. This helps reduce the differences between iOS and Android and lets us ensure that all Android users get to use a modern version of JSC.
          </Text>
          <Text textColor="secondary">
            https://blog.expo.io/modernizing-js-bundles-for-react-native-with-babili-late-2016-f625e754ab94
          </Text>
          <Text textColor="secondary">
            https://www.facebook.com/groups/react.native.community/permalink/1008204872648424/
          </Text>
          <Text textColor="secondary">
            yoga / flex
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">Concurrents</Text>
          <List>
            <ListItem>
              Telerik / Google (Angular JS)
              <img src={images.nativescript} />
            </ListItem>
            <ListItem>
              Microsoft (c#)
              <img src={images.xamarin} />
            </ListItem>
            <ListItem>
              Alibaba / Taobao (vue JS)
              <img src={images.weex} />
            </ListItem>
            <ListItem>
              <Text textColor="secondary">No more webview =&gt; UX = 😇</Text>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">Pros</Text>
          <List>
            <ListItem>
              Si vous maîtrisez déjà React, vous savez coder en React Native
            </ListItem>
            <ListItem>
              On peut faire du spécifique iOS / Android très simplement
            </ListItem>
            <ListItem>On peut debugger son code avec Chrome DevTools</ListItem>
            <ListItem>UX</ListItem>
            <ListItem>Performances</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">Const</Text>
          <List>
            <ListItem>
              Encore pas mal de bug (layout, overflow, zIndex) mais il y a une nouvelle release chaque mois, on guette à chaque fois la release note avec attention
            </ListItem>
            <ListItem>
              Gros débat sur la navigation mais des solutions performantes existent
            </ListItem>
            <ListItem>
              Mise à jour délicate mais les devs ont toujours de supers idées https://github.com/ncuillery/rn-diff
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">Tips</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">Démo</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text textColor="secondary">Merci</Text>
          <img src={images.eric} />
        </Slide>
      </Deck>
    );
  }
}
