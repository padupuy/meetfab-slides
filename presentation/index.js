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
  logoAdfab: require("../assets/logo_adfab.png"),
  logo: require("../assets/logo.svg"),
  photo: require("../assets/now-coworking-crop.jpg"),
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
  eric: require("../assets/eric.gif"),
  fiber: require("../assets/fiber.png"),
  javascriptcore: require("../assets/javascriptcore.png")
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

const slideProps = {
  padding: 0,
  transition: ["fade"],
  bgColor: "primary"
};

const headingProps = {
  size: 5,
  caps: true,
  textColor: "secondary"
};

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
        <Slide {...slideProps}>
          <img src={images.logoAdfab} />
          <Heading {...headingProps}>
            Bienvenue
          </Heading>
          <Heading {...headingProps}>
            chez Adfab
          </Heading>
        </Slide>
        <Slide {...slideProps}>
          <img src={images.photo} className="portrait" />
          <Text textColor="secondary">Pierre-Alexandre Dupuy</Text>
          <Text textColor="secondary">@padupuy</Text>
        </Slide>
        <Slide {...slideProps}>
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
                React SSR
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
        <Slide {...slideProps}>
          <Heading {...headingProps}>React</Heading>
          <img src={images.logo} alt="logo" width="250" height="250" />
          <Appear>
            <Text textColor="secondary">Jordan Walke - Facebook - 2013</Text>
          </Appear>
        </Slide>
        <Slide {...slideProps}>
          <img className="techno" src={images.angular} />
          <img className="techno" src={images.backbone} />
          <img className="techno" src={images.ember} />
        </Slide>
        <Slide {...slideProps}>
          <img width="610" height="458" src={images.technos} />
          <br />
          <Link>
            https://medium.com/this-dot-labs/building-modern-web-applications-in-2017-791d2ef2e341
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Virtual DOM</Heading>
          <img src={images.vdomInception} />
          <br />
          <Link>
            http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Virtual DOM</Heading>
          <img src={images.vdom} width="697" height="392" />
          <br />
          <Link>
            https://www.infoq.com/presentations/react-reconciliation
          </Link>
        </Slide>
        <Slide {...slideProps}>
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
        <Slide {...slideProps}>
          <Heading {...headingProps}>props</Heading>
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
          <Heading {...headingProps}>state</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/state.example")}
          />
          <br />
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
        <Slide {...slideProps}>
          <Heading {...headingProps}>Composition</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/composition.example")}
          />
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Lifecycle</Heading>
          <List>
            <ListItem>constructor()</ListItem>
            <ListItem>componentWillMount()</ListItem>
            <ListItem>render()</ListItem>
          </List>
          <List>
            <ListItem>componentDidMount()</ListItem>
            <ListItem>componentWillReceiveProps()</ListItem>
            <ListItem>shouldComponentUpdate()</ListItem>
            <ListItem>componentWillUpdate()</ListItem>
            <ListItem>(bis) render()</ListItem>
            <ListItem>componentDidUpdate()</ListItem>
            <ListItem>componentWillUnmount()</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <img src={images.webpack} />
          <Text textColor="secondary">debugging webpack</Text>
          <Appear>
            <Text textColor="secondary">create-react-app</Text>
          </Appear>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Tests</Heading>
          <img src={images.tests} />
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Jest</Heading>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Airbnb</Heading>
          <Text textColor="secondary">Mocha 45mn =&gt; Jest 14.5mn</Text>
          <Link>
            https://medium.com/airbnb-engineering/unlocking-test-performance-migrating-from-mocha-to-jest-2796c508ec50
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Architecture React</Heading>
          <List>
            <ListItem>Architecture des données</ListItem>
            <ListItem textColor="secondary">Architecture d'un projet</ListItem>
            <ListItem textColor="secondary">Tips</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Flux</Heading>
          <img
            src="http://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png"
            width="800"
            height="242"
          />
          <Link>https://facebook.github.io/flux/docs/videos.html</Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Redux</Heading>
          <img
            src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"
            width="363"
            height="319"
          />
          <Text textColor="secondary">
            This architecture might seem like an overkill for a counter app, but the beauty of this pattern is how well it scales to large and complex apps
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Architecture d'un projet</Heading>
          <Text textColor="secondary">
            Organisation des dossiers / modules / services / utils
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Tips</Heading>
          <Text textColor="secondary">Tout est composant</Text>
          <Text textColor="secondary">
            Functionnal Component / PureComponent
          </Text>
          <Text textColor="secondary">shouldComponentUpdate</Text>
          <Text textColor="secondary">Redux saga / rx</Text>
          <Text textColor="secondary">Redux selectors</Text>
          <Text textColor="secondary">prettier / eslint</Text>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>React SSR</Heading>
          <Text textColor="secondary">SEO / Rapidité</Text>
          <Text textColor="secondary">Netflix / Paypal / M6</Text>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Next.js</Heading>
          <img src={images.hnpwa} width="700" height="392" />
          <Link>
            https://github.com/codebusking/next-hnpwa-guide-kit
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <img src={images.xbox} width="515" height="427" />
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>à surveiller</Heading>
          <List>
            <ListItem>Preact / Vue.js</ListItem>
            <ListItem>Mobx</ListItem>
            <ListItem>React Fiber : 2 ans de réécriture</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Le turfu</Heading>
          <img src={images.fiber} width="380" height="430" />
          <List>
            <ListItem>http://isfiberreadyyet.com/</ListItem>
            <ListItem>
              Fb garantit une compatibilité de sa librairie avec les versions précédentes.
            </ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>React Native</Heading>
          <Appear>
            <Text textColor="secondary">Facebook - 2015</Text>
          </Appear>
        </Slide>
        <Slide {...slideProps}>
          <img className="techno" src={images.cordova} />
          <img className="techno" src={images.ionic} />
          <Text textColor="secondary">Applications hybrides</Text>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Pourquoi pas du natif ?</Heading>
          <List>
            <ListItem>Cout de développement</ListItem>
            <ListItem>Temps de développement</ListItem>
            <ListItem>Ressources rares et chères</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Dans le ventre de RN</Heading>
          <List>
            <ListItem>Plus de WebView</ListItem>
            <ListItem>JavaScriptCore - 2013</ListItem>
            <ListItem>
              Le code JS pilote couches UI natives via bridge asynchrone
            </ListItem>
            <ListItem>
              Composants React =&gt; composants natifs
            </ListItem>
            <ListItem>Pas de DOM = pas de html</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Dans le ventre de RN</Heading>
          <img src={images.javascriptcore} />
          <Link>
            https://blog.expo.io/modernizing-js-bundles-for-react-native-with-babili-late-2016-f625e754ab94
          </Link>
          <br />
          <Link>
            https://www.facebook.com/groups/react.native.community/permalink/1008204872648424/
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Dans le ventre de RN</Heading>
          <List>
            <ListItem> yoga / flex</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Concurrents</Heading>
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
        <Slide {...slideProps}>
          <Heading {...headingProps}>Pros</Heading>
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
        <Slide {...slideProps}>
          <Heading {...headingProps}>Const</Heading>
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
        <Slide {...slideProps}>
          <Heading {...headingProps}>Tips</Heading>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Démo</Heading>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Merci</Heading>
          <img src={images.eric} />
        </Slide>
      </Deck>
    );
  }
}
