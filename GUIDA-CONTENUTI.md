# Guida rapida gestione contenuti

Il sito e stato semplificato attorno a due aree principali:

- `Viaggi su misura`
- `Parti con Giorgio`

La struttura contenuti ora e divisa per pagina, con un file condiviso separato.

## Dove aggiornare testi e contatti

Non usare piu `assets/js/content.js` per i contenuti del sito.

I file da modificare sono:

- `assets/js/content/shared.js`: contatti, immagini, navigazione e contenuti condivisi
- `assets/js/content/home.js`: homepage
- `assets/js/content/services.js`: pagina `Viaggi su misura`
- `assets/js/content/journeys.js`: pagina `Parti con Giorgio`
- `assets/js/content/gallery.js`: pagina `Foto`
- `assets/js/content/about.js`: pagina `Chi sono`
- `assets/js/content/contact.js`: pagina `Contatti`

## Cosa c'e in `shared.js`

Dentro `assets/js/content/shared.js` trovi le strutture che vengono riusate in piu pagine:

- `CONTACTS`: telefono, email, WhatsApp, disponibilita
- `IMAGES`: percorsi immagini
- `HOME_OFFERS`: le due card principali della home
- `TAILORED_SERVICES`: i tre casi dei viaggi su misura
- `ACCOMPANIED_FEATURES`: i punti chiave dei viaggi accompagnati
- `ACCOMPANIED_TRIPS`: esempi di partenze / format
- `PHOTO_ITEMS`: immagini e testi della sezione foto
- `PROCESS`: flusso dei progetti su misura
- `ACCOMPANIED_PROCESS`: flusso dei viaggi accompagnati
- `VALUES`: principi di lavoro
- `FAQ`: domande frequenti condivise
- `CONTACT_CHANNELS`: recapiti mostrati in pagina contatti

## Dove aggiornare immagini

Le immagini stanno in `assets/images`.

Puoi:

1. sostituire il file mantenendo lo stesso nome
2. oppure cambiare il percorso in `assets/js/content/shared.js`

## Come funzionano le pagine

Le pagine HTML sono:

- `index.html`
- `servizi.html` -> Viaggi su misura
- `viaggi.html` -> Parti con Giorgio
- `galleria.html` -> Foto
- `chi-sono.html`
- `contatti.html`

Ogni pagina carica:

1. `assets/js/content/shared.js`
2. il suo file contenuti specifico
3. `assets/js/site.js`

## Dove stanno stile e logica

- `assets/css/styles.css`: UI e layout
- `assets/js/site.js`: rendering e interazioni

## Nota sul form contatti

Il progetto e solo front-end, quindi il form non invia dati a un server.

Il comportamento attuale e questo:

- il visitatore compila il form
- il sito prepara un'email
- si apre il programma di posta predefinito del dispositivo

Se in futuro vuoi un invio diretto senza apertura dell'email, servira collegare il form a un servizio esterno o a un backend.
