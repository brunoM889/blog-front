import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord as codeTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TailwindIcon } from "../../components/Icons";
import { useAppState } from "../../store/store";

function PostTailwind() {
  const { lang, theme } = useAppState();

  const textoRemarcado = `font-normal decoration-transparent rounded-[2px] py-[1px] px-1 ${
    theme ? "bg-[#f0f0f0] text-black" : "text-white bg-[#090909]"
  }`;

  const codeExample = [
    {
      html: `<!-- HTML -->
<button class="bg-[#2E3440] text-blue-100">Button</button>`,
      css: `/* CSS */
.bg-[#2E3440] {
  background-color: #581C87;
}
.text-white {
  color: #fff;
}`,
      buttonClass: `bg-[#2E3440] text-blue-100`,
    },
    {
      html: `<button class="bg-[#2E3440] text-blue-100 w-[80px] py-2">
  Button
</button>`,
      css: `.w-[80px] {
  width: 60px;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}`,
      buttonClass: "bg-[#2E3440] text-blue-100 w-[80px] py-2",
    },
    {
      html: `<button class="bg-[#2E3440] text-blue-100 w-[80px] py-2 rounded font-semibold">
  Button
</button>`,
      css: `.rounded {
  border-radius: 0.5rem;
}
.font-semibold {
  font-weight: 600;
}`,
      buttonClass:
        "bg-[#2E3440] text-blue-100 w-[80px] py-2 rounded font-semibold",
    },
  ];

  const tailwindProblem = `<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
<img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
<div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
<div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
<div class="mx-auto max-w-md">
  <img src="/img/logo.svg" class="h-6" alt="Tailwind Play" />
  <div class="divide-y divide-gray-300/50">
    <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
      <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
      <ul class="space-y-4">
        <li class="flex items-center">
          <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="11" />
            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
          </svg>
          <p class="ml-4">
            Customizing your
            <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file
          </p>
        </li>`;

  if (lang) {
    return (
      <section className="flex flex-col gap-20 z-20">
        <TailwindIcon className="max-w-[250px] max-h-[250px] w-[90vw] h-[90vw] z-10 absolute top-24 opacity-50 m-auto left-0 right-0" />
        <div className="flex flex-col gap-2 z-20">
          <h3 className="mb-1">¿What is Tailwind?</h3>

          <p>
            Tailwind is one of the most widely used CSS frameworks. It is based
            on a series of predefined classes that allow developers to create
            user interfaces very quickly.
          </p>
          <p>
            The classes provided by Tailwind cover almost all the classic CSS
            properties we need for development.
          </p>
          <p>
            All the aforementioned features, along with the exceptional{" "}
            <a target="_blank" href="https://tailwindcss.com/docs/installation">
              documentation
            </a>{" "}
            it offers and the ease of installation, make Tailwind a simple,
            effective, and highly recommended tool.
          </p>
          <p>
            Everyone who has developed with CSS knows that it is a bit slow and
            tedious. While CSS is a great tool, when it comes to developing
            small or medium-sized projects, it is a great idea to use these
            types of frameworks that speed up development.
          </p>
          <p>
            Today, Tailwind is one of the most popular frameworks and{" "}
            <a
              href="https://npmtrends.com/bootstrap-vs-tailwindcss"
              target="_blank"
            >
              is above Bootstrap.
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-2 z-20">
          <h3 className="mb-1">Syntax and some classes</h3>
          <p>
            As we will see, Tailwind has a particular syntax that is repeated in
            most classes. The{" "}
            <strong className={textoRemarcado}>property-value</strong> format is
            the basis in most cases, where the value can be predefined or
            customized by the user using [].
          </p>
          <p>
            In addition to basic classes like{" "}
            <strong className={textoRemarcado}>text-[12px]</strong> to change
            the font size, or <strong className={textoRemarcado}>m-1</strong> to
            add a margin of .5rem, it is also easy for us to handle
            pseudo-classes using, for example,{" "}
            <strong className={textoRemarcado}>hover:bg-blue-500</strong>.
          </p>
          <p>
            For responsive design, we have{" "}
            <strong className={textoRemarcado}>min-[768px]:text-[16px]</strong>,
            which will apply when the width is 768px or more. And to cover the
            case where we want the class to apply when the width is{" "}
            <strong>less</strong> than 768px, we can use{" "}
            <strong className={textoRemarcado}>max-[768px]:text-[16px]</strong>.
          </p>
          <p className="mb-4">
            Here we have some examples, along with the CSS they save us.
          </p>

          <ul className="flex flex-col gap-6 mb-4">
            {codeExample.map((code, index) => {
              return (
                <li key={index} className={`flex flex-col`}>
                  <SyntaxHighlighter
                    className="text-xs max-[400px]:text-[10px]"
                    language="html"
                    customStyle={codeTheme}
                    style={codeTheme}
                  >
                    {code.html}
                  </SyntaxHighlighter>
                  <div className="flex gap-2">
                    <div className="flex flex-col gap-1 w-[70%]">
                      <SyntaxHighlighter
                        language="css"
                        className="text-xs max-[400px]:text-[10px]"
                        style={codeTheme}
                      >
                        {code.css}
                      </SyntaxHighlighter>
                    </div>
                    <div className="grow min-w-[80px] flex flex-col justify-center items-center gap-2">
                      <button className={code.buttonClass}>Button</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <a
            href="https://tailwindcss.com/docs/aspect-ratio"
            className="self-end"
            target="_blank"
          >
            More info about classes
          </a>
        </div>

        <div className="flex flex-col gap-2 z-20">
          <h3 className="mb-1 w-full">The problem of Tailwind</h3>
          <div className="flex gap-2">
            <div className="w-full flex flex-col gap-2 z-20">
              <p>
                Although Tailwind offers many advantages, it is not without
                criticism. One of the most common problems is that it can result
                in messy and hard-to-read HTML due to the large number of
                classes that need to be applied to each element.
              </p>
              <p>
                The following example, taken from the{" "}
                <a href="https://play.tailwindcss.com/" target="_blank">
                  playground on Tailwind's website
                </a>
                , clearly illustrates the problem.
              </p>
              <SyntaxHighlighter
                className="text-xs max-[400px]:text-[10px]"
                language="html"
                customStyle={codeTheme}
                style={codeTheme}
              >
                {tailwindProblem}
              </SyntaxHighlighter>
              <p>
                Despite this drawback, many developers consider that the
                benefits outweigh the problems, especially in terms of
                development speed.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 z-20">
          <h3>Conclusion and recommendations</h3>
          <p>
            In summary, Tailwind is a very useful tool for developing small to
            medium-sized projects, as it is extremely effective at quickly
            creating user interfaces.
          </p>
          <p>
            However, it is also important to consider that for large projects
            involving multiple developers, Tailwind may not be the best option
            due to potential HTML clutter.
          </p>
          <p>
            Personally, I believe that the benefits outweigh the drawbacks,
            therefore, I highly recommend using this framework.
          </p>
          <p>
            If you decide to learn Tailwind, I strongly suggest installing a
            VSCode extension called{" "}
            <a
              target="_blank"
              href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
            >
              Tailwind CSS IntelliSense
            </a>
            , which will help you write correct code and, most importantly,
            allow you to start coding quickly without needing to memorize all
            the classes.
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="flex flex-col gap-20 z-20">
        <TailwindIcon className="max-w-[250px] max-h-[250px] w-[90vw] h-[90vw] z-10 absolute top-24 opacity-50 m-auto left-0 right-0" />
        <div className="flex flex-col gap-2 z-20">
          <h3 className="mb-1">¿Qué es Tailwind?</h3>

          <p>
            Tailwind es uno de los frameworks más utilizados de CSS. Se basa en
            una serie de clases predefinidas, que permiten a los desarrolladores
            crear interfaces de usuario muy rápidamente.
          </p>
          <p>
            Las clases que nos provee Tailwind cubren casi todas las propiedades
            clásicas de CSS que necesitamos para desarrollar.
          </p>
          <p>
            Todas las características ya mencionadas, junto con la excepcional{" "}
            <a target="_blank" href="https://tailwindcss.com/docs/installation">
              documentación
            </a>{" "}
            que ofrece y la sencillez a la hora de instalar, hacen de Tailwind
            una herramienta sencilla, efectiva y muy recomendable.
          </p>
          <p>
            Todo el que ha desarrollado con CSS sabe que es un poco lento y
            tedioso. Si bien CSS es una gran herramienta, a la hora de
            desarrollar proyectos pequeños o medianos, es una gran idea utilizar
            este tipo de frameworks que aceleran el desarrollo.
          </p>
          <p>
            Hoy en día, Tailwind es uno de los frameworks más populares y{" "}
            <a
              href="https://npmtrends.com/bootstrap-vs-tailwindcss"
              target="_blank"
            >
              está por encima de Bootstrap.
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-2 z-20">
          <h3 className="mb-1">Sintaxis y algunas clases</h3>
          <p>
            Como veremos, Tailwind tiene una sintaxis particular que se repite
            en la mayoría de clases. El formato{" "}
            <strong className={textoRemarcado}>propiedad-valor</strong> es la
            base en la mayoría de casos, donde el valor puede ser predeterminado
            o, personalizado por el usuario usando [].
          </p>
          <p>
            Además de clases básicas como{" "}
            <strong className={textoRemarcado}>text-[12px]</strong> para cambiar
            el font-size, o <strong className={textoRemarcado}>m-1</strong> para
            agregar un margen de .5rem, también se nos facilita el manejo de
            pseudo-clases, usando por ejemplo,{" "}
            <strong className={textoRemarcado}>hover:bg-blue-500</strong>.
          </p>
          <p>
            Para el responsive design tenemos{" "}
            <strong className={textoRemarcado}>min-[768px]:text-[16px]</strong>,
            esta clase se va a aplicar cuando el width es de 768px o más. Y para
            cubrir el caso en que queremos que la clase se aplique cuando el
            width es <strong>menor</strong> a 768px, podemos usar{" "}
            <strong className={textoRemarcado}>max-[768px]:text-[16px]</strong>
          </p>
          <p className="mb-4">
            Aquí tenemos algunos ejemplos, junto con el CSS que nos ahorran.
          </p>

          <ul className="flex flex-col gap-6 mb-4">
            {codeExample.map((code, index) => {
              return (
                <li key={index} className={`flex flex-col`}>
                  <SyntaxHighlighter
                    className="text-xs max-[400px]:text-[10px]"
                    language="html"
                    customStyle={codeTheme}
                    style={codeTheme}
                  >
                    {code.html}
                  </SyntaxHighlighter>
                  <div className="flex gap-2">
                    <div className="flex flex-col gap-1 w-[70%]">
                      <SyntaxHighlighter
                        language="css"
                        className="text-xs max-[400px]:text-[10px]"
                        style={codeTheme}
                      >
                        {code.css}
                      </SyntaxHighlighter>
                    </div>
                    <div className="grow min-w-[80px] flex flex-col justify-center items-center gap-2">
                      <button className={code.buttonClass}>Button</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <a
            href="https://tailwindcss.com/docs/aspect-ratio"
            className="self-end"
            target="_blank"
          >
            Ver más info sobre clases
          </a>
        </div>

        <div className="flex flex-col gap-2 z-20">
          <h3 className="mb-1 w-full">El problema de Tailwind</h3>
          <div className="flex gap-2">
            <div className="w-full flex flex-col gap-2 z-20">
              <p>
                Aunque Tailwind ofrece muchas ventajas, no está exento de
                críticas. Uno de los problemas más comunes es que puede resultar
                en un HTML desordenado y de difícil lectura debido a la gran
                cantidad de clases que se deben aplicar a cada elemento.
              </p>
              <p>
                El siguiente ejemplo, extraído del propio{" "}
                <a href="https://play.tailwindcss.com/" target="_blank">
                  playground en la web de Tailwind
                </a>
                , deja ver claramente el problema.
              </p>
              <SyntaxHighlighter
                className="text-xs max-[400px]:text-[10px]"
                language="html"
                customStyle={codeTheme}
                style={codeTheme}
              >
                {tailwindProblem}
              </SyntaxHighlighter>
              <p>
                A pesar de este inconveniente, muchos desarrolladores consideran
                que los beneficios opacan los problemas, especialmente en
                términos de velocidad de desarrollo.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 z-20">
          <h3>Conclusión y recomendaciones</h3>
          <p>
            En resumen, Tailwind es una herramienta muy útil para desarrollar
            proyectos pequeños o medianos, ya que es{" "}
            <strong>
              excesivamente bueno para crear interfaces de usuario rápidamente
            </strong>
            .
          </p>
          <p>
            Pero, también es importante tener en cuenta que{" "}
            <strong>
              para proyectos grandes, en los que trabajan varios
              desarrolladores, puede que Tailwind no sea la mejor opción
            </strong>
            , ya que puede resultar en un HTML desordenado.
          </p>
          <p>
            En lo personal, soy de los que creen que los beneficios superan a
            los problemas, por lo tanto, recomiendo mucho el uso de este
            framework.
          </p>
          <p>
            Si tomas la decisión de aprender Tailwind, te recomiendo fuertemente
            que instales una extensión de VSCode llamada{" "}
            <a
              target="_blank"
              href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
            >
              Tailwind CSS IntelliSense
            </a>{" "}
            que te ayudará a escribir correctamente el código y sobre todo, te
            permitirá comenzar a codear sin tener que saber todas las clases de
            memoria.
          </p>
        </div>
      </section>
    );
  }
}

export default PostTailwind;
