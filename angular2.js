Najnowsza wersja node.js na stronie nodejs.org

//nowy projekt angular
npm install -g @angular/cli
ng new my-first-app
cd my-first-app
ng serve

//dodanie biblioteki bootstrap
npm install --save bootstrap	
Dodaj w .angular-cli.json wpis w "styles": ["../node_modules/bootstrap/dist/css/bootstrap.min.css", "styles.css"],

//generowanie componentów
ng g c katalog/nazwa-komponentu	//mozna dodac --spec false  aby nie generowac plików testowych.
