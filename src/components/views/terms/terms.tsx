import { Banner } from "../../modules/banner/banner";
import { Footer } from "../../modules/footer/footer";
import { Header } from "../../modules/header/header";
import styles from "./terms.module.css";

export const Terms: React.FunctionComponent = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Banner></Banner>
        <div className={styles.container}>
          <h1>Mentions legales</h1>
          <section>
            <h2>Editeur du site</h2>
            <div>
              <p>M. Spay Shawl</p>
              <p>Responsable éditorial : Spay Shawl</p>
              <p>
                Email :{" "}
                <a href="mailto: spayshawl@gmail.com">spayshawl@gmail.com</a>
              </p>
            </div>
          </section>
          <section>
            <h2>Hébergement</h2>
            <div>
              <p>Nom: Netlify</p>
              <p>Addresse : San Francisco, California</p>
              <p>Rue: 2325 3rd Street, Suite 296</p>
              <p>Code postal: 94107</p>
              <p>
                Site web:{" "}
                <a href="https://www.netlify.com/">https://www.netlify.com/</a>
              </p>
            </div>
          </section>
          <section>
            <h2>Conditions d'utilisation</h2>
            <div>
              <p>
                Ce site{" "}
                <a href="https://exemplar.netlify.app">
                  https://exemplar.netlify.app
                </a>{" "}
                est proposé en différents langages web (HTML5, Javascript, CSS,
                etc ...) pour un meilleur confort d'utilisation et un graphisme
                plus agréable, nous vous recommandons de recourir à des
                navigateurs modernes comme Microsoft Edge, Safari, Firefox,
                Google Chrome, etc... M. Spay Shawl met en oeuvre tous les
                moyens dont il dispose, pour assurer une information fiable et
                une mise à jour fiable de son site internet. Toutefois, des
                erreurs ou omissions peuvent survenir. L'internaute devra donc
                s'assurer de l'exactitude des informations auprès de M. Spay
                Shawl, et signaler toutes modifications du site qu'il jugerait
                utile. M. Spay Shawl n'est en aucun cas responsable de
                l'utilisation faite de ces informations, et de tout préjudice
                direct ou indirect pouvant en découler.
              </p>
            </div>
          </section>
          <section>
            <h2>Liens hypertextes</h2>
            <div>
              <p>
                Les sites internet peuvent offrir des liens vers d'autres sites
                internet ou d'autres ressources disponibles sur Internet. M.
                Spay Shawl ne dispose d'aucun moyen pour contrôler les sites en
                connexion avec ses sites internet, ne répond pas de la
                disponibilité de tels sites et sources externes, ni ne la
                garantit. Les utilisateurs, les abonnés et les visiteurs des
                sites internet ne peuvent pas mettre en place un hyperlien en
                direction de ce site sans l'autorisation expresse et préalable
                de M. Spay Shawl. Dans l'hypothèse où un utilisateur ou visiteur
                souhaiterait mettre en place un hyperlien en direction de ce
                site internet, il lui appartiendra d'adresser un email
                accessible sur le site afin de formuler sa demande de mise en
                place d'un hyperlien. M. Spay Shawl se réserve le droit
                d'accepter ou de refuser un hyperlien sans avoir à en justifier
                sa décision.
              </p>
            </div>
          </section>
          <section>
            <h2>Services fournis</h2>
            <div>
              <p>
                M. Spay Shawl s'efforce de fournir sur le site{" "}
                <a href="https://exemplar.netlify.app">
                  https://exemplar.netlify.app
                </a>{" "}
                des informations aussi précises que possible. les renseignements
                figurant sur le site ne sont pas exhaustifs et les photos non
                contractuelles. Ils sont donnés sous réserve de modifications
                ayant été apportées depuis leur mise en ligne. Par ailleurs,
                tous les informations indiquées sur le site sont données à titre
                indicatif, et sont susceptibles de changer ou d'évoluer sans
                préavis.
              </p>
            </div>
          </section>
          <section>
            <h2>Limitation contractuelles sur les données</h2>
            <div>
              <p>
                Les informations contenues sur ce site sont aussi précises que
                possible et le site remis à jour à différentes périodes de
                l'année, mais peut toutefois contenir des inexactitudes ou des
                omissions. Si vous constatez une lacune, erreur ou ce qui parait
                être un dysfonctionnement, merci de bien vouloir le signaler par
                email, à l'adresse{" "}
                <a href="mailto: spayshawl@gmail.com">spayshawl@gmail.com</a>,
                en décrivant le problème de la manière la plus précise possible
                (page posant problème, type d'ordinateur et de navigateur
                utilisé,...). Tout contenu téléchargé se fait aux risques et
                périls de l'utilisateur et sous sa seule responsabilité. En
                conséquence, ne saurait être tenu responsable d'un quelconque
                dommage subi par l'ordinateur de l'utilisateur ou d'une
                quelconque perte de données consécutives au téléchargement. De
                plus, l'utilisateur du site s'engage à accéder au site en
                utilisant un matériel récent, ne contenant pas de virus et avec
                un navigateur de dernière génération mis-à-jour. Les liens
                hypertextes mis en place dans le cadre du présent site internet
                en direction d'autres ressources présentes sur le réseau
                Internet ne sauraient engager la responsabilité de M. Spay
                Shawl.
              </p>
            </div>
          </section>
          <section>
            <h2>Propriété intellectuelle</h2>
            <div>
              <p>
                Tout le contenu du présent site incluant, de façon non
                limitative, les graphismes, images, textes, vidéos, animations,
                sons, logos, gifs et icônes ainsi que leur mise en forme sont la
                propriété exclusive de M. Spay Shawl à l'exception des marques,
                logos ou contenus appartenant à d'autres sociétés partenaires ou
                auteurs. Toute reproduction, distribution, modification,
                adaptation, retransmission ou publication, même partielle, de
                ces différents éléments est strictement interdite sans l'accord
                exprès par écrit de M. Spay Shawl. Cette représentation ou
                reproduction, par quelque procédé que ce soit, constitue une
                contrefaçon sanctionnée par les articles L.335-2 et suivants du
                Code de la propriété intellectuelle. Le non-respect de cette
                interdiction constitue une contrefaçon pouvant engager la
                responsabilité civile et pénale du contrefacteur. En outre, les
                propriétaires des contenus copiés pourraient intenter une action
                en justice à votre encontre.
              </p>
            </div>
          </section>
          <section>
            <h2>Litiges</h2>
            <div>
              <p>
                Les présentes conditions du site sont régies par les lois
                françaises et toute contestation ou litiges qui pourraient
                naître de l'interprétation ou de l'exécution de celles-ci seront
                de la compétence exclusive des tribunaux. La langue de
                référence, pour le règlement de contentieux éventuels, est le
                français.
              </p>
            </div>
          </section>
          <section>
            <h2>Données personnelles</h2>
            <div>
              <p>
                De manière générale, vous n'êtes pas tenu de nous communiquer
                vos données personnelles lorsque vous visitez le site Internet{" "}
                <a href="https://exemplar.netlify.app">
                  https://exemplar.netlify.app
                </a>{" "}
                . Cependant, ce principe comporte certaines exceptions. En
                effet, vous pouvez être amenés à nous communiquer certaines
                données telles que : votre nom ou votre adresse électronique.
                Dans tous les cas, vous pouvez refuser de fournir vos données
                personnelles. Dans ce cas, vous ne pourrez pas utiliser les
                services du site, notamment celui de solliciter des
                renseignements. Enfin, nous pouvons collecter de manière
                automatique certaines informations vous concernant lors d'une
                simple navigation sur mon site Internet, notamment : des
                informations concernant l'utilisation de mon site, comme les
                zones que vous visitez et les services auxquels vous accédez,
                votre adresse IP, le type de votre navigateur, vos temps
                d'accès. De telles informations sont utilisées exclusivement à
                des fins de statistiques internes. Les bases de données sont
                protégées par les dispositions de la loi du 1er juillet 1998
                transposant la directive 96/9 du 11 mars 1996 relative à la
                protection juridique des bases de données.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
