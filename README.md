++++++++++++ English ++++++++++++
<h1>Welcome to Pokedex</h1>

Online web version: https://mellifluous-starburst-626dd5.netlify.app
Apk for test in mobile: https://drive.google.com/file/d/1Mwg7UOCcHDqXbyH5hwpTzySycawaGOUN/view?usp=sharing

<h4>Used technology:</h4>

- Vue 3
- Quasar
- Axios
- Pinia
- Vue Router
- Vite
- ChartJs

<h4>
How compile for web version:
</h4>

Run:

    yarn // Install all dependencies
    yarn quasar build // Single page application (SPA)

or

    yarn build -m pwa // Progressive web app (PWA)

In the folder dist/spa or dist/pwa will be the production version.

<h4>
How run tests (in progress):
</h4>

    yarn test

<h4>
How compile for generate apk file:
</h4>

Download and install Android Studio from: https://developer.android.com/studio

Run:

    sudo apt-get install openjdk-8-jdk
    sudo apt install gradle
    yarn add -g cordova

Set the follows environment variables:

Run:

    readlink -f $(which java)

Copy the output of the above command without /bin/java

Set the following environment variables:

    export ANDROID_HOME="PASTE THE OUTPUT HERE"
    export ANDROID_SDK_ROOT="$HOME/Android/Sdk"

Run:

    yarn quasar build -m cordova -T android


Open Android Studio and open the follow folder

    /src-cordova/platforms/android

Go to Build -> Build Bundle(s) / APK -> Build APK

Generate Key and Build.

Check the follow folder:

    /src-cordova/plataforms/android/app/build/outputs/apk

End!

++++++++++++ Español ++++++++++++

<h1>Bienvenido a mi Pokedex</h1>

Versión web en línea: https://mellifluous-starburst-626dd5.netlify.app
Apk para prueba en móvil: https://drive.google.com/file/d/1Mwg7UOCcHDqXbyH5hwpTzySycawaGOUN/view?usp=sharing

<h4>
Tecnologías utilizadas:
</h4>

- Vista 3
- Quasar
- Axios
- Pinia
- Vue Router
- Vite
- ChartJs

<h4>
Cómo compilar para la versión web:
</h4>

Ejecute los siguientes comandos:

    yarn // Instalar las dependencias
    yarn quasar build // Generar Single page application (SPA)

or

    yarn build -m pwa // Generar Progressive web app (PWA)


En la carpeta dist/spa o dist/pwa estará la versión de producción.

<h4>
Cómo ejecutar pruebas (en progreso):
</h4>

    yarn test

<h4>
Cómo compilar para generar un archivo apk:
</h4>


Descargue e instale Android Studio desde: https://developer.android.com/studio

Ejecutar:

    sudo apt-get install openjdk-8-jdk
    sudo apt instalar gradle
    yarn add -g cordova

Establezca las variables de entorno:

Ejecutar:
    `readlink -f $(which java)`

Copiar el resultado del comando anterior quitandole del final /bin/java


Establezca las siguientes variables de entorno:

    export ANDROID_HOME="PEGAR EL RESULTADO ACA"
    export ANDROID_SDK_ROOT="$HOME/Android/Sdk"

Ejecutar:

    yarn quasar build -m cordova -T android

Abrir Android Studio y abrir la siguiente carpeta:

    /src-cordova/platforms/android


Ir a Build -> Build Bundle(s) / APK -> Build APK

Generar la key y Build

Se genero el archivo apk en la siguiente carpeta:

    /src-cordova/plataforms/android/app/build/outputs/apk

Listo!
